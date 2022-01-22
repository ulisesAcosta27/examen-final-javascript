function main() {
  const signUpButton = document.getElementById('signUp');
  const signInButton = document.getElementById('signIn');
  const container = document.getElementById('container');

  signUpButton.addEventListener('click', () => {
    container.classList.add('right-panel-active');
  });

  signInButton.addEventListener('click', () => {
    container.classList.remove('right-panel-active');
  });
  
};
main()

document.getElementById('createAccount').addEventListener('click', () => {
  const UserData = {
    name: document.getElementById('nameData').value,
    email: document.getElementById('emailData').value,
    password: document.getElementById('passwordData').value
  }

  fetch('https://tiendavirtualmern.herokuapp.com/api/users', {
    method: 'POST',
    body: JSON.stringify(UserData),
    headers: {
        "Content-Type": "application/json"
    }
  })
  
  .then(res => res.json())
  .then(data => console.log(data))
  if(UserData.name == "" || UserData.email == "" || UserData.password == ""){
    alert('Algo paso')
  }else if (UserData.name || UserData.email || UserData.password){
    alert('Cuenta ya creada')
  }else{
    alert('cuenta creada')
  }
})

document.getElementById("registrarse").addEventListener("click", (e) => {
  e.preventDefault();
  const loginData = {
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };
  
  fetch("https://tiendavirtualmern.herokuapp.com/api/users/login", {
    method: "POST",
    body: JSON.stringify (loginData),
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => {
      alert(error)
    });
    if(loginData.email && loginData.password){
      alert('ingresaste a tu cuenta con exito')
    }else if(loginData.email == "" || loginData.password == ""){
      alert('por favor completo los demas espacios en blanco')
    }
});