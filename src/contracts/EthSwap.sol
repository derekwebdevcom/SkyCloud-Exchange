pragma solidity ^0.5.0;

import "./Token.sol";

contract EthSwap {
  string public name = "EthSwap Instant Exchange";
  Token public token;
  uint public rate = 100;

  event TokensPurchased(
    address account,
    address token,
    uint amount,
    uint rate
  );

    event TokensSold(
    address account,
    address token,
    uint amount,
    uint rate
  );

    constructor(Token _token) public {
    token = _token;
  }
    function buyTokens() public payable {

    uint tokenAmount = msg.value * rate;
    token.transfer(msg.sender, tokenAmount);
    require(token.balanceOf(address(this)) >= tokenAmount);
    emit TokensPurchased(msg.sender, address(token), tokenAmount, rate);

    }

    function sellTokens(uint _amount) public{
      // FAIL: INSF
      require(token.balanceOf(msg.sender) >= _amount);
      //Calculate redemption 
      uint etherAmount = _amount /rate;
  
      // Check account
      require(address(this).balance >= etherAmount);
      // Sale
      token.transferFrom(msg.sender, address(this), _amount);
      msg.sender.transfer(etherAmount);
    

      emit TokensSold(msg.sender, address(token), _amount, rate);
    }
}
