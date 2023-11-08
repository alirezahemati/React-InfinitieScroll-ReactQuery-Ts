import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import BottomNav from "./BottomNav";

type Props = {
  children?: ReactNode;
};

const MainLayout = (props: Props) => {
  const { children } = props;
  return (
    <div className="w-full h-full flex flex-col justify-start items-stretch">
      <div className="flex-1">{children || <Outlet />}</div>
      <BottomNav />
    </div>
  );
};

export default MainLayout;
