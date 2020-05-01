import React, { Component } from 'react'
import Links from './links.js'

export default class Social extends Component {
    render() {
        return (
                <div>
                    {
                    this.props.links.map((linkItems) => {
                        return <Links
                            image={ linkItems.image }
                        />
                        



                    })
                    }
                </div>
            
        )
    }
}
