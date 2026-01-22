// create a function calles Signup yjay takes one object as an argumrnt.
// . Use destructuring to evtract username and email into variables.
//use the Rest Operator to capture all other field (like passsword, city, zip) into a single object calles metadata.
///.Return a nes=w object that contsins the username, a new boolean property isAdmin: false, and the metadata(using the spread operator)

function Signup(username, email, ...metadata) {
  return {
    username,
    email,
    isAdmin: false,
    ...metadata
  };
}
const result = Signup({
  username: "kundan",
  email: "kundan@gmail.com",
  password: "12345",
  city: "Delhi",
  zip: 110001
});

console.log(result);

