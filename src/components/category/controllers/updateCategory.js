import categoryServices from "../services";

const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;
    await categoryServices.updateById(id, { name });
    return res.json({ msg: "Category updated" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default updateCategory;
