var Parent = function() {};

Parent.prototype.myF = function() {
  console.log('Hello');
};


function Child() {
  Parent.call(this);
  this.name = 'Test';
};
Child.prototype = Object.create(Parent.prototype);
Child.prototype.constructor = Child;

Child.prototype.myF = function() {
  console.log(this);
  Object.getPrototypeOf(this).myF();
  console.log("world is beautiful.");
};

childInstance = new Child();
childInstance.myF();
