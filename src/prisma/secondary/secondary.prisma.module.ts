import { Module } from '@nestjs/common';

import { SecondaryPrismaClient } from './secondary.prisma.client';

const secondaryPrismaClientProvider = {
  provide: SecondaryPrismaClient,
  useFactory: () => {
    return new SecondaryPrismaClient();
  },
  inject: [],
};

@Module({
  imports: [],
  providers: [secondaryPrismaClientProvider],
  exports: [secondaryPrismaClientProvider],
})
export class SecondaryPrismaClientModule {}
