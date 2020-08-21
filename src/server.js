const Database = require('./database/db')

const express = require('express') //I am placing the express request as a server in a constant
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')

const nunjucks = require('nunjucks')
//config nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true, //noChace is to save files
})

//configure static files(CCS, scripts, imagens)
server
//recive datas of req.body
.use(express.urlencoded({ extended: true }))
.use(express.static ("public"))
//configuring datas routes
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)
