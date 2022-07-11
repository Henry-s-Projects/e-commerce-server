import bcrypt from 'bcrypt';

const comparePassword = async (user, password) => {
  const result = await bcrypt.compare(password, user.password);
  return result;
};

export default comparePassword;
