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
//     const keyCode = document.querySelector('keycode');
//     const codes = document.querySelector('code');

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


// let intervalID;

// function startChange(){
//     if (!intervalID) {
//         intervalID = setInterval(randomColorChange, 1000);
//     }
    
// }


// function randomColorChange() {
//     const randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     document.body.style.backgroundColor = `#${randomColor}`;
// }


// function colorChange (){
//             if (document.body.style.backgroundColor !== 'rgb(4, 23, 36)'){
//                 document.body.style.backgroundColor = 'rgb(4, 23, 36)'
//             } else {
//                 document.body.style.backgroundColor = 'white'
//             }
            
// }

// function stopChange(){
//     clearInterval(intervalID);
// }

// document.getElementById('start').addEventListener('click', startChange);
// document.getElementById('stop').addEventListener('click', stopChange);


// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/llsonkimm/repos');



// xhr.onreadystatechange = function () {
//     if (this.readyState === 4 && this.status === 200) {
//         const data = JSON.parse(this.responseText);

//         data.forEach(repo => {
//             const li = document.createElement('li');
//             li.innerHTML = `<strong>${repo.name} </strong> - ${repo.description}`;
//             document.querySelector('#about').appendChild(li);
//         });
//     }
// };



// xhr.send();

// const jokeGenerator = document.getElementById('jokes');
// const jokeBtn = document.getElementById('joke-btn');

// const generateJokes = () =>{

//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

//     xhr.onreadystatechange = function () {
//         if (this.readyState === 4) {
//             if (this.status === 200) {
//                 jokeGenerator.innerHTML = JSON.parse(this.responseText).value;
//             }
//         } else {
//             jokeGenerator.innerHTML = 'Something went wrong, refresh the page again'
//         }
//     }

//     xhr.send();

// };




// jokeBtn.addEventListener('click', generateJokes);
// document.addEventListener('DOMContentLoaded', generateJokes);
// jokeBtn.addEventListener('click', generateJokes);


fetch('http://httpstat.us/404')
    .then((respose) => {
        return respose
            .then(() => {
                console.log('succes');
            })
            .catch((error) => {
                console.log(error);
            });
})