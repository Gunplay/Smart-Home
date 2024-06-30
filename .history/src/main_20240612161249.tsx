import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './css/style.css';
import { Router } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Router></Router>
		<App />
	</React.StrictMode>
);
