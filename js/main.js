/**DATATYPES DEFINITIONS */

// let means that we can update the value of the variable
let x = 4
let y = 5

// const means the value will never change
const a = 24
const vasilis = 100 // number
const name = 'Steve' // string
let canIFly = false //boolean

console.log(name[0])
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
let response = [{ age: 150 }, { height: 150 }, [{ steve: post }]]

console.log(data)
console.log(data[0])
console.log(response)
console.table(response)

// Arrow Functions
const addTwoNumbers = (x, y) => {
    const result = x + y
    console.log(result)
}

addTwoNumbers(10, 7)
addTwoNumbers(a, post.likes.count)
addTwoNumbers('Steve', 'Stevenson')
addTwoNumbers(false, 100)

let wikipediaLink = document.getElementById('wiki-link')
// let wikiLink = document.querySelector('.class')
// let wikiLink = document.querySelectorAll('#id')
wikipediaLink.innerHTML = 'I AM THE NEW LINK FOR WIKIPEDIA'
wikipediaLink.style.backgroundColor = 'red'
wikipediaLink.style.border = '5px dashed blue'
console.log(wikipediaLink)

let raveElement = document.getElementsByClassName('rave-image')[0]

raveElement.addEventListener('click', (event) => {
    console.log(event)
    raveElement.style.transform = 'rotate(360deg)'
})

////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////

// let steve = { age: 15, hair: 'blue' }

// steve.age
// steve['age']

// let { age } = steve

const { createApp } = Vue

createApp({
    data() {
        return {
            messages: [
                {
                    text: 'Hello Vue!',
                    sender: 'George',
                    timestamp: '13.34',
                },
                {
                    text: 'Hello Steve!',
                    sender: 'Jenny',
                    timestamp: '13.35',
                },
                {
                    text: 'Goodbye Vue!',
                    sender: 'Vue',
                    timestamp: '14.34',
                },
                {
                    text: 'VUE',
                    sender: 'Steve',
                    timestamp: '18.34',
                },
                {
                    text: 'Hello Steve!',
                    sender: 'Jenny',
                    timestamp: '13.35',
                },
                {
                    text: 'Goodbye Vue!',
                    sender: 'Vue',
                    timestamp: '14.34',
                },
                {
                    text: 'VUE',
                    sender: 'Steve',
                    timestamp: '18.34',
                },
                {
                    text: 'Hello Steve!',
                    sender: 'Jenny',
                    timestamp: '13.35',
                },
                {
                    text: 'Goodbye Vue!',
                    sender: 'Vue',
                    timestamp: '14.34',
                },
                {
                    text: 'VUE',
                    sender: 'Steve',
                    timestamp: '18.34',
                },
                {
                    text: 'VUE 2',
                    sender: 'Steve',
                    timestamp: '18.34',
                },
            ],
        }
    },
}).mount('#vue-container')
