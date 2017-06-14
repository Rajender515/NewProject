import React from 'react';
import '../stylesheets/style.css';
import { Grid } from 'react-bootstrap';
import Scroller from '../components/Scroller';
import data from '../data/data.json';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state=data;
    this.addTitle=this.addTitle.bind(this);
    this.removeTitle=this.removeTitle.bind(this);
  }
  removeTitle(title){
    let myList = Object.assign([],this.state.mylist);
    this.setState({
      mylist: myList.filter(d=>{return d.id!=title.id})
    });
  }
  addTitle(title){
    let mylist = Object.assign([],this.state.mylist);
    if(mylist.find((d)=>{return d.id===title.id})){
      return;
    }else{
      mylist.push(title);
      this.setState({
        mylist: Object.assign([],mylist)
      })
    }
  }
  render(){
    return(
      <Grid fluid>
        <Scroller data={this.state.mylist} buttonText="Remove" header="My List" buttonClick={(title)=>{this.removeTitle(title)}}/>
        <Scroller data={this.state.recommendations} buttonText="Add" header="Recommendations" buttonClick={(title)=>{this.addTitle(title)}}/>
      </Grid>
    );
  }
}
