import { Resolver, Args, Query } from '@nestjs/graphql'
import { Inject, UnauthorizedException } from '@nestjs/common';
import User from '../models/User';
import { JwtService } from '@nestjs/jwt';
type Auth = {
  access_token: string
}

@Resolver(of => User)
export class AuthResolver {
  constructor(@Inject('USER_REPOSITORY') private readonly userRepository: typeof User, private jwtService: JwtService) {
  }
  async validateUser(login: string, pass: string): Promise<any> {
    const user = await this.userRepository.findOne({ where: { login } });
    if (!user) {
      return null;
    }
    const compare = await user.comparePasswords(pass);
    if (!compare) {
      return null;
    }
    return user;
  }

  @Query(returns => User)
  async login(@Args('login') login: string, @Args('password') password: string): Promise<Auth> {
    const user = await this.validateUser(login, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    const payload = { userId: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
