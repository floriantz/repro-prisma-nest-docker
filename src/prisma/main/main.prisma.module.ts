import { Module } from '@nestjs/common';

import { MainPrismaClient } from './main.prisma.client';

const mainPrismaClientProvider = {
  provide: MainPrismaClient,
  useFactory: () => {
    return new MainPrismaClient();
  },
  inject: [],
};

@Module({
  imports: [],
  providers: [mainPrismaClientProvider],
  exports: [mainPrismaClientProvider],
})
export class MainPrismaClientModule {}
