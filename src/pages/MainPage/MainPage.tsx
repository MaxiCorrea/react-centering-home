import * as React from "react";
import { Button } from "../../components/Button/Button";
import { Header } from "../../components/Header/Header";
import { Heading } from "../../components/Heading/Heading";

export const MainPage: React.FC = () => {
  return (
    <Header>
      <Heading text={"React + Flexbox + JSS"} />
      <Button href={"https://github.com/MaxiCorrea"} caption={"View More"} />
    </Header>
  );
};
