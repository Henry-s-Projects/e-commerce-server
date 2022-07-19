import cloudinary from './cloudinary';

const deleteAsset = (public_id) => {
  try {
    cloudinary.uploader.destroy(public_id, async (error) => {
      if (error) {
        throw new Error(error.message);
      }
    });
  } catch (error) {
    throw new Error(error.message);
  }
};

export default deleteAsset;
