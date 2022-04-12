import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  
  @Prop({ required: true, unique: true })
  userName: string;

  @Prop({ required: true, unique: true  })
  email: string;

  @Prop({ required: true, select: false })
  password: string;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  surname: string;
}

export const UserSchema = SchemaFactory.createForClass(User);