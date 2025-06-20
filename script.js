// const clicker = document.querySelector('.section');


// // const onClick = () => console.log('click event');
// const onClick = () => {
//     if (document.body.style.backgroundColor !== 'black') {
//         document.body.style.backgroundColor = 'black';
//         document.body.style.color = 'white';
//     } else {
//         document.body.style.backgroundColor = 'white';
//         document.body.style.color = 'black';
//    }
// };




// // clicker.addEventListener('click', onClick);
// // clicker.addEventListener('dblclick', onClick2);


// const logo = document.querySelector('img');

// function onClick3(e) {
//     if (e.target.style.backgroundColor !== 'black') {
//         e.target.style.backgroundColor = 'black';
//     } else {
//         e.target.style.backgroundColor = 'white';
//     }
//     // console.log(e.target);
// }

// function onDrag(e) {
//     document.querySelector('h1').textContent = `X ${e.clientX} Y ${e.clientY}`;
// }


// logo.addEventListener('click', onClick3);
// logo.addEventListener('drag', onDrag);

// window.addEventListener('keydown', (e) => {
//     const keyed = document.getElementById('container');
    // const keyCode = document.querySelector('keycode');
    // const codes = document.querySelector('code');

//     keyed.innerHTML = 
//          `<div class="card">
//             <h3 class="title">e.key</h3>
//             ${e.key === ' ' ? 'space' : e.key}
//         </div>
//         <div class="card">
//             <h3 class="title">e.keyCode</h3>
//             ${e.keyCode}
//         </div>
//         <div class="card">
//             <h3 class="title">e.code</h3>
//             ${e.code}
//         </div>`;
    
// });



// function onKey(e) {
//     console.log(e.key);
// }

// keyed.addEventListener('key', onKey);



let intervalID;

function colorChange() {
    if (!intervalID) {
        intervalID = setInterval(startChange, 1000);
    }
    
}

function startChange() {
    if (document.body.style.backgroundColor !=='black') {
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    } else {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
    }
}

// function stopChange(){
//     clearInterval(intervalID);
// }

// document.getElementById('btn').addEventListener('click', startChange);
// document.getElementById('btn').addEventListener('click', stopChange);