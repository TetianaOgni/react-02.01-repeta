import React, {Component} from "react";

class TodoEditor extends Component{
    state = {
     message: '',
    }
handleChange = event=> {
    this.setState({message: event.currentTarget.value})
}
handleSubmit = event => { 
    event.preventDefault()
    console.log(this.state)
   this.props.onSubmit(this.state.message)
   this.setState({
    message: ''
   })
}

  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <textarea value={this.state.message}
             onChange={this.handleChange}>
            </textarea>
            <button type="submit" >Save</button>
        </form>
    );
  }
    
}
export default TodoEditor