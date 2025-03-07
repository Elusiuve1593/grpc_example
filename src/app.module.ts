import { Module } from '@nestjs/common';
import { DbConfigModule } from './db/db.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [DbConfigModule, UserModule],
})
export class AppModule {}
