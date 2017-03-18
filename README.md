# Cocoon XML Sugar [![Build Status](https://travis-ci.org/CocoonIO/cocoon-xml-sugar.svg)](https://travis-ci.org/CocoonIO/cocoon-xml-sugar)

[![bitHound Overall Score](https://www.bithound.io/github/CocoonIO/cocoon-xml-sugar/badges/score.svg)](https://www.bithound.io/github/CocoonIO/cocoon-xml-sugar)
[![bitHound Dependencies](https://www.bithound.io/github/CocoonIO/cocoon-xml-sugar/badges/dependencies.svg)](https://www.bithound.io/github/CocoonIO/cocoon-xml-sugar/master/dependencies/npm)
[![bitHound Dev Dependencies](https://www.bithound.io/github/CocoonIO/cocoon-xml-sugar/badges/devDependencies.svg)](https://www.bithound.io/github/CocoonIO/cocoon-xml-sugar/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/CocoonIO/cocoon-xml-sugar/badges/code.svg)](https://www.bithound.io/github/CocoonIO/cocoon-xml-sugar)

[![Code Climate](https://codeclimate.com/github/CocoonIO/cocoon-xml-sugar/badges/gpa.svg)](https://codeclimate.com/github/CocoonIO/cocoon-xml-sugar)
[![Test Coverage](https://codeclimate.com/github/CocoonIO/cocoon-xml-sugar/badges/coverage.svg)](https://codeclimate.com/github/CocoonIO/cocoon-xml-sugar/coverage)
[![Issue Count](https://codeclimate.com/github/CocoonIO/cocoon-xml-sugar/badges/issue_count.svg)](https://codeclimate.com/github/CocoonIO/cocoon-xml-sugar)

Sugar for the XML that holds the configuration of a Cocoon.io Project.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

You need to have [NodeJS and NPM](https://nodejs.org/en/download/package-manager/) installed in your system.

```bash
curl -sL https://deb.nodesource.com/setup_7.x | sudo -E bash -
sudo apt install -y nodejs
```

### Installing

Install from [NPM](https://www.npmjs.com/package/cocoon-xml-sugar).

```bash
npm install cocoon-xml-sugar
```

And import it in your project.

```js
import XMLSugar from "cocoon-xml-sugar";
```

## Running the tests

The tests are found in [spec/tests](spec/tests).

```bash
npm test
```

### Coding style tests

To inspect the code style of the [source code](src):

```bash
npm run inspect-src
```

To inspect the code style of the [tests](spec/tests):

```bash
npm run inspect-spec
```

## Built With

* [Typescript](https://www.typescriptlang.org/) - Language
* [NPM](http://www.npmjs.com/) - Dependency Management
* [Jasmine](https://jasmine.github.io/) - Testing Framework

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the
[tags on this repository](https://github.com/CocoonIO/cocoon-xml-sugar/tags). 

## Authors

* **Imanol Fernandez** - *Version 1.0.0* - [MortimerGoro](https://github.com/MortimerGoro)
* **Jorge Domínguez** - *Version 2.0.0* - [BlueSialia](https://github.com/BlueSialia)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
