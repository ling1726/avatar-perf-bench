/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import Northstar from "./AppNorthstar";
import V9 from "./AppV9";

ReactDOM.render(
    <React.StrictMode>
        <Northstar />
    </React.StrictMode>,
    document.getElementById("root")
);
