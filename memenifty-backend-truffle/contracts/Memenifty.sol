// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract Memenifty is ERC721PresetMinterPauserAutoId {

  constructor() public ERC721PresetMinterPauserAutoId("Memenifty", "MEME", "127.0.0.1:7545") {}



}
