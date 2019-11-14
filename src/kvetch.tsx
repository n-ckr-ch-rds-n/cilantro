import SCanvas from "solandra/sCanvas";
import {Circle, Ellipse, Line, Path, SimplePath} from "solandra";

export const kvetch = (s: SCanvas) => {
    s.background(1, 80, 80);
    s.forTiling({n: 7, type: "square", margin: 0.1}, (pt, [d], c, i) => {
        s.setFillColor(i*5, 80, 40, 0.4);
        s.fill(new Circle({at: c, r: 0.05}));
    })
};

export const kvetch2 = (s: SCanvas) => {
    s.background(40, 1, 50);
    s.forTiling({n: 7, type: "proportionate"}, ([x, y], [dx, dy], c) => {
        s.setFillColor(dx * 10, 80, 40, 0.4);

        s.fill(new Ellipse({at: [x, y], h: dx, w: dy / 2}))
    })
}
