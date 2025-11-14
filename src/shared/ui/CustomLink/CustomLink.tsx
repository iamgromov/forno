import type { FC, ReactElement } from 'react';

import type { CustomLinkProps } from 'shared/types';

export const CustomLink: FC<CustomLinkProps> = ({ href, title }): ReactElement => {
  return (
    <a href={href} rel='noopener noreferrer' target='_blank'>
      {title}
    </a>
  );
};
