import userServices from '../services';

const getInfo = async (req, res) => {
  try {
    const user = req.user;
    const inforUser = await userServices.getUser({ _id: user.id });
    return res.json({
      payload: inforUser,
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default getInfo;
