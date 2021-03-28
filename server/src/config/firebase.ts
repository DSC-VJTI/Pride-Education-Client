import { Storage } from "@google-cloud/storage";

const storage = new Storage({
  projectId: process.env.GCLOUD_PROJECT_ID,
  keyFilename: process.env.GCLOUD_APPLICATION_CREDENTIALS
});

const bucket = storage.bucket(process.env.GCLOUD_STORAGE_BUCKET_URL!);

export default bucket;
