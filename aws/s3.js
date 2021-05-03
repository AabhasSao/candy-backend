const {S3Client, PutObjectCommand} = require('@aws-sdk/client-s3')

const fs = require('fs')
const {nanoid} = require("nanoid");

let config = fs.readFileSync('./config.json')
config = JSON.parse(config);
const {REGION, BUCKET_NAME, AWSSecretKey, accessKeyId} = config

const s3 = new S3Client({
    region: REGION,
    credentials: {
        accessKeyId,
        secretAccessKey: AWSSecretKey,
    }
});

let f = fs.readFileSync('../static/selena_gomez_vogue_2016.jpg');
console.log(f)

const uploadParams = {
    Bucket: BUCKET_NAME,
    Key: nanoid() + '.jpg',
    Body: fs.readFileSync('../static/selena_gomez_vogue_2016.jpg')
}

const uploadImage = async () => {
    try {
        await s3.send(new PutObjectCommand(uploadParams));
        console.log("successfully uploaded object: " + uploadParams.Bucket + "/" + uploadParams.Key)
    } catch (e) {
        console.error(e)
    }
}
uploadImage()

