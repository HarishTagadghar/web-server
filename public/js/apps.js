console.log('clint side js');


//usely when we use two .js nodemon gives a error that port is already in use 
// fix for that error is step 1) run this command in terminal (netstat -ano | findstr : yourportnumber) 2) step (tskill 16554) the number after tskill is a random number which we get in the first step we get some result the number is in listening   

let submit = document.querySelector('form')
let input = document.querySelector('input');
let msg_1 = document.querySelector('#msg-1') 
let msg_2 = document.querySelector('#msg-2') 

submit.addEventListener('submit', (e) => {
    e.preventDefault();

    msg_1.textContent = 'loading..';
    msg_2.textContent = ''

    fetch(`http://localhost:3000/address?addres=${input.value}`).then((respond)=>{ // fetching the localhost api 
    respond.json().then((data)=>{
     if(data.error){
         msg_1.textContent = data.error
     }else{
        msg_1.textContent = data.location;
        msg_2.textContent = data.forecast;
        console.log(data.forecast,data.location);
     }
 
        
    })
})
input.value = ''

})