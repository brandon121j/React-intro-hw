import React, { Component } from "react";
import pic1 from "./components/mooninites.png";
import pic2 from "./components/IMG_4232.jpg";
import pic3 from "./components/IMG_4263.jpg";
import pic4 from "./components/IMG_4005.jpg";
import "./App.css";

export default class App extends Component {

  state = {
    currentColor: ""
  }

  clickHandler = (e) => {
    this.setState({
      currentColor: e.target.value
    })
    console.log(this.state.currentColor)
  }

	render() {
		return (
            <div className="container">
				<div className="header">
					<h1>Brandon Johnson</h1>
				</div>
				<div className="sidebar"
          style={{ backgroundColor: this.state.currentColor }}
        >
					<ul>
						<li>
							<button id="buttonGreen" onClick={this.clickHandler} value="green">Green</button>
						</li>
						<li>
							<button id="buttonBlue" onClick={this.clickHandler} value="blue">Blue</button>
						</li>
						<li>
							<button id="buttonRed" onClick={this.clickHandler} value="red">Red</button>
						</li>
					</ul>
				</div>
				<div className="body">
					<div className="bodyTopContainer">
						<img src={pic1} alt="Mooninite" title="Mooninites" />
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quis turpis
							turpis. Nam hendrerit, nulla nec faucibus posuere, mauris nulla venenatis
							orci, vel ultrices massa orci eget magna. Maecenas ullamcorper augue
							maximus neque posuere bibendum. Nullam ligula tortor, scelerisque sit
							amet purus sit amet, lacinia molestie nunc. Sed ac nibh vitae est
							ultricies placerat. Ut et enim dapibus, finibus ipsum nec, dignissim
							quam. Nulla rutrum, nulla quis porttitor ornare, orci nisi vehicula erat,
							vel rhoncus quam nisl eu orci. Ut eu dapibus nunc. Cras vitae dignissim
							augue. Etiam faucibus accumsan ullamcorper.
						</p>
					</div>
					<div className="bodyContainer">
						
					<div className="box">
          <div className="bodyBoxContainer">
							<div className="bodyBox">
								<img src={pic2} alt="Joe" title="Joe" />
								<p>
									In magna dolor, finibus id metus ut, efficitur fringilla massa. Nunc
									porta interdum libero nec dapibus. Integer pulvinar magna nec elementum
									blandit. Praesent porta accumsan interdum. Pellentesque condimentum
									neque tellus, quis lacinia nisl
								</p>
							</div>
							<div className="bodyBox">
								<img src={pic3} alt="You aren't that guy pal meme" title="You aren't that guy pal meme" />
								<p>
									Nullam nec lectus eu tellus aliquam suscipit id sed metus. Interdum et
									malesuada fames ac ante ipsum primis in faucibus. Maecenas viverra
									consectetur ipsum, efficitur pharetra massa. Mauris sit amet
									pellentesque dui. Integer eleifend dui 
								</p>
							</div>
							<div className="bodyBox">
								<img src={pic4} alt="Drake" title="Drake album cover"/>
								<p>
									Nam consequat blandit justo, nec accumsan dolor scelerisque id.
									Maecenas at augue ac justo posuere dapibus sed a metus. Mauris
									imperdiet ipsum quis tortor imperdiet, vel consectetur mi ornare.
									Curabitur elementum est vitae elit aliquam vehicula id cursus ipsum.
								</p>
							</div>
						</div>
					</div>
          </div>
				</div>
				<div className="footer">
          <p>&copy;Copyright </p>
          <p>Brandon Johnson</p>
				</div>
			</div>
        );
	}
}
