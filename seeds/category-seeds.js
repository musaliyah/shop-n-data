const { Category } = require('../models');

const categoryData = [
  {
    category_title: 'Shirts',
  },
  {
    category_title: 'Shorts',
  },
  {
    category_title: 'Music',
  },
  {
    category_title: 'Hats',
  },
  {
    category_title: 'Shoes',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
