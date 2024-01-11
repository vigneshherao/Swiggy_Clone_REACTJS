import React from "react";
import UserClass from "./UserClass";

class HelpClass extends React.Component{
    constructor(){
        super();
        this.state = {
            userData:{
               
            }
        }

        console.log("parent constrctor is called!")
    }
    async componentDidMount(){

        let infoUser = await fetch("https://api.github.com/users/vigneshherao");
        let Data = await infoUser.json();
        this.setState({
            userData:Data
        });

        console.log("parent component did mount is called!")
    }
    componentDidUpdate(){
        console.log("parent component is ready now!");
    }

    componentWillUnmount(){
        console.log("Help is unmount!");
    }
    
    render(){
        console.log("parent render is called!")
        return (
            <div>
                <h2>Help</h2>
                <UserClass name={this.state.userData.name}/>
                <UserClass name={"second"}/>
            </div>
        );
    
    }
}


export default HelpClass;