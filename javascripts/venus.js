"use strict";

const outputToVenus = (domElement) => {
	let domStringVenus = "";
	domStringVenus += `<div class="col-md-3 planets">`;
	domStringVenus += 	`<h3>Venus</h3>`;
	domStringVenus += 		`<ul>`;
	domStringVenus +=			`<li>Venus was discovered in 1610 by Galileo.</li>`;
	domStringVenus += 			`<li>Venus's mass is 1,898 x10^24 kilograms (318 x Earth's mass).</li>`;
	domStringVenus +=			`<li>Venus's size is 142,800 km (88,736 miles) in diameter.</li>`;
	domStringVenus +=			`<li>Venus's maximum distance from the sun is 817 million km (508 million miles)</li>`;
	domStringVenus +=			`<li>Venus's atmosphere is made up of 90 percent hydrogen and nearly 10 percent helium. A very small fraction of the atmosphere is made up of compounds such as ammonia, sulfur, methane, and water vapor.</li>`;
	domStringVenus +=			`<li>Venus has 53 named moons and 16 unnamed moons, making for a total of 69 moons.</li>`;
	domStringVenus +=			`<li>Venus has been explored by Pioneer 10, Pioneer 11, Voyager 1, Voyager 2, Ulysses, Galileo Orbiter, Ulysses, and New Horizons.</li>`;
	domStringVenus += 		`</ul>`;
	domStringVenus += `</div>`;

	domElement.innerHTML += domStringVenus;
};

module.exports = outputToVenus;
