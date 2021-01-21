//Script para los empleados


class WCEmpleados extends HTMLElement{
    constructor(){
        super();
    }

    

    connectedCallback(){
    
    

        let shadowRoot = this.attachShadow({mode: "open"});

        

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
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" id="botonAdd">
                  Añadir Empleado
                </button>

      <!-- The Modal -->
                <div class="modal" id="myModal">
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
                        <button type="button" id="guardarEmpleado" class="btn btn-warning" data-dismiss="modal">Guardar</button>
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
        shadowRoot.querySelector("#botonAdd").addEventListener("click",()=>this.verModal())
        shadowRoot.querySelector("#cerrarModal").addEventListener("click",()=>this.cerrarModal())
        shadowRoot.querySelector("#cerrarModal1").addEventListener("click",()=>this.cerrarModal())
        shadowRoot.querySelector("#guardarEmpleado").addEventListener("click",()=>this.guardarEmpleado())

        
        //Obtener datos JSON
        var datosJSON = getDatos("datos/empleados.json");

        let fila = "fila"
        let cerrar = "cerrar"
        let modificar = "modificar"
        let contador = 0;

        datosJSON.then((dato) =>{

            let arrayDatosJSON = dato;

            let propiedadesTablaEmpleados = Object.keys(dato[0]);

            let tablaDatos = shadowRoot.querySelector("#tablaDatos");

            let thead = document.createElement("thead");
            thead.classList.add("bg-dark")
            thead.classList.add("text-light")
            
            let thIcono = document.createElement("th")
            thIcono.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>`
            thead.appendChild(thIcono)
            
            propiedadesTablaEmpleados.forEach(propiedad =>{
                if(propiedad !== "jornada"){
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

            console.log(arrayDatosJSON)

            arrayDatosJSON.forEach(empleado =>{
                let tr = document.createElement("tr");
                tbody.appendChild(tr);

                let datoIcono = document.createElement("td");
                tr.appendChild(datoIcono);
                datoIcono.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>`;

                for(let propiedad in empleado){
                    if (empleado.fecha_baja == null){
                        empleado.fecha_baja = "-"
                    }

                    if( propiedad !== null && propiedad !== "jornada"){
                        let td = document.createElement("td");
                        td.innerHTML = empleado[propiedad];
                        tr.appendChild(td);
                    }
                }

                //Asignar id para que funcione modal

                let filaAdd = fila.concat(contador);
                let cerrarAdd = cerrar.concat(contador);
                let modificarAdd = modificar.concat(contador)
                contador ++;


                let botonEditar = document.createElement("td");
                    tr.appendChild(botonEditar);

                    botonEditar.innerHTML= 

                  `<!-- Button to Open the Modal -->
                  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" id="${filaAdd}">
                    Open modal
                  </button>
                
                  <!-- The Modal -->
                  <div class="modal" id="myModal">
                    <div class="modal-dialog">
                      <div class="modal-content">
                      
                        <!-- Modal Header -->
                        <div class="modal-header">
                          <h4 class="modal-title">Modal Heading</h4>
                          <button type="button"  id ="${cerrarAdd}" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        
                        <!-- Modal body -->
                        <div class="modal-body">
                          Modal body..
                        </div>
                        
                        <!-- Modal footer -->
                        <div class="modal-footer">
                          <button type="button" id="${modificarAdd}" class="btn btn-danger" data-dismiss="modal">Close</button>
                        </div>
                        
                      </div>
                    </div>
                  </div>`
                    shadowRoot.querySelector(`#${filaAdd}`).addEventListener("click", ()=>this.verModal())
                    shadowRoot.querySelector(`#${cerrarAdd}`).addEventListener("click",()=>this.cerrarModal())
                    shadowRoot.querySelector(`#${cerrarAdd}`).addEventListener("click",()=>this.cerrarModal())

                    

            })

        })
    }
    verModal(){
        console.log("verModal");
        this.shadowRoot.querySelector("#myModal").style.display = 'block'
    }

    cerrarModal(){
        console.log("cerrarModal");
        this.shadowRoot.querySelector("#myModal").style.display = 'none'
    }

    identificadorAleatorio(){
      let idRandom = Math.round(Math.random()*6451213);
      return idRandom;
  }

  guardarEmpleado(){
    console.log("Empleado guardado")
    let nombre = this.shadowRoot.querySelector("#nuevoNombre").value.toUpperCase();
    let apellidos = this.shadowRoot.querySelector("#nuevoApellido").value.toUpperCase();
    let dni = this.shadowRoot.querySelector("#nuevoDNI").value;
    let fechaAlta = this.shadowRoot.querySelector("#nuevoFecha").value;
    console.log(nombre)
    console.log(apellidos)
    console.log(dni)
    console.log(fechaAlta)

    let tbody = this.shadowRoot.querySelector("#tbody")

    let nuevaFila = document.createElement("tr")
    
    tbody.appendChild(nuevaFila);
    
    let nuevoEmpleado = {"nombre": nombre, "apellidos": apellidos, "DNI": dni, "identificador": this.identificadorAleatorio(), "fecha_alta": fechaAlta, "fecha_baja": null};

    let datoIcono = document.createElement("td");
    nuevaFila.appendChild(datoIcono);
    datoIcono.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
        <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
        </svg>`;

    for(let propiedad in nuevoEmpleado){
        if (nuevoEmpleado.fecha_baja == null){
            nuevoEmpleado.fecha_baja = "-";
    }
        if( propiedad !== null ){
        let td = document.createElement("td");
        td.innerHTML = nuevoEmpleado[propiedad];
        nuevaFila.appendChild(td);
    }
}
    let botonEditar = document.createElement("td");
                nuevaFila.appendChild(botonEditar);

                botonEditar.innerHTML= 

              `<!-- Button to Open the Modal -->
              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" id="botonModificar">
                Open modal
              </button>
            
              <!-- The Modal -->
              <div class="modal" id="myModal">
                <div class="modal-dialog">
                  <div class="modal-content">
                  
                    <!-- Modal Header -->
                    <div class="modal-header">
                      <h4 class="modal-title">Modal Heading</h4>
                      <button type="button"  id ="cerrarModificar" class="close" data-dismiss="modal">&times;</button>
                    </div>
                    
                    <!-- Modal body -->
                    <div class="modal-body">
                      Modal body..
                    </div>
                    
                    <!-- Modal footer -->
                    <div class="modal-footer">
                      <button type="button" id="cerrarModificar1" class="btn btn-danger" data-dismiss="modal">Close</button>
                    </div>
                    
                  </div>
                </div>
              </div>`

              this.cerrarModal()

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


/*
        
    */
