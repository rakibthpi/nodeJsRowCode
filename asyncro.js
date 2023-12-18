const fs = require('fs');

const readFile = fs.readFile('./texts/read.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
    fs.writeFile('./texts/read2.txt', data, (err) => {
        if (err) {
            console.log(err)
        }
    })

})