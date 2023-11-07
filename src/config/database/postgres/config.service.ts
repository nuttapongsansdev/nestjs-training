import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class PostgresConfigService {
  private prefix: string = 'postgres';

  constructor(private readonly config: ConfigService) {}

  get host(): string {
    return this.config.get<string>(`${this.prefix}.host`);
  }

  get port(): number {
    return this.config.get<number>(`${this.prefix}.port`);
  }

  get user(): string {
    return this.config.get<string>(`${this.prefix}.user`);
  }

  get password(): string {
    return this.config.get<string>(`${this.prefix}.password`);
  }

  get database(): string {
    return this.config.get<string>(`${this.prefix}.database`);
  }
}
