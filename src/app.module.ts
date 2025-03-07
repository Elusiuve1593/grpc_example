import { Module } from '@nestjs/common';
import { DbConfigModule } from './db/db.module';

@Module({
  imports: [DbConfigModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
