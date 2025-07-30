// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract EnterpriseToken is ERC20 {
    uint8 public companyId;

    constructor(string memory name_, string memory symbol_, uint8 companyId_)
        ERC20(name_, symbol_)
    {
        companyId = companyId_;
        _mint(msg.sender, 99 * 10 ** decimals());
    }

    function transferVoteRight(address to) external returns (bool) {
        return transfer(to, 1 * 10 ** decimals());
    }
}
