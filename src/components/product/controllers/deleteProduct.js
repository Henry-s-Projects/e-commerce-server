import productServices from "../services";

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await productServices.deleteById(id);
    return res.json({ msg: "product deleted" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default deleteProduct;
