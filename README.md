# Anchor/MD5

The MD5 module implements support for the MD5 cryptographic hash function.

## Install

##### component

    $ component install anchorjs/md5

##### volo

    $ volo add anchorjs/md5

## Usage

#### Hash

Create hash digests of data.

```javascript
var md5sum = md5.createHash();
md5sum.update('Hello');
md5sum.update('World');
var d = md5sum.digest('hex');
```

#### Hmac

Create cryptographic hmac content.

```javascript
var md5hmac = md5.createHmac('key');
md5hmac.update('Hello');
md5hmac.update('World');
var d = md5hmac.digest('hex');
```

## Compatibility

##### component

This module uses the [AMD](https://github.com/amdjs/amdjs-api) format.  To
include in component builds, use [component-amd](https://github.com/jaredhanson/component-amd):

    component build -u component-amd

## Tests

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-chrome
    $ make test-firefox
    $ make test-safari
    
Headless tests can be executed directly from a terminal:
    
    $ make test-phantomjs

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012-2013 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
