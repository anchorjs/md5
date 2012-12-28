# Anchor/MD5

The MD5 module implements support for the MD5 cryptographic hash function.

## Install

##### volo

    $ volo add anchorjs/md5

For more information on using volo to manage JavaScript modules, visit [http://volojs.org/](http://volojs.org/).

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

## Tests

##### Browser

To run tests in a browser, execute the Make target for the desired browser:

    $ make test-chrome
    $ make test-firefox
    $ make test-safari

##### PhantomJS

To run headless tests from a terminal using [PhantomJS](http://phantomjs.org/):

    $ make test-phantomjs

## Credits

  - [Jared Hanson](http://github.com/jaredhanson)

## License

[The MIT License](http://opensource.org/licenses/MIT)

Copyright (c) 2012 Jared Hanson <[http://jaredhanson.net/](http://jaredhanson.net/)>
