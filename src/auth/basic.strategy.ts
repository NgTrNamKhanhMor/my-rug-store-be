import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { BasicStrategy as Strategy } from 'passport-http';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super();
  }

  public validate(username: string, password: string): boolean {
    // Replace these with your desired credentials or database check
    const user = 'admin';
    const pass = 'Namkhanh@2510';

    if (user === username && pass === password) {
      return true;
    }
    throw new UnauthorizedException();
  }
}
