import HEALTH_LIGHT_BASE_BASE from "./themes/health_light_base_base/json/nested/tokens.json"
import HEALTH_DARK_BASE_BASE from "./themes/health_dark_base_base/json/nested/tokens.json"
import IWEALTH_LIGHT_BASE_BASE from "./themes/iwealth_light_base_base/json/nested/tokens.json"
import IWEALTH_DARK_BASE_BASE from "./themes/iwealth_dark_base_base/json/nested/tokens.json"
import POSB_LIGHT_BASE_BASE from "./themes/posb_light_base_base/json/nested/tokens.json"
import POSB_LIGHT_BASE_XS from "./themes/posb_light_base_xs/json/nested/tokens.json"
import POSB_DARK_BASE_BASE from "./themes/posb_dark_base_base/json/nested/tokens.json"

export {
  HEALTH_LIGHT_BASE_BASE,
  HEALTH_DARK_BASE_BASE,
  IWEALTH_LIGHT_BASE_BASE,
  IWEALTH_DARK_BASE_BASE,
  POSB_LIGHT_BASE_BASE,
  POSB_LIGHT_BASE_XS,
  POSB_DARK_BASE_BASE,
}

export interface DesignTokens {
  theme: typeof HEALTH_LIGHT_BASE_BASE
}
