import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

interface NestErrorResponse {
  message?: string | string[];
  error?: string;
  statusCode?: number;
}

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost): void {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status: number = exception.getStatus();
    const exceptionResponse: string | object = exception.getResponse();

    // Safely extract the message without using 'any'
    let message: string | string[] = exception.message;

    if (typeof exceptionResponse === 'object' && exceptionResponse !== null) {
      const errorBody = exceptionResponse as NestErrorResponse;
      message = errorBody.message ?? exception.message;
    } else if (typeof exceptionResponse === 'string') {
      message = exceptionResponse;
    }

    response.status(status).json({
      statusCode: status,
      message: message,
      data: null,
    });
  }
}
