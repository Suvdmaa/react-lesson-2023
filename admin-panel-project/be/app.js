console.log('it it my app.js')
// import necessary module
const express = require('express')
const cors = require('cors')
const fs = require('fs')


// configuration of modules
const app = express()
const PORT = 8080

app.use(cors())
app.use(express.json())

app.get('/users', (request, response) => {

    fs.readFile('./public/data/users.json', 'utf-8', (readError, readData) =>{
        if(readError){
            response.json({
                status: 'file reader error',
                data: []
            })
        }

        const objectData = JSON.parse(readData)

        response.json({
            status: 'success',
            data: objectData,
        })
    })
})

app.post('/users', (request, response) =>{
    const body = request.body
    console.log(body)

    const newUser = {
        id: Date.now().toString(),
        username: body.username,
        age: body.age,
        firstname: body.firstname,
        lastname: body.lastname,
        phonenumber: body.phonenumber,
        email: body.email.value,
        rowradio: body.rowradio,
        disabled: body.disabled,
        password: body.password,
    }
    fs.readFile('./public/data/users.json', 'utf-8', (readError, readData) => {
        if(readError){
            response.json({
                status: 'file does not exist',
                data: []
            })
        } 
        console.log(readData)
        console.log(typeof readData)



        const dataObject = JSON.parse(readData) // object bolgodog 
    
        dataObject.push(newUser)
      
        fs.writeFile('./public/data/users.json', JSON.stringify(dataObject), (writeError) => {
            if(writeError){
                response.json({
                    status: 'Error during file write',
                    data: []
                })
            }
            response.json({
                status: 'success',
                data: dataObject,
            })
        })
        
    })   
})


app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})