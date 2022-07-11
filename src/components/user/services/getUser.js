import Users from '../user.model';

const getUser = async (filter) => {
  const user = await Users.findOne(filter);
  if (!user) {
    return null;
  }
  return user;
};

export default getUser;
