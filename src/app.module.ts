import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { PrismaService } from './prisma/prisma.service';
import { AuthModule } from './auth/auth.module';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [UserModule, AuthModule, PassportModule.register({session: true})],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
