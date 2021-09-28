import * as React from "react"
import Square from "./components/Square";

const App = () => {
	console.log("RENDER App");
	return (
		<div style={{width: '100%', height: '100%' }} >
			<Square />
		</div>
	)
}

export default App;
