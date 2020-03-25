const button  = document.querySelector('button');
const output  = document.querySelector('p');

const getPosition = (opts) => {
    const promise = new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(success => {
            resolve(success)
        }, err => {
            reject(err);
    },opts)
    });
    return promise;
}

const setTimer = (duration) => {
    const promise = new Promise( (resolve, reject) => {
        setTimeout(() => {
            resolve('Done');
        }, duration);
    });
    return promise;
}

async function trackUserHandler() {
// console.log('Clicked');
    // let positionData;
    let posData;
    let timerData;
    try {
         posData= await getPosition();
         timerData= await setTimer(2000);
        console.log(timerData, posData);
    } catch (error) {
        console.log(error);
    }
  
    
    //  .then(posData => {
    //     positionData=posData;
    //    return setTimer(2000);
    // })
    // .catch(err => {
    //     console.log(err);
    //     console.log('on we go ..');
    // })
    // .then(data => {
    //     console.log(data,positionData);
    // })
// setTimer(1000).then(()=>{
//     console.log('Timer done');
// })
// console.log('Getting position ...');
};



button.addEventListener('click', trackUserHandler);

let result = 0;

for(let i=0; i<1000000; i++) {
    result +=i;
}

// console.log(result);
