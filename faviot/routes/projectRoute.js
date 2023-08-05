import express from 'express';
import Project from '../models/projectModel';
import { isAuth, isAdmin } from '../util';

const router = express.Router();

router.get('/', async (req, res) => {
  const category = req.query.category ? { category: req.query.category } : {};
  const searchKeyword = req.query.searchKeyword
    ? {
        title: {
          $regex: req.query.searchKeyword,
          $options: 'i',
        },
      }
    : {};
  const sortOrder = req.query.sortOrder
    ? req.query.sortOrder === 'lowest'
      ? { price: 1 }
      : { price: -1 }
    : { _id: -1 };
  const projects = await Project.find({ ...category, ...searchKeyword }).sort(
    sortOrder
  );
  res.send(projects);
});

router.get('/:id', async (req, res) => {
  const project = await Project.findOne({ _id: req.params.id });
  if (project) {
    res.send(project);
  } else {
    res.status(404).send({ message: 'project Not Found.' });
  }
});
router.post('/:id/reviews', isAuth, async (req, res) => {
  const project = await Project.findById(req.params.id);
  if (project) {
    const review = {
      name: req.body.name,
      rating: Number(req.body.rating),
      comment: req.body.comment,
    };
    project.reviews.push(review);
    project.numReviews = project.reviews.length;
    project.rating =
    project.reviews.reduce((a, c) => c.rating + a, 0) /
    project.reviews.length;
    const updatedproject = await project.save();
    res.status(201).send({
      data: updatedproject.reviews[updatedproject.reviews.length - 1],
      message: 'Review saved successfully.',
    });
  } else {
    res.status(404).send({ message: 'project Not Found' });
  }
});
router.put('/:id', isAuth, isAdmin, async (req, res) => {
  const projectId = req.params.id;
  const project = await project.findById(projectId);
  if (project) {
    project.name = req.body.name;
    project.price = req.body.price;
    project.image = req.body.image;
    project.brand = req.body.brand;
    project.category = req.body.category;
    project.countInStock = req.body.countInStock;
    project.description = req.body.description;
    const updatedproject = await project.save();
    if (updatedproject) {
      return res
        .status(200)
        .send({ message: 'project Updated', data: updatedproject });
    }
  }
  return res.status(500).send({ message: ' Error in Updating project.' });
});

router.delete('/:id', isAuth, isAdmin, async (req, res) => {
  const deletedproject = await project.findById(req.params.id);
  if (deletedproject) {
    await deletedproject.remove();
    res.send({ message: 'project Deleted' });
  } else {
    res.send('Error in Deletion.');
  }
});

router.post('/', isAuth, isAdmin, async (req, res) => {
  const project = new project({
    name: req.body.name,
    price: req.body.price,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    countInStock: req.body.countInStock,
    description: req.body.description,
    rating: req.body.rating,
    numReviews: req.body.numReviews,
  });
  const newproject = await project.save();
  if (newproject) {
    return res
      .status(201)
      .send({ message: 'New project Created', data: newproject });
  }
  return res.status(500).send({ message: ' Error in Creating project.' });
});

export default router;
