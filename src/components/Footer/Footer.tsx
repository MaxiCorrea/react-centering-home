import * as React from "react";
import { useFooterStyles } from "./Footer.styles";

export const Footer: React.FC = () => {
  const classes = useFooterStyles();
  return (
    <footer className={classes.root}>
      &copy;Copyright {new Date().getFullYear()} developing by Maximiliano
      Correa
    </footer>
  );
};
