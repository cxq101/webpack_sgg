import { greet } from "./js/greet";
import "../resource/css/box1.css";
import "../resource/css/box2.css";
import "../resource/css/box/box3.css";
import "../resource/css/img.css";
import "../resource/css/font.css";

greet("world");
// var ds = 10;
let list = [1, 2, 3];
if (list[0] === 1) {
    console.log(list);
}

list.sort((a, b) => b - a);
if (list[0] === 1) {
    console.log(list);
}

