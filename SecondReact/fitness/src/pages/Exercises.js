import React from 'react';
import ExercisesList from '../components/ExercisesList';
//import Card from "../components/Card";
import Welcome from "../components/Welcome";

class Exercises extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [{
                "id": 1,
                "title": "title1",
                "description": "description1",
                "img": "https://live.staticflickr.com/65535/52477429931_eac595d9e4_w.jpg",
                "leftColor": "#aaaaaa",
                "rightColor": "#bbbbbb"
            },
            {
                "id": 2,
                "title": "title2",
                "description": "description2",
                "img": "https://live.staticflickr.com/65535/52479162727_dd3544c572_n.jpg",
                "leftColor": "#cccccc",
                "rightColor": "#dddddd"
            },
            {
                "id": 3,
                "title": "title3",
                "description": "description3",
                "img": "https://live.staticflickr.com/65535/52480096795_cc92249376_n.jpg",
                "leftColor": "#888888",
                "rightColor": "#999999"
            }
        ]
        };
    }
    render() {
        return(<div>
            <Welcome 
            username="Luciana"
            />  
            <ExercisesList
            exercises={this.state.data}
            />       
          </div>)
    }
}

export default Exercises