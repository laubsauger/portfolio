import React from 'react';

type Props = {
  size?: string
}

const LoadingSpinner = (props:Props) => {
  const { size } = props;

  return (
    <div className="w-full text-center">
      {/*<Spinner animation="border" style={{ width: '5rem', height: '5rem' }} />*/}
      Loading...
    </div>
  )
};

export default LoadingSpinner;