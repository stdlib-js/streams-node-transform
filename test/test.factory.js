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
var noop = require( '@stdlib/utils-noop' );
var TransformStream = require( './../lib/main.js' );
var factory = require( './../lib/factory.js' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof factory, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an options argument which is not an object', function test( t ) {
	var createStream;
	var values;
	var i;

	values = [
		'5',
		5,
		true,
		void 0,
		null,
		NaN,
		function noop() {},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws type error when provided '+values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			createStream = factory( value );
			createStream( noop );
		};
	}
});

tape( 'the function returns a factory function', function test( t ) {
	var createStream = factory();
	t.equal( typeof createStream, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a factory function (options)', function test( t ) {
	var createStream = factory( {} );
	t.equal( typeof createStream, 'function', 'returns a function' );
	t.end();
});

tape( 'the function returns a function which throws an error if provided an a transform which is not a function', function test( t ) {
	var createStream;
	var values;
	var i;

	createStream = factory();

	values = [
		'5',
		5,
		true,
		void 0,
		null,
		NaN,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws type error when provided '+values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			createStream( value );
		};
	}
});

tape( 'the function returns a function which throws an error if provided a flush argument which is not a function', function test( t ) {
	var createStream;
	var values;
	var i;

	createStream = factory();

	values = [
		'5',
		5,
		true,
		void 0,
		null,
		NaN,
		{},
		[]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws type error when provided '+values[i] );
	}
	t.end();
	function badValue( value ) {
		return function badValue() {
			createStream( noop, value );
		};
	}
});

tape( 'the function returns a factory function which creates stream instances', function test( t ) {
	var createStream;
	var i;

	createStream = factory();

	// Provide just a transform function...
	for ( i = 0; i < 10; i++ ) {
		t.equal( createStream( noop ) instanceof TransformStream, true, 'returns a stream instance' );
	}
	// Provide both transform and flush functions...
	for ( i = 0; i < 10; i++ ) {
		t.equal( createStream( noop, noop ) instanceof TransformStream, true, 'returns a stream instance' );
	}

	t.end();
});
