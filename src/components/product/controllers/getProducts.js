import productServices from "../services";

const MAX_PRICE = process.env.MAX_PRICE || 1000000000;
const MIN_PRICE = process.env.MIN_PRICE || 0;

const getProducts = async (req, res) => {
  try {
    const query = req.query;
    const itemsPerPage = query.itemsPerPage ? parseInt(query.itemsPerPage) : 0;
    const page = query.page ? parseInt(query.page) - 1 : 0;
    const sort = query.sort ? query.sort : "-sold";

    const max = query.max ? parseInt(query.max) : MAX_PRICE;
    const min = query.min ? parseInt(query.min) : MIN_PRICE;
    query.price = { $gte: min, $lte: max };

    delete query.itemsPerPage;
    delete query.page;
    delete query.max;
    delete query.min;

    const products = await productServices.getAll(
      query,
      itemsPerPage,
      page,
      sort
    );
    return res.json({ result: products.length, payload: products });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default getProducts;
