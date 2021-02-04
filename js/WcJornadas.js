//plantilla Miguel
//estilos Elena
//rellenarTabla() Guiu
//aniadirJornada() Diego
//generarTablaJornadaNueva(numTurnos) Estela
//borrarJornada() Álvaro
//editarJornada(idJornada) Álvaro, Miguel
//generarTablaJornadaCreada(numTurnos, idJornada) Álvaro, Miguel

class WcJornadas extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        var shadowRoot = this.attachShadow({ mode: "open" });

        shadowRoot.innerHTML = `

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js" integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js" integrity="sha384-LtrjvnR4Twt/qOuYxE721u19sVFLVSA4hf/rRt6PrZTmiPltdZcI7q7PXQBYTKyf" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">


        <div>
            <div class="d-flex p-4 align-items-center justify-content-between">
                <h3>Jornadas</h3>
                <input type="button" id="newJornada" value="Agregar">
            </div>
            
            <div class="d-flex m-4">
                <table id="tablaJornadas" class="table">
                    <thead class="thead-dark width-100">
                        <th class="header" scope="col">Nombre</th>
                        <th class="header" scope="col">Lunes</th>
                        <th class="header" scope="col">Martes</th>
                        <th class="header" scope="col">Miércoles</th>
                        <th class="header" scope="col">Jueves</th>
                        <th class="header" scope="col">Viernes</th>
                        <th class="header" scope="col">Sábado</th>
                        <th class="header" scope="col">Domingo</th>
                        <th class="header" scope="col">Acciones</th>
                    </thead>
                    <tbody id="bodyJornadas">
                        
                    </tbody>
                </table>
            </div>
        </div>`;

        let btAniadirJornada = this.shadowRoot.querySelector("#newJornada");

        const url = "./datos/jornadas.json";
        var jornadas = this.getDatos(url);

        jornadas
            .then(listaJornadas => {
                this.rellenarTabla(listaJornadas);
            })
            .then(btAniadirJornada.addEventListener("click", this.aniadirJornada));
    }

    rellenarTabla(listaJornadas) {

        console.table(listaJornadas);

        let tablaJornadas = this.shadowRoot.querySelector("#tablaJornadas");
        let bodyJornadas = this.shadowRoot.querySelector("#bodyJornadas");

        Array.from(listaJornadas).forEach(jornada => {
            let tr = document.createElement("tr");
            tr.id = `${jornada.id}`;

            let tdNombre = document.createElement("td");
            tdNombre.textContent = jornada.descripcion;;
            tdNombre.id = "descripcion";
            tr.appendChild(tdNombre);

            for (const property in jornada) {

                if (property != "id" && property != "especial" && property != "descripcion") {
                    let td = document.createElement("td");
                    td.id = `${property}`;
                    let horarios = jornada[property].split("&");
                    let horario = "";
                    for (let i = 0; i < horarios.length; i++) {

                        horario = `${horario}${horarios[i]}<br>`;

                    }
                    td.innerHTML = horario;

                    tr.appendChild(td);
                }

            }
            let tdBotones = document.createElement("td");
            tdBotones.classList.add("d-flex");
            tdBotones.classList.add("justify-content-between")
            let btBorrarJornada = document.createElement("button");
            let btEditarJornada = document.createElement("button");

            btBorrarJornada.addEventListener("click", function () {
                tr.remove();
            });

            btEditarJornada.addEventListener("click", this.editarJornada);

            btBorrarJornada.innerHTML =
                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>`;
            btEditarJornada.innerHTML =
                `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5L13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175l-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
            </svg>`;

            tdBotones.appendChild(btBorrarJornada);
            tdBotones.appendChild(btEditarJornada);

            tr.appendChild(tdBotones);

            bodyJornadas.appendChild(tr);
        });
        tablaJornadas.appendChild(bodyJornadas);

    }

    aniadirJornada() {
        // boton añadir

        let btNewJornada = this.shadowRoot.querySelector("#newJornada");
        /* btnAdd.type = ("button");
         btnAdd.innerHTML = "AñadirJS";
         btnAdd.classList.add("btn");
         btnAdd.classList.add("btn-primary");
         btnAdd.modal="toggle";
         btnAdd.dataset.toggle = "modal";
         btnAdd.dataset.target = "#exampleModalCenter" */

        //     main.innerHTML= ` <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
        //     Añadir
        // </button>`;

        // btnAdd.data-open("modal");
        btNewJornada.addEventListener("click", function () {
            main.innerHTML = `<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLongTitle">Nueva Jornada</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form action="#" id = "miform">
                <div class="row">
                <label for="descripcion">Descripción </label>  <input type="text" name="" id="descripcion">
                <legend class="col-form-label col-sm-2 pt-0">Turnos</legend>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="radios1" value="1" checked>
                    <label class="form-check-label" for="radios1">
                    1
                    </label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="radios2" value="option2">
                    <label class="form-check-label" for="radios2">
                      2
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="exampleRadios" id="radios3" value="option3" disabled>
                    <label class="form-check-label" for="radios3">
                      3
                    </label>
                  </div>
                </div>
    
    
    
    
    
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
              <button type="button" class="btn btn-primary">Guardar</button>
            </div>
          </div>
        </div>
      </div>`;
        });

    }

    editarJornada(idJornada) {
        console.log(idJornada);
    }


    generarTablaJornadaNueva(numTurnos) {

    }

    generarTablaJornadaCreada(numTurnos, idJornada) {

    }

    getDatos(url) {
        return new Promise(function (resolve, reject) {
            fetch(url)
                .then(function (response) {
                    if (response.ok)
                        resolve(response.json())
                    else {
                        reject(response.status)
                    }
                }).catch(function (error) {
                    console.log("Error: " + error)
                    reject(error);
                })
        })
    }

}
window.customElements.define("wc-jornadas", WcJornadas);