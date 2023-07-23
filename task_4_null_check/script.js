let user = {
    name: "Tom",
    age: null
};
let personAge = user.age ?? 18;
document.write("Person age: " + personAge);