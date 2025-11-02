import { type FC, type ReactElement } from 'react';

import { LINKS } from '../../constants';

export const Footer: FC = (): ReactElement => {
  return (
    <div className='footer'>
      <div className='container'>
        <p>© {new Date().getFullYear()}</p>

        <a href={LINKS.REPO} rel='noreferrer' target='_blank'>
          GitHub Repo
        </a>
      </div>
    </div>
  );
};
