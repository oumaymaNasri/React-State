import React, { Component } from 'react'
import './ClassComponent.css'
import me from './img/me.jpg'

export default class classComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            FullName:"Oumayma Nasri",
            bio:"Technology and Design ",
            ImgSrc:"",
            profession:"Full Stack Js",
            show:false,
            input:0
        }
    }

    render() {
        const showFun = () => {
            this.setState({show : !this.state.show});
        }

        const add = () => {
            this.setState({input : !this.state.input +1});
        }

        return (
            <div>
                <div>
                <section id="header">
                    <div className="header container">
                    <div className="nav-bar">
                        <div className="brand">
                        <a href="#hero">
                            <h1><span>D</span>esigner <span>N</span>asri</h1>
                        </a>
                        </div>
                        <div className="nav-list">
                        <div className="hamburger">
                            <div className="bar" />
                        </div>
                        <ul>
                            <li><a href="#hero" data-after="Home">Welcome</a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </section>

                <section id="hero">
                    <div className="hero container">
                    <div>
                        <h1>Hello, <span /></h1>
                        {this.state.show ?(
                        <div>
                        <h1>My Name is {this.state.FullName}<span /></h1>
                        <h1>I Like {this.state.bio} <span /></h1>
                        <h1>I Am {this.state.profession} <span /></h1>
                        <div className="col-left">
                        <div className="about-img">
                            <img src={me} alt="me"/>
                        </div>
                    </div>
                        </div>):null}
                        <button onClick={showFun}>click me</button> <br/>

                        <a href="" type="button" class="cta"> <h2> - {this.state.input} + </h2> </a> <br/>

                        <button onClick={add}>Plus</button>


                    </div>
    </div>
  </section>
  </div>
  </div>
  )
}
}
