function calcularCosto(){

  
    const adulto = parseInt(document.getElementById('adultos').value);
    const niño = parseInt(document.getElementById('niños').value);
    const correo = document.getElementById('email').value;
    const nom = document.getElementById('name').value;
    const apell = document.getElementById('lastName').value;
    const Hora = parseInt(document.getElementById('horario').value);



    let total = adulto * 10 + niño * 6;
    let message = `Nombre: ${nom+" "+apell} <br> Cantidad de pasajeros: ${adulto + niño} <br> Total de costo: $${total} <br> Numero de boleto: ${Math.floor(Math.random() * 100)} <br> Horario: ${Hora} <br> Correo: ${correo}`;
    
    if (adulto === 1 && niño > 4) {
      message = "Solo se permiten 4 menores por adulto";
    } else if (adulto === 2 && niño > 3) {
      message = "Solo se permiten 3 menores por 2 adultos";
    } else if (adulto === 3 && niño > 2) {
      message = "Solo se permiten 2 menores por 3 adultos";
    } else if (adulto === 4 && niño > 0) {
      message = "No se permiten menores con 4 adultos";
    }

    
    localStorage.setItem("ticket", message);
    
    //localStorage.removeItem("trans");


    window.open("ticket.html", width="800", height="500");

  }



  