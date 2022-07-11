import userServices from '../services';
import User from '../user.model';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userServices.getUser({ email: email });
    if (!user) {
      return res.status(400).json({ msg: 'User does not exist' });
    }

    const isMatch = await userServices.comparePassword(user, password);
    if (!isMatch) {
      return res.status(400).json({ msg: 'Incorrect password' });
    }

    const accessToken = User.generateToken(user);
    const refreshToken = User.refreshToken(user);

    res.cookie('refreshToken', refreshToken, {
      httpOnly: true,
      path: '/user/refresh_token',
    });

    return res.status(201).json({
      msg: 'login successful',
      payload: user,
      token: accessToken,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default login;
