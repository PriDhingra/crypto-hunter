import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Coinpage from './pages/Coinpage';
import Homepage from './pages/Homepage';
import { makeStyles } from '@material-ui/core';
import Alert from './components/alert';

const App = () => {

	const useStyles = makeStyles(() => ({
		App: {
			backgroundColor: "#14161a",
			color: "white",
			minHeight: "100vh"
		}
	}));

	const classes = useStyles();

  	return (
    	<BrowserRouter>
			<div className={classes.App}>
				<Header />	
				<Routes>
					<Route path="/" element={<Homepage />} exact /> 
			  		<Route path="/coins/:id" element={<Coinpage />} exact /> 
				</Routes>  	
			</div>
			<Alert />	
	    </BrowserRouter>
  	);
}

export default App;
