const {
  cloudinaryVideoUpload,
  videoTransfrom,
} = require("../config/cloudinary");

const videoUpload = async (req, res) => {
  if (req.files !== undefined) {
    try {
      const vid = await cloudinaryVideoUpload(req.files.video.path);
      const transformedVid = videoTransfrom(vid);
      res.status(200).json({
        sucess: true,
        video: transformedVid,
      });
    } catch (error) {
      res.status(400).json({
        sucess: false,
        error,
      });
    }
  } else {
    res.status(400).json({
      sucess: false,
      error: "No image was uploaded",
    });
  }
};

module.exports = {
  videoUpload,
};
