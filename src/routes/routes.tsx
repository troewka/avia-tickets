import React from 'react';
import { Routes, Route } from 'react-router-dom';

import { FlightsPage } from '../pages/FlightsPage';
import { Cart } from '../pages/Cart';
import { FlightDetailsPage } from '../pages/FlightDetailsPage';
import { MainPage } from '../pages/MainPage';

export const AppRoutes = () => {
  const navigationRoutes = [
    { path: '', element: <FlightsPage /> },
    { path: '/flights/:id', element: <FlightDetailsPage /> },
    { path: '/cart', element: <Cart /> },
  ];

  return (
    <Routes>
      <Route path='/' element={<MainPage />}>
        {navigationRoutes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
};
