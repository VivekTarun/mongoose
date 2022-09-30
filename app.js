const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/fruitDB")

const fruitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please check your data entry , no name specified."]
    },
    rating: {
        type: Number,
        min: 1,
        max: 15
    },
    review: String
});

const Fruit = mongoose.model("fruits", fruitSchema);

const apple = new Fruit({
    name: "Apple",
    rating: 7,
    review: "preety soild as a fruit"
})

const kiwi = new Fruit({
    name: "kiwi",
    score: 10,
    review: "The best fruit"
})

const orange = new Fruit({
    name: "orange",
    score: 10,
    review: "The best fruit"
})

const banana = new Fruit({
    name: "banana",
    score: 10,
    review: "The best fruit"
})

const peach = new Fruit({
    name: "peach",
    rating: 3,
    review: "the peach"
})

// Fruit.updateOne({ _id: "6336f7fb4c90eead3aa35848" }, { name: "honey" }, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Sucessfully updated the documet.");
//     }
// })

// Fruit.deleteOne({ name: "peach" }, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("succesfully deleted the document");
//     }
// })

// Fruit.insertMany([apple, kiwi, orange, banana, peach], (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("Succesfully saved all the fruits");
//     }
// });
// here fruits is collections

// Fruit.find((err, fruits) => {
//     if (err) {
//         console.log(err);
//     } else {
//         mongoose.connection.close();
//         fruits.forEach((fruits) => {
//             console.log(fruits.name);
//         })
//     }
// }
// peach.save();
//-------------------------------------------------------

const personSchema = new mongoose.Schema({
    name: String,
    age: Number,
    // relationship whit fruits DB
    favouriteFruit: fruitSchema
})
const Person = new mongoose.model("person", personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review: "Great fruit"
});

const person = new Person({
    name: "tarun",
    age: 22,
    favouriteFruit: pineapple
})
person.save((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("saved");
    }
});

// Person.deleteMany({ name: "vivek" }, (err) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("deleted");
//     }
// })

// person.save();