import { Module } from '@nestjs/common'
import { SettingResolver } from './setting.resolver'
import { settingProviders } from './setting.providers';

@Module({
  providers: [SettingResolver, ...settingProviders],
})
export class SettingModule {}
