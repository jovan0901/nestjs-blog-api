import { Body, Controller, Post } from '@nestjs/common';
import { AuthRegisterDto } from './models/dto/auth-register.dto';
import { AuthLoginDto } from './models/dto/auth-login.dto';
import { AuthService } from './auth.service';
import { User } from './models/entities/user.entity';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('register')
    createUser(@Body() authRegisterDto:AuthRegisterDto): Promise<User> {
        return this.authService.register(authRegisterDto);
    }

    @Post('login')
    async login(@Body() authLoginDto: AuthLoginDto) {
        return this.authService.login(authLoginDto);
    }
}
