import React, { Component } from 'react'

export default class Title extends Component {
    render() {
        return (
            <section>
                <div>
                    <p>
                        Chocolate Pizza
                    </p>
                    <p>
                        posted on 15 dec 2013 / desserts
                    </p>
                </div>
                <span>
                    <img src='print-icon.png'
                    alt ='print-icon'/>
                    <p>print</p>
                </span>
            </section>
        )
    }
}
