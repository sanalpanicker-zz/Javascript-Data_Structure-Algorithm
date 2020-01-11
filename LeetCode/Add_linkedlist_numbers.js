// You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4) --> 342 + 465
// Output: 7 -> 0 -> 8 --> 807

//  Amazon Microsoft Bloomberg Airbnb Adobe

function LinkedListNodes(value) {
  this.value = value;
  this.next = null;
}

const l1 = new LinkedListNodes(2);
const l12 = new LinkedListNodes(4);
const l13 = new LinkedListNodes(3);

l1.next = l12;
l12.next = l13;

const l2 = new LinkedListNodes(5);
const l22 = new LinkedListNodes(6);
const l23 = new LinkedListNodes(4);

l2.next = l22;
l22.next = l23;

function AddLLnodes(l1, l2) {
  const l3 = new LinkedListNodes(0);
  let carry = 0;
  let node = l3;
  while (l1 !== null || l2 !== null || carry !== 0) {
    console.log(l1, l2, carry);
    let val = 0;
    if (carry !== 0) {
      val += carry;
    }
    carry = 0;
    if (l1 !== null) {
      val += l1.value;
      l1 = l1.next;
    }
    if (l2 !== null) {
      val += l2.value;
      l2 = l2.next;
    }
    if (val > 9) {
      val = val - 10;
      carry = 1;
    }
    node.next = new LinkedListNodes(val);
    node = node.next;
  }
  return l3.next;
}

const answer = AddLLnodes(l1, l2);
console.log(answer, answer.next, answer.next.next, answer.next.next.next);
