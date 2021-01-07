import React from "react";
import "./pink-button.scss";

export type IPinkButtonProps = {
  fileUrl: string | null;
  title: string;
};

const PinkButton: React.FC<IPinkButtonProps> = ({ fileUrl, title }) => {
  return (
    <a href={fileUrl} target="_blank" className="pink-button">
      <div className="btn-dot" />
      <div className="btn-dot" />
      <div className="btn-dot" />
      <div className="btn-dot" />
      <div className="btn-dot" />
      <div className="btn-title">{title ? title : "Text Title"}</div>
    </a>
  );
};

export { PinkButton };
