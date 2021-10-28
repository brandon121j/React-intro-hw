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
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
				<div className="body">
					body
					<div className="box">box</div>
				</div>
				<div className="footer">footer</div>
			</div>
		);
	}
}
