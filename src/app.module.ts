import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./users/auth/auth.module";
import { JwtStrategy } from "./users/auth/jwt/jwt.strategy";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [
    JwtStrategy,
    AppService,
  ],
})
export class AppModule {}
