import userServices from '../services';
import User from '../user.model';

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userServices.getUser({ email: email });

    if (user) {
      return res.status(400).json({ msg: 'Email already exists' });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ msg: 'Password must be at least 6 characters' });
    }

    const newUser = await userServices.createUser({
      name,
      email,
      password,
    });

    const accessToken = User.generateToken(newUser);
    const refreshToken = User.refreshToken(newUser);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/user/refresh_token',
      maxAge: 1000 * 60 * 60 * 24 * 7,
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // must be 'none' to enable cross-site delivery
      secure: process.env.NODE_ENV === 'production', // must be true if sameSite='none'
    });

    res.status(201).json({
      msg: 'create user successful',
      payload: newUser,
      token: accessToken,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default register;
