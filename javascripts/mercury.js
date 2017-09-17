"use strict";

const outputToMercury = (domElement) => {
	let domStringMercury = "";
	domStringMercury += `<div>`;
	domStringMercury += 	`<h3>Mercury</h3>`;
	domStringMercury += 	`<ul>`;
	domStringMercury +=			`<li>Mercury's discovery date is unknown; however, the first mentions of the planet are believed to be around 3000 BC by the Sumerians.</li>`;
	domStringMercury += 		`<li>Mercury's mass is 3.285 × 10^23 kg.</li>`;
	domStringMercury +=			`<li>Mercury's size is is 3,030 miles (4,878 km) in diameter.</li>`;
	domStringMercury +=			`<li>Mercury's average distance from the sun is 35,983,095 miles (57,909,175 km).</li>`;
	domStringMercury +=			`<li>Mercury has No atmosphere. It has an exosphere containing 42 percent oxygen, 29 percent sodium, 22 percent hydrogen, 6 percent helium, 0.5 percent potassium, with possible trace amounts of argon, carbon dioxide, water, nitrogen, xenon, krypton and neon.</li>`;
	domStringMercury +=			`<li>Mercury has no moons.</li>`;
	domStringMercury +=			`<li>Mercury has been explored by two spacecrafts. The first was called Mariner 10 in 1974 and 1975, and the second was called Messenger in 2011.</li>`;
	domStringMercury += 	`</ul>`;
	domStringMercury += `</div>`;

	domElement.innerHTML += domStringMercury;
};

module.exports = outputToMercury;
