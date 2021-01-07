import React from "react";
import "./loading-indicator.css";
export type ILoadingIndicatorProps = {};

const LoadingIndicator: React.FC<ILoadingIndicatorProps> = ({}) => {
  return (
    <div className="lds-spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export { LoadingIndicator };
