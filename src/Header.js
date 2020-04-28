import React, { Component } from 'react'
import Logo from './Logo.js'
import Name from './Name.js'
// import Tag from './Tag.js'


export default class Header extends Component {
    render() {
        return (
            <div>
                <Logo />
                
                <Name />
                {/* <Tag /> */}
                {/* <Social /> */}
            </div>
        )
    }
}
