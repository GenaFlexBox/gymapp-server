import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async validateUser(details: any) {
    const user = await this.prisma.user.findUnique({
      where: {
        email: details.email,
      },
    });

    if (user) return user;

    const createUser = await this.createUser(details);

    return createUser
  }

  async createUser(details: any): Promise<User> {
    return this.prisma.user.create({
        data: {
            email: details.email,
            name: details.displayName
        }
    })
  }

  async findUser(id: number) {
    return this.prisma.user.findUnique({
        where: {
            id
        }
    })
  }
}
