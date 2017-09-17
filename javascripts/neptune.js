"use strict";

const outputToNeptune = (domElement) => {
	let domStringNeptune = "";
	domStringNeptune += `<div class="col-md-3 planets">`;
	domStringNeptune += 	`<h3>Neptune</h3>`;
	domStringNeptune += 	`<ul>`;
	domStringNeptune +=			`<li>Neptune was discovered in 1846 by Johann Gottfried Galle.</li>`;
	domStringNeptune += 		`<li>Neptune's mass is 1.024 × 10^26 kg.</li>`;
	domStringNeptune +=			`<li>Neptune's size is 30,598 miles (49,244 km) in diameter.</li>`;
	domStringNeptune +=			`<li>Neptune's average distance from the sun is 2,795,084,800 miles (4,498,252,900 km). </li>`;
	domStringNeptune +=			`<li>Neptune's atmosphere is made up of is made up predominately of hydrogen and helium, with some methane.</li>`;
	domStringNeptune +=			`<li>Neptune has 13 named moons.</li>`;
	domStringNeptune +=			`<li>Neptune has been explored by Voyager 2, which flew by in 1989.</li>`;
	domStringNeptune += 	`</ul>`;
	domStringNeptune += `</div>`;

	domElement.innerHTML += domStringNeptune;
};

module.exports = outputToNeptune;
