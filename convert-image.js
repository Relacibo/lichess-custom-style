import svg64 from 'svg64';
import { readFileSync } from 'fs';
const svg = readFileSync('./custom-lichess-board.svg', 'utf-8');
const base64fromSVG = svg64(svg);
console.log(base64fromSVG);