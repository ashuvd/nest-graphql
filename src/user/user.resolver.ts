import { Resolver, Args, Query, Mutation } from '@nestjs/graphql'
import { Inject } from '@nestjs/common';
import User from '../models/User';

@Resolver(of => User)
export class UserResolver {
  constructor(@Inject('USER_REPOSITORY') private readonly userRepository: typeof User) {
  }
  @Query(returns => [User])
  users(): Promise<User[]> {
    return this.userRepository.findAll();
  }
  @Query(returns => User)
  user(@Args('id') id: string): Promise<User> {
    return this.userRepository.findByPk(id);
  }
  @Query(returns => User)
  userByLogin(@Args('login') login: string): Promise<User> {
    return this.userRepository.findOne({ where: { login } });
  }
  @Mutation(returns => User)
  async deleteUserById(@Args('id') id: string): Promise<User> {
    const user = await this.userRepository.findByPk(id);
    if (!user) {
      return user;
    }
    user.destroy();
    return user;
  }
  @Mutation(returns => User)
  async createUser(@Args('login') login: string, @Args('password') password: string): Promise<User> {
    return this.userRepository.create({login, password});
  }
}
