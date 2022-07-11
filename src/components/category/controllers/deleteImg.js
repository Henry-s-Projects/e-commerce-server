import deleteAsset from '../../../utils/deleteAsset';

const deleteImg = (req, res) => {
  try {
    const { public_id } = req.body;
    if (!public_id) {
      return res.status(400).json({ msg: 'No image selected' });
    }

    deleteAsset(public_id);
    return res.json({ msg: 'Image deleted' });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default deleteImg;
