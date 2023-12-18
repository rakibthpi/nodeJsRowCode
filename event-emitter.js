const EventEmitter = require('events');
const myEmitter = new EventEmitter();

myEmitter.on('birthday', () => {
    console.log("Yaaa hoooo ")
})

myEmitter.on('birthday', (gift) => {
    console.log(`i will send a ${gift}`)
})

myEmitter.emit('birthday', "Bike")