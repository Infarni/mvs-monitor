import { Bot, Context } from "grammy";
import { SELECT_SERVICE_CENTER_CALLBACK_QUERY_PREFIX, unpackSelectServiceCenterCallbackQuery } from "../callback-queries/select-service-center.callback-query.js";
import { extractCallbackQueryData } from "../../../common/utils/extract-callback-query-data.util.js";
import { handleException } from "../../../common/utils/handle-exception.util.js";
import { ButtonUnactuallyException } from "../../../common/exceptions/button-unactually.exception.js";
import { notificationTargetClient } from "../../../common/clients/notification-target.client.js";
import { CreateNotificationTargetResponse, ENotificationTargetType } from "@mvs-monitor/proto/backend/v1/notification_target";
import { tgUserClient } from "../../../common/clients/tg-user.client.js";
import { GetTgUserRequest } from "@mvs-monitor/proto/backend/v1/tg_user";
import { ServiceError, status } from "@grpc/grpc-js";
import { GetTgUserResponse } from "@mvs-monitor/proto/backend/v1/tg_user";
import { UnknownException } from "../../../common/exceptions/unknown.exception.js";
import { getSelectServiceCenterKeyboard } from "../keyboards/select-service-center.keyboard.js";
import { UnaryCall } from "../../../common/utils/grpc-promisify.util.js";
import { CatalogServiceClient } from "../../../common/ttt/backend/v1/catalog.client.js";

export function registerSelectServiceCenterCallbackQueryHandler(bot: Bot): void {
  bot.callbackQuery(new RegExp(`^${SELECT_SERVICE_CENTER_CALLBACK_QUERY_PREFIX}:(.+)$`), async (ctx: Context) => {
    if (!ctx.from) {
      return;
    }

    const c = new CatalogServiceClient()
    const cacheId = await extractCallbackQueryData(ctx);

    const unpackedData = await unpackSelectServiceCenterCallbackQuery(cacheId);
    if (!unpackedData) {
      await handleException(new ButtonUnactuallyException(), ctx);
      return
    }

    const { groupId, data } = unpackedData;

    try {
      const tgUser = await tgUserClient.createTgUser({})


    } catch (error) {
      await handleException(new UnknownException(), ctx);
    }
  })
}
