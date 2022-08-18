import { TestModule } from './sample/test.module'
import { TestService } from './sample/test.service'
import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [TestModule, ConfigModule.forRoot()],
  providers: [TestService],
  controllers: [],
})
export class AppModule {}
