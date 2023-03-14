import { Module } from "@nestjs/common";
import DatabaseConfig from "./providers/database.provider";
import EnvironmentConfig from "./providers/envoirment.provider";

@Module({
  imports: [
    DatabaseConfig,
    EnvironmentConfig,
  ],
  exports: [
    DatabaseConfig,
    EnvironmentConfig,
  ],
})
export class ConfigurationsModule {}
