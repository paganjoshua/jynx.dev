import * as React from "react";
import { render } from "react-dom";
import App from "./App";

function init() {
	const root = document.getElementById("root");
	if (!root) throw new Error("No #root found in DOM");
	render(React.createElement(App), root);
}

init()
