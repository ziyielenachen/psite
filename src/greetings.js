import React, { Component } from 'react';
import './greetings.css';
import profile from "./images/profile.png";

class Greetings extends Component {
    render() {
        return(
            <body className="greeting">
                    <div className="pic">
                    <a target="_blank"><img className="pic" src={profile} alt="profile"/></a>
                    </div>
                     <div className="g1">
                     <p>
                        "
                    </p>
                     <p>
                        Hi there!
                    </p>
                    <p>
                        Thanks so much for stopping by today.
                    </p>
                    </div>
                    <div className="g2">
                    <p>
                        My name is Elena, and I am a second-year Electrical 
                        Engineering and Computer Science student at UC Berkeley. 
                        I chose this path because I had often found myself debugging 
                        tirelessly till 3 in the morning. As an aspiring engineer, 
                        I feel empowered everyday to tackle problems in the world. 
                        
                        In my free time, you can always catch me trying out a new dish at 
                        an exotic restaurant or strolling down the street of a different country. 
                        
                        Feel free to with me at anytime! I always enjoy an engaging conversation 
                        accompannied by a fresh cup of latte :)    
                    </p>
                     </div>
            </body>
        )
    }
}

export default Greetings;