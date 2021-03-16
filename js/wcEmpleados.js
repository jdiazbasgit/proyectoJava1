class WCEmpleados extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    let shadowRoot = this.attachShadow({
      mode: "open"
    });

    shadowRoot.innerHTML = `
        
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
    
    <style>

        .mybody {
          padding: 0 !important;
          margin: 0 !important;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            text-align: left;
          }


          .tituloEmpleados {
            margin-left: 3.5rem !important;
            font-size: 1.75rem;
          }

          .my-bg {
            background-color: rgba(0, 0, 0, 0.7);
          }

          .styleModal {
            min-width: 40%;
            margin: 0 auto;
            padding: 2rem 3rem;
            background-color: #EEEEEE;
            border-radius: 30px;
            box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
            text-align: left;
          }

          .my-text {
            margin-left: 5rem;
          }


          .table td{
            font-size: 0.85em;
            vertical-align: middle;
        }
          #tablaDatos {
            width: 90vw;
            margin: 0 auto;
            text-align: left; 
            border-collapse:separate; 
            border-spacing: 0 2px;
            }

          #tablaDatos tr > td {
            font-size: 0.85em;
            vertical-align: middle;
            padding: 0;
            padding-left: .5rem;
           <!-- text-transform: lowercase; -->
          }

         <!-- #tablaDatos tr > td:first-letter {
            text-transform: uppercase;
          } -->

          #tablaDatos thead{
            background-color: #324047;
            color: white;
            font-size: .95rem;
            vertical-align: middle;
            padding: 0;
        }
        

        #tablaDatos thead th:first-child{
          text-align: center;
          padding-right: .5rem;
        }

        .bi-people-fill {
          color: #F2BB3F;
          font-size: 0.85rem;
          padding-right: .5rem;
        }

        
        #tablaDatos tr > td:first-child {
          text-align: center;
          }

        #tablaDatos tbody > tr{
            background-color: #FFFFFF;
            text-align: left;
            marging-left: .5 rem;
        }

        #tablaDatos tr > td:last-child {
          
        }

        #formEditar label {
          display: inline-block;
          margin-bottom: .5rem;
        }

        #formEditar input {
          margin-bottom: .8rem;
          
        }

        #botonAdd{
          background-color: #F2BB3F;
          width: 135px;
          height: 30px;
          border-radius: 30px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 1.3rem;
          padding-right: 1.3rem;
          padding-bottom: 7px;
          border: 0;
          outline: none !important;
          font-weight: 600;
          font-size: smaller;
          vertical-align: middle;
          margin-right: 3.5rem;
      }
      #botonAdd:hover{
          background-color: #324047;
      }
      #botonAdd:hover i{
          color: #F2BB3F;
      } 
      
      #botonAdd > i{
          font-size: medium;
          color: white;
      }

      .btnGuardar{
        background-color:#F2BB3F;
        width: 135px;
        height: 30px;
        border-radius: 30px 30px;
        border: 0;
        outline: none !important;
        font-weight: 600;
        font-size: smaller;
        vertical-align: middle;
        line-height: 9px;
        color: #FFFFFF;
      }

      .btnGuardar:hover{
        background-color:#324047;
      }

    .btnCancelar{
      background-color:#324047;
      width: 135px;
      height: 30px;
      border-radius: 30px 30px;
      border: 0;
      outline: none !important;
      font-weight: 600;
      font-size: smaller;
      vertical-align: middle;
      line-height: 9px;
      color: #FFFFFF;
    }

    .btnCancelar:hover{
      background-color:#F2BB3F;
    }

    </style>


        <div class="mybody">
          <div class="d-flex justify-content-between">
            <h3 class="text text-dark mt-5 mb-4 ml-5 pl-4 tituloEmpleados">Empleados</h3>
            <div>
              <div class="container">

      <!-- Button to Open the Modal -->
              <div class="mr-2 mt-5">
                <button type="button" class="btn btn-warning shadow-none text-light" data-toggle="modal" data-target="#myModalAddEmpleado" id="botonAdd">
                  AÑADIR
                  <i class="fa fa-plus-circle" aria-hidden="true"></i>
                </button>
              </div>

      <!-- The Modal -->
                <div class="modal my-bg" id="myModalAddEmpleado">
                  <div class="modal-dialog">
                    <div class="modal-content styleModal">
      
          <!-- Modal Header -->
                      <div class="modal-header">
                        <h3 class="text-center my-text">Nuevo Empleado</h3>
                      </div>
        
          <!-- Modal body -->
                      <div class="modal-body">
                        <div class="form-group">
                          <form action="">
                            <label>Nombre:</label> <input type="text" class="form-control" placeholder="Nombre" required id="nuevoNombre">
                            <label>Apellidos:</label> <input type="text" class="form-control" placeholder="Apellidos" required id="nuevoApellido">
                            <label>DNI:</label><input type="text" class="form-control" placeholder="DNI" required id="nuevoDNI">
                            <label>Fecha de alta:</label><input type="date"  class="form-control" required id="nuevoFecha">
                          </form>
                        </div>
                      </div>
        
      <!-- Modal footer -->
                      <div class="modal-footer d-flex justify-content-around">
                        
                          <button type="button" id="cerrarModal1" class="btn shadow-none btnCancelar text-light" data-dismiss="modal">CANCELAR</button>
                          <button type="button" id="addEmpleado" class="btn shadow-none btnGuardar text-light" data-dismiss="modal">GUARDAR</button>
                       
                      </div>
        
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div>
            <table id="tablaDatos"  class="table table-sm table-hover"></table>
          </div>
        `

    //PONER EL BODY EN GRIS
    let body = document.getElementsByTagName('body')
    body[0].style.backgroundColor = '#EEEE'


    // **************     SACAR LA URL DEL JSON     ****************

   
    //---------------- Inyectamos url aquí hasta que se cambie en el HEAD -------------------------
  //const url = "http://188.127.175.42:8081/accesoGrupo2/api/employees"
    console.log("nueva:"+this.url)

    // *** URL buena a usar cuando se arregle lo del HEAD
    //let datosJSON = apiHandler(url)

    //Datos del JSON (provisional)
    let datosJSON = apiHandler(this.url)

    //Array con Empleados
    let listaEmpleados

    datosJSON.then((empleados) => {
      console.log(empleados._embedded.employees[0])
      listaEmpleados = empleados
      //console.log("Lista inicial", listaEmpleados)

      this.crearTablaEmpeados(listaEmpleados)
    })

    let nuevoEmp

    shadowRoot.querySelector("#botonAdd").addEventListener("click", () => this.verModalAddEmpleado())
    shadowRoot.querySelector("#cerrarModal1").addEventListener("click", () => this.cerrarModalAddEmpleado())
    shadowRoot.querySelector("#addEmpleado").addEventListener("click", () => this.addEmpleado(listaEmpleados, nuevoEmp))

  }

  //Hacer que la url se le pase directamente desde la etiqueta del WC ?????????????????? ****** ¿¿¿¿
  attributeChangedCallback(name, oldValue, newValue) {
    
    this.url = newValue;
    
    console.log("PEPE", this.url)

  }

  static get observedAttributes() {

    return ["url"]
  }

  //Fuera de "connectedCallback()"

  crearTablaEmpeados(arrayEmpleados) {

    let propiedadesTablaEmpleados = Object.keys(arrayEmpleados[0])

    let tablaDatos = this.shadowRoot.querySelector("#tablaDatos")

    //********* HEAD TABLA*/
    let thead = document.createElement("thead");
    thead.classList.add("thead");

    let thIcono = document.createElement("th")

    thIcono.innerHTML = `<i class="bi bi-people-fill"></i> `
    //thIcono.innerHTML = ""
    thead.appendChild(thIcono)

    propiedadesTablaEmpleados.forEach(propiedad => {
      if (propiedad !== "jornada") {
        let th = document.createElement("th");
        propiedad = propiedad.replace("_", " ");
        th.innerHTML = this.capitalizarPrimeraLetra(propiedad);

        if (propiedad === "dni") {
          th.innerHTML = propiedad.toUpperCase()
        }

        thead.appendChild(th);
      }
    })

    tablaDatos.appendChild(thead);
    let thEditar = document.createElement("th");
    thEditar.innerHTML = "";
    thead.appendChild(thEditar);

    //********* BODY TABLA*/
    let tbody = document.createElement("tbody");
    tbody.classList.add("bg-light");
    tbody.setAttribute("id", "tbody");
    tablaDatos.appendChild(tbody);

    arrayEmpleados.forEach(empleado => {

      let tr = document.createElement("tr");
      tbody.appendChild(tr);

      let datoIcono = document.createElement("td");
      tr.appendChild(datoIcono);

      datoIcono.innerHTML = `<i class="bi bi-people-fill"></i>`;

      for (let propiedad in empleado) {
        if (empleado.fecha_baja == null) {
          empleado.fecha_baja = "---"
        }

        if (propiedad !== null && propiedad !== "jornada") {
          let td = document.createElement("td");
          td.innerHTML = this.capitalizarPrimeraLetra(empleado[propiedad]);

          if (propiedad === "dni") {
            td.innerHTML = empleado[propiedad].toUpperCase()
          }

          tr.appendChild(td);
        }
      }

      let botonEditar = document.createElement("td");
      tr.appendChild(botonEditar);

      botonEditar.innerHTML =
        `<!-- Button to Open the Modal -->
            <button type="button" class="btn" data-toggle="modal" data-target="#myModalEditar" id="${empleado.identificador}">
              <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
                
        <!-- The Modal -->
            <div class="modal my-bg" id="myModalEditar">
              <div class="modal-dialog">
                <div class="modal-content styleModal">
                      
          <!-- Modal Header -->
                  <div class="modal-header">
                    <h3 class="modal-title my-text">Modificar Empleado</h3>
                  </div>
                        
            <!-- Modal body -->
                  <div class="modal-body">
                    <div class="form-group">

                      <form id="formEditar"></form>

                    </div>
                  </div>
                        
            <!-- Modal footer -->
                  <div class="modal-footer d-flex justify-content-center">
                    <button type="button"  id ="cancelarEditarEmpleado" class="btn shadow-none btnCancelar text-light" data-dismiss="modal">CANCELAR</button>
                    <button type="button"  id="guardarEditarEmpleado" class="btn shadow-none btnGuardar text-light" data-dismiss="modal">GUARDAR</button>
                  </div>
                        
                </div>
              </div>
            </div>`

      let confirmarIdentificador

      this.shadowRoot.getElementById(`${empleado.identificador}`).addEventListener("click", () => {
        //Para confirmar el empleado seleccionado
        confirmarIdentificador = empleado.identificador
        this.verModalEditar()
        this.cargarFormuarioEditar(arrayEmpleados, empleado.identificador)

      })

      this.shadowRoot.getElementById('cancelarEditarEmpleado').addEventListener("click", () => this.cerrarModalEditar())

      this.shadowRoot.getElementById("guardarEditarEmpleado").addEventListener("click", () => {
        //Para confirmar el empleado seleccionado
        if (confirmarIdentificador === empleado.identificador) {
          this.guardarEditarEmpleado(arrayEmpleados, empleado.identificador)
          this.cerrarModalEditar()
        }
      })

    })


  }

  //Fuera de "crearTablaEmpeados"

  verModalAddEmpleado() {
    this.shadowRoot.querySelector("#myModalAddEmpleado").style.display = 'block'
  }

  cerrarModalAddEmpleado() {
    this.shadowRoot.querySelector("#myModalAddEmpleado").style.display = 'none'
  }

  identificadorAleatorio() {
    let idRandom = Math.round(Math.random() * 6451213);
    return idRandom;
  }

  verModalEditar() {
    this.shadowRoot.querySelector("#myModalEditar").style.display = 'block'
  }

  cerrarModalEditar() {
    this.shadowRoot.querySelector("#myModalEditar").style.display = 'none'
  }

  cargarFormuarioEditar(arrayEmpleados, idEmpleado) {
    //Buscar el empleado seleccionado
    let empleadoSeleccionado = arrayEmpleados.find(empleado => empleado.identificador === idEmpleado)
    //Sacar las propiedades del empleado seleccionado
    let propiedadEmpleadoSelect = Object.keys(empleadoSeleccionado)

    //****Crear el formulario del empleado seleccionado */
    let formEmpleadoSelect = this.shadowRoot.querySelector("#formEditar")

    propiedadEmpleadoSelect.forEach(propiedad => {

      propiedad = propiedad.replace("_", " ");

      //Selecciona label para  que no se duplique
      let selectLabel = this.shadowRoot.getElementById(`label${propiedad}`)

      //Hace que el label seleccionado se borre
      if (selectLabel) {
        formEmpleadoSelect.removeChild(selectLabel)
      }

      if (propiedad !== "jornada") {

        //Se pinta el label con un id único, que será la propia propiedad

        let labelpropiedad = document.createElement("label")
        labelpropiedad.setAttribute('id', `label${propiedad}`)
        labelpropiedad.innerHTML = this.capitalizarPrimeraLetra(propiedad)
        //Poner "dni" en mayúscula
        if (propiedad === "dni") {
          labelpropiedad.innerHTML = propiedad.toUpperCase()
        }

        formEmpleadoSelect.appendChild(labelpropiedad)

      }

      //Darle valores a los inputs
      propiedad = propiedad.replace(" ", "_");
      //Determinar el input seleccionadado para poder borrarlo y evitar que se duplique
      let selectInput = this.shadowRoot.getElementById(`input${propiedad}`)

      //Borrar el input seleccionado
      if (selectInput) {
        formEmpleadoSelect.removeChild(selectInput)
      }

      if (propiedad !== "jornada") {
        //Se pinta el label con un id único, que será la propia propiedad

        let inputPropiedad = document.createElement("input")
        inputPropiedad.setAttribute('id', `input${propiedad}`)

        //Darle el tipado fecha a as fechas
        if (propiedad === "fecha_alta" || propiedad === "fecha_baja") {
          inputPropiedad.setAttribute('type', 'date')
        }
        //Obtener el valor de los inputs
        inputPropiedad.value = empleadoSeleccionado[propiedad]
        //Inputs con estilos de boostrap
        inputPropiedad.classList.add("form-control")

        formEmpleadoSelect.appendChild(inputPropiedad)

      }
    })

  }

  //Función para poner a primera letra en mayúscua
  capitalizarPrimeraLetra(miString) {

    //return miString.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())));

  }

  guardarEditarEmpleado(arrayEmpleados, idEmpleado) {
    //Identificar el empleado seleccionado
    let empleadoSelect = arrayEmpleados.find((empleado) => empleado.identificador === idEmpleado);


    //Obtener los valores de los inputs. Los ids de los input son "input${propiedad}:"
    let nombre = this.shadowRoot.querySelector("#inputnombre").value.toUpperCase();
    let apellidos = this.shadowRoot.querySelector("#inputapellidos").value.toUpperCase()
    let dni = this.shadowRoot.querySelector("#inputdni").value.toUpperCase()
    let fecha_alta = this.shadowRoot.querySelector("#inputfecha_alta").value
    let fecha_baja = this.shadowRoot.querySelector("#inputfecha_baja").value

    //en caso de no tener fecha de baja
    if (!fecha_baja) fecha_baja = "---"

    //Para modificar el valor de los inputs del empleado modificado
    empleadoSelect.nombre = nombre;
    empleadoSelect.apellidos = apellidos
    empleadoSelect.dni = dni
    empleadoSelect.fecha_alta = fecha_alta
    empleadoSelect.fecha_baja = fecha_baja

    //console.log("Nuevo Array MODIFICADO", arrayEmpleados)

    //Sobrescribimos la tabla:
    let tablaDatos = this.shadowRoot.querySelector('#tablaDatos');
    let pastBody = tablaDatos.getElementsByTagName('tbody')[0];
    let pastThead = tablaDatos.getElementsByTagName("thead")[0]

    //1º borramos la tabla existente 
    if (pastBody) {
      tablaDatos.removeChild(pastBody)
      tablaDatos.removeChild(pastThead)
    };

    //2º Añadimos nueva tabla con el "arrayEmpleados" MODIFICADO ***
    this.crearTablaEmpeados(arrayEmpleados)

    console.log("Empleado seleccionado", empleadoSelect)

    //**** Llamada de la API para MODIFICAR el empleado seleccionado ***************

    apiHandler(this.url, "put", empleadoSelect);

    this.cerrarModalAddEmpleado()

  }

  addEmpleado(arrayEmpleados, nuevoEmpleado) {

    //Obtener los valores de los inputs capitalizados
    let nombre = this.shadowRoot.querySelector("#nuevoNombre").value;
    nombre = this.capitalizarPrimeraLetra(nombre)
    let apellidos = this.shadowRoot.querySelector("#nuevoApellido").value;
    apellidos = this.capitalizarPrimeraLetra(apellidos)
    let dni = this.shadowRoot.querySelector("#nuevoDNI").value.toUpperCase();
    let fechaAlta = this.shadowRoot.querySelector("#nuevoFecha").value;

    //En caso de no haber añadido nuevo empleado y darle a guardar, saca una alerta
    if (nombre.trim() === "" && apellidos.trim() === "" && dni.trim() === "") {
      alert("Debes de rellenar todos los datos")

    } else {
      //Cuando se añaden campos del nuevo empleado
      let tbody = this.shadowRoot.querySelector("#tbody")

      let nuevaFila = document.createElement("tr")

      tbody.appendChild(nuevaFila);

      nuevoEmpleado = {
        "nombre": nombre,
        "apellidos": apellidos,
        "dni": dni,
        "identificador": this.identificadorAleatorio(),
        "fecha_alta": fechaAlta,
        "fecha_baja": null
      };

      let datoIcono = document.createElement("td");

      nuevaFila.appendChild(datoIcono);

      datoIcono.innerHTML = `<i class="bi bi-people-fill"></i>`;

      for (let propiedad in nuevoEmpleado) {
        if (nuevoEmpleado.fecha_baja == null) {
          nuevoEmpleado.fecha_baja = "---";
        }
        if (propiedad !== null) {
          let td = document.createElement("td");
          td.innerHTML = nuevoEmpleado[propiedad];
          nuevaFila.appendChild(td);
        }
      }

      let botonEditar = document.createElement("td");
      nuevaFila.appendChild(botonEditar);

      botonEditar.innerHTML =
        `<!-- Button to Open the Modal -->
          <button type="button" class="btn" data-toggle="modal" data-target="#myModalEditar" id="${nuevoEmpleado.identificador}">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
              
      <!-- The Modal -->
          <div class="modal my-bg" id="myModalEditar">
            <div class="modal-dialog">
              <div class="modal-content styleModal">
                    
        <!-- Modal Header -->
                <div class="modal-header">
                  <h3 class="modal-title my-text">Modificar Empleado</h3>
                </div>
                      
          <!-- Modal body -->
                <div class="modal-body">
                  <div class="form-group">

                  <form id="formEditar"></form>

                  </div>
                </div>
                      
          <!-- Modal footer -->
                <div class="modal-footer d-flex justify-content-center ">
                    <button type="button"  id ="cancelarEditarEmpleado" class="btn shadow-none btnCancelar text-light" data-dismiss="modal">CANCELAR</button>
                    <button type="button" id="guardarEditarEmpleado" class="btn shadow-none btnGuardar text-light" data-dismiss="modal">GUARDAR</button>
                </div>
                      
              </div>
            </div>
          </div>`

      //Para comprobar el identificador del empleado seleccionado
      let confirmarIdentificador

      this.shadowRoot.getElementById(`${nuevoEmpleado.identificador}`).addEventListener("click", () => {

        confirmarIdentificador = nuevoEmpleado.identificador
        this.verModalEditar()
        this.cargarFormuarioEditar(arrayEmpleados, nuevoEmpleado.identificador)

      })

      this.shadowRoot.getElementById('cancelarEditarEmpleado').addEventListener("click", () => this.cerrarModalEditar())

      this.shadowRoot.getElementById('guardarEditarEmpleado').addEventListener("click", () => {
        if (confirmarIdentificador === nuevoEmpleado.identificador) {

          this.guardarEditarEmpleado(arrayEmpleados, nuevoEmpleado.identificador)

          this.cerrarModalEditar()

        }
      })

      //**** Llamada de la API para añadir el nuevo empleado con los datos del frmulario ***************
      console.log(nuevoEmpleado)
      apiHandler(this.url, "post", nuevoEmpleado);

      this.cerrarModalAddEmpleado()

      arrayEmpleados.push(nuevoEmpleado)

    }

  }

}


