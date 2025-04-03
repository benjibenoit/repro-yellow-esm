import type { ApplicationService } from '@adonisjs/core/types'
import Client from '@triton-one/yellowstone-grpc';
import env from "#start/env";

export default class AppProvider {
  constructor(protected app: ApplicationService) {}

  /**
   * Register bindings to the container
   */
  register() {}

  /**
   * The container bindings have booted
   */
  async boot() {}

  /**
   * The application has been booted
   */
  async start() {
    const client = new Client(env.get('GRPC_URL'), env.get('GRPC_KEY'), {
      'grpc.max_receive_message_length': 64 * 1024 * 1024, // 64MiB
    });

    await client.subscribe()
  }

  /**
   * The process has been started
   */
  async ready() {}

  /**
   * Preparing to shutdown the app
   */
  async shutdown() {}
}
