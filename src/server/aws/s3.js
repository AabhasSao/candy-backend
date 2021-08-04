/* eslint-disable no-console */
const { S3Client, PutObjectCommand } = require('@aws-sdk/client-s3');
const fs = require('fs');

let config = fs.readFileSync('../config.json');
config = JSON.parse(config);
const {
  REGION, BUCKET_NAME, AWS_SECRET_KEY, AWS_ACCESS_KEY_ID,
} = config;

const s3 = new S3Client({
  region: REGION,
  credentials: {
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_KEY,
  },
});

const uploadImage = async (filepath, filename) => {
  try {
    const file = fs.readFileSync(filepath);

    const uploadParams = {
      Bucket: BUCKET_NAME,
      Key: filename,
      Body: file,
      ACL: 'public-read',
    };

    await s3.send(new PutObjectCommand(uploadParams));
    console.log(`successfully uploaded object: ${uploadParams.Bucket}/${uploadParams.Key}`);
  } catch (e) {
    console.error(e);
  }
};

module.exports = { uploadImage };
