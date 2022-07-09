import productServices from "../services";

const getProducts = async (req, res) => {
  try {
    const products = await productServices.getAll();
    return res.json({ payload: products });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default getProducts;
