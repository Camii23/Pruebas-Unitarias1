const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.users).not.toContain(user);
  });

  /*TAREA 2*/
test('find user by email', () => {
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);   
  userController.findByEmail(user);
  expect(userController.getUsers()).toContain(user);
});

test('find user by email', () => {
  let user = new User(123,"Camila", "camila@generation.org");
  userController.add(user);   
  userController.findByEmail(user);
  expect(userController.getUsers()).toContain(user);
});


/*TAREA 2*/ 
test('find user by Id', () => {
  let user = new User(1234,"Santiago", "santiago@generation.org");
  userController.add(user);   
  userController.findById(user);
  expect(userController.getUsers()).toContain(user);
});

