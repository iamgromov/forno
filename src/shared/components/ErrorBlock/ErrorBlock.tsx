import { type FC, type ReactElement } from 'react';

const ErrorBlock: FC = (): ReactElement => {
  return (
    <div className='content__error-block'>
      <h2>
        Произошла ошибка <span>😔</span>
      </h2>
      <p>
        К сожалению, не удалось получить питсы.
        <br />
        Попробуйте повторить попытку позже.
      </p>
    </div>
  );
};

export default ErrorBlock;
