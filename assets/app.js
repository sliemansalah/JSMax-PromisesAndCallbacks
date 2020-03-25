const button  = document.querySelector('button');
const output  = document.querySelector('p');

function trackUserHandler() {
console.log('Clicked');
navigator.geolocation.getCurrentPosition(posData => {
    console.log(posData);
},err => {
    console.log(err);
});
console.log('Getting position ...');
};



button.addEventListener('click', trackUserHandler);

let result = 0;

for(let i=0; i<1000000; i++) {
    result +=i;
}

console.log(result);
