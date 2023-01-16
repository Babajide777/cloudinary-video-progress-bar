const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

const cloudinaryVideoUpload = (file) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload(file, {
        resource_type: "video",
        allowed_formats: ["mkv", "mp4"],
      })
      .then((result) => {
        resolve(result.public_id);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const videoTransfrom = (vid) =>
  cloudinary.video(vid, {
    effect: "progressbar:color_072AC8:width_20:type_bar",
  });

module.exports = {
  cloudinaryVideoUpload,
  videoTransfrom,
};
