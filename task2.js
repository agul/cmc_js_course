class Node {
  constructor(value, prev) {
    this.value = value;
    this.next = null;
    this.prev = prev;
  }
}

class List {
  constructor(value) {
    this.head = null;
    this.tail = null;
    if (typeof value !== 'number') {
      console.log('Not a number passed!');
    }
    this.head = new Node(value % 10);
    value = Math.floor(value / 10);
    this.tail = this.head;
    while (value !== 0) {
      this.append(value % 10);
      value = Math.floor(value / 10);
    }
  }

  append(value) {
    if (typeof value !== "number") {
      return null;
    }
    this.tail.next = new Node(value, this.tail);
    this.tail = this.tail.next;
    return this.tail;
  }

  find(value) {
    if (typeof value !== "number") {
      return null;
    }
    var ptr = this.head;
    while (ptr) {
        if (value == ptr.value) {
          return ptr;
        }
        ptr = ptr.next;
    }
    return null;
  }

  del(node) {
    if (!(node instanceof Node)) {
      return false;
    }
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    return true;
  }

  print() {
    var ptr = this.head;
    var str = "(";
    while (ptr) {
        str += ptr.value;
        ptr = ptr.next;
        if (ptr != null) {
            str += " -> ";
        }
    }
    str += ")";
    console.log(str);
  }

  print_to_int() {
    var ptr = this.head;
    var arr = [];
    while (ptr) {
        arr.push(ptr.value);
        ptr = ptr.next;
    }
    var str = arr.reverse().join('');
    console.log(str);
  }

}

function sum(a, b) {
  var list = null;
  var carry = 0;
  a = a.head;
  b = b.head;
  while (a || b) {
    var x = 0;
    var y = 0;
    if (a) {
      x = a.value;
      a = a.next;
    }
    if (b) {
      y = b.value;
      b = b.next;
    }
    const sum = x + y + carry;
    const digit = sum % 10;
    carry = Math.floor(sum / 10);
    if (list) {
      list.append(digit);
    } else {
      list = new List(digit);
    }
  }
  if (carry > 0) {
    list.append(carry);
  }
  return list;
}

var a = new List(1234);
var b = new List(28);
sum(a, b).print_to_int();

var aa = new List(989);
var bb = new List(11);
sum(aa, bb).print_to_int();