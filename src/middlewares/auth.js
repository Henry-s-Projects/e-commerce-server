import jwt from 'jsonwebtoken';

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({ msg: 'Please log in or register' });
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
      if (err) {
        return res.status(401).json({ msg: 'Invalid token' });
      }
      req.user = user.data;
      next();
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default auth;
