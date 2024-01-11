import React from "react";


class UserClass extends React.Component{
    constructor(props){
        super(props);
        let {name} = this.props;
        console.log(`${name} child constructor is called`)
        this.state={
            count:0
        }
    }
    
    componentDidMount(){
        debugger;
        this.setState({
            count:this.state.count + 1,
        })
        console.log(`${this.state.count} child component did mount`);
        if(this.state.name){
            console.log("it is working again again")
        }
    }
    

    componentDidUpdate(){
        console.log(`${name} child is updated!` );
    }

    render(){
        debugger;
        console.log(`${this.props.name} child render is called`)
        let {name} = this.props;
        return (
            <>
            <h2>{name}</h2>
            <p>My name is Vignesh!</p>
            </>
        )
    }
}

export default UserClass;