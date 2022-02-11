import React from "react";
import GeneralObserver from "@components/GeneralObserver";

const CodePen = ({
  codepenID,
  height = 500,
  tabs = "result",
  clickToLoad = false,
  editable = true,
  theme,
  className,
  ...props
}) => (
  <GeneralObserver height={height} className={className}>
    <iframe
      title={`codePen-${codepenID}`}
      className="codepen-mdx-embed"
      height={height}
      style={{
        width: "100%",
        marginBottom: "1.5rem",
      }}
      scrolling="no"
      src={`https://codepen.io/team/codepen/embed${
        clickToLoad ? "/preview" : ""
      }/${codepenID}?height=265&theme-id=${theme}&default-tab=${tabs}${
        editable ? "&editable=true" : ""
      }`}
      frameBorder="no"
      allowFullScreen
    />
  </GeneralObserver>
);

export default CodePen;
