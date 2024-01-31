import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainPrismaClientModule } from './prisma/main/main.prisma.module';
import { SecondaryPrismaClientModule } from "./prisma/secondary/secondary.prisma.module";

@Module({
  imports: [MainPrismaClientModule, SecondaryPrismaClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
