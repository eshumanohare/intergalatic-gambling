// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract MyToken is ERC721 {
    address public watcher;
    mapping(uint256 => string) planetURIs;
    string private baseURI;
    mapping(uint256 => Planet) IdToPlanet;
    uint256 public totalPlanets;

    struct Planet {
        string name;
        uint256 EldritchMystique;
        uint256 AetherialVeil;
        uint256 NebulaeEmbrace;
        uint256 ChronoNexus;
        uint256 PyroclasmicCore;
        uint256 ZephyrExpanse;
        uint256 QuantumEnigma;
    }

    event PlanetURISet(uint256 indexed planetID, string indexed planetURI);

    constructor() ERC721("Inter-Planetary Gambling", "GIP") {
        watcher = msg.sender;
    }

    function mintPlanets(
        string[] calldata _planetURIs,
        Planet[] calldata planets
    ) internal {
        require(
            _planetURIs.length == planets.length,
            "Error: Mismatch in number of planets and URI"
        );
        for (uint256 i = 0; i < planets.length; i++) {
            _mint(watcher, i + 1);
            setPlanet(i + 1, _planetURIs[i], planets[i]);
            totalPlanets += 1;
        }
    }

    function setBaseURI(string calldata _baseURI) external {
        require(msg.sender == watcher, "Error: Not allowed to set base uri");
        baseURI = _baseURI;
    }

    function setPlanet(
        uint256 planetID,
        string calldata planetURI,
        Planet calldata planet
    ) internal {
        require(_exists(planetID), "Error: Planet already minted");
        planetURIs[planetID] = planetURI;
        IdToPlanet[planetID] = planet;
        emit PlanetURISet(planetID, planetURI);
    }

    function planetWar(
        address player1,
        address player2,
        uint256 planetID1,
        uint256 planetID2,
        uint256 attribute
    ) external view returns (address winner) {
        require(
            player1 != address(0) &&
                player2 != address(0) &&
                (planetID1 > 0 && planetID1 < totalPlanets) &&
                (planetID2 > 0 && planetID2 < totalPlanets),
            "Error: Invalid Player details"
        );
        require(attribute < 7, "Error: Attribute index is wrong");
        Planet memory planet1 = IdToPlanet[planetID1];
        Planet memory planet2 = IdToPlanet[planetID2];

        if (planetID1 == planetID2) {
            return address(0);
        }

        if (attribute == 0) {
            return
                planet1.EldritchMystique > planet2.EldritchMystique
                    ? player1
                    : player2;
        } else if (attribute == 1) {
            return
                planet1.AetherialVeil > planet2.AetherialVeil
                    ? player1
                    : player2;
        } else if (attribute == 2) {
            return
                planet1.NebulaeEmbrace > planet2.NebulaeEmbrace
                    ? player1
                    : player2;
        } else if (attribute == 3) {
            return
                planet1.ChronoNexus > planet2.ChronoNexus ? player1 : player2;
        } else if (attribute == 4) {
            return
                planet1.PyroclasmicCore > planet2.PyroclasmicCore
                    ? player1
                    : player2;
        } else if (attribute == 5) {
            return
                planet1.ZephyrExpanse > planet2.ZephyrExpanse
                    ? player1
                    : player2;
        } else if (attribute == 6) {
            return
                planet1.QuantumEnigma > planet2.QuantumEnigma
                    ? player1
                    : player2;
        }
    }
}
