import productServices from "../services";

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productServices.updateById(id, req.body);
    return res.json({ msg: "product updated" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default updateProduct;
