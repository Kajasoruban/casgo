import {v2 as cloudinary} from 'cloudinary';
import dotenv from "dotenv";dotenv.config();

// Cloud_name=dbczgzhd3
// Api_key= 954188386282655
// Api_secret=fBca0WyxRM_rw-6fER2_8moCKn8


cloudinary.config({ 
  cloud_name: process.env.Cloud_name, 
  api_key: process.env.Api_key, 
  api_secret: process.env.Api_secret
});

export default cloudinary;