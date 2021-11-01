import React, { Component } from 'react';

export default class Sidebar extends Component {
	render() {
		return (
			<div
				className="sidebar"
				style={{ backgroundColor: this.props.currentColor }}
			>
				<ul>
					<li>
						<button id="buttonGreen" onClick={this.props.clickHandler} value="green">
							Green
						</button>
					</li>
					<li>
						<button id="buttonBlue" onClick={this.props.clickHandler} value="blue">
							Blue
						</button>
					</li>
					<li>
						<button id="buttonRed" onClick={this.props.clickHandler} value="red">
							Red
						</button>
					</li>
				</ul>
			</div>
		);
	}
}
