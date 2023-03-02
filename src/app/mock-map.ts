
import { Ship } from "./Ship"

//-1:empty 🌊
//-2:touched; 💥 or 💀
//-3:missed; ⛔ 
//[shipIdentifier]:ship 🚢

export const BODY: Number[][] = [
    [-3, -2, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1],
    [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1]
];

export const NAME: string = "Map number";

export const ASSOCIATEDSHIPS: Ship[] = [
    {
        id: 0, name: "AircraftCarrier", size: 5, orientation: 0,
        hookX: -1, hookY: -1, lifePoint: 5, located: 0
    },
    {
        id: 1, name: "Trawler", size: 2, orientation: 0,
        hookX: -1, hookY: -1, lifePoint: 2, located: 0
    } // located pour savoir si le bateau est deja pose ou non
]