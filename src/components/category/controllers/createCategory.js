import categoryServices from "../services";

const createCategory = async (req, res) => {
  try {
    const { name } = req.body;
    const newCategory = await categoryServices.createNewCategory(name);
    return res.json({ payload: newCategory });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};
export default createCategory;
