import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

export default class App extends Component {
	render() {
		return (
			<div className="container">
				<div className="header">
					<h1>Brandon Johnson</h1>
					<h3>header</h3>
				</div>
				<div className="sidebar">
					<h3>Sidebar</h3>
					<ul>
						<li>
							<button>Gray</button>
						</li>
						<li>
							<button>Blue</button>
						</li>
						<li>
							<button>Red</button>
						</li>
					</ul>
				</div>
				<div className="body">
					<h1>body</h1>
          <div className="bodyContainer">
            <div className="bodyBox"></div>
            <div className="bodyBox"></div>
            <div className="bodyBox"></div>
          </div>
					<div className="box">box</div>
				</div>
				<div className="footer">footer</div>
			</div>
		);
	}
}
