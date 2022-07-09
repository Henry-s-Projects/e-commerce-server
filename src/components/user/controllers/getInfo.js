const getInfo = async (req, res) => {
  try {
    const user = req.user;
    return res.json({
      payload: user,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default getInfo;
