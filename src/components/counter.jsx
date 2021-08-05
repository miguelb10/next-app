import React, {Component} from 'react';

class Counter extends Component {
  state = {
    count: 100,
    tags: []
  };

  RenderTags(){
    if(this.state.tags.length === 0) return <p>they are no tags</p>;
    return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
  }

  /*constructor(){
    super();
    this.handelIncrement = this.handelIncrement.bind(this);
  }*/

  handelIncrement = () =>{
    console.log('Increment Clicked!', this);
    this.setState({
      count: this.state.count + 1
    })
  }

  render(){
    return (
      <React.Fragment>
        <span className={this.GetClass()}> {this.Change()} </span>
        <button onClick={this.handelIncrement} className="btn btn-primary">Increment</button>
        {this.RenderTags()}
      </React.Fragment> 
    )
  }

  GetClass(){
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  Change(){
    return this.state.count === 0 ? 'Zero' : this.state.count;
  }
}

export default Counter;