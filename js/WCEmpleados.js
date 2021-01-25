class WCEmpleados extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    let shadowRoot = this.attachShadow({
      mode: "open"
    });

    shadowRoot.innerHTML = `
        
        <style>
        .body {
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            font-size: 1rem;
            font-weight: 400;
            line-height: 1.5;
            color: #212529;
            text-align: left;
            background-color: #fff;
          }
        </style>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
        crossorigin="anonymous"></script>

        <div class="container-fluid body">
          <div class="d-flex justify-content-between">
            <h1 class="text text-dark mt-5 mb-5">EMPLEADOS</h1>
            <div class="mt-5">
              <div class="container">

      <!-- Button to Open the Modal -->
                <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#myModalAddEmpleado" id="botonAdd">
                  Añadir Empleado
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                </button>

      <!-- The Modal -->
                <div class="modal" id="myModalAddEmpleado">
                  <div class="modal-dialog">
                    <div class="modal-content">
      
          <!-- Modal Header -->
                      <div class="modal-header">
                        <h4 class="text-center tx">NUEVO EMPLEADO</h4>
                        <button type="button"  id ="cerrarModal" class="close" data-dismiss="modal">&times;</button>
                      </div>
        
          <!-- Modal body -->
                      <div class="modal-body">
                        <div class="form-group">
                          <form action="">
                            <label>Nombre:</label> <input type="text" class="form-control" placeholder="Nombre" required id="nuevoNombre"><br>
                            <label>Apellidos:</label> <input type="text" class="form-control" placeholder="Apellidos" required id="nuevoApellido"><br>
                            <label>DNI</label><input type="text" class="form-control" placeholder="DNI" required id="nuevoDNI"><br>
                            <label>Fecha de alta</label><input type="date"  class="form-control" required id="nuevoFecha"><br>
                          </form>
                        </div>
                      </div>
        
      <!-- Modal footer -->
                      <div class="modal-footer">
                        <button type="button" id="cerrarModal1" class="btn btn-dark" data-dismiss="modal">Cancelar</button>
                        <button type="button" id="addEmpleado" class="btn btn-warning" data-dismiss="modal">Guardar</button>
                      </div>
        
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <table id="tablaDatos" class="table"></table>

        </div> 
        `

    //Datos de JSON
    let datosJSON = getDatos("datos/empleados.json")

    //Array con Empleados
    let listaEmpleados

    datosJSON.then((empleado) => {

      listaEmpleados = empleado
      console.log("Lista inicial", listaEmpleados)

      this.crearTablaEmpeados(listaEmpleados)
    })

    let nuevoEmp

    shadowRoot.querySelector("#botonAdd").addEventListener("click", () => this.verModalAddEmpleado())
    shadowRoot.querySelector("#cerrarModal").addEventListener("click", () => this.cerrarModalAddEmpleado())
    shadowRoot.querySelector("#cerrarModal1").addEventListener("click", () => this.cerrarModalAddEmpleado())
    shadowRoot.querySelector("#addEmpleado").addEventListener("click", () => this.addEmpleado(listaEmpleados, nuevoEmp))

  }

  //Fuera de "connectedCallback()"

  crearTablaEmpeados(arrayEmpleados) {

    let propiedadesTablaEmpleados = Object.keys(arrayEmpleados[0])
    //console.log("propiedadesTablaEmpleados", propiedadesTablaEmpleados)

    let tablaDatos = this.shadowRoot.querySelector("#tablaDatos")

    let thead = document.createElement("thead");
    thead.classList.add("bg-dark")
    thead.classList.add("text-light")

    let thIcono = document.createElement("th")
    thIcono.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
              </svg>`
    thead.appendChild(thIcono)

    propiedadesTablaEmpleados.forEach(propiedad => {
      if (propiedad !== "jornada") {
        //console.log(propiedad)
        let th = document.createElement("th");
        propiedad = propiedad.replace("_", " ");
        th.innerHTML = propiedad.toUpperCase();
        thead.appendChild(th);
        //console.log(propiedad)
      }
    })

    tablaDatos.appendChild(thead);
    let thEditar = document.createElement("th");
    thEditar.innerHTML = "";
    thead.appendChild(thEditar);


    let tbody = document.createElement("tbody");
    tbody.setAttribute("id", "tbody");
    tablaDatos.appendChild(tbody);

    arrayEmpleados.forEach(empleado => {

      let tr = document.createElement("tr");
      tbody.appendChild(tr);

      let datoIcono = document.createElement("td");
      tr.appendChild(datoIcono);
      datoIcono.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>`;

      for (let propiedad in empleado) {
        if (empleado.fecha_baja == null) {
          empleado.fecha_baja = "---"
        }

        if (propiedad !== null && propiedad !== "jornada") {
          let td = document.createElement("td");
          td.innerHTML = empleado[propiedad];
          tr.appendChild(td);
        }
      }

      let botonEditar = document.createElement("td");
      tr.appendChild(botonEditar);

      //Asignar id para que funcione modal
      //console.log("id empleado:", empleado.identificador)

      botonEditar.innerHTML =
        `<!-- Button to Open the Modal -->
            <button type="button" class="btn" data-toggle="modal" data-target="#myModalEditar" id="${empleado.identificador}">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>
            </button>
                
        <!-- The Modal -->
            <div class="modal" id="myModalEditar">
              <div class="modal-dialog">
                <div class="modal-content">
                      
          <!-- Modal Header -->
                  <div class="modal-header">
                    <h4 class="modal-title">MODIFICAR EMPLEADO</h4>
                    <button type="button"  id ="cancelarEditar" class="close" data-dismiss="modal">&#10005</button>
                  </div>
                        
            <!-- Modal body -->
                  <div class="modal-body">
                    <div class="form-group">

                      <form id="formEditar"></form>

                    </div>
                  </div>
                        
            <!-- Modal footer -->
                  <div class="modal-footer">
                    <button type="button"  id ="cancelarEditarEmpleado" class="btn btn-dark" data-dismiss="modal">Cancelar</button>
                    <button type="button" id="guardarEditarEmpleado" class="btn btn-warning" data-dismiss="modal">Guardar</button>
                  </div>
                        
                </div>
              </div>
            </div>`


      // console.log(empleado)
      this.shadowRoot.getElementById(`${empleado.identificador}`).addEventListener("click", () => {
        this.verModalEditar()
        this.cargarFormuarioEditar(arrayEmpleados, empleado.identificador)
      })
      this.shadowRoot.getElementById('cancelarEditar').addEventListener("click", () => this.cerrarModalEditar())
      this.shadowRoot.getElementById('cancelarEditarEmpleado').addEventListener("click", () => this.cerrarModalEditar())
      this.shadowRoot.getElementById('guardarEditarEmpleado').addEventListener("click", () => {
        this.guardarEditarEmpleado()
        this.cerrarModalEditar()
      })
    })

    // console.log(arrayEmpleados)

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

  cargarFormuarioEditar(array, idEmpleado) {

    // console.log("Array DATOS", array)
    //console.log("idEmpleado", idEmpleado)

    let empleadoSeleccionado = array.find(empleado => empleado.identificador === idEmpleado)

    // console.log("empleadoSeleccionado", empleadoSeleccionado)

    let propiedadEmpleadoSelect = Object.keys(empleadoSeleccionado)

    let formEmpleadoSelect = this.shadowRoot.querySelector("#formEditar")

    propiedadEmpleadoSelect.forEach(propiedad => {
      // console.log("propiedad", propiedad)

      propiedad = propiedad.replace("_", " ");

      //Selecciona label para  que no se duplique
      let selectLabel = this.shadowRoot.getElementById('label' + propiedad)

      //Hace que el label seleccionado se borre
      if (selectLabel) {
        formEmpleadoSelect.removeChild(selectLabel)
      }

      if (propiedad !== "jornada") {

        //Se pinta el label con un id único, que será la propia propiedad

        let labelpropiedad = document.createElement("label")
        labelpropiedad.setAttribute('id', 'label' + propiedad)

        labelpropiedad.innerHTML = propiedad

        formEmpleadoSelect.appendChild(labelpropiedad)

      }


      // console.log("valor propiedad", empleadoSeleccionado[propiedad])

      //Darle valores a los inputs

      //Determinar e input seeccionadado para poder borrarlo y evitar que se duplique
      let selectInput = this.shadowRoot.getElementById(`input${propiedad}`)

      //Borrar el input seleccionado
      if (selectInput) {
        formEmpleadoSelect.removeChild(selectInput)
      }

      if (propiedad !== "jornada") {
        //console.log('propiedad:', propiedad)
        //Se pinta el label con un id único, que será la propia propiedad

        let inputPropiedad = document.createElement("input")
        inputPropiedad.setAttribute('id', `input${propiedad}`)

        if (propiedad === "fecha alta" || propiedad === "fecha baja") {
          inputPropiedad.setAttribute('type', 'date')
          //para manejar fechas del empleado
          propiedad = propiedad.replace(" ", "_");
          // console.log('fechas', empleadoSeleccionado[propiedad])
          // console.log('fecha Alta', empleadoSeleccionado["fecha_alta"])
          // console.log('fecha Baja', empleadoSeleccionado["fecha_baja"])
        }

        inputPropiedad.value = empleadoSeleccionado[propiedad]
        inputPropiedad.classList.add("form-control")

        formEmpleadoSelect.appendChild(inputPropiedad)

        //console.log('valor del input', inputPropiedad)

      }
    })

  }

  guardarEditarEmpleado() {

  }

  addEmpleado(arrayEmpleados, nuevoEmpleado) {

    let nombre = this.shadowRoot.querySelector("#nuevoNombre").value.toUpperCase();
    let apellidos = this.shadowRoot.querySelector("#nuevoApellido").value.toUpperCase();
    let dni = this.shadowRoot.querySelector("#nuevoDNI").value;
    let fechaAlta = this.shadowRoot.querySelector("#nuevoFecha").value;


    if (nombre.trim() === "" && apellidos.trim() === "" && dni.trim() === "") {
      alert("Debes de rellenar todos los datos")

    } else {

      let tbody = this.shadowRoot.querySelector("#tbody")

      let nuevaFila = document.createElement("tr")

      tbody.appendChild(nuevaFila);

      nuevoEmpleado = {
        "nombre": nombre,
        "apellidos": apellidos,
        "DNI": dni,
        "identificador": this.identificadorAleatorio(),
        "fecha_alta": fechaAlta,
        "fecha_baja": null
      };

      let datoIcono = document.createElement("td");
      nuevaFila.appendChild(datoIcono);
      datoIcono.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
          </svg>`;

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

      //console.log('id Nuevo Empleado:', nuevoEmpleado.identificador)

      botonEditar.innerHTML =
        `<!-- Button to Open the Modal -->
          <button type="button" class="btn" data-toggle="modal" data-target="#myModalEditar" id="${nuevoEmpleado.identificador}">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>
          </button>
              
      <!-- The Modal -->
          <div class="modal" id="myModalEditar">
            <div class="modal-dialog">
              <div class="modal-content">
                    
        <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title">MODIFICAR EMPLEADO</h4>
                  <button type="button"  id ="cancelarEditar" class="close" data-dismiss="modal">&#10005</button>
                </div>
                      
          <!-- Modal body -->
                <div class="modal-body">
                  <div class="form-group">

                  <form id="formEditar"></form>

                  </div>
                </div>
                      
          <!-- Modal footer -->
                <div class="modal-footer">
                    <button type="button"  id ="cancelarEditarEmpleado" class="btn btn-dark" data-dismiss="modal">Cancelar</button>
                    <button type="button" id="guardarEditar" class="btn btn-warning" data-dismiss="modal">Guardar</button>
                </div>
                      
              </div>
            </div>
          </div>`

      // console.log(empleado)
      this.shadowRoot.getElementById(`${nuevoEmpleado.identificador}`).addEventListener("click", () => {
        this.verModalEditar()
        this.cargarFormuarioEditar(arrayEmpleados, nuevoEmpleado.identificador)
      })
      this.shadowRoot.getElementById('cancelarEditar').addEventListener("click", () => this.cerrarModalEditar())
      this.shadowRoot.getElementById('cancelarEditarEmpleado').addEventListener("click", () => this.cerrarModalEditar())
      this.shadowRoot.getElementById('guardarEditar').addEventListener("click", () => this.cerrarModalEditar())

      this.cerrarModalAddEmpleado()

      // arrayEmpleados = [...arrayEmpleados, nuevoEmpleado]

      arrayEmpleados.push(nuevoEmpleado)

      console.log("Nuevo empleado guardado", nuevoEmpleado)

      console.log("Nueva Lista", arrayEmpleados)

    }

  }

}


window.customElements.define("wc-empleados", WCEmpleados);


//Funcion que obtiene los datos
function getDatos(url) {
  return new Promise(function (resolve, reject) {
    fetch(url)
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