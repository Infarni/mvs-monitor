import { Bot } from "grammy";
import { registerSettingsCommandHandler } from "./handlers/settings-command.handler.js";
import { registerShowOptionsCallbackQueryHandler } from "./handlers/show-options-callback-query.handler.js";
import { registerSelectOptionCallbackQueryHandler } from "./handlers/select-option-callback-query.handler.js";
import { registerShowRegionsCallbackQueryHandler } from "./handlers/show-regions-callback-query.handler.js";
import { registerSelectRegionCallbackQueryHandler } from "./handlers/select-region-callback-query.handler.js";
import { registerShowCitiesCallbackQueryHandler } from "./handlers/show-cities-callback-query.handler.js";
import { registerSelectCityCallbackQueryHandler } from "./handlers/select-city-callback-query.handler.js";
import { registerShowServiceCentersCallbackQueryHandler } from "./handlers/show-service-centers-callback-query.handler.js";
import { registerSelectServiceCenterCallbackQueryHandler } from "./handlers/select-service-center.callback-query.js";
import { registerUnselectServiceCenterCallbackQueryHandler } from "./handlers/unselect-service-center.callback-query.js";
import { registerFinishConfigureNotificationTargetsCallbackQueryHandler } from "./handlers/finish-configure-notification-targets-callback-query.handler.js";

export function registerSettingsMasterHandler(bot: Bot): void {
  registerSettingsCommandHandler(bot);
  registerShowOptionsCallbackQueryHandler(bot);
  registerSelectOptionCallbackQueryHandler(bot);
  registerShowRegionsCallbackQueryHandler(bot);
  registerSelectRegionCallbackQueryHandler(bot);
  registerShowCitiesCallbackQueryHandler(bot);
  registerSelectCityCallbackQueryHandler(bot);
  registerShowServiceCentersCallbackQueryHandler(bot);
  registerSelectServiceCenterCallbackQueryHandler(bot);
  registerUnselectServiceCenterCallbackQueryHandler(bot);
  registerFinishConfigureNotificationTargetsCallbackQueryHandler(bot);
}
