type User = {
    name: string;
    surname: string;
    email: string;
    password: string;
  };
  
  let currentUser: User = {
    name: "A",
    surname: "B",
    email: "john@example.com",
    password: "12345",
  };
  
  function createOrUpdateUser(initialValues: Partial<User>) {
    currentUser = { ...currentUser, ...initialValues };
  
    console.log("Update:", currentUser);
  }
  
  createOrUpdateUser({
    email: "user@mail.com",
    password: "password123",
  });