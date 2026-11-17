import 'i18next'

declare module 'i18next' {
  interface CustomTypeOptions {
    // t() always returns a string (a missing key renders the key itself)
    returnNull: false
  }
}
