import { type FC, type ReactElement } from 'react';

import { LINKS } from 'shared/constants';

import styles from './Footer.module.scss';

export const Footer: FC = (): ReactElement => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <a href={LINKS.TELEGRAM} rel='noopener noreferrer' target='_blank'>
          @iamgromov / {new Date().getFullYear()}
        </a>

        <a href={LINKS.REPO} rel='noopener noreferrer' target='_blank'>
          GitHub Repo
        </a>
      </div>
    </div>
  );
};
