const express = require("express");
const bodyParser = require("body-parser")
const mongodb = require("mongodb");
const objectId = require('mongodb').objectId

const app = express()


app.use(bodyParser.urlencoded({ extended : true}));
app.use(bodyParser.json());

app.listen(8080)

var db =new mongodb.Db(
    'instagram',
    new mongodb.Server('localhost' , 27017 , {}),
    {}
)

app.get("/" , (req , res)=>{
    res.send({ msg :"ola mundo"})
})


app.post("/api" , function(req , res){
    var dados = req.body;

    db.open( function(err , mongoClient){
        mongoClient.collection('postagens' , function(err , collection){
            collection.insert(dados , function(err , records){
                if(err){
                    res.json(err);
                }else{
                    res.json(records);
                }

                mongoClient.close();
            })
        })
    })
})

app.get('/api' , (req , res)=>{
    db.open( (err , mongoClient)=>{
        mongoClient.collection( 'postagens' , function(err , collection){
            collection.find().toArray(function(err , results){
                if(err){
                    res.json(err);
                }else{
                    res.json(results)
                }

                mongoClient.close();
            })
        })
    })
})


app.get('/api/:id' , function(req, res ){
     db.open((err , mongoClient)=>{
         mongoClient.collection('postagens' , function(err , collection){
             collection.find(objectId(req.params.id)).toArray(function(err , results){
                 if (err){
                     res.json(err);
                 }else{
                     res.json(results)
                 }

                 mongoClient.close();
             })
         })
     })
})