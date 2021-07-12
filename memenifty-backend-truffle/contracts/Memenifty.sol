// SPDX-License-Identifier: MIT
pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract Memenifty is ERC721PresetMinterPauserAutoId {

  constructor() public Memenifty("Memenifty", "MEME", "127.0.0.1:7545") {}



}
