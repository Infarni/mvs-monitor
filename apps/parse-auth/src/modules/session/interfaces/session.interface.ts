export interface ISession {
  id: string;
  cookies: string;
  lock: boolean;
  operationId: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISessionCreate {
  id?: string;
  cookies: object[];
  lock: boolean;
  operationId: string;
  createdAt?: Date;
  updatedAt?: Date;
}
