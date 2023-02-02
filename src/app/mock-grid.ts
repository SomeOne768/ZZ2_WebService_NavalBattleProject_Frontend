
import { Tile } from './tile';

// used : false
// used : true => case deja jouer

// value : 0 => eau, vide 🌊
// value : 1 => a piece of a ship 🚢
// value : -1 => rien, plus jouable ⛔

// status : ''
// status : 'win' => touche
// status : 'fail' => rate

export const GRID: Tile[][] = [
    [
        { used: false, value: -1, status: '' },
        { used: false, value: 0, status: '' },
        { used: false, value: 1, status: '' },
        { used: false, value: -1, status: '' }
    ],
    [
        { used: false, value: 0, status: '' },
        { used: false, value: 0, status: '' },
        { used: false, value: -1, status: '' },
        { used: false, value: 0, status: '' }
    ],
    [
        { used: false, value: 0, status: '' },
        { used: false, value: 1, status: '' },
        { used: false, value: 1, status: '' },
        { used: false, value: 0, status: '' }
    ],
    [
        { used: false, value: 0, status: '' },
        { used: false, value: 1, status: '' },
        { used: false, value: 0, status: '' },
        { used: false, value: 0, status: '' }
    ]
];
