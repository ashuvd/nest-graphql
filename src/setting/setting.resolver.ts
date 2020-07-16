import { Resolver, Args, Query, Mutation } from '@nestjs/graphql'
import { Inject } from '@nestjs/common';
import Setting from '../models/Setting';

@Resolver(of => Setting)
export class SettingResolver {
  constructor(@Inject('SETTING_REPOSITORY') private readonly settingRepository: typeof Setting) {
  }
  @Query(returns => Setting)
  setting(): Promise<Setting> {
    return this.settingRepository.findOne();
  }
  @Mutation(returns => Setting)
  async rpcCreateOrUpdateSetting(@Args('ip') ip: string, @Args('port') port: number): Promise<Setting> {
    let setting = await this.settingRepository.findOne();
    if (setting) {
      setting = await setting.update({ip, port});
    } else {
      setting = await this.settingRepository.create({ip, port});
    }
    return setting;
  }
}
