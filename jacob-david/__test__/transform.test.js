'use strict';

const transform = require('../lib/transform');

describe('transform-test.js', () => {
    test('the transformation we applied should be returned if there are no errors', (done) {

    transform.readFile((error,data) => {
        expect(error).toBeNull();
        expect(data).toEqual('whatever we want after transformation');
        done();
    });
    });
});