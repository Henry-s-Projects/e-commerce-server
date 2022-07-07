import userServices from "../services";

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await userServices.getUser({ email: email });

    if (user) {
      res.status(400).json({ msg: "Email already exists" });
    }

    if (password.length < 6) {
      res.status(400).json({ msg: "Password must be at least 6 characters" });
    }

    const newUser = await userServices.createUser({ name, email, password });
    res.status(201).json({ msg: "create user successful", payload: newUser });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default register;
