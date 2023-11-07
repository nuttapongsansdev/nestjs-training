import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { RegisterDTO } from './dto/register.dto';
import { UserService } from './user.service';
import { LocalAuthGuard } from 'src/auth/local/local-auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/register')
  @UsePipes(ValidationPipe)
  async register(@Body() body: RegisterDTO): Promise<any> {
    const res = await this.userService.createUser(body);
    return res;
  }

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Request() req) {
    console.log(req.user);

    const token = this.userService.generateTokenUser(req.user);

    return {
      accessToken: token,
    };
  }
}
