import { Resolver, Args, Query, Mutation } from '@nestjs/graphql'
import Navigation from '../models/Navigation';
import { Inject } from '@nestjs/common';

@Resolver(of => Navigation)
export class NavigationResolver {
  constructor(@Inject('NAVIGATION_REPOSITORY') private readonly navigationRepository: typeof Navigation) {
  }
  @Query(returns => [Navigation])
  navigations(): Promise<Navigation[]> {
    return this.navigationRepository.findAll();
  }
  @Query(returns => Navigation)
  navigation(@Args('id') id: number): Promise<Navigation> {
    return this.navigationRepository.findByPk(id);
  }
}
