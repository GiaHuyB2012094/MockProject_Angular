import { v2 as cloudinary } from 'cloudinary';
import { environment } from 'src/environments/environment';

cloudinary.config({
  cloud_name: environment.cloudinaryCloudName,
  api_key: environment.cloudinaryApiKey,
  api_secret: environment.cloudinaryApiSecret,
});

export const cloudinaryInstance = cloudinary;
