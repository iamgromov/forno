import ContentLoader from 'react-content-loader';

const CardSkeleton = () => (
  <ContentLoader
    className='pizza-block'
    speed={2}
    width={280}
    height={465}
    viewBox='0 0 280 465'
    backgroundColor='#f3f3f3'
    foregroundColor='#ecebeb'
  >
    <circle
      cx='140'
      cy='120'
      r='120'
    />
    <rect
      x='20'
      y='270'
      rx='16'
      ry='16'
      width='240'
      height='23'
    />
    <rect
      x='0'
      y='310'
      rx='16'
      ry='16'
      width='280'
      height='90'
    />
    <rect
      x='0'
      y='425'
      rx='16'
      ry='16'
      width='90'
      height='27'
    />
    <rect
      x='130'
      y='420'
      rx='16'
      ry='16'
      width='150'
      height='40'
    />
  </ContentLoader>
);

export default CardSkeleton;
