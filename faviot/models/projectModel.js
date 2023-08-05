import mongoose from 'mongoose';

const reviewSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const tableSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: false },
  link: { type: String, required: true },
  active: { type: Number, default: 0, required: true },
  created: { type: String, required: false },
  modified: { type: String, required: false },
  tech_desc: { type: String, required: false },
  category: { type: String, required: false },
  numReviews: { type: Number, default: 0, required: true },
  reviews: [reviewSchema],
});

const productModel = mongoose.model('Project', tableSchema);

export default productModel;
