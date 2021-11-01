import React, { Component } from 'react'

export class Box extends Component {
    render() {
        return (
            <div className="bodyContainer">
            <div className="box">
                <div className="bodyBoxContainer">
                    <div className="bodyBox">
                        <img src={this.props.pic2} alt="Joe" title="Joe" />
                        <p>
                            In magna dolor, finibus id metus ut, efficitur fringilla
                            massa. Nunc porta interdum libero nec dapibus. Integer
                            pulvinar magna nec elementum blandit. Praesent porta
                            accumsan interdum. Pellentesque condimentum neque tellus,
                            quis lacinia nisl
                        </p>
                    </div>
                    <div className="bodyBox">
                        <img
                            src={this.props.pic3}
                            alt="You aren't that guy pal meme"
                            title="You aren't that guy pal meme"
                        />
                        <p>
                            Nullam nec lectus eu tellus aliquam suscipit id sed metus.
                            Interdum et malesuada fames ac ante ipsum primis in
                            faucibus. Maecenas viverra consectetur ipsum, efficitur
                            pharetra massa. Mauris sit amet pellentesque dui. Integer
                            eleifend dui
                        </p>
                    </div>
                    <div className="bodyBox">
                        <img src={this.props.pic4} alt="Drake" title="Drake album cover" />
                        <p>
                            Nam consequat blandit justo, nec accumsan dolor scelerisque
                            id. Maecenas at augue ac justo posuere dapibus sed a metus.
                            Mauris imperdiet ipsum quis tortor imperdiet, vel
                            consectetur mi ornare. Curabitur elementum est vitae elit
                            aliquam vehicula id cursus ipsum.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Box
