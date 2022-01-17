import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import './Breadcumb.css';

const Breadcumb = () => {
  const { pathname: path } = useLocation();

  let routes = path.split('/');

  routes = routes.map((r, i) => {
    if (i === 0) {
      return { title: 'inicio', path: '/' };
    } else {
      let route = '';
      for (let j = 1; j < i; j++) {
        route += '/' + routes[j];
      }
      route += '/' + r;
      return { title: r.replaceAll('-', ' '), path: route };
    }
  });

  if (path === '/') {
    routes = [{ title: 'inicio', path: '/' }];
  }

  return (
    <div className="breadcumb">
      {routes.map((r, i) =>
        r.path === path ? (
          <span key={i} className="nav-active">
            {r.title}
          </span>
        ) : (
          <Link key={i} className="nav-item" to={r.path}>
            {r.title}
          </Link>
        )
      )}
    </div>
  );
};

export default Breadcumb;
