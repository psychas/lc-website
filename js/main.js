/**DATATYPES DEFINITIONS */

// let means that we can update the value of the variable
let x = 4
let y = 5

// const means the value will never change
const a = 24
const vasilis = 100 // number
const name = 'Steve' // string
let canIFly = false //boolean

// Objects
const post = {
    title: 'Welcome to berlin',
    date: '10.12.2016',
    author: name,
    likes: {
        count: 150,
        source: 'The internet',
    },
}

// I wanna see things in the console
console.log(name)
console.log(post)
console.log(post.title)
console.log(post.likes.count)

//Arrays
let data = [123, 'steve']
let response = [{ age: 150 }, { height: 150 }, post]


console.log(data)
console.log(response)
console.table(response)