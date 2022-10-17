//variables con las que pinto el total dinamicamente en el html
let select = document.querySelector(".form-select");
let divTotal = document.querySelector(".total");
let cantidad = document.querySelector(".cantidad");

//variables con las que armo la ventana modal con los datos
let nombre = document.querySelector(".nombre");
let apellido = document.querySelector(".apellido");
let correo = document.querySelector(".correo");
let resumen = document.querySelector(".resumen");

//funcion para actualizar el total en el html
//recibe la cantidad saca del input
//recibe la categoria seleccionada
//recibe el div donde se actualizara el total
let actualizarTotal = (cantidad, categoria, div) => {
  if (categoria === "1") {
    div.textContent = `Total a pagar: $ ${200 * cantidad * 0.2}`;
  }

  if (categoria === "2") {
    div.textContent = `Total a pagar: $ ${200 * cantidad * 0.5}`;
  }

  if (categoria === "3") {
    div.textContent = `Total a pagar: $ ${200 * cantidad * 0.85}`;
  }
};

let campoVacio = (input) => {
  if (input.value === "") {
    input.style.borderColor = "red";
    return true;
  } else {
    input.style.borderColor = "green";
  }
};

select.addEventListener("change", (e) => {
  console.log(e.target.value);
  if (e.target.value === "Seleccione categoria") {
    divTotal.textContent = "Total a pagar: $";
  }
  actualizarTotal(cantidad.value, e.target.value, divTotal);
});

cantidad.addEventListener("input", (e) => {
  actualizarTotal(cantidad.value, select.value, divTotal);
});

resumen.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    !campoVacio(nombre) &&
    !campoVacio(apellido) &&
    !campoVacio(correo) &&
    !campoVacio(cantidad)
  ) {
    Swal.fire({
      icon: "success",
      title: "Gracias por tu compra",
      html: `<p>${nombre.value} ${apellido.value}</p>
      <p>Enviaremos la informacion a: ${correo.value}</p>
      <p>${divTotal.textContent}</p>`,
      confirmButtonText: "Continuar",
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = "./index.html";
      }
    });
  }
});
