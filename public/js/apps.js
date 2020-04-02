console.log('clint side js');

fetch('http://localhost:3000/address?addres=los%20angelas').then((respond)=>{ // fetching the localhost api 
    respond.json().then((data)=>{
        console.log(data.forecast,data.location);
        
    })
})
//usely when we use two .js nodemon gives a error that port is already in use 
// fix for that error is step 1) run this command in terminal (netstat -ano | findstr : yourportnumber) 2) step (tskill 16554) the number after tskill is a random number which we get in the first step we get some result the number is in listening   
