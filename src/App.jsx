//import Home & Cart components in App.js
import Home from './Pages/Home/Home';
import Card from './Pages/Card/Card';
//import BrowserRouter, Router, Route from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
						path='/test-deploy'
						element={<Home />}
					/>
					<Route
						path='/test-deploy/card'
						element={<Card />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
