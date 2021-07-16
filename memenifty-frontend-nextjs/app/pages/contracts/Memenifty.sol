// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Memenifty is ERC721 {

  constructor() public ERC721("MintedMeme", "MEME") {}



}
