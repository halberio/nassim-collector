import React from "react";
import "./pink-button.scss";

export type IPinkButtonProps = {
  fileUrl: string | null;
  title: string;
};

const PinkButton: React.FC<IPinkButtonProps> = ({ fileUrl, title }) => {
  return (
    <a
      onClick={() => {
        //@ts-ignore
        if (window && window.fbq) {
          //@ts-ignore
          window.fbq("track", "Purchase");
        }
      }}
      href={fileUrl}
      target="_blank"
      className="pink-button"
    >
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
