const express = require('express')
const path = require('path')
const app = express()
const PORT = 4000

app.set('views', path.join(__dirname, 'view'))
app.set('view engine', 'ejs')

//index route
app.get('/', (req, res) => {
    res.render('index')
})

//Index route
app.get('/participants', (req, res) => {
    res.render('participants')
})



app.listen(PORT, ()=> console.log(`Server started at port ${PORT}`))