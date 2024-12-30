export class Stack {
    private internalArray: number[];
    private name: string;

    constructor(name: string) {
        this.internalArray = [];
        this.name = name;
    }

    push(element: number): void {
        this.internalArray.push(element);
    }

    pop(): number | undefined {
        return this
            .internalArray.pop();
    }

    peek(): number | undefined {
        return this
            .internalArray[this.internalArray.length - 1];
    }

    size(): number {
        return this
            .internalArray.length;
    }

    getArray(): number[] {
        return this.internalArray.slice().reverse();
    }

    getName(): string {
        return this.name;
    }
}

export default Stack