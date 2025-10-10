import { Suspense, type FC, type ReactElement } from 'react';

import { Loader } from '../';

export const LazyLoader: FC<{ children: ReactElement }> = ({ children }): ReactElement => (
  <Suspense fallback={<Loader />}>{children}</Suspense>
);
