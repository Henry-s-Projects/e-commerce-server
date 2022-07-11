import User from '../user.model';

const createUser = async (info) => {
  const newUser = new User(info);
  newUser.save();
  return newUser;
};

export default createUser;
