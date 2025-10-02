import { LinkedList } from "./linkedlist.js";

const list = LinkedList();
list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
list.removeAt(1);
list.insertAt("horse", 3);
console.log(list.toString());