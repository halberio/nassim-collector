import React from "react";
import "antd/dist/antd.css";
import { useSelector } from "react-redux";
import { RootState } from "./redux/reducers";
import Routes from "./routes/routes";
export interface IAppProps {}

const App: React.FC<IAppProps> = ({}) => {
  const { isLoadingUser, isLoggedIn, user } = useSelector(
    (state: RootState) => state.authReducer
  );
  return (
    <div className="app-layout">
      <Routes />
    </div>
  );
};

export { App };
