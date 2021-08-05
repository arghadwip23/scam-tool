console.log('Hello World!');
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
}

  
  
});



btn.addEventListener("click" , () =>{
 var number = document.getElementById("number").value;
if (regx.test(number)) {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
}else{
 document.getElementById("number").style.borderColor="red";
}
  
  
});