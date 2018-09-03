const express = require('express');

var app = express();

app.get('/',(req,res)=>{
    // res.status(200).send('Hello World!');
    res.status(404).send({
        error:'Page not found.',
        name:'Todo App v1.0'
    });
});

app.get('/users',(req,res)=>{
    res.send([{
        name:'Manish',
        age:24
    },{
        name:'Mike',
        age:27
    },{
        name:'Lucy',
        age:25
    }
]);
});

app.listen(3000);

module.exports.app = app;