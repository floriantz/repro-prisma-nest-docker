import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../prisma/main/libs/main';

@Injectable()
export class SecondaryPrismaClient
  extends PrismaClient
  implements OnModuleInit
{
  async onModuleInit() {
    await this.$connect();
  }
}
