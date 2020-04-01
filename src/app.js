// node module
const path = require('path');
// npm packages
const express = require('express');
const hbs = require('hbs');

const app = express(); // as express is a funcion we should assine a variable to get the output of that funcion

const publicpath = path.join(__dirname , '../public'); // path direction to get the public static direction
const hbsviews = path.join(__dirname, '../templates/views'); // path to get the views templates of hbs
const partialspath = path.join(__dirname,'../templates/partials') // path to get the partials (hea)

app.set('view engine' , 'hbs'); // setting up the view engine of express to the engine of hbs here 'view engine ' is the input and 'hbs ' is the output
app.set('views' , hbsviews) // setting up the views folter to another directory

hbs.registerPartials(partialspath) // re-registering the pertials directory of hbs here the partials are header and footer

app.use(express.static(publicpath)) // public static is set to use images css files and etc


app.get('/',(req,res)=> { 
    res.render('index' , {
        title: 'weather App',
        name: 'Harish Tagadghar'
    })
});

app.get('/about', (req,res)=> {
    res.render('about' , {
        title: 'About',
        name:'Harish Tagadghar'
    })
});
app.get('/weather', (req,res)=> {
    res.render('weather' , {
        title: 'weather',
        name:'Harish Tagadghar'
    })
});

app.get('*' , (req,res) => {
    res.render('404' , {
        title : '404',
        name: 'Harish Tagadghar'
    })
})

app.listen(3000,(req,res)=> {
    console.log('servier is running on port 3000');
    
})