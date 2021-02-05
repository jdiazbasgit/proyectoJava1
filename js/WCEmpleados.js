class WCEmpleados extends HTMLElement {
  constructor() {
    super();
  }


  connectedCallback() {
    let shadowRoot = this.attachShadow({
      mode: "open"
    });

    shadowRoot.innerHTML = `
        
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
    integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx"
    crossorigin="anonymous"></script>
    
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
            margin-left: 2.75rem !important;
          }

          .my-bg {
            background-color: rgba(0, 0, 0, 0.7);
          }

          .redondear {
            border-radius: 20px;
          }

          .my-text {
            margin-left: 8rem;
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
          }

          #tablaDatos thead{
            background-color: #324047;
            color: white;
            font-size: 0.85em;
            vertical-align: middle;
            padding: 0;
        }
        
        #tablaDatos thead th:first-child{
          text-align: center;
          padding: 0 1.5rem 0 2.5rem;
          marging: 0 1rem 0 1rem;
        }

        #tablaDatos thead th {
          text-align: left;
          marging-bottom: 1rem;
          
        }
        
        #tablaDatos tr > td:first-child {
          text-align: center;
          padding: 0 1.5rem 0 2.5rem;
          marging: 0 1rem 0 1rem;
          }

        #tablaDatos tbody > tr{
            background-color: #FFFFFF;
            text-align: left;
            marging-left: .5 rem;
        }

        #formEditar label {
          display: inline-block;
          margin-bottom: .5rem;
        }

        #formEditar input {
          margin-bottom: .8rem;
          
        }


    </style>


        <div class="mybody">
          <div class="d-flex justify-content-between">
            <h3 class="text text-dark mt-5 mb-4 ml-5 pl-4 tituloEmpleados">EMPLEADOS</h3>
            <div>
              <div class="container">

      <!-- Button to Open the Modal -->
              <div class="mr-2 mt-5">
                <button type="button" class="btn btn-warning text-light mr-5 pr-4 pl-4 redondear" data-toggle="modal" data-target="#myModalAddEmpleado" id="botonAdd">
                  AÑADIR
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-plus-circle ml-4" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg>
                </button>
              </div>

      <!-- The Modal -->
                <div class="modal my-bg" id="myModalAddEmpleado">
                  <div class="modal-dialog">
                    <div class="modal-content redondear">
      
          <!-- Modal Header -->
                      <div class="modal-header">
                        <h4 class="text-center my-text">NUEVO EMPLEADO</h4>
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
                      <div class="modal-footer d-flex justify-content-center">
                        <button type="button" id="cerrarModal1" class="btn btn-dark mr-3 pl-5 pr-5 redondear" data-dismiss="modal">Cancelar</button>
                        <button type="button" id="addEmpleado" class="btn btn-warning ml-3 pl-5 pr-5 text-light redondear" data-dismiss="modal">Guardar</button>
                      </div>
        
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div>
            <table id="tablaDatos" class="table"></table>
          </div>
        `

    //PONER EL BODY EN GRIS
    let body = document.getElementsByTagName('body')
    body[0].style.backgroundColor = '#EEEE'


    // ******** SACAR LA URL DEL JSON **********
    let link = document.querySelector('#urlJSON');
    let URL = link.getAttribute('url');

    //Datos de JSON
    let datosJSON = getDatos(URL)

    //onsole.log(datosJSON)
    //Array con Empleados
    let listaEmpleados

    datosJSON.then((empleado) => {

      listaEmpleados = empleado
      //console.log("Lista inicial", listaEmpleados)

      this.crearTablaEmpeados(listaEmpleados)
    })

    let nuevoEmp

    shadowRoot.querySelector("#botonAdd").addEventListener("click", () => this.verModalAddEmpleado())
    shadowRoot.querySelector("#cerrarModal").addEventListener("click", () => this.cerrarModalAddEmpleado())
    shadowRoot.querySelector("#cerrarModal1").addEventListener("click", () => this.cerrarModalAddEmpleado())
    shadowRoot.querySelector("#addEmpleado").addEventListener("click", () => this.addEmpleado(listaEmpleados, nuevoEmp))

  }

  //Hacer que la url se le pase directamente desde la etiqueta del WC
  // attributeChangedCallback(name, oldValue, newValue) {

  //   this.url = newValue;
  // }

  // static get observedAttributes() {

  //   return ["url"]
  // }

  //Fuera de "connectedCallback()"

  crearTablaEmpeados(arrayEmpleados) {

    let propiedadesTablaEmpleados = Object.keys(arrayEmpleados[0])

    let tablaDatos = this.shadowRoot.querySelector("#tablaDatos")

    //********* HEAD TABLA*/
    let thead = document.createElement("thead");

    let thIcono = document.createElement("th")
    //Se modificó  viewBox="0 -150 980 980" para adaptar el icóno a la tabla
    thIcono.innerHTML = `<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 -150 980 980"><defs><style>.cls-1{fill:#fff;}</style></defs>
    <g id="_23-teamwork" data-name=" 23-teamwork"><g id="Glyph"><circle class="cls-1" cx="405.33" cy="192" r="64"/><circle class="cls-1" cx="106.67" cy="192" r="64"/>
    <circle class="cls-1" cx="256" cy="149.33" r="85.33"/><path class="cls-1" d="M469.33,277.33H393.87A84.79,84.79,0,0,1,405.33,320V469.33h85.34A21.33,21.33,0,0,0,512,448V320A42.67,42.67,0,0,0,469.33,277.33Z"/>
    <path class="cls-1" d="M118.15,277.33H42.67A42.67,42.67,0,0,0,0,320V448a21.33,21.33,0,0,0,21.33,21.33h85.34V320A84.81,84.81,0,0,1,118.15,277.33Z"/>
    <path class="cls-1" d="M320,234.67H298.67L256,362.67l-42.67-128H192a64,64,0,0,0-64,64v192A21.33,21.33,0,0,0,149.33,512H362.67A21.33,21.33,0,0,0,384,490.67v-192A64,64,0,0,0,320,234.67Z"/></g></g></svg>`
    thead.appendChild(thIcono)

    propiedadesTablaEmpleados.forEach(propiedad => {
      if (propiedad !== "jornada") {
        let th = document.createElement("th");
        propiedad = propiedad.replace("_", " ");
        th.innerHTML = propiedad.toUpperCase();
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
    //tbody.classList.add("pb-0");
    tbody.setAttribute("id", "tbody");
    tablaDatos.appendChild(tbody);

    arrayEmpleados.forEach(empleado => {

      let tr = document.createElement("tr");
      tbody.appendChild(tr);

      let datoIcono = document.createElement("td");
      tr.appendChild(datoIcono);
      //se tocó viewBox="0 -150 980 980" para hacer el icono más pequeño
      datoIcono.innerHTML = `<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -150 980 980"><defs>
      <style>.cls-1{fill:#f2bb3f;}</style></defs><g id="_23-teamwork" data-name=" 23-teamwork"><g id="Glyph">
      <circle class="cls-1" cx="405.33" cy="192" r="64"/><circle class="cls-1" cx="106.67" cy="192" r="64"/>
      <circle class="cls-1" cx="256" cy="149.33" r="85.33"/>
      <path class="cls-1" d="M469.33,277.33H393.87A84.79,84.79,0,0,1,405.33,320V469.33h85.34A21.33,21.33,0,0,0,512,448V320A42.67,42.67,0,0,0,469.33,277.33Z"/>
      <path class="cls-1" d="M118.15,277.33H42.67A42.67,42.67,0,0,0,0,320V448a21.33,21.33,0,0,0,21.33,21.33h85.34V320A84.81,84.81,0,0,1,118.15,277.33Z"/>
      <path class="cls-1" d="M320,234.67H298.67L256,362.67l-42.67-128H192a64,64,0,0,0-64,64v192A21.33,21.33,0,0,0,149.33,512H362.67A21.33,21.33,0,0,0,384,490.67v-192A64,64,0,0,0,320,234.67Z"/></g></g></svg>`;

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

      botonEditar.innerHTML =
        `<!-- Button to Open the Modal -->
            <button type="button" class="btn" data-toggle="modal" data-target="#myModalEditar" id="${empleado.identificador}">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
              </svg>
            </button>
                
        <!-- The Modal -->
            <div class="modal my-bg" id="myModalEditar">
              <div class="modal-dialog">
                <div class="modal-content redondear">
                      
          <!-- Modal Header -->
                  <div class="modal-header">
                    <h4 class="modal-title my-text">MODIFICAR EMPLEADO</h4>
                    <button type="button"  id ="cancelarEditar" class="close" data-dismiss="modal">&#10005</button>
                  </div>
                        
            <!-- Modal body -->
                  <div class="modal-body">
                    <div class="form-group">

                      <form id="formEditar"></form>

                    </div>
                  </div>
                        
            <!-- Modal footer -->
                  <div class="modal-footer d-flex justify-content-center">
                    <button type="button"  id ="cancelarEditarEmpleado" class="btn btn-dark mr-3 pl-5 pr-5 redondear" data-dismiss="modal">Cancelar</button>
                    <button type="button"  id="guardarEditarEmpleado" class="btn btn-warning ml-3 pl-5 pr-5 text-light redondear" data-dismiss="modal">Guardar</button>
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

      this.shadowRoot.getElementById('cancelarEditar').addEventListener("click", () => this.cerrarModalEditar())

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
  capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  guardarEditarEmpleado(arrayEmpleados, idEmpleado) {
    //Iddentificar e empleado seleccionado
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

  }

  addEmpleado(arrayEmpleados, nuevoEmpleado) {

    //Obtener los valores de los inputs en mayúscula
    let nombre = this.shadowRoot.querySelector("#nuevoNombre").value.toUpperCase();
    let apellidos = this.shadowRoot.querySelector("#nuevoApellido").value.toUpperCase();
    let dni = this.shadowRoot.querySelector("#nuevoDNI").value;
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

      //se tocó  viewBox="0 -150 980 980" para hacer el icono más pequeño
      datoIcono.innerHTML = `<svg id="Capa_1" data-name="Capa 1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 -150 980 980"><defs>
      <style>.cls-1{fill:#f2bb3f;}</style></defs><g id="_23-teamwork" data-name=" 23-teamwork"><g id="Glyph">
      <circle class="cls-1" cx="405.33" cy="192" r="64"/><circle class="cls-1" cx="106.67" cy="192" r="64"/>
      <circle class="cls-1" cx="256" cy="149.33" r="85.33"/>
      <path class="cls-1" d="M469.33,277.33H393.87A84.79,84.79,0,0,1,405.33,320V469.33h85.34A21.33,21.33,0,0,0,512,448V320A42.67,42.67,0,0,0,469.33,277.33Z"/>
      <path class="cls-1" d="M118.15,277.33H42.67A42.67,42.67,0,0,0,0,320V448a21.33,21.33,0,0,0,21.33,21.33h85.34V320A84.81,84.81,0,0,1,118.15,277.33Z"/>
      <path class="cls-1" d="M320,234.67H298.67L256,362.67l-42.67-128H192a64,64,0,0,0-64,64v192A21.33,21.33,0,0,0,149.33,512H362.67A21.33,21.33,0,0,0,384,490.67v-192A64,64,0,0,0,320,234.67Z"/></g></g></svg>`;

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
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
              <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
            </svg>
          </button>
              
      <!-- The Modal -->
          <div class="modal my-bg" id="myModalEditar">
            <div class="modal-dialog">
              <div class="modal-content redondear">
                    
        <!-- Modal Header -->
                <div class="modal-header">
                  <h4 class="modal-title my-text">MODIFICAR EMPLEADO</h4>
                  <button type="button"  id ="cancelarEditar" class="close" data-dismiss="modal">&#10005</button>
                </div>
                      
          <!-- Modal body -->
                <div class="modal-body">
                  <div class="form-group">

                  <form id="formEditar"></form>

                  </div>
                </div>
                      
          <!-- Modal footer -->
                <div class="modal-footer d-flex justify-content-center ">
                    <button type="button"  id ="cancelarEditarEmpleado" class="btn btn-dark mr-3 pl-5 pr-5 redondear" data-dismiss="modal">Cancelar</button>
                    <button type="button" id="guardarEditarEmpleado" class="btn btn-warning ml-3 pl-5 pr-5 text-light redondear" data-dismiss="modal">Guardar</button>
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

      this.shadowRoot.getElementById('cancelarEditar').addEventListener("click", () => this.cerrarModalEditar())

      this.shadowRoot.getElementById('cancelarEditarEmpleado').addEventListener("click", () => this.cerrarModalEditar())

      this.shadowRoot.getElementById('guardarEditarEmpleado').addEventListener("click", () => {
        if (confirmarIdentificador === nuevoEmpleado.identificador) {

          this.guardarEditarEmpleado(arrayEmpleados, nuevoEmpleado.identificador)
          this.cerrarModalEditar()

        }
      })

      this.cerrarModalAddEmpleado()

      arrayEmpleados.push(nuevoEmpleado)

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