import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../prisma/main/libs/main';

@Injectable()
export class MainPrismaClient extends PrismaClient implements OnModuleInit {
  async onModuleInit() {
    await this.$connect();
  }
}
