export class Stack {
    private internalArray: Number[];
    // Private array to store stack elements

    constructor() {
        this.internalArray = [];
    }

    push(element: Number): void {
        this.internalArray.push(element);
    }

    pop(): Number | undefined {
        return this
            .internalArray.pop();
    }

    peek(): Number | undefined {
        return this
            .internalArray[this.internalArray.length - 1];
    }

    size(): Number {
        return this
            .internalArray.length;
    }

    getArray(): Number[] {
        return this.internalArray;
    }
}

export default Stack