console.log('day - 56 - REST API')

const express = require('express')
const fs = require('fs')
const cors = require('cors')
const { stringify } = require('querystring')


const app  = express()
const PORT = 8080

app.use(cors())
app.use(express.json())

app.get('/', (request, response) =>{
    response.send('<h1>Express REST API is running</h1>')
})


app.get('/timers', (request, response) =>{

    fs.readFile('./data/data.json', 'utf-8', (readError, readData) =>{
        if(readError){
            response.json({
                status: 'file not found',
                data: ''
            })
        }

        const timerData = JSON.parse(readData)
        console.log(timerData)
        console.log(typeof timerData)

        response.json({
            status: 'success',
            data: timerData,
        })
    })
})

app.post('/timers', (request, response) => {
    const body = request.body
    const newTimer = {
        id: body.id,
        project: body.project,
        title: body.title,
        elapsed: body.elapsed
    }
    console.log(newTimer)
    fs.readFile('./data/data.json', 'utf-8', (readError, readData) => {
        if(readError){
            response.json({
                status: 'file does not exist',
                data: []
            })
        }
        const dataObject = JSON.parse(readData)

        dataObject.push(newTimer)

        fs.writeFile('./data/data.json', JSON.stringify(dataObject), (writeError) => {
            if(writeError){
                response.json({
                    status: 'Error during file write',
                    data: []
                })
            }
            response.json({
                status: 'success',
                data: dataObject
            })
        })
    })
})

app.put('/timers', (request, response) => {
    const body = request.body
    console.log(body)

    fs.readFile('./data/data.json', 'utf-8', (readError, readData) => {
        if(readError){
            response.json({
                status: 'file read error',
                data: []
            })
        }
        console.log(readData)
        const savedData = JSON.parse(readData)
        const changedData = savedData.map((d) => {
            if(d.id === body.id){
                d.project = body.project
                d.title = body.title
              
            }
            return d
        })

        fs.writeFile('./data/data.json', JSON.stringify(changedData), (writeError) => {
            if(writeError){
                response.json({
                    status: 'file write error',
                    data: []
                })
            }
            response.json({
                status: 'success',
                data: changedData
            })
        })
    }) 
})

app.delete('/timers', (request, response) => {
    const body = request.body
    fs.readFile('./data/data.json', 'utf-8', (readError, readData) => {
        if(readError) {
            response.json({
                status: 'file reader error',
                data: []
            })
        }
        const readObject = JSON.parse(readData)

        const filteredObjects = readObject.filter((o) => o.id !== body.timerId)

        fs.writeFile(
            './data/data.json', 
            JSON.stringify(filteredObjects),
            (writeError) => {
                if (writeError) {
                    response.json({
                      status: "write file error",
                      data: [],
                    });
                  }
                  response.json({
                    status: "success",
                    data: filteredObjects,
                  });
            }
        )
    })
})


app.listen(PORT , () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
