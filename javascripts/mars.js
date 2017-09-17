"use strict";

const outputToMars = (domElement) => {
	let domStringMars = "";
	domStringMars += `<div class="col-md-3 planets">`;
	domStringMars += 	`<h3>Mars</h3>`;
	domStringMars += 	`<ul>`;
	domStringMars +=		`<li>Mars was discovered in .</li>`;
	domStringMars += 		`<li>Mars's mass is 6.39 × 10^23 kg.</li>`;
	domStringMars +=		`<li>Mars's size 4,220 miles in diameter.</li>`;
	domStringMars +=		`<li>Mars's average distance from the sun is 142 million miles.</li>`;
	domStringMars +=		`<li>Mars's atmosphere is made mostly carbon dioxide.</li>`;
	domStringMars +=		`<li>Mars has two moons - Phobos and Deimos.</li>`;
	domStringMars +=		`<li>We have sent 44 probes to explore Mars, the first one, Korabl 4, was launched in 1960.  The last one, ExoMars Orbiter, launched in 2016.</li>`;
	domStringMars += 	`</ul>`;
	domStringMars += `</div>`;

	domElement.innerHTML += domStringMars;
};

module.exports = outputToMars;
