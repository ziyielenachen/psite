import React, { Component } from 'react';


class Work extends Component {
    render() {
        return(
            <body className="home-background">
                    <div className="p5">
                    Built a fun random decision generator using P5 and Javascript (for indecisive
                    people like me ;) ).
                    </div>
                    <div className="swe">
                        <p>
                    Coordinated with DPR Construction company in creating a convenient work 
                    light system with logistics tracking ability to enhance worksite efficiency.
                    With a team of 10, designed and built a system consisting of a rechargeable 
                    work light, portable charging station, and a smartphone application that 
                    showed real-time locations and energy usage.
                        </p>
                    </div>
                    <div className="data8">
                        <p>
                        Developed a k-nearest-neighbors classier using Python on Jupyter.
                        The classifier can guess whether a movie belongs to romance or 
                        action genre using only the numbers of times words appear in the 
                        movies's screenplay.
                        Tested the classifier on data and showed an accuracy of 73%.
                        </p>
                    </div>
                     <div className="heatingpad">
                     <p>
                     Designed and built several prototypes of a heating pad powered by a hand-cranked
                      generator to help the homeless in New York survive cold winters.
                      Placed 3rd in the Design Contest at my high school.
                    </p>
                     </div>
            </body>
        )
    }
}

export default Work;