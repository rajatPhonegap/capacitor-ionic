import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
// import productRoute from './routes/productRoute.js';
// import userRoute from './routes/userRoute.js';
// import projectRoute from './routes/projectRoute.js';
// import orderRoute from './routes/orderRoute.js';
// import uploadRoute from './routes/uploadRoute.js';
import cors from 'cors';
//EXPRESS DEFINE
const app = express();
app.use(bodyParser.json());

//ROUTES
// app.use('/api/uploads', uploadRoute);
// app.use('/api/users', userRoute);
// app.use('/api/products', productRoute);
// app.use('/api/orders', orderRoute);

//ROUTES FOR PROTFOLIO APP
// app.use('/api/projects', projectRoute);

//CORS ISUE
app.use(cors());

//DATABASE CONNECTION
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));


app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});
// File upload path
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));

// Front end build file path
app.use(express.static(path.join(__dirname, '/../frontend/build')));

// start
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/faviotui/index.html`));
});

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});