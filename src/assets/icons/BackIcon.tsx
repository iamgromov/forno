import { type FC } from 'react';
import type { Icon } from '../../shared/types/icon.interface';

const BackIcon: FC<Icon> = ({ ...props }) => {
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
        stroke='#D3D3D3'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </svg>
  );
};

export default BackIcon;
