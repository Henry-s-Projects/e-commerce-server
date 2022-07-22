import userServices from '../services';
import User from '../user.model';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userServices.getUser({ email: email });
    if (!user) {
      return res.status(400).json({ msg: 'Incorrect email or password' });
    }

    const isMatch = await userServices.comparePassword(user, password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Incorrect email or password' });
    }

    const accessToken = User.generateToken(user);
    const refreshToken = User.refreshToken(user);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/user/refresh_token',
      maxAge: 1000 * 60 * 60 * 24 * 7,
      sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'lax', // must be 'none' to enable cross-site delivery
      secure: process.env.NODE_ENV === 'production', // must be true if sameSite='none'
    });

    return res.json({
      msg: 'login successful',
      payload: user,
      token: accessToken,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default login;
