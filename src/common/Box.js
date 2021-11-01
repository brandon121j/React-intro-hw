import React, { Component } from 'react'

export class Box extends Component {
    render() {
        return (
            <div className="bodyContainer">
            <div className="box">
                <div className="bodyBoxContainer">
                    <div className="bodyBox">
                        <img src={this.props.pic} alt="Joe" title="Joe" />
                        <p>
                            In magna dolor, finibus id metus ut, efficitur fringilla
                            massa. Nunc porta interdum libero nec dapibus. Integer
                            pulvinar magna nec elementum blandit. Praesent porta
                            accumsan interdum. Pellentesque condimentum neque tellus,
                            quis lacinia nisl
                        </p>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default Box
