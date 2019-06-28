const arr=[{name:'frank', age:20},
            {name:'Kiran', age:45},
            {name:'Joe', age:33},
            {name:'Benny', age:25}]

const names = arr.map((value) => {
    return value.name
})

console.log("Names", names)