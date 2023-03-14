import { Controller, Get } from "@nestjs/common";
import { successApiWrapper } from "./utilities/api-response.service";

@Controller()
export class AppController {
  @Get()
  getHello(): any {
    return successApiWrapper(
      {
        swagger: `${process.env.APP_URL}/swagger`,
      },
      `THE VISIONZE API`
    );
  }
}
