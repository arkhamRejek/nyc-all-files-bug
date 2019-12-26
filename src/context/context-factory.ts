import { IncomingMessage } from 'http';
import { Context } from './context';

export class ContextFactory {
  static async createContext(request: IncomingMessage): Promise<Context> {
    const context: Context = new Context();

    context.request = request;

    if (request.headers.authorization) {
        console.log('found')
    }

    return context;
  }
}
