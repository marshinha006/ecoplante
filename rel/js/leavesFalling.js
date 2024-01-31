import elementAnimation from '../../node_modules/element-animation/src/index.js';

const container = document.getElementById('element-animation');

const props = [
    './rel/images/props/leave_0.png',
    './rel/images/props/leave_1.png'
];

const options = {
    interval: 550,          // rain
    rotate: [-40, 40],
    size: [50, 20],
    duration: [5, 13],      // rain
    amount: [30, 40]        // mousemove
};

var elemAnim = new elementAnimation(
    container,
    props,
    options
);

new elementAnimation(container, props, options).rain();
new elementAnimation(container, props, options).rain();
new elementAnimation(container, props, options).rain();
new elementAnimation(container, props, options).rain();
 