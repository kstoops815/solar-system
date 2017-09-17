"use strict";

const outputToSaturn = (domElement) => {
	let domStringSaturn = "";
	domStringSaturn += `<div class="col-md-3 planets">`;
	domStringSaturn += 		`<h3>Saturn</h3>`;
	domStringSaturn += 		`<ul>`;
	domStringSaturn +=			`<li>Saturn Saturn has been known since prehistoric times because it is easily visible to the naked eye.</li>`;
	domStringSaturn += 			`<li>Saturn's mass is 5.683 × 10^26 kg.</li>`;
	domStringSaturn +=			`<li>Saturn's size is 37,449 miles (60,268 km) in diameter.</li>`;
	domStringSaturn +=			`<li>Saturn's average distance from the sun is 886 million miles (1.4 billion km).</li>`;
	domStringSaturn +=			`<li>Saturn's atmosphere is made up of approximately 75% hydrogen and 25% helium with traces of other substances like methane and water ice. .</li>`;
	domStringSaturn +=			`<li>Saturn has 53 confirmed moons and another 8 provisional moons.</li>`;
	domStringSaturn +=			`<li>Saturn has been explored by Pioneer 11, Voyager 1, Voyager 2 as flybys. The Cassini spacecraft was launched in 1997, and was in orbit from 2004-2017.</li>`;
	domStringSaturn += 		`</ul>`;
	domStringSaturn += `</div>`;

	domElement.innerHTML += domStringSaturn;
};

module.exports = outputToSaturn;
