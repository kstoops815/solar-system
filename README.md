# Solar System

# Setup

1. Use npm to install Browserify, and any other packages you need to compile your modules.
1. Make sure you have the Grunt task running that will build the distribution bundle file.

# Requirements

Create a web page that will display important scientific data about all eight planets in our solar system. The information about each planet will be separate modules.

1. Each module will export a single function named outputTo that will accept a single argument. That argument's value will be the DOM element reference into which it will insert information about a planet.

```
function outputTo(domElement) {
  domElement.innerHTML += ...;
}
```

1. Each module should output the following information.

  1. Name
  1. Year discovered
  1. Mass
  1. Size
  1. Distance from Sun
  1. Atmosphere composition
  1. Satellites
  1. Name of any probes/orbiters/explorers that have visited or landed on that planet
  1. Create a main module that uses require to include each planet's module as a dependency and then subsequently calls the outputTo()      method for each one, in the right order.

![solar system snip]("./images/Browserify Solar System.PNG")