function containsCycle(firstNode){

var runner_1 = firstNode;
var runner_2 = firstNode;

while(runner_1 && runner_1.next){
    runner_1 = runner_1.next.next;
    runner_2 = runner_2.next;

    if(runner_1 === runner_2){
        return true;
    }
}

return false;
}


function LinkedListNodes(value){

this.value = value;
this.next = null;
}

var a = new LinkedListNodes("A");
var b = new LinkedListNodes("B");
var c = new LinkedListNodes("C");
var d = new LinkedListNodes("D");
var e = new LinkedListNodes("E");


a.next = b;
b.next = c;
c.next = d;
d.next = a;

console.log(containsCycle(a));