// src/auth/basic.strategy.ts
import { BasicStrategy as Strategy } from 'passport-http';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';

@Injectable()
export class BasicStrategy extends PassportStrategy(Strategy) {
  validate(username, password) {
    // Replace with real DB check
    if (username === 'admin' && password === 'secret') {
      return { username };
    }
    throw new UnauthorizedException();
  }
}