<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Transform Stream

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Transform stream][transform-stream].



<section class="usage">

## Usage

To use in Observable,

```javascript
transformStream = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-transform@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var transformStream = require( 'path/to/vendor/umd/streams-node-transform/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-transform@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.transformStream;
})();
</script>
```

<a name="transform-stream"></a>

#### transformStream( \[options] )

Creates a [transform stream][transform-stream].

```javascript
var stdout = require( '@stdlib/streams-node-stdout' );

function transform( chunk, enc, clbk ) {
    clbk( null, chunk.toString()+'\n' );
}

var stream = transformStream({
    'transform': transform
});

stream.pipe( stdout );

stream.write( '1' );
stream.write( '2' );
stream.write( '3' );

stream.end();
// e.g., => '1\n2\n3\n'
```

The function accepts the following `options`:

-   **transform**: callback to invoke upon receiving a new chunk.
-   **flush**: callback to invoke after receiving all chunks and prior to a stream closing.
-   **objectMode**: specifies whether a [stream][stream] should operate in [objectMode][object-mode]. Default: `false`.
-   **encoding**: specifies how `Buffer` objects should be decoded to `strings`. Default: `null`.
-   **highWaterMark**: specifies the `Buffer` level at which `write()` calls start returning `false`.
-   **allowHalfOpen**: specifies whether a [stream][stream] should remain open even if one side ends. Default: `false`.
-   **decodeStrings**: specifies whether to decode `strings` into `Buffer` objects when writing. Default: `true`.

To set [stream][stream] `options`,

```javascript
var opts = {
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64,
    'allowHalfOpen': true,
    'decodeStrings': false
};

var stream = transformStream( opts );
```

The `transform` option should be a `function` having the following signature:

```javascript
function transform( chunk, enc, clbk ) {
    var multipleData;
    var err;

    if ( multipleData ) {
        // Push as many chunks as required...
        this.push( chunk );
        this.push( chunk );

        // ...

        if ( err ) {
            return clbk( err );
        }
        return clbk();
    }
    if ( err ) {
        return clbk( err );
    }
    clbk( null, chunk );
}
```

The `flush` option should be a `function` which performs any remaining tasks before the stream closes, such as unfinished data processing.

```javascript
function flush( clbk ) {
    var err;

    // Push any remaining chunks...
    this.push( '...' );
    this.push( '...' );

    // ...

    if ( err ) {
        return clbk( err );
    }
    clbk();
}
```

If no `transform` is provided, the returned `stream` will be a simple pass through stream.

#### transformStream.factory( \[options] )

Returns a `function` for creating [streams][transform-stream] which are identically configured according to provided `options`.

```javascript
var opts = {
    'objectMode': true,
    'encoding': 'utf8',
    'highWaterMark': 64
};

var factory = transformStream.factory( opts );
```

This method accepts the same `options` as [`transformStream()`](#transform-stream), **except** for the `transform` and `flush` options which must be provided **explicitly**, as shown below.

##### factory( transform\[, flush] )

Creates a [transform stream][transform-stream].

```javascript
function transform1( chunk, enc, clbk ) {
    clbk( null, chunk.toString()+'\n' );
}

function transform2( chunk, enc, clbk ) {
    clbk( null, chunk.toString()+'\t' );
}

function flush( clbk ) {
    clbk();
}

var factory = transformStream.factory();

var s1 = factory( transform1 );
var s2 = factory( transform2, flush );
```

#### transformStream.objectMode( \[options] )

This method is a convenience function to create [streams][stream] which always operate in [objectMode][object-mode].

<!-- eslint-disable object-curly-newline -->

```javascript
var stdout = require( '@stdlib/streams-node-stdout' );

function stringify( chunk, enc, clbk ) {
    clbk( null, JSON.stringify( chunk ) );
}

function newline( chunk, enc, clbk ) {
    clbk( null, chunk+'\n' );
}

var s1 = transformStream.objectMode({
    'transform': stringify
});

var s2 = transformStream.objectMode({
    'transform': newline
});

s1.pipe( s2 ).pipe( stdout );

s1.write( { 'value': 'a' } );
s1.write( { 'value': 'b' } );
s1.write( { 'value': 'c' } );

s1.end();
// e.g., => '{"value":"a"}\n{"value":"b"}\n{"value":"c"}\n'
```

This method accepts the same `options` as [`transformStream()`](#transform-stream); however, the method will **always** override the [objectMode][object-mode] option in `options`.

#### transformStream.ctor( \[options] )

Instead of returning a [transform stream][transform-stream] instance, this method returns a custom [transform stream][transform-stream] constructor. If provided `transform` and `flush` options, these methods are bound to the constructor prototype. If not provided a `transform`, the returned constructor creates simple pass through streams.

<!-- eslint-disable no-underscore-dangle -->

```javascript
function transform( chunk, enc, clbk ) {
    clbk( null, chunk.toString()+'\n' );
}

function flush( clbk ) {
    this.push( 'beep' );
    clbk();
}

var opts = {
    'transform': transform,
    'flush': flush
};

var TransformStream = transformStream.ctor( opts );

var bool = ( TransformStream.prototype._transform === transform );
// returns true

bool = ( TransformStream.prototype._flush === flush );
// returns true
```

The returned constructor accepts the same `options` as documented above, **except** for the `transform` and `flush` options, which are not supported. Any `options` provided to the constructor **override** `options` provided to the constructor factory.

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-stdout@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/streams-node-transform@umd/browser.js"></script>
<script type="text/javascript">
(function () {.factory;

function parse( chunk, enc, clbk ) {
    clbk( null, JSON.parse( chunk ) );
}

function pluck( chunk, enc, clbk ) {
    clbk( null, chunk.value );
}

function square( chunk, enc, clbk ) {
    var v = +chunk;
    clbk( null, v*v );
}

function toStr( chunk, enc, clbk ) {
    clbk( null, chunk.toString() );
}

function join( chunk, enc, clbk ) {
    clbk( null, chunk+'\n' );
}

// Create a factory which generates streams running in `objectMode`:
var tStream = factory({
    'objectMode': true
});

// Create streams for each transform:
var s1 = tStream( parse );
var s2 = tStream( pluck );
var s3 = tStream( square );
var s4 = tStream( toStr );
var s5 = tStream( join );

// Create the pipeline:
s1.pipe( s2 )
    .pipe( s3 )
    .pipe( s4 )
    .pipe( s5 )
    .pipe( stdout );

// Write data to the pipeline...
var v;
var i;
for ( i = 0; i < 100; i++ ) {
    v = '{"value":'+i+'}';
    s1.write( v, 'utf8' );
}
s1.end();

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/streams-node-transform.svg
[npm-url]: https://npmjs.org/package/@stdlib/streams-node-transform

[test-image]: https://github.com/stdlib-js/streams-node-transform/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/streams-node-transform/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/streams-node-transform/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/streams-node-transform?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/streams-node-transform.svg
[dependencies-url]: https://david-dm.org/stdlib-js/streams-node-transform/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/streams-node-transform/tree/deno
[umd-url]: https://github.com/stdlib-js/streams-node-transform/tree/umd
[esm-url]: https://github.com/stdlib-js/streams-node-transform/tree/esm
[branches-url]: https://github.com/stdlib-js/streams-node-transform/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/streams-node-transform/main/LICENSE

[stream]: https://nodejs.org/api/stream.html

[object-mode]: https://nodejs.org/api/stream.html#stream_object_mode

[transform-stream]: https://nodejs.org/api/stream.html

</section>

<!-- /.links -->
