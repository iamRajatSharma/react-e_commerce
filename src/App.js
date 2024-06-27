import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./pages/home"
import Header from "./components/header"

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" component={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
