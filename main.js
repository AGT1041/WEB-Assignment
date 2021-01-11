let button=document.querySelector("menue-but");
let menue=document.querySelector(".menue");
let menueout=false;

menue.style.marginLeft="-400px";
function menuestatus(){
  if(menueout==false){
    menue.style.marginLeft="0px";
    menueout=true
  }
  else if (true) {
    menue.style.marginLeft="-400px";
    menueout=false
  }
}
/*let myPost={
title:"my first post",
body:" this is all the info"
}*/

let form = document.getElementById('form')
form.addEventListener('submit',function(e){
 e.preventDefault();

  let title=document.getElementById('title').value
  let body=document.getElementById('body').value
  fetch('https://jsonplaceholder.typicode.com/posts',{
    method: "POST",
    body: JSON.stringify({
      title:title,
      body:body
    }),
    headers:{
      "Content-Type":"application/json; charset=UTF-8"
    }

  })
  .then(function(response) {
    return response.json();
  })
    .then(function(data){
    console.log('responsr data',data);
    let result=document.querySelector(".result")
    result.innerHTML=`<p>Title is ${data.title}</p>
     <p> Data body is ${data.body}`
    })
    .catch(function(error){
      console.error(error);

    })

})
