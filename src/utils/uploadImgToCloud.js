import cloudinary from './cloudinary';
import removeTmp from './removeTmp';

const uploadImgToCloud = async (URLfile) => {
  try {
    const uploadResponse = await cloudinary.uploader.upload(URLfile, {
      folder: 'ecommerce',
    });
    if (uploadResponse) {
      const result = {
        url: uploadResponse.url,
        public_id: uploadResponse.public_id,
      };
      removeTmp(URLfile);
      return result;
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

export default uploadImgToCloud;
