import { Injectable } from '@nestjs/common';
import { SessionRepository } from '../repositories/session.repository.js';
import { ISession, ISessionCreate } from '../interfaces/session.interface.js';

@Injectable()
export class SessionService {
  constructor(private readonly sessionRepo: SessionRepository) {}

  async create(data: ISessionCreate): Promise<ISession> {
    const row = await this.sessionRepo.create(data);

    return {
      id: row.id,
      cookies: JSON.stringify(row.cookies),
      lock: row.lock,
      operationId: row.operationId,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    };
  }

  async findByOperationId(operationId: string): Promise<ISession | null> {
    const row = await this.sessionRepo.findByOperationId(operationId);

    if (!row) {
      return null;
    }

    return {
      id: row.id,
      cookies: JSON.stringify(row),
      lock: row.lock,
      operationId: row.operationId,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    };
  }

  async lockBySessionId(sessionId: string): Promise<ISession | null> {
    const row = await this.sessionRepo.updateById(sessionId, {
      lock: true,
      updatedAt: new Date(),
    });

    if (!row) {
      return null;
    }

    return {
      id: row.id,
      cookies: JSON.stringify(row.cookies),
      lock: row.lock,
      operationId: row.operationId,
      createdAt: row.createdAt,
      updatedAt: row.updatedAt,
    };
  }

  async delete(sessionId: string): Promise<void> {
    await this.sessionRepo.deleteById(sessionId);
  }
}
