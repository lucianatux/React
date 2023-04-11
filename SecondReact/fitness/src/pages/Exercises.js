import React from 'react';
import Card from "../components/Card";
import Welcome from "../components/Welcome";

class Exercises extends React.Component {
    render() {
        return(<div>
            <Welcome 
            username="Luciana"
            />  
            <Card 
          title="trertg"
          description="sfrsret"
          img="https://live.staticflickr.com/65535/52477527455_50ecea5949_z.jpg"
          leftColor="#a3a3a3"
          rightColor="#fafafa"
        />  
          </div>)
    }
}

export default Exercises