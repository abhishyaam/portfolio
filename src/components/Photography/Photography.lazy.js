import React, { lazy, Suspense } from 'react';

const LazyPhotography = lazy(() => import('./Photography'));

const Photography = props => (
  <Suspense fallback={null}>
    <LazyPhotography {...props} />
  </Suspense>
);

export default Photography;