window.customElements.define("wc-empleados", WCEmpleados);

sessionStorage.token = "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJjdXJzb0pXVCIsInN1YiI6InBlcGUiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjE1ODgyNTU0LCJleHAiOjE2MTU4ODMxNTR9.sQOcjY22D5ViA90zbe2LSUQPZNchJpgWZbZLPI7VcfbNrc12z3niP5Nswk-S-cQSoEY9CcIzqQoZ3xNdntJ-Yg"
//Funciones que obtiene los datos

//*** ****************************
function apiHandler(url, method = "get", data) {
  if (method == "get") {
    return getDatos(url)
  } else {
    return sendDatos(url, method, data)
  }
}

function getDatos(url) {
  return new Promise(function (resolve, reject) {
    fetch(url, {
        "method": "get",
        "cors":"no-cors"
       // "headers": {
          //"Access-Control-Allow-Origin":"*",
          //"Authorization": "Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiJjdXJzb0pXVCIsInN1YiI6InBlcGUiLCJhdXRob3JpdGllcyI6WyJST0xFX1VTRVIiXSwiaWF0IjoxNjE1ODkwNTA2LCJleHAiOjE2MTU4OTExMDZ9.efwJ5BL2YNMHETWlupujamHCWtg6KSPaYWipQlHNQy_MIgQPBPQNutOmzubKehkQsLBWeNyZjqT144k4N4mRuA",
          //Para poder llamar la IP de Javier desde mi pc (que se permitan llamadas externas)
          //Hay que configurar en el BACK el CORS **************** --- ???¿¿?¿?¿?
          
         // "Access-Control-Allow-Origin": "*"

         
       // }
        
      })
      .then(function (response) {
        if (response.ok)
          resolve(response.json())
        else {
          reject(response.status)
        }
      }).catch(function (error) {
        console.log(`ERROR ${error}`)
        reject(error);
      })
  })
}

function sendDatos(url, method, data) {
  return new Promise(function (resolve, reject) {
    fetch(url, {
        "method": method,
        "body": JSON.stringify(data),
        "headers": {
          "Authorization": sessionStorage.token,
          //Para poder llamar la IP de Javier desde mi pc (que se permitan llamadas externas)
          //Hay que configurar en el BACK el CORS **************** --- ???¿¿?¿?¿?

          //"Access-Control-Allow-Origin": "*"

          
        },
        "cors":"no-cors"
      })
      .then(function (response) {
        if (response.ok)
          resolve(response.json())
        else {
          reject(response.status)
        }
      }).catch(function (error) {
        console.log(`ERROR ${error}`)
        reject(error);
      })
  })
}