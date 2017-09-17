"use strict";

const outputToUranus = (domElement) => {
	let domStringUranus = "";
	domStringUranus += `<div>`;
	domStringUranus += 	`<h3>Uranus</h3>`;
	domStringUranus += 		`<ul>`;
	domStringUranus +=			`<li>Uranus was discovered in 1781 by William Herschel.</li>`;
	domStringUranus += 			`<li>Uranus's mass is 8.681 × 10^25 kg.</li>`;
	domStringUranus +=			`<li>Uranus's size is 15,792 miles (25,362 kilometers) in diameter.</li>`;
	domStringUranus +=			`<li>Uranus's average distance from the sun is 1,783,939,400 miles (2,870,972,200 km).</li>`;
	domStringUranus +=			`<li>Uranus's atmosphere is composed primarily of hydrogen and helium.</li>`;
	domStringUranus +=			`<li>Uranus has 27 named moons.</li>`;
	domStringUranus +=			`<li>Uranus has been explored Voyager 2 in 1986.</li>`;
	domStringUranus += 		`</ul>`;
	domStringUranus += `</div>`;

	domElement.innerHTML += domStringUranus;
};

module.exports = outputToUranus;
