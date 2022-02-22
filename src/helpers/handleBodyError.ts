import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';

export function handleBodyError(
  error: ErrorRequestHandler,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof Error) {
    return response.status(400).json({ message: error.message });
  }

  next();
}
