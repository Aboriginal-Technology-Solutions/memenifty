// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract Memenifty is ERC721 {

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  mapping(string => uint8) hashes;

  constructor() ERC721("MintedMeme", "MEME") {

    function mintMeme(address _recipient, string memory _hash, string memory _metadata) public returns uint256 {
      requires(hashes[_hash] != 1);
      hashes[_hash] = 1;
      tokenIds.increment();
      uint256 newItemId = _tokenIds.current();
      _mint(recipient, newItemId);
      _setTokenURI(newItemId, _metadata);
      return newItemId;
    }
  }




}
