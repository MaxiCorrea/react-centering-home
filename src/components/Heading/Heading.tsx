import * as React from "react";
import { useHeadingStyles } from "./Heading.styles";

interface HeadingProps {
  text: string;
}

export const Heading: React.FC<HeadingProps> = (props) => {
  const classes = useHeadingStyles();
  return <div className={classes.root}>{props.text}</div>;
};
