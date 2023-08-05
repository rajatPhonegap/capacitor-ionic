import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import config from './config';
import userRoute from './routes/userRoute';
import productRoute from './routes/productRoute';
import projectRoute from './routes/projectRoute';
import orderRoute from './routes/orderRoute';
import uploadRoute from './routes/uploadRoute';
import cors from 'cors';
//DATABASE CONNECTION
const mongodbUrl = config.MONGODB_URL;
mongoose
  .connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .catch((error) => console.log(error.reason));
//EXPRESS DEFINE
const app = express();
app.use(bodyParser.json());
//CORS ISUE
app.use(cors());
//ROUTES
app.use('/api/uploads', uploadRoute);
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);
app.use('/api/orders', orderRoute);
//ROUTES FOR PROTFOLIO APP
app.use('/api/projects', projectRoute);

app.get('/api/config/paypal', (req, res) => {
  res.send(config.PAYPAL_CLIENT_ID);
});
app.use('/uploads', express.static(path.join(__dirname, '/../uploads')));
app.use(express.static(path.join(__dirname, '/../frontend/build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
});

app.listen(config.PORT, () => {
  console.log('Server started at http://localhost:5000');
});
