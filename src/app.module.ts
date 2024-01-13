import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://hta:agatha@cluster0.r2eb6bu.mongodb.net/todo',
    ),
  ],
})
export class AppModule {}
