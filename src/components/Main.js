import React, { Component } from 'react'
import FadeIn from 'react-fade-in';
import BuyForm from './BuyForm';
import SellForm from './SellForm';

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentForm: 'buy'
    }
  }
  render() {
      let content
      if(this.state.currentForm === 'buy'){
          content = <BuyForm
          ethBalance={this.props.ethBalance}
          tokenBalance={this.props.tokenBalance}
          buyTokens={this.props.buyTokens}
          />
      } else {
          content = <SellForm 
          ethBalance={this.props.ethBalance}
          tokenBalance={this.props.tokenBalance}
          sellTokens={this.props.sellTokens}
          />
      }
    return (
        <FadeIn>
      <div id="content" className="mt-3">
<div className="d-flex justify-content-between mb-3">
    <button className="btn btn-primary"
    onClick={(event) => {
        this.setState({ currentForm: 'buy' })
    }}
    >
        Buy
    </button>
    <span><img src="/diamonds.png" width="220" height="42" className="m-0"></img></span>
    <button className="btn btn-primary"
    onClick={(event) => {
        this.setState({ currentForm: 'sell' })
    }}
    >
        Sell
    </button>
</div>


        <div className="card mb-4" >
          <div className="card-body">
            {content}
          </div>
        </div>
      </div>
     </FadeIn>
    );
  }
}

export default Main;
