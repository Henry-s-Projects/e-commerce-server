import uploadImgToCloud from '../../../utils/uploadImgToCloud';
import removeTmp from '../../../utils/removeTmp';

const uploadImg = async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ msg: 'No files were uploaded' });
    }

    const file = req.files.file;
    if (file > 1024 * 1024 * 5) {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: 'File size is bigger than 5mb' });
    }

    if (file.mimetype !== 'image/jpeg' && file.minetype !== 'image/png') {
      removeTmp(file.tempFilePath);
      return res.status(400).json({ msg: 'File type is not supported' });
    }

    const results = await uploadImgToCloud(file.tempFilePath);

    return res.json(results);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

export default uploadImg;
