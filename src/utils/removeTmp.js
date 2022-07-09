import fs from "fs";

const removeTmp = (filePath) => {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.log(err);
    }
  });
};

export default removeTmp;
