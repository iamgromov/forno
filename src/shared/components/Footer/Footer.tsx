import { type FC, type ReactElement } from 'react';

import { LINKS } from '../../constants';

export const Footer: FC = (): ReactElement => {
  return (
    <div className='footer'>
      <div className='container'>
        <a href={LINKS.TELEGRAM} rel='noreferrer' target='_blank'>
          @iamgromov / {new Date().getFullYear()}
        </a>

        <a href={LINKS.REPO} rel='noreferrer' target='_blank'>
          GitHub Repo
        </a>
      </div>
    </div>
  );
};
