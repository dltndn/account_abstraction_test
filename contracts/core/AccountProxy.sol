// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.12;

/* solhint-disable avoid-low-level-calls */
/* solhint-disable no-inline-assembly */
/* solhint-disable reason-string */

import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

contract AccountProxy is ERC1967Proxy {
    constructor(address implementation, bytes memory _data) ERC1967Proxy(implementation, _data) {}
}