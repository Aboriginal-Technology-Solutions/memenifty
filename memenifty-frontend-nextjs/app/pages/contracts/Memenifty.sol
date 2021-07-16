// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Memenifty is ERC721 {

  constructor() public ERC721PresetMinterPauserAutoId("MintedMeme", "MEME", "127.0.0.1:7545") {}



}
