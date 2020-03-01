import React, {Component} from 'react';

class ErrorBoundry extends Component{
    constructor(props){
        super(props);
        this.state={
            hasError: false
        }
    }

    //Sürekli false döndürüyor nasıl true ya çeviririz

    componentDidCatch(error, info){
        this.setState({hasError:true})
    }

    render(){
        
        if(this.state.hasError){
            return <h1>OOppppss. That is not good</h1>
        }
        return this.props.children
    }
}

export default ErrorBoundry;