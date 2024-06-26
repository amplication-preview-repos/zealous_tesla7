import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AdminDashboardServiceBase } from "./base/adminDashboard.service.base";

@Injectable()
export class AdminDashboardService extends AdminDashboardServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
