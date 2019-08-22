// Dependencies
import React from "react";
import { storiesOf } from "@storybook/react";
// Locals
import Header from "../components/header/Header";
import { pageCenter } from "./decoratorStyles";

storiesOf("Header", module)
    .addDecorator(story => <div style={pageCenter}>{story()}</div>)
    .add("default", () => <Header />);
