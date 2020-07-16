import { Module } from '@nestjs/common'
import { NavigationResolver } from './navigation.resolver'
import { navigationProviders } from './navigation.providers';

@Module({
  providers: [NavigationResolver, ...navigationProviders],
})
export class NavigationModule {}
