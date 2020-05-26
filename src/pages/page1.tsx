import React, { useEffect } from 'react';

type AppProps = {
  message: string;
};

const Page1 = ({ message }: AppProps) => {
  useEffect(() => {
    setTimeout(() => {
      /* do stuff */
    }, 100);
  });
  return <div>{message}</div>;
};

export default Page1;
