const express = require("express")
const port = 3000
const app = express()

app.use(express.static('public'))
app.use(express.json())

let updates = []
// Fill in your request handlers here
/* req.body
        clientUpdates: Array<SetColor>
        clientSequence: number
    res.body
        updates: Array<SetColor>
        sequence: number
    SetColor
        Array<number, number, string>

*/
app.post('/updates', (req, res) => {
// ...

})

app.listen(port)