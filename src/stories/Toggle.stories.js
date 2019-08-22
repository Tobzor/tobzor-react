// Dependencies
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
// Locals
import Toggle from "../components/toggle/Toggle";
import DarkModeToggle from "../components/toggle/DarkModeToggle.tsx/DarkModeToggle";
import { pageCenter } from "./decoratorStyles";

const actions = {
    onChange: action("Toggle toggled")
};

storiesOf("Toggle", module)
    .addDecorator(story => <div style={pageCenter}>{story()}</div>)
    .add("default", () => <Toggle {...actions} />)
    .add("square", () => <Toggle shape="square" {...actions} />)
    .add("DarkModeToggle", () => <DarkModeToggle />);
