import dotenv from 'dotenv';

dotenv.config();

export default {
  PORT: process.env.PORT || 5000,
  // MONGODB_URL: process.env.MONGODB_URL || 'mongodb+srv://rajat:Rajat%40143@cluster0-nzalp.gcp.mongodb.net/test?retryWrites=true&w=majority',
  MONGODB_URL: process.env.MONGODB_URL || 'mongodb://localhost/myportfolio',
  JWT_SECRET: process.env.JWT_SECRET || 'somethingsecret',
  PAYPAL_CLIENT_ID: process.env.PAYPAL_CLIENT_ID || 'sb',
  accessKeyId: process.env.accessKeyId || 'accessKeyId',
  secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
};
