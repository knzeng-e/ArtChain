// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract DerWanderer is ERC721 {
    constructor() ERC721("DerWanderer", "ETH") public {}

    function mint(address  _to, uint256 _tokenId) public {
        _mint(_to, _tokenId);
    }

    function baseTokenURI() public pure returns (string memory) {
        //lien de la metadata
    return "https://opensea-creatures-api.herokuapp.com/api/creature/";
  }
}