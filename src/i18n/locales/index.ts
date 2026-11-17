import layout from './layout.json'
import calls from './calls.json'
import widgets from './widgets.json'
import settings from './settings.json'
import sales from './sales.json'
import chat from './chat.json'
import preview from './preview.json'
import payment from './payment.json'
import auth from './auth.json'

/** English translations, keyed by the original Russian text. */
const en: Record<string, string> = {
  ...layout,
  ...calls,
  ...widgets,
  ...settings,
  ...sales,
  ...chat,
  ...preview,
  ...payment,
  ...auth,
}

export default en
