import React, { lazy, Suspense } from 'react';

const Lazylanding = lazy(() => import('./landing'));

const landing = props => (
  <Suspense fallback={null}>
    <Lazylanding {...props} />
  </Suspense>
);

export default landing;
