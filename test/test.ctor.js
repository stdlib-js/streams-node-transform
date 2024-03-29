/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var Transform = require( 'readable-stream' ).Transform;
var noop = require( '@stdlib/utils-noop' );
var inspectStream = require( '@stdlib/streams-node-inspect-sink' );
var ctor = require( './../lib/ctor.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof ctor, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an invalid option', function test( t ) {
	t.throws( foo, TypeError, 'throws a type error' );
	t.end();
	function foo() {
		var Stream = ctor({
			'objectMode': 'beep'
		});
		if ( Stream ) {
			t.ok( false, 'did not throw' );
		}
	}
});

tape( 'the function returns a transform stream constructor', function test( t ) {
	var Stream = ctor();
	var s = new Stream();
	t.equal( s instanceof Transform, true, 'returns a transform stream constructor' );
	t.end();
});

tape( 'the returned constructor does not require the `new` operator', function test( t ) {
	var stream = ctor();
	var s;

	s = stream();
	t.equal( s instanceof Transform, true, 'returns a Transform stream' );

	s = stream({});
	t.equal( s instanceof Transform, true, 'returns a Transform stream' );

	t.end();
});

tape( 'the returned constructor throws an error if provided an invalid option', function test( t ) {
	var TransformStream = ctor();

	t.throws( foo, TypeError, 'throws a type error' );
	t.end();

	function foo() {
		var stream = new TransformStream({
			'decodeStrings': 'beep'
		});
		if ( stream ) {
			t.ok( false, 'did not throw' );
		}
	}
});

tape( 'the returned constructor creates a stream which applies a transform function to streamed data', function test( t ) {
	var TransformStream;
	var expected;
	var iStream;
	var cnt;
	var s;

	TransformStream = ctor({
		'transform': transform
	});
	s = new TransformStream();
	iStream = inspectStream( onData );

	expected = ['1\n', '2\n', '3\n'];
	cnt = 0;

	s.pipe( iStream );
	s.write( '1' );
	s.write( '2' );
	s.write( '3' );
	s.end();

	function transform( chunk, enc, clbk ) {
		clbk( null, chunk.toString()+'\n' );
	}

	function onData( chunk ) {
		t.equal( chunk.toString(), expected[ cnt ], 'streams expected chunk' );
		cnt += 1;
		if ( cnt === expected.length ) {
			t.end();
		}
	}
});

tape( 'the returned constructor creates a stream which applies a transform function to streamed data when in object mode', function test( t ) {
	var TransformStream;
	var expected;
	var iStream;
	var cnt;
	var s;

	TransformStream = ctor({
		'transform': transform
	});
	s = new TransformStream({
		'objectMode': true
	});
	iStream = inspectStream.objectMode( onData );

	expected = [ '1-|-', '2-|-', '3-|-' ];
	cnt = 0;

	s.pipe( iStream );
	s.write( '1' );
	s.write( '2' );
	s.write( '3' );
	s.end();

	function transform( chunk, enc, clbk ) {
		clbk( null, chunk.toString()+'-|-' );
	}

	function onData( chunk ) {
		t.equal( chunk, expected[ cnt ], 'streams expected chunk' );
		cnt += 1;
		if ( cnt === expected.length ) {
			t.end();
		}
	}
});

tape( 'the returned constructor creates a stream which applies a transform function to streamed data when in object mode', function test( t ) {
	var TransformStream;
	var expected;
	var iStream;
	var cnt;
	var s;

	TransformStream = ctor({
		'transform': transform,
		'objectMode': true
	});
	s = new TransformStream();
	iStream = inspectStream.objectMode( onData );

	expected = [ [1], [2], [3] ];
	cnt = 0;

	s.pipe( iStream );
	s.write( '1' );
	s.write( '2' );
	s.write( '3' );
	s.end();

	function transform( chunk, enc, clbk ) {
		var v = +(chunk.toString());
		v = [ v ];
		clbk( null, v );
	}

	function onData( chunk ) {
		t.deepEqual( chunk, expected[ cnt ], 'streams expected chunk' );
		cnt += 1;
		if ( cnt === expected.length ) {
			t.end();
		}
	}
});

tape( 'if not provided a transform function, the returned constructor creates a stream which allows streamed data to simply pass through', function test( t ) {
	var TransformStream;
	var expected;
	var iStream;
	var cnt;
	var s;

	TransformStream = ctor();
	s = new TransformStream();
	iStream = inspectStream( onData );

	expected = [ '1', '2', '3' ];
	cnt = 0;

	s.pipe( iStream );
	s.write( '1' );
	s.write( '2' );
	s.write( '3' );
	s.end();

	function onData( chunk ) {
		t.equal( chunk.toString(), expected[ cnt ], 'streams expected chunk' );
		cnt += 1;
		if ( cnt === expected.length ) {
			t.end();
		}
	}
});

tape( 'the returned constructor creates a stream which applies a flush function before closing a stream', function test( t ) {
	var TransformStream;
	var iStream;
	var s;

	TransformStream = ctor({
		'flush': flush
	});
	s = new TransformStream();
	iStream = inspectStream( noop );

	s.pipe( iStream );
	s.write( '1' );
	s.write( '2' );
	s.write( '3' );
	s.end();

	function flush() {
		t.ok( true, 'calls provided flush method' );
		t.end();
	}
});

tape( 'options provided to the returned constructor override options provided when creating the constructor', function test( t ) {
	var TransformStream;
	var expected;
	var iStream;
	var cnt;
	var s;

	TransformStream = ctor({
		'transform': transform,
		'objectMode': false
	});
	s = new TransformStream({
		'objectMode': true
	});
	iStream = inspectStream.objectMode( onData );

	expected = [ 2, 4, 6 ];
	cnt = 0;

	s.pipe( iStream );
	s.write( '1' );
	s.write( '2' );
	s.write( '3' );
	s.end();

	function transform( chunk, enc, clbk ) {
		var v = chunk.toString();
		v = +v;
		v *= 2;
		clbk( null, {
			'value': v
		});
	}

	function onData( chunk ) {
		t.equal( chunk.value, expected[ cnt ], 'streams expected chunk' );
		cnt += 1;
		if ( cnt === expected.length ) {
			t.end();
		}
	}
});

tape( 'the returned constructor creates a stream which provides a method to destroy a stream', function test( t ) {
	var TransformStream;
	var count;
	var s;

	count = 0;

	TransformStream = ctor();
	s = new TransformStream();

	t.equal( typeof s.destroy, 'function', 'has destroy method' );

	s.on( 'error', onError );
	s.on( 'close', onClose );

	s.destroy( new Error() );

	function onError( err ) {
		count += 1;
		if ( err ) {
			t.ok( true, err.message );
		} else {
			t.ok( false, 'does not error' );
		}
		if ( count === 2 ) {
			t.end();
		}
	}
	function onClose() {
		count += 1;
		t.ok( true, 'stream closes' );
		if ( count === 2 ) {
			t.end();
		}
	}
});

tape( 'the returned constructor creates a stream which does not allow itself to be destroyed more than once', function test( t ) {
	var TransformStream;
	var s;

	TransformStream = ctor();
	s = new TransformStream();

	s.on( 'error', onError );
	s.on( 'close', onClose );

	// If the stream is closed twice, the test will error...
	s.destroy();
	s.destroy();

	function onClose() {
		t.ok( true, 'stream closes' );
		t.end();
	}
	function onError( err ) {
		t.ok( false, err.message );
	}
});
