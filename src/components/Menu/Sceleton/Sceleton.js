import React from "react";
import ContentLoader from "react-content-loader";
import style from "./Sceleton.module.css";

const Sceleton = (props) => (
  <ContentLoader
    speed={2}
    width={278}
    height={372}
    viewBox="0 0 278 372"
    backgroundColor="#f5f5f5"
    foregroundColor="#e0e0e0"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="278" height="224" />
    <rect x="25" y="272" rx="0" ry="0" width="79" height="22" />
    <rect x="218" y="239" rx="0" ry="0" width="43" height="22" />
    <rect x="25" y="239" rx="0" ry="0" width="93" height="22" />
    <rect x="25" y="307" rx="0" ry="0" width="228" height="30" />
  </ContentLoader>
);

export default Sceleton;
