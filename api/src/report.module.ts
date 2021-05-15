import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReportController } from './report.controller';
import { ReportService } from './report.service';

@Module({
  imports: [TypeOrmModule.forRoot()],
  controllers: [ReportController],
  providers: [ReportService],
})
export class ReportModule {}
