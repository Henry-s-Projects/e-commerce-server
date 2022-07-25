import jwt from 'jsonwebtoken';
import User from '../user.model';

const refreshToken = (req, res) => {
  try {
    const ref_token = req.body.ref_token;
    if (!ref_token) {
      return res.status(401).json({ msg: 'Please Login or Register' });
    }
    jwt.verify(ref_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
      if (err) return res.status(401).json({ msg: 'Invalid Token' });
      const accessToken = User.generateToken(user.data);
      return res.json({ accessToken });
    });
  } catch (error) {
    return res.status.json({ msg: error.message });
  }
};

export default refreshToken;
