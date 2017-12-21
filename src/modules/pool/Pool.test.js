import assert from 'assert';
import { Pool } from './Pool';

describe('Pool', () => {

    const template = {
        x: 0,
        y: 1
    };
        const factoryOfPoints = () => Object.assign({}, template);

    describe('.next', () => {

        it('correct factory creation', () => {
            const pointsPool = new Pool(factoryOfPoints);
            const point = pointsPool.next();
            assert.strictEqual(point.x, template.x);
            assert.strictEqual(point.y, template.y);
        });

        it('two callings of `.next()` return different object', () => {
            const pointsPool = new Pool(factoryOfPoints);
            const point1 = pointsPool.next();
            const point2 = pointsPool.next();
            assert.notStrictEqual(point1, point2);
            assert.deepEqual(point1, point2);
        });

    });

describe('.reset', () => {

    it('reset for two objects', () => {
        const pointsPool = new Pool(factoryOfPoints);
        const point1 = pointsPool.next();
        const point2 = pointsPool.next();

        pointsPool.reset();

        const point1Reused = pointsPool.next();
        const point2Reused = pointsPool.next();

        assert.strictEqual(point1, point1Reused);
        assert.strictEqual(point2, point2Reused);
    });

});

});