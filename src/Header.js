import React, { Component } from 'react'
import Logo from './Logo.js'
import Name from './Name.js'
import Social from './Social.js'
// import Tag from './Tag.js'


export default class Header extends Component {
    render() {
        return (
            <div>
                <Logo />
                <Name />
                <Social links={[
                    {
                        image: 'fb-icon.png'
                    },
                    {
                        image: 'flic-icon.png'
                    },
                    {
                        image: 'insta-icon.png'
                    },
                    
                ]} />
                </div>
                
                
                
                
            
        )
    }
}
