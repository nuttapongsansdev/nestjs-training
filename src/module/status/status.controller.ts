import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt/jwt-auth.guard';
import { StatusService } from './status.service';
import { CreateStatusDTO } from './dto/create-status.dto';

@Controller('status')
export class StatusController {
  constructor(private readonly statusService: StatusService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  @UsePipes(ValidationPipe)
  async createStatus(@Request() req, @Body() body: CreateStatusDTO) {
    const status = await this.statusService.createStatus(body);
    return status;
  }
}
