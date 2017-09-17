"use strict";

const outputToEarth = (domElement) => {
	let domStringEarth = "";
	domStringEarth += `<div>`;
	domStringEarth += 	`<h3>Earth</h3>`;
	domStringEarth += 	`<ul>`;
	domStringEarth +=		`<li>Earth was discovered at the beginning of time.</li>`;
	domStringEarth += 		`<li>Earth's mass is 5.98x10^24 kilograms (6.5e21 tons).</li>`;
	domStringEarth +=		`<li>Earth's size is 12,753 km (7,926 miles) in diameter.</li>`;
	domStringEarth +=		`<li>Earth's maximum distance from the sun is 152 million km (94.5 million miles).</li>`;
	domStringEarth +=		`<li>Earth's atmosphere is made up of 78% Nitrogen, 21% Oxygen, 0.93% Argon, and 0.038% Carbon dioxide.</li>`;
	domStringEarth +=		`<li>Earth has one natural satellite - the moon.</li>`;
	domStringEarth +=		`<li>Earth is constantly explored by man.</li>`;
	domStringEarth += 	`</ul>`;
	domStringEarth += `</div>`;

	domElement.innerHTML += domStringEarth;
};

module.exports = outputToEarth;
