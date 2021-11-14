const formulario = document.getElementById("formulario");
const inputs = document.querySelectorAll("#formulario input");

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,25}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const validarFormulario = () => {
    switch (e.target.name){
        case "names":
            if(expresiones.nombre.test(e.target.value)){

            } else{
                alert("El campo nombre se debe de rellenar con letras y espacios, pueden llevar acentos.");
                return false;
            }
        break;
        case "password":
            if(expresiones.password.test(e.target.value)){

            } else{
                alert("La contraseña debe de ser mínimo de  4 y máximo de 12 digitos.");
                return false;
            }
        break;
        case "rpassword":
            if(expresiones.password.test(e.target.value)){

            } else{
                alert("La contraseña debe de ser mínimo de  4 y máximo de 12 digitos.");
                return false;
            }
        break;
        case "email":
            if(expresiones.correo.test(e.target.value)){

            } else{
                alert("Ingresa tu correo correctamente");
                return false;
            }
        break;
        
    }
}

inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});

formulario.addEventListener("submit", (e) => {
 e.preventDefault();
});