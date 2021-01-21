class WCEmpleados extends HTMLElement {
    constructor() {
        super()
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

        <div class="container-fluid">
            <div class="d-flex justify-content-between">
                <h1 class="text text-dark mt-5 mb-5">EMPLEADOS</h1>
                <div class="mt-5">
                   
                </div>
            </div>
            
           
            <table id="tablaDatos" class="table"></table>

<!--ÁREA DEL MODAL-->
          
    <!-- Button to Open the Modal -->
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal">
        Open modal
    </button>

    <!-- The Modal -->
    <div class="modal" id="myModal">
        <div class="modal-dialog">
            <div class="modal-content">

               

                <!-- Modal body -->
                <div class="modal-body">
                    Modal body..
                </div>

               

            </div>
        </div>
    </div>
        </div> `


        //Datos del JSON, con la promesa
        let datosJSON = getDatos("./datos/empleados.json")

        //Manejo de los datos del JSON 
        datosJSON
            .then((dato) => {

                let arrayDatosJSON = dato //(DATOS SIN PROMESA) ***********************************

                let propiedadesTablaEmpleados = Object.keys(dato[0])
                let tablaDatos = shadowRoot.querySelector("#tablaDatos")

                //CREAR EL "thead" DE LA TABLA DE FORMA DINÁMICA: ********

                let thead = document.createElement("thead")
                thead.classList.add("btn-dark")
                let thIcono = document.createElement("th")
                thIcono.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                </svg>`
                thead.appendChild(thIcono)

                propiedadesTablaEmpleados.forEach(propiedad => {
                    if (propiedad !== "jornada") {

                        propiedad = propiedad.replace("_", " ")

                     console.log(propiedad)

                        let th = document.createElement("th")
                        th.innerHTML = propiedad.toUpperCase()
                        thead.appendChild(th)
                    }
                })

                let thEditar = document.createElement("th")
                thEditar.innerHTML = ""
                thead.appendChild(thEditar)

                tablaDatos.appendChild(thead)


                //CREAR EL "tbody" DE LA TABLA DINÁMICAMENTE: *******

                arrayDatosJSON.forEach(dato => {

                    let tr = document.createElement("tr")
                    let tdIcono = document.createElement("th")
                    tdIcono.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
                    </svg>`
                    tr.appendChild(tdIcono)

                    for (const property in dato) {

                        if (dato.fecha_baja === null) {
                            dato.fecha_baja = "-"
                        }

                        if (property !== null && property !== "jornada") {
                            //console.log(property)
                            let td = document.createElement("td")
                            td.innerHTML = dato[property]

                            tr.appendChild(td)
                        }
                    }

                    let tdEditar = document.createElement("td");
                    tdEditar.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                    </svg>`
                    tdEditar.addEventListener("click", () => alert("MODIFICAR EMPLEADO"))
                    tr.appendChild(tdEditar)

                    tablaDatos.appendChild(tr)

                }) //-------- "tbody" creado

            })

        //MODAL Botón Añadir
       // let btnAdd = shadowRoot.querySelector("#btnAdd")
       //btnAdd.addEventListener("click", ()=> this.formularioAñadir)
       //btnAdd.addEventListener("click", () => alert("AÑADIR"))

    }

    formularioAñadir() {
        console.log("HOLA, MODAL?")
        let exampleModal = shadowRoot.querySelector("#exampleModal")
        console.log(exampleModal)
        //  exampleModal.toggle()
    }
}

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


window.customElements.define("wc-empleados", WCEmpleados);