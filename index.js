const express = require("express")
const port = 3000
const app = express()

app.use(express.static('public'))
app.use(express.json())

let updates = []

// Fill in your request handlers here
/* req.body
        clienp\tm emotntUpdates: Array<SetColor>
        clientSequence: number
    res.body
        updates: Array<SetColor>
        sequence: number
    SetColor
        Array<number, number, string>

*/

app.post("/updates", (req, res) => {
    const clientUpdates = req.body.clientUpdates
    const clientSequence = req.body.clientSequence

    updates = [...updates , ...clientUpdates]
    // same as updates.concat(clientUpdates), above code creates a new array though
    res.send({
        updates: updates.slice(clientSequence),
        sequence: updates.length
    })
})

app.listen(port, () => {
    console.log(`App started on port ${port} !`)
})