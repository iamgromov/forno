import { type FC, type ReactElement } from 'react';

import type { IconProps } from 'shared/types';

export const BackIcon: FC<IconProps> = ({ ...props }): ReactElement => {
  return (
    <svg
      width='8'
      height='14'
      viewBox='0 0 8 14'
      fill='none'
      {...props}
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M7 13L1 6.93015L6.86175 1'
        stroke='white'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};
