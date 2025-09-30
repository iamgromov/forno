import { Suspense, type FC, type ReactElement } from 'react';
import { Loader } from '../index';

const LazyLoader: FC<{ children: ReactElement }> = ({ children }) => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);

export default LazyLoader;
