// importo l'express
import express from "express";
// importo il json dalla mia cartella data
import fs from "fs";


// applicazione d'ascolto
const app = express();

// qui creao la porta del localhost
const port = 3001;

// servve per far si che vengano prelevati gli elementi della cartella public senza che debba ogni volta inserire la rotta statica per ognuno di essi
app.use(express.static("public"))


// rotte delle API 

// rotta principale
app.get("/", (req, res)=>{
    const resData= {
        data: "<h1>Server del mio blog di fumetti!!</h1>"
    }

    res.json(resData)
})

// bacheca
// app.get("/bacheca", (req, res)=>{
//     res.json({
//         posts: "qui ci sarà array di post",
//         count: "qui ci sarà il numero di post"
//     })
// })

// api dei comics
app.get("/comicslist", (req, res)=>{  //il mio comicslist è la bacheca dell'esercizio
    const dataJson = fs.readFileSync("./data/comics.json")
    const comicsList = JSON.parse(dataJson)
    const resData ={
        data: comicsList,
        count: comicsList.length,
        success: true
    }
    res.json(resData)
})

// qui verfico che il server sia in ascolto
app.listen(port, ()=>{
    console.log("server in ascolto")
})