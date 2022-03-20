// // callbacks $asych
// // const posts =[
// //    {title: 'Post One', body:'This is post one'},
// //    {title: 'Post Two', body:'This is post one'}
// // ];
// // function getPosts(){
// //   setTimeout(()=>{
// //     let output =``;
// //   posts.forEach((post, index)=>{
// //     output += `<li>${post.title}<li>`;
// //   });
// //   document.body.innerHTML= output;
// // }, 1000);

// // }
// // function createPost(post, callback){
// //   setTimeout(()=>{
// //     posts.push(post);
// //     callback();
// //   }, 2000);
// // }

   
//   //  createPost({title: 'Post Three', body:'This is post three'}, getPosts);
//   //  promises
//   const posts =[
//     {title: 'Post One', body:'This is post one'},
//     {title: 'Post Two', body:'This is post one'}
//  ];
//  function getPosts(){
//    setTimeout(()=>{
//      let output =``;
//    posts.forEach((post, index)=>{
//      output += `<li>${post.title}<li>`;
//    });
//    document.body.innerHTML= output;
//  }, 1000);
 
//  }
//  function createPost(post){
//    return new Promise((resolve, reject)=> {setTimeout(()=>{
//     posts.push(post);
//     const error = false;
//     if(!error) {
//       resolve();
//     }else{
//       reject('Error:Something went wrong');
//     }

//    })
//    }, 2000);
//   }
//   createPost({title: 'Post Three', body:'This is post three'}).then(getPosts)
//   .catch(err=> console.log(err));
//   promise.all
//   const promise1 = Promise.resolve('Hello World')
//   const promise2 = 10;
//   const promise3 = new Promise((resolve, reject)=> setTimeout(resolve, 2000, 'Goodbye'));
//   const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res =>res.json());
// Promise.all([promise1, promise2, promise3,promise4]).then(values=>console.log(values));
// // async Await
// async function init(){
//   createPost({title: 'Post Three', body:'This is post three'});
//   getPosts();
// }
// init();
// Async with Fetch
// async function fetchUsers(){
//   const res = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await res.json();
//   console.log(data);
// }
// fetchUsers();
let value = await promise;

async function myDisplay() {
  let myPromise = new Promise(function(resolve, reject) {
    resolve("I love You !!");
  });
  document.getElementById("demo").innerHTML = await myPromise;
}

myDisplay();