console.log('Hello World!');
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
 var number = document.getElementById("number").value;
if (regx.test(number)) {
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'transection is successful',
    showConfirmButton: true
  });
  document.cookie = new Date().toLocaleDateString()+","+new Date().toLocaleTimeString()+","+input.value;
  con.innerHTML=`<h2 class='text-success'>your transection is successful</h2>` ;

}else{
 document.getElementById("number").style.borderColor="red";
}
  
  
});
}else{
  var data = cok.split(',');
  alert(data);
  con.innerHTML=`<h2 class='text-success'>Your prize money has been sent to ${data[2]} on ${data[0]}(mm/dd/yy) at ${data[1]} </h2>`
  
  
}





function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}