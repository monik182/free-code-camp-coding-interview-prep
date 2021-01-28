const Node = function(element) {
  this.element = element;
  this.next = null;
};
const Kitten = new Node('Kitten');
const Puppy = new Node('Puppy');
const Cat = new Node('Cat');
const Dog = new Node('Dog');

Kitten.next = Puppy;
Puppy.next = Cat;
Cat.next = Dog;

