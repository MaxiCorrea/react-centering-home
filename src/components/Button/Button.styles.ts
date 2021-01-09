import { createUseStyles } from "react-jss";

export const useButtonStyles = createUseStyles({
  root: {
    display : "inline-block",
    backgroundColor : "#9ede24",
    fontSize : ".9rem", 
    lineHeight : 1,
    color : "#fff",
    textTransform : "uppercase",
    textDecoration : "none",
    border : ".1rem solid transparent",
    padding : "1.2rem 2.6rem",
    margin : ".3rem",
    borderRadius : "2rem",
    cursor : "pointer",
  },
});
