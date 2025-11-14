import { type FC, type ReactElement } from 'react';

import { LINKS } from 'shared/constants';
import { CustomLink } from 'shared/ui';

import styles from './Footer.module.scss';

export const Footer: FC = (): ReactElement => {
  return (
    <div className={styles.footer}>
      <div className={styles.wrapper}>
        <CustomLink href={LINKS.TELEGRAM} title={`@iamgromov / ${new Date().getFullYear()}`} />

        <CustomLink href={LINKS.REPO} title='GitHub Repo' />
      </div>
    </div>
  );
};
