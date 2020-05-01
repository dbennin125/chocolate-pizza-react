import React, { Component } from 'react'

export default class BodyImage extends Component {
    render() {
        return (
            <div>
               <img src={this.props.image}>
                    </img>
            </div>
        )
    }
}
