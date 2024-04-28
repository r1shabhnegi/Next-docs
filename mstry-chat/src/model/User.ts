import mongoose, { Schema, Document } from 'mongoose';

export interface Message extends Document {
  content: string;
  createAt: Date;
}

const messageSchema: Schema<Message> = new Schema({
  content: { type: String, required: true },
  createAt: { type: Date, required: true, default: Date.now },
});

// export const Message = mongoose.model('User', messageSchema);

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified: boolean;
  isAcceptingMessage: boolean;
  messages: Message[];
}

const userSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+\@.+\..+/, 'please use a valid email address'],
  },
  password: { type: String, required: [true, 'Password is required'] },
  verifyCode: { type: String, required: [true, 'Verified code is required'] },
  verifyCodeExpiry: {
    type: Date,
    required: [true, 'Verify Code Expiry code is required'],
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  isAcceptingMessage: { type: Boolean, default: true },
  messages: [messageSchema],
});

const User =
  (mongoose.models.User as mongoose.Model<User>) ||
  mongoose.model<User>('User', userSchema);

export default User;
