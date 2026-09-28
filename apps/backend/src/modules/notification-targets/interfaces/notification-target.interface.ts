import { ENotificationTargetType } from "@mvs-monitor/proto/backend/v1/notification_target";

export interface INotificationTarget {
  id: string;
  serviceCenterId: string;
  optionId: string;
  tgUserId: string | null;
  type: ENotificationTargetType;
}
