const logout = async (req, res) => {
  try {
    res.clearCookie('refreshToken', { path: '/user/refresh_token' });
    return res.json({ msg: 'Logged out' });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default logout;
