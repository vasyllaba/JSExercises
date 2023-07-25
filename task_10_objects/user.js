let user = {
    name: "Tom",
    age: 40,

    print() {
        console.log(this.name, this.age)
    }
};

user.print();
console.log(user.name)


