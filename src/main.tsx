/*!
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import Northstar from "./AppNorthstar";
import V9 from "./AppV9";
import V9WithoutIcon from "./AppV9WithoutIcon";

ReactDOM.render(
    <React.StrictMode>
        <V9 />
    </React.StrictMode>,
    document.getElementById("root")
);
