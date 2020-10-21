
// Dependancies
import ProductsList from './modules/products/list.class.js';
import SlideShow from './modules/slideShow.class.js';
import Header from './modules/header.module.js';
import staticJSON from './modules/static';

// Initiation
const slideShow = new SlideShow({
  container: 'slideshow'
});

const main = new ProductsList({
  container: 'container',
  slideShow
});

Header({
  title: 'Catalog',
  container: 'header'
});

fetch(
  // Hopefully they enable CORS
  'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json'
)
  .then(res => res.json())

  // If the server has gone down for some reason
  // load static version of data file
  .catch(() => staticJSON) // eslint-disable-line no-console
  .then(products => main.setState({ products }));
