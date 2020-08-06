import React, { Component } from 'react'
import FadeIn from 'react-fade-in';

class BuyForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      output: '0'
    }
  }
  render() {
    return (
        <FadeIn>
        <form className="mb-3" onSubmit={(event) => {
              event.preventDefault()
              let etherAmount
              etherAmount = this.input.value.toString()
              etherAmount = window.web3.utils.toWei(etherAmount, 'Ether') 
              this.props.buyTokens(etherAmount) 
            }}>
            <div>
              <label className="float-left"><b>Input</b></label>
              <span className="float-right"><b>
                Balance: {window.web3.utils.fromWei(this.props.ethBalance, 'Ether')} </b>
              </span>
            </div>
            <div className="input-group mb-4">
              <input
                type="text"
                onChange={(event) => {
                  const etherAmount = this.input.value.toString()
                  this.setState({
                    output: etherAmount * 100
                  })
                }}
                ref={(input) => { this.input = input }}
                className="form-control form-control-lg"
                placeholder="0"
                required />
              <div className="input-group-append">
                <div className="input-group-text">
                  <img src="/ethereumlogo.png" height='28' width="18" alt=""/>
                  &nbsp;&nbsp;&nbsp; ETH
                </div>
              </div>
            </div>
            <div>
              <label className="float-left"><b>Output</b></label>
              <span className="float-right"><b>
                Balance: {window.web3.utils.fromWei(this.props.tokenBalance, 'Ether')} </b>
              </span>
            </div>
            <div className="input-group mb-2">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="0"
                value={this.state.output}
                disabled
              />
              <div className="input-group-append">
                <div className="input-group-text">
                <img src="/dksdtoken.png" height='28' width="24" alt=""/>
                  &nbsp; DST
                </div>
              </div>
            </div>
            <div className="mb-5">
              <span className="float-left"><b>Exchange Rate: </b></span>
              <span className="float-right"><b> 1 ETH = 100 DarkStudio Tokens</b></span>
            </div>
            <button type="submit" className="btn btn-primary btn-block btn-lg">EXCECUTE</button>
          </form>
     </FadeIn>
    );
  }
}

export default BuyForm;
