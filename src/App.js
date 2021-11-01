import React, { Component } from 'react';
import pic1 from './components/mooninites.png';
import pic2 from './components/IMG_4232.jpg';
import pic3 from './components/IMG_4263.jpg';
import pic4 from './components/IMG_4005.jpg';
import './App.css';
import { Header } from './common/Header';
import Sidebar from './common/Sidebar';
import Body from './common/Body';
import Footer from './common/Footer';

export default class App extends Component {
	state = {
		currentColor: '',
	};

	clickHandler = (e) => {
		this.setState({
			currentColor: e.target.value,
		});
		console.log(this.state.currentColor);
	};

	render() {
		return (
			<div className="container">
				<Header />
				<Sidebar currentColor={this.state.currentColor} clickHandler={this.clickHandler} />
				<Body pic1={pic1} pic2={pic2} pic3={pic3} pic4={pic4}/>
				<Footer/>
			</div>
		);
	}
}
