import React, {Component} from 'react'
import {Grid, Cell} from "react-mdl";

class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://cdn0.iconfinder.com/data/icons/user-pictures/100/malecostume-512.png"
                             alt="avatar"
                             className="avatar-img"/>

                             <div className="banner-text">
                                 <h1>front-end developer</h1>
                                 <hr/>
                                 <p>HTML/CSS | Bootstrap | JS | React | React Native</p>
                                 <div className="social-links">
                                     <a href="http://google.com" target="_blank">
                                         <i className="fa fa-linkedin-square" aria-hidden="true"/>
                                     </a>

                                     <a href="http://google.com" target="_blank">
                                         <i className="fa fa-github-square" aria-hidden="true"/>
                                     </a>
                                 </div>
                             </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;