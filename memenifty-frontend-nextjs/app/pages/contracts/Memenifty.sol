// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import "memenifty-frontend-nextjs/app/node_modules/@openzeppelin/contracts/token/ERC721/presets/ERC721PresetMinterPauserAutoId.sol";

contract Memenifty is ERC721PresetMinterPauserAutoId.sol {

  constructor() public ERC721PresetMinterPauserAutoId("MintedMeme", "MEME", "127.0.0.1:7545") {}



}
