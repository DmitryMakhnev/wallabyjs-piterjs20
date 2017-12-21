/**
 * @template T
 */
export class Pool {

    /**
     * @template T
     * @param {function(number, Array.<T>): T} factory
     */
    constructor(factory) {
        this._list = [];
        this._currentIndex = 0;
        this._factory = factory;
    }

    /**
     * @template T
     * @return {T}
     */
    next() {
        const currentIndex = this._currentIndex; /*?.*/
        let currentObject;

        if (this._list[currentIndex] != null) {
            currentObject = this._list[currentIndex];
        } else {
            currentObject = this._factory(this._currentIndex, this._list);
            this._list.push(currentObject);
        }

        this._currentIndex += 1;
        return currentObject;

    }

    /**
     * @return {Pool}
     */
    reset() {
        this._currentIndex = 0;
        return this;
    }

}