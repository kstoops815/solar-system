"use strict";

const outputToJupiter = (domElement) => {
	let domStringJupiter = "";
	domStringJupiter += `<div class="col-md-3 planets">`;
	domStringJupiter += 	`<h3>Jupiter</h3>`;
	domStringJupiter += 	`<ul>`;
	domStringJupiter +=			`<li>Jupiter was discovered in 1610 by Galileo.</li>`;
	domStringJupiter += 		`<li>Jupiter's mass is 1,898 x10^24 kilograms (318 x Earth's mass).</li>`;
	domStringJupiter +=			`<li>Jupiter's size is 142,800 km (88,736 miles) in diameter.</li>`;
	domStringJupiter +=			`<li>Jupiter's maximum distance from the sun is 817 million km (508 million miles)</li>`;
	domStringJupiter +=			`<li>Jupiter's atmosphere is made up of 90 percent hydrogen and nearly 10 percent helium. A very small fraction of the atmosphere is made up of compounds such as ammonia, sulfur, methane, and water vapor.</li>`;
	domStringJupiter +=			`<li>Jupiter has 53 named moons and 16 unnamed moons, making for a total of 69 moons.</li>`;
	domStringJupiter +=			`<li>Jupiter has been explored by Pioneer 10, Pioneer 11, Voyager 1, Voyager 2, Ulysses, Galileo Orbiter, Ulysses, and New Horizons.</li>`;
	domStringJupiter += 	`</ul>`;
	domStringJupiter += `</div>`;

	domElement.innerHTML += domStringJupiter;
};

module.exports = outputToJupiter;
