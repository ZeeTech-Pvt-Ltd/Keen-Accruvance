/**
 * Local mirror of the existing (old) site — purely for side-by-side review
 * while the redesigned site is built. Serves https://keenaccruvance.com
 * content at http://localhost:5199 through a transparent HTTP relay.
 *
 *   npm run mirror-old   →  http://localhost:5199  (old website)
 *   npm run dev          →  http://localhost:5173  (new redesigned website)
 */
import http from 'node:http'
import https from 'node:https'

const PORT = 5199
const HOST = 'keenaccruvance.com'
const ORIGIN = `http://localhost:${PORT}`

const server = http.createServer((req, res) => {
  const headers = { ...req.headers }
  delete headers.host
  delete headers.connection

  const upstream = https.request(
    { host: HOST, port: 443, path: req.url, method: req.method, headers },
    (upRes) => {
      const out = { ...upRes.headers }
      // Keep redirects on the local mirror instead of jumping to the live domain.
      if (out.location) {
        out.location = out.location
          .replace(`https://${HOST}`, ORIGIN)
          .replace(`http://${HOST}`, ORIGIN)
          .replace(`//${HOST}`, ORIGIN)
      }
      res.writeHead(upRes.statusCode || 502, out)
      upRes.pipe(res)
    },
  )

  req.pipe(upstream)
  upstream.on('error', (err) => {
    res.writeHead(502, { 'content-type': 'text/plain; charset=utf-8' })
    res.end(`Mirror error reaching https://${HOST}: ${err.message}`)
  })
})

server.listen(PORT, () => {
  console.log(`\n  Old website mirror →  http://localhost:${PORT}`)
  console.log(`  (live source: https://${HOST})`)
  console.log('  Press Ctrl+C to stop.\n')
})
