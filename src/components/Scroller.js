import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

export default class Scroller extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      data:[]
    };
  }
  componentWillMount(){
    this.setState({
      data: this.props.data
    });
  }
  componentWillReceiveProps(nextProps){
    this.setState({
      data: nextProps.data
    })
  }
  render(){
    return(
      <Row>
        <Col lg={12} md={12} sm={12}>
          <label htmlFor="tops">{this.props.header}</label>
          <ul className="horizon hor" id="tops">
							{
                this.state.data.length?this.state.data.map((d,i)=>{
                  return(
                    <li key={i}>
      								<div className="holder" tabIndex="1">
      									<div className="clip">
      										<img height="100%" src={d.img}/>
      									</div>
      									<button onClick={()=>{this.props.buttonClick(d)}} className="button button-primary" data-toggle="tooltip" title="Add to favourites">
      										{this.props.buttonText}
      									</button>
      								</div>
      							</li>
                  )
                }):<div className="empty-label">Your List is Empty!</div>
              }
						</ul>
        </Col>
      </Row>
    );
  }
}

Scroller.propTypes = {
  header: PropTypes.string.isRequired,
  data: PropTypes.array,
  buttonText: PropTypes.string,
  buttonClick: PropTypes.func
}
