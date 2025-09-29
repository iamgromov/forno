import { type FC, type ReactElement } from 'react';

const Footer: FC = (): ReactElement => {
  return (
    <div className='footer'>
      <div className='container'>
        <p>© {new Date().getFullYear()}</p>

        <a href='https://github.com/iamgromov/forno' rel='noreferrer' target='_blank'>
          GitHub Repo
        </a>
      </div>
    </div>
  );
};

export default Footer;
