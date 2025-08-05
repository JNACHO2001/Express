const url = "http://localhost:3000/login";
const form = document.getElementById("formLogin");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const correo =document.getElementById("email").value
  const clave =document.getElementById("password").value

  const response = await fetch(url,{
    method:"POST",
    headers:{"Content-type":"application/json"},
    body:JSON.stringify({correo,clave})

  })

  const datos = await response.json()
  if (datos === true) {
    alert("estamos dentro")
   
    
    
  }else{
    alert("no  ingresaste")
  }
});
