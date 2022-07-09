import categoryServices from "../services";

const getCategories = async (req, res) => {
  try {
    const categories = await categoryServices.getAll();
    return res.json({ payload: categories });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default getCategories;
