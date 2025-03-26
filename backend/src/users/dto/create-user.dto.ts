import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsArray } from 'class-validator';
import { GameSession } from 'src/game-sessions/entities/game-session.entity';

export class CreateUserDto {
  @ApiProperty({
    example: 'MKAlbani',
    description: 'The username of the user',
  })
  @IsString()
  username: string;

  @ApiProperty({
    example: 'mkalbani@example.com',
    description: 'The email of the user',
  })
  @IsEmail()
  email: string;

  @ApiProperty({
    example: 'password123',
    description: 'The password of the user',
  })
  @IsString()
  password: string;

  @ApiProperty({
    example: '0x1234567890abcdef1234567890abcdef1234567890',
    description: 'The wallet address of the user',
  })
  @IsOptional()
  @IsString()
  walletAddress?: string;

  @ApiProperty({
    example: '0x1234567890abcdef1234567890abcdef1234567890',
    description: 'The game session',
  })
  @IsArray()
  @IsOptional()
  gameSessions?: GameSession[];
}
