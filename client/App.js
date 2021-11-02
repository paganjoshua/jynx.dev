import * as React from "react"
import Arrows from "./components/Arrows.jsx";

const App = () => {
	console.log("RENDER App");
	return (
		<div className={"canvas-wrapper"} style={{width: '100%', height: '100%' }} >
			<Arrows />
		</div>
	)
}

export default App;
