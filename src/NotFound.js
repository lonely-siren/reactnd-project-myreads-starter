import React from 'react';
import { Link } from 'react-router-dom';
import notFound from './images/BookNotFound.jpg';

const NotFound = () => (
  <div>
    <h1 className="not-found-title">
      These are not the books you are looking for...
    </h1>
    <figure className="not-found-img">
      <img src={notFound} alt="Page Not Found" />
      <figcaption>
        Photo by Hope House Press - Wikicommons
      </figcaption>
    </figure>
    <div className="home-link">
      <Link to="/">Return home and try again</Link>
    </div>
  </div>
);
export default NotFound;
