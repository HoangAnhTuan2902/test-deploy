//import Home & Cart components in App.js
import Home from './Pages/Home/Home';
import Card from './Pages/Card/Card';
//import BrowserRouter, Router, Route from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
	return (
		<div className='app'>
			<BrowserRouter>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/card'
						element={<Card />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
