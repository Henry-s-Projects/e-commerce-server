import User from '../user.model';

const updateById = async (id, data) => {
  await User.findByIdAndUpdate(id, data);
};

export default updateById;
