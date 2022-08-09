import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = 10;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter your name!'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Please enter your email!'],
      trim: true,
    },
    password: {
      type: String,
      required: [true, 'Please enter your password!'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    cart: {
      type: Array,
      default: [],
    },
    avatar: {
      type: String,
      default:
        'https://res.cloudinary.com/vuluuu1120/image/upload/v1660049377/avatar/avatar_default.png',
    },
  },
  {
    timestamps: true,
  }
);

// Define info to be returned when user is queried
UserSchema.methods.toJSON = function () {
  const user = this.toObject();
  delete user.password;
  return user;
};

UserSchema.statics.generateToken = function (userInfo) {
  const accessToken = jwt.sign(
    {
      data: {
        id: userInfo.id,
        name: userInfo.name,
        email: userInfo.email,
        role: userInfo.role,
      },
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: '1h',
    }
  );

  return accessToken;
};

UserSchema.statics.refreshToken = function (userInfo) {
  const refreshToken = jwt.sign(
    {
      data: {
        id: userInfo.id,
        name: userInfo.name,
        email: userInfo.email,
        role: userInfo.role,
      },
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: '7d',
    }
  );
  return refreshToken;
};

UserSchema.pre('save', async function () {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, SALT_ROUNDS);
  }
});

const User = mongoose.model('Users', UserSchema);

export default User;
