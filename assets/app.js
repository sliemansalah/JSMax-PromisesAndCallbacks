const button  = document.querySelector('button');
const output  = document.querySelector('p');

const setTimer = (duration) => {
    const promise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, duration);
    });
    return promise;
}

function trackUserHandler() {
// console.log('Clicked');
navigator.geolocation.getCurrentPosition(
    posData => {
       setTimer(2000).then(data=> {
           console.log(data,posData); 
       });
},err => {
    console.log(err);
});
setTimer(1000).then(()=>{
    console.log('Timer done');
})
console.log('Getting position ...');
};



button.addEventListener('click', trackUserHandler);

let result = 0;

for(let i=0; i<1000000; i++) {
    result +=i;
}

// console.log(result);
