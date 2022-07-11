import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = 10;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
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
        id: userInfo._id,
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
        id: userInfo._id,
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
