const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();

const publicpath = path.join(__dirname , '../public');
const hbsviews = path.join(__dirname, '../templates/views');
const partialspath = path.join(__dirname,'../templates/partials')

app.set('view engine' , 'hbs');
app.set('views' , hbsviews)

hbs.registerPartials(partialspath)

app.use(express.static(publicpath))


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
})

app.listen(3000,(req,res)=> {
    console.log('servier is running on port 3000');
    
})