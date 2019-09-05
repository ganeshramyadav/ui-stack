import * as React from "react";
import * as ReactDOM from "react-dom";

import { Showcase } from "./showcase/Showcase";

ReactDOM.render(
    <Showcase compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);