import { Inject, Injectable, OnModuleInit } from "@nestjs/common";
import { PermissionsService } from "./permissions/permissions.service";

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @Inject(PermissionsService) private _permissionsService: PermissionsService
  ) {}

  onModuleInit(): any {}
}
