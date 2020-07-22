//SPDX-License-Identifier: unlicensed

pragma solidity >=0.5.0 <0.7.0;

contract SimpleContract {
    uint256 public value;

    constructor(uint256 firstValue) public {
       value = firstValue;
    }

    function add(uint256 addValue) public {
        value += addValue;
        emit valResult(value, msg.sender);
    }
    function get() public view returns (address) {
        return msg.sender;
    }

    function doub() private {
        value *= 2;
        emit valResult(value, msg.sender);
    }
    event valResult(uint indexed result, address indexed caller);

}