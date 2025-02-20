class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    };
};


class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    };

    append(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        };

        this.size++;
    };
};


const list = new LinkedList();

list.append(10);
list.append(20);
list.append(30);

console.log(list);

