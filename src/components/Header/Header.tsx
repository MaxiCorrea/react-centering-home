import * as React from "react";
import { useHeaderStyles } from "./Header.styles";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = (props) => {
  const classes = useHeaderStyles();
  return <header className={classes.root}>{props.children}</header>;
};
