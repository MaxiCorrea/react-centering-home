import * as React from "react";
import { useButtonStyles } from "./Button.styles";

interface ButtonProps {
  href : string,
  caption: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const classes = useButtonStyles();
  return (
    <a href={props.href} className={classes.root}>
      {props.caption}
    </a>
  );
};
