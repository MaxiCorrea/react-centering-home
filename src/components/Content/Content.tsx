import * as React from "react";
import { useContentStyles } from "./Content.styles";

interface ContentProps {
  children: React.ReactNode;
}

export const Content: React.FC<ContentProps> = (props) => {
  const classes = useContentStyles();
  return <div className={classes.root}>{props.children}</div>;
};
