[![Build Status](https://travis-ci.org/Cimpress-MCP/postal-codes-js.svg?branch=master)](https://travis-ci.org/Cimpress-MCP/postal-codes-js)
[![Coverage Status](https://coveralls.io/repos/github/Cimpress-MCP/postal-codes-js/badge.svg?branch=master)](https://coveralls.io/github/Cimpress-MCP/postal-codes-js?branch=master)
[![npm version](https://badge.fury.io/js/postal-codes-js.svg)](https://badge.fury.io/js/postal-codes-js)

# postal-codes.js
Provide javascript postal code validation for [all  countries](https://en.wikipedia.org/wiki/List_of_postal_codes).

### Why this fork

This fork was initiated to correct behavioral changes from the source repository which lead to breaks in our app in early versions.

#### How to contribute

**The `master` branch should not change anymore**. This is because the package is referenced without any version in various `package.json` files accross the ecosystem.

Instead, create a **new branch** for every **new version** with a **new tag** corresponding to the new version. This will allow to reference the package version for new `package.json` files or where it is possible to do so.

### Validation rules
1. Characters " " (space) and "-" (dash) are removed from the passed string
2. Case doesn't matter

### Testing with mocha
    $ npm test
    $ npm run coverage

### Usage
```
var postalCodes = require('postal-codes-js');

// All the calls below returns true
postalCodes.validate('bg', '1003');
postalCodes.validate('gb', 'EC1A 1BB');
postalCodes.validate('gb', 'EC1A1BB');
postalCodes.validate('gb', 'EC1A-1BB');
postalCodes.validate('tr', '33150');
postalCodes.validate('us', '22313');
```

## Contribution
Contributions are more than welcome, just fork the repo and create a pull-request ;)

## Contact
PostalCodesJS@cimpress.com
