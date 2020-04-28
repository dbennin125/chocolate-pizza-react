import React, { Component } from 'react'
import Name from './Name.js'

export default class Description extends Component {
    render() {
        return (
            <div>
                {
              this.props.description.map((sentence) => {
                return <p 
                    text={ sentence.text }
                    
                    />
              })
    }       
            </div>
        )
    }
}
