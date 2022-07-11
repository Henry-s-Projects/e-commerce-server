const authAdmin = async (req, res, next) => {
  try {
    const user = req.user;
    if (!user) {
      return res.status(401).json({ msg: 'You are not authorized' });
    }

    if (user.role !== 'admin') {
      return res.status(403).json({ msg: 'Admin resource denied.' });
    }

    next();
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default authAdmin;
