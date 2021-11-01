import React, { Component } from 'react';
import Box from './Box';

export class Body extends Component {
	render() {
		return (
			<div className="body">
				<div className="bodyTopContainer">
					<img src={this.props.pic1} alt="Mooninite" title="Mooninites" />
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis
						turpis turpis. Nam hendrerit, nulla nec faucibus posuere, mauris
						nulla venenatis orci, vel ultrices massa orci eget magna. Maecenas
						ullamcorper augue maximus neque posuere bibendum. Nullam ligula
						tortor, scelerisque sit amet purus sit amet, lacinia molestie nunc.
						Sed ac nibh vitae est ultricies placerat. Ut et enim dapibus,
						finibus ipsum nec, dignissim quam. Nulla rutrum, nulla quis
						porttitor ornare, orci nisi vehicula erat, vel rhoncus quam nisl eu
						orci. Ut eu dapibus nunc. Cras vitae dignissim augue. Etiam faucibus
						accumsan ullamcorper.
					</p>
				</div>
				<div className="horizontalAllign">
					<Box pic={this.props.pic2} />
					<Box pic={this.props.pic3} />
					<Box pic={this.props.pic4} />
				</div>
			</div>
		);
	}
}

export default Body;
