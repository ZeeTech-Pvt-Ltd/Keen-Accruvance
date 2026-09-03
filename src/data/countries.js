import AU from 'country-flag-icons/react/3x2/AU'
import GB from 'country-flag-icons/react/3x2/GB'
import US from 'country-flag-icons/react/3x2/US'
import CA from 'country-flag-icons/react/3x2/CA'
import NZ from 'country-flag-icons/react/3x2/NZ'
import NG from 'country-flag-icons/react/3x2/NG'
import ZA from 'country-flag-icons/react/3x2/ZA'
import KE from 'country-flag-icons/react/3x2/KE'
import GH from 'country-flag-icons/react/3x2/GH'
import IN from 'country-flag-icons/react/3x2/IN'
import PK from 'country-flag-icons/react/3x2/PK'
import BD from 'country-flag-icons/react/3x2/BD'
import SG from 'country-flag-icons/react/3x2/SG'
import MY from 'country-flag-icons/react/3x2/MY'
import ID from 'country-flag-icons/react/3x2/ID'
import PH from 'country-flag-icons/react/3x2/PH'
import TH from 'country-flag-icons/react/3x2/TH'
import VN from 'country-flag-icons/react/3x2/VN'
import CN from 'country-flag-icons/react/3x2/CN'
import HK from 'country-flag-icons/react/3x2/HK'
import JP from 'country-flag-icons/react/3x2/JP'
import KR from 'country-flag-icons/react/3x2/KR'
import AE from 'country-flag-icons/react/3x2/AE'
import SA from 'country-flag-icons/react/3x2/SA'
import DE from 'country-flag-icons/react/3x2/DE'
import FR from 'country-flag-icons/react/3x2/FR'
import NL from 'country-flag-icons/react/3x2/NL'
import IT from 'country-flag-icons/react/3x2/IT'
import ES from 'country-flag-icons/react/3x2/ES'
import SE from 'country-flag-icons/react/3x2/SE'
import CH from 'country-flag-icons/react/3x2/CH'
import BR from 'country-flag-icons/react/3x2/BR'
import MX from 'country-flag-icons/react/3x2/MX'
import TR from 'country-flag-icons/react/3x2/TR'

/**
 * Dial-code directory for the phone field — flags are inline SVG components,
 * so they render offline with zero image requests.
 */
export const COUNTRIES = [
  { code: 'AU', name: 'Australia', dial: '61', sample: '0412 345 678', Flag: AU },
  { code: 'GB', name: 'United Kingdom', dial: '44', sample: '07400 123456', Flag: GB },
  { code: 'US', name: 'United States', dial: '1', sample: '(201) 555-0123', Flag: US },
  { code: 'CA', name: 'Canada', dial: '1', sample: '(506) 234-5678', Flag: CA },
  { code: 'NZ', name: 'New Zealand', dial: '64', sample: '021 123 4567', Flag: NZ },
  { code: 'NG', name: 'Nigeria', dial: '234', sample: '0802 123 4567', Flag: NG },
  { code: 'ZA', name: 'South Africa', dial: '27', sample: '071 123 4567', Flag: ZA },
  { code: 'KE', name: 'Kenya', dial: '254', sample: '0712 123456', Flag: KE },
  { code: 'GH', name: 'Ghana', dial: '233', sample: '023 123 4567', Flag: GH },
  { code: 'IN', name: 'India', dial: '91', sample: '081234 56789', Flag: IN },
  { code: 'PK', name: 'Pakistan', dial: '92', sample: '0301 2345678', Flag: PK },
  { code: 'BD', name: 'Bangladesh', dial: '880', sample: '01812-345678', Flag: BD },
  { code: 'SG', name: 'Singapore', dial: '65', sample: '8123 4567', Flag: SG },
  { code: 'MY', name: 'Malaysia', dial: '60', sample: '012-345 6789', Flag: MY },
  { code: 'ID', name: 'Indonesia', dial: '62', sample: '0812-345-678', Flag: ID },
  { code: 'PH', name: 'Philippines', dial: '63', sample: '0905 123 4567', Flag: PH },
  { code: 'TH', name: 'Thailand', dial: '66', sample: '081 234 5678', Flag: TH },
  { code: 'VN', name: 'Vietnam', dial: '84', sample: '0912 345 678', Flag: VN },
  { code: 'CN', name: 'China', dial: '86', sample: '131 2345 6789', Flag: CN },
  { code: 'HK', name: 'Hong Kong', dial: '852', sample: '5123 4567', Flag: HK },
  { code: 'JP', name: 'Japan', dial: '81', sample: '090-1234-5678', Flag: JP },
  { code: 'KR', name: 'South Korea', dial: '82', sample: '010-2000-0000', Flag: KR },
  { code: 'AE', name: 'United Arab Emirates', dial: '971', sample: '050 123 4567', Flag: AE },
  { code: 'SA', name: 'Saudi Arabia', dial: '966', sample: '051 234 5678', Flag: SA },
  { code: 'DE', name: 'Germany', dial: '49', sample: '01512 3456789', Flag: DE },
  { code: 'FR', name: 'France', dial: '33', sample: '06 12 34 56 78', Flag: FR },
  { code: 'NL', name: 'Netherlands', dial: '31', sample: '06 12345678', Flag: NL },
  { code: 'IT', name: 'Italy', dial: '39', sample: '312 345 6789', Flag: IT },
  { code: 'ES', name: 'Spain', dial: '34', sample: '612 34 56 78', Flag: ES },
  { code: 'SE', name: 'Sweden', dial: '46', sample: '070-123 45 67', Flag: SE },
  { code: 'CH', name: 'Switzerland', dial: '41', sample: '078 123 45 67', Flag: CH },
  { code: 'BR', name: 'Brazil', dial: '55', sample: '(11) 96123-4567', Flag: BR },
  { code: 'MX', name: 'Mexico', dial: '52', sample: '222 123 4567', Flag: MX },
  { code: 'TR', name: 'Türkiye', dial: '90', sample: '0501 234 56 78', Flag: TR },
]

/** Codes shown at the top of the picker when no search is typed. */
export const POPULAR = ['AU', 'GB', 'US', 'NG', 'IN', 'PK', 'AE', 'SG']

export function getCountry(code) {
  return COUNTRIES.find((c) => c.code === code) || COUNTRIES[0]
}
