import React, { ReactNode } from "react";

type Props = {
  // children: ReactNode;
};

const Home = (props: Props) => {
  // const { children } = props;

  return (
    <div className="flex flex-col justify-center items-center p-2 md:p-10 max-w-md">
      <h1 className="text-3xl text-violet-700 dark:text-white transition duration-500 font-bold capitalize mb-5">
        Home
      </h1>
    </div>
  );
};

export default Home;
