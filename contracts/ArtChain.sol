// SPDX-License-Identifier: MIT

pragma solidity >=0.4.21 <0.7.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";


contract ArtChain is ERC721 {

  uint256 private _currentTokenId = 0;

    constructor() ERC721("ArtChain", "ATC") public {
        _setBaseURI("https://powerful-oasis-48134.herokuapp.com/DerWanderer/api/asset/");

    }


  function mintTo(address _to) public { //set the onlyOwner modifier
    uint256 newTokenId = _getNextTokenId();
    mint(_to, newTokenId);
    _incrementTokenId();
  }

  function _getNextTokenId() private view returns (uint256) {
    return _currentTokenId.add(1);
  }

    function mint(address  _to, uint256 _tokenId) public {
      _safeMint(_to, _tokenId);
        // _mint(_to, _tokenId);
    }

    function _incrementTokenId() private  {
    _currentTokenId++;
  }

    function baseTokenURI() public pure returns (string memory) {
        //lien de la metadata
    return "https://powerful-oasis-48134.herokuapp.com/DerWanderer/api/asset/";
  }

  function contractURI() public pure returns (string memory) {
        //lien de la metadata
    return "https://powerful-oasis-48134.herokuapp.com/DerWanderer/api/contract/";
  }
}
