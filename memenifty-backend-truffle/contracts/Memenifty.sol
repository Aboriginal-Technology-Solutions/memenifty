// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Memenifty is ERC721, Ownable {

  using Counters for Counters.Counter;
  Counters.Counter private _tokenIds;
  mapping(string => uint8) hashes;


  constructor() ERC721("MintedMeme", "MEME") {}

    function mintMeme(address _recipient, string memory _hash) external onlyOwner returns (uint256) {
      require(hashes[_hash] != 1);
      hashes[_hash] = 1;
      _tokenIds.increment();
      uint256 newItemId = _tokenIds.current();
      approve(_recipient, newItemId);
      _safeMint(_recipient, newItemId);
      tokenURI(newItemId);
      return newItemId;
      emit Approval(_recipient, newItemId);
  }




}
