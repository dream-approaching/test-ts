import React from 'react';

type AppProps = {
  message: string;
};

function Page1({ message }: AppProps) {
  return <div className="App">{message}</div>;
}

export default Page1;
