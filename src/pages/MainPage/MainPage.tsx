import * as React from "react";
import { Button } from "../../components/Button/Button";
import { Content } from "../../components/Content/Content";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Heading } from "../../components/Heading/Heading";

export const MainPage: React.FC = () => {
  return (
    <>
      <Header>
        <Content>
          <Heading text={"React + Flexbox + JSS"} />
          <Button
            href={"https://github.com/MaxiCorrea"}
            caption={"View More"}
          />
        </Content>
      </Header>
      <Footer />
    </>
  );
};
