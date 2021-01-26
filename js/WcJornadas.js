//plantilla Miguel <=========|
//estilos Elena    <=========|
//rellenarTabla() Guiu   <=========| 
//aniadirJornada() Diego   <=========| FALTA IMPLEMENTARLA
//generarTablaJornadaNueva(numTurnos) Estela
//borrarJornada() Álvaro   <=========|
//editarJornada(idJornada) Álvaro, Miguel
//generarTablaJornadaCreada(numTurnos, idJornada) Álvaro, Miguel

class WcJornadas extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        var shadowRoot = this.attachShadow({ mode: "open" });

        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>
        <link rel="stylesheet" href="./css/stylesWcJornadas.css">


        <div id="containerJornadas">
            <div id="divContainer">
                <div id="modalContainer">
                    <h3>Nueva Jornada</h3>
                    <div id="containerFormNuevaJornada" class="d-flex justify-content-between">
                        <div class="flexCol" id="jornadaName">
                            <p for="nombreJornada">Nombre</p>
                            <input type="text" id="descripcion" name="nombreJornada" placeholder="Nombre Jornada">
                        </div>
                        <div class="flexCol">
                            <p id="labelNumTurnos">Número de turnos</p>
                            <div>
                                <input type="radio" class="radio" name="inlineRadioOptions" id="inlineRadio1" value="1">
                                <label for="inlineRadio1">1</label>
                                <input type="radio" class="radio" name="inlineRadioOptions" id="inlineRadio2" value="2" checked>
                                <label for="inlineRadio2">2</label>
                                <input type="radio" class="radio" name="inlineRadioOptions" id="inlineRadio3" value="3">
                                <label for="inlineRadio3">3</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table id="tablaNuevaJornada" class="table table-sm table-hover">
                        
                        </table>
                    </div>
                    <div class="d-flex justify-content-around">
                        <button id="cerrarModal" type="button" class="btn  shadow-none">CANCELAR</button>
                        <button id="guardarJornada" type="button" class="btn shadow-none">GUARDAR</button>
                    </div>
                </div>
            </div>
            <div id="flexContainer">
                <h3>Jornadas</h3>
                <button id="newJornada" type="button" class="btn btn-success shadow-none">AÑADIR<i class="fa fa-plus-circle" aria-hidden="true"></i></button>
            </div>
            <table id="tableJornadas" class="table table-sm table-hover">
                <thead class="thead">
                    <th><i class="bi bi-clock-history"></i></th>
                    <th>Nombre</th>
                    <th>Lunes</th>
                    <th>Martes</th>
                    <th>Miércoles</th>
                    <th>Jueves</th>
                    <th>Viernes</th>
                    <th>Sábado</th>
                    <th>Domingo</th>
                    <th></th>
                </thead>
                <tbody id="bodyJornadas">
                    
                </tbody>
            </table>
        </div>`;
        let radios = this.shadowRoot.querySelectorAll(".radio")
        let tablaTurnos = this.shadowRoot.getElementById('tablaNuevaJornada');
        let modalContainer = this.shadowRoot.getElementById('divContainer');
        let btAniadirJornada = this.shadowRoot.getElementById("newJornada");
        let botonCerrar = this.shadowRoot.getElementById('cerrarModal');
        let botonGuardar = this.shadowRoot.getElementById('guardarJornada');
        console.log(radios)
        let numTurnos = this.shadowRoot.querySelector('input[type="radio"]:checked');
        console.log(numTurnos.value)

        botonCerrar.addEventListener('click', () => {
            modalContainer.style.display = "none";
            let descripcion = this.shadowRoot.getElementById("descripcion");
            let thead = this.shadowRoot.getElementById("headTableNuevaJornada");
            let tbody = this.shadowRoot.getElementById("bodyTableNuevaJornada");
            descripcion.value = "";
            thead.remove(),
            tbody.remove();
            numTurnos.checked = "false";
        });

        botonGuardar.addEventListener('click', () => {
            this.guardarJornada(tablaTurnos);
            modalContainer.style.display = "none";
            let descripcion = this.shadowRoot.getElementById("descripcion");
            let thead = this.shadowRoot.getElementById("headTableNuevaJornada");
            let tbody = this.shadowRoot.getElementById("bodyTableNuevaJornada");
            descripcion.value = "";
            thead.remove(),
            tbody.remove();
            numTurnos.checked = "false";
        })


        btAniadirJornada.addEventListener('click', () => {
            modalContainer.style.alignItems = "center"
            modalContainer.style.display = 'flex';


            let valorNumTurnos = 2;
            this.generarTablaJornadaNueva(numTurnos.value, tablaTurnos);

            for (let i = 0; i < radios.length; i++) {
                radios[i].addEventListener('change', () => {
                    if (radios[i].value !== valorNumTurnos) {
                        valorNumTurnos = radios[i].value
                    }
                    console.log(valorNumTurnos)
                    let thead = this.shadowRoot.getElementById("headTableNuevaJornada");
                    let tbody = this.shadowRoot.getElementById("bodyTableNuevaJornada");
                    thead.remove();
                    tbody.remove();
                    this.generarTablaJornadaNueva(valorNumTurnos, tablaTurnos);
                })
            }


        })

        const url = "./datos/jornadas.json";
        var jornadas = this.getDatos(url);

        jornadas
            .then(listaJornadas => {
                this.rellenarTabla(listaJornadas);
            })
    }

    rellenarTabla(listaJornadas) {

        console.table(listaJornadas);

        let tablaJornadas = this.shadowRoot.getElementById("tableJornadas");
        let bodyJornadas = this.shadowRoot.getElementById("bodyJornadas");

        Array.from(listaJornadas).forEach(jornada => {
            let tr = document.createElement("tr");
            tr.id = `${jornada.id}`;

            let tdIcon = document.createElement("td");
            tdIcon.innerHTML = `<td><i class="fa fa-history" aria-hidden="true"></i></td>`;
            tr.appendChild(tdIcon);

            let tdNombre = document.createElement("td");
            tdNombre.textContent = jornada.descripcion.charAt(0).toUpperCase() + jornada.descripcion.slice(1).toLowerCase();
            tdNombre.id = "descripcion";
            tr.appendChild(tdNombre);

            for (const property in jornada) {

                if (property != "id" && property != "especial" && property != "descripcion") {
                    let td = document.createElement("td");
                    td.class = `${property}`;
                    let horarios = jornada[property].split("&");
                    let horario = "";
                    for (let i = 0; i < horarios.length; i++) {

                        horario = `${horario}${horarios[i]}<br>`;

                    }
                    td.innerHTML = `<p>${horario}</p>`;

                    tr.appendChild(td);
                }

            }
            let tdBotones = document.createElement("td");
            let btBorrarJornada = document.createElement("button");
            btBorrarJornada.classList = "btn shadow-none";
            btBorrarJornada.title = "borrar jornada";
            let btEditarJornada = document.createElement("button");
            btEditarJornada.classList = "btn shadow-none";
            btEditarJornada.title = "editar jornada";

            btBorrarJornada.addEventListener("click", function () {
                tr.remove();
            });

            //btEditarJornada.addEventListener("click", this.editarJornada(1));

            this.crearEventoBtEditarJornada(btEditarJornada, this.editarJornada, jornada.id);

            btBorrarJornada.innerHTML =
                `<i class="bi bi-x-square-fill"></i>`;
            btEditarJornada.innerHTML =
                `<i class="fa fa-pencil" aria-hidden="true"></i>`;

            tdBotones.appendChild(btBorrarJornada);
            tdBotones.appendChild(btEditarJornada);

            tr.appendChild(tdBotones);

            bodyJornadas.appendChild(tr);
        });
        tablaJornadas.appendChild(bodyJornadas);

    }

    editarJornada(idJornada) {
        console.log(idJornada);
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

    generarTablaJornadaNueva(numTurnos, tablaTurnos) {
        let thead = document.createElement("thead");
        thead.id = "headTableNuevaJornada";
        thead.className = "thead";
        let trHead = document.createElement("tr");
        let thDia = document.createElement("th");

        let tbody = document.createElement("tbody");
        tbody.id = "bodyTableNuevaJornada";
        let trLunes = document.createElement("tr");
        let tdLunes = document.createElement("td");
        let trMartes = document.createElement("tr");
        let tdMartes = document.createElement("td");
        let trMiercoles = document.createElement("tr");
        let tdMiercoles = document.createElement("td");
        let trJueves = document.createElement("tr");
        let tdJueves = document.createElement("td");
        let trViernes = document.createElement("tr");
        let tdViernes = document.createElement("td");
        let trSabado = document.createElement("tr");
        let tdSabado = document.createElement("td");
        let trDomingo = document.createElement("tr");
        let tdDomingo = document.createElement("td");

        trLunes.id = "lunes";
        tdLunes.innerHTML = "Lunes";
        trMartes.id = "martes";
        tdMartes.innerHTML = "Martes";
        trMiercoles.id = "miercoles";
        tdMiercoles.innerHTML = "Miércoles";
        trJueves.id = "jueves";
        tdJueves.innerHTML = "Jueves";
        trViernes.id = "viernes";
        tdViernes.innerHTML = "Viernes";
        trSabado.id = "sabado";
        tdSabado.innerHTML = "Sábado";
        trDomingo.id = "domingo";
        tdDomingo.innerHTML = "Domingo";
        thDia.innerHTML = "Día";

        trLunes.appendChild(tdLunes);
        trMartes.appendChild(tdMartes);
        trMiercoles.appendChild(tdMiercoles);
        trJueves.appendChild(tdJueves);
        trViernes.appendChild(tdViernes);
        trSabado.appendChild(tdSabado);
        trDomingo.appendChild(tdDomingo);
        tbody.appendChild(trLunes);
        tbody.appendChild(trMartes);
        tbody.appendChild(trMiercoles);
        tbody.appendChild(trJueves);
        tbody.appendChild(trViernes);
        tbody.appendChild(trSabado);
        tbody.appendChild(trDomingo);
        tablaTurnos.appendChild(tbody);
        trHead.appendChild(thDia);
        thead.appendChild(trHead);
        tablaTurnos.appendChild(thead);

        for (var i = 0; i < numTurnos; i++) {
            let thEntrada = document.createElement("th");
            let thSalida = document.createElement("th");

            let tdEntradaLunes = document.createElement("td");
            let tdSalidaLunes = document.createElement("td");
            let tdEntradaMartes = document.createElement("td");
            let tdSalidaMartes = document.createElement("td");
            let tdEntradaMiercoles = document.createElement("td");
            let tdSalidaMiercoles = document.createElement("td");
            let tdEntradaJueves = document.createElement("td");
            let tdSalidaJueves = document.createElement("td");
            let tdEntradaViernes = document.createElement("td");
            let tdSalidaViernes = document.createElement("td");
            let tdEntradaSabado = document.createElement("td");
            let tdSalidaSabado = document.createElement("td");
            let tdEntradaDomingo = document.createElement("td");
            let tdSalidaDomingo = document.createElement("td");

            let inputEntradaLunes = document.createElement("input");
            let inputSalidaLunes = document.createElement("input");
            let inputEntradaMartes = document.createElement("input");
            let inputSalidaMartes = document.createElement("input");
            let inputEntradaMiercoles = document.createElement("input");
            let inputSalidaMiercoles = document.createElement("input");
            let inputEntradaJueves = document.createElement("input");
            let inputSalidaJueves = document.createElement("input");
            let inputEntradaViernes = document.createElement("input");
            let inputSalidaViernes = document.createElement("input");
            let inputEntradaSabado = document.createElement("input");
            let inputSalidaSabado = document.createElement("input");
            let inputEntradaDomingo = document.createElement("input");
            let inputSalidaDomingo = document.createElement("input");

            thEntrada.innerHTML = "Entrada";
            thSalida.innerHTML = "Salida";
            inputEntradaLunes.type = "time";
            inputSalidaLunes.type = "time";
            inputEntradaMartes.type = "time";
            inputSalidaMartes.type = "time";
            inputEntradaMiercoles.type = "time";
            inputSalidaMiercoles.type = "time";
            inputEntradaJueves.type = "time";
            inputSalidaJueves.type = "time";
            inputEntradaViernes.type = "time";
            inputSalidaViernes.type = "time";
            inputEntradaSabado.type = "time";
            inputSalidaSabado.type = "time";
            inputEntradaDomingo.type = "time";
            inputSalidaDomingo.type = "time";

            tdEntradaDomingo.appendChild(inputEntradaDomingo);
            tdSalidaDomingo.appendChild(inputSalidaDomingo);
            trDomingo.appendChild(tdEntradaDomingo);
            trDomingo.appendChild(tdSalidaDomingo);
            tdEntradaSabado.appendChild(inputEntradaSabado);
            tdSalidaSabado.appendChild(inputSalidaSabado);
            trSabado.appendChild(tdEntradaSabado);
            trSabado.appendChild(tdSalidaSabado);
            tdEntradaViernes.appendChild(inputEntradaViernes);
            tdSalidaViernes.appendChild(inputSalidaViernes);
            trViernes.appendChild(tdEntradaViernes);
            trViernes.appendChild(tdSalidaViernes);
            tdEntradaJueves.appendChild(inputEntradaJueves);
            tdSalidaJueves.appendChild(inputSalidaJueves);
            trJueves.appendChild(tdEntradaJueves);
            trJueves.appendChild(tdSalidaJueves);
            tdEntradaMiercoles.appendChild(inputEntradaMiercoles);
            tdSalidaMiercoles.appendChild(inputSalidaMiercoles);
            trMiercoles.appendChild(tdEntradaMiercoles);
            trMiercoles.appendChild(tdSalidaMiercoles);
            tdEntradaMartes.appendChild(inputEntradaMartes);
            tdSalidaMartes.appendChild(inputSalidaMartes);
            trMartes.appendChild(tdEntradaMartes);
            trMartes.appendChild(tdSalidaMartes);
            tdEntradaLunes.appendChild(inputEntradaLunes);
            tdSalidaLunes.appendChild(inputSalidaLunes);
            trLunes.appendChild(tdEntradaLunes);
            trLunes.appendChild(tdSalidaLunes);
            trHead.appendChild(thEntrada);
            trHead.appendChild(thSalida);
            tablaTurnos.appendChild(thead);
            tablaTurnos.appendChild(tbody);

        }

    }

    guardarJornada(tablaTurnos) {
        let bodyJornadas = this.shadowRoot.getElementById("bodyJornadas");

        let trNuevaJornada = document.createElement("tr");

        //trNuevaJornada.id....

        let descripcion = this.shadowRoot.querySelector("#descripcion");
        let tdIcono = document.createElement("td");
        let tdNombre = document.createElement("td");

        tdIcono.innerHTML = `<i class="fa fa-history" aria-hidden="true"></i>`;
        tdNombre.textContent = descripcion.value.charAt(0).toUpperCase() + descripcion.value.slice(1).toLowerCase();

        trNuevaJornada.appendChild(tdIcono);
        trNuevaJornada.appendChild(tdNombre);

        for (let i = 1; i < tablaTurnos.rows.length; i++) {
            let turno = "";
            for (let j = 1; j < tablaTurnos.rows[i].cells.length; j++) {
                if (tablaTurnos.rows[i].cells[j].firstChild.value !== "") {
                    console.log(tablaTurnos.rows[i].cells[j].firstChild.value);
                    if (turno !== "") {
                        if (j % 2 == 0) {
                            turno += "-" + tablaTurnos.rows[i].cells[j].firstChild.value;
                        }
                        else {
                            turno += "&" + tablaTurnos.rows[i].cells[j].firstChild.value;
                        }
                    }
                    else {
                        turno = tablaTurnos.rows[i].cells[j].firstChild.value;
                    }

                }

            }
            let turnos = turno.split("&");
            let horario = "";
            for (let j = 0; j < turnos.length; j++) {
                horario = `${horario}${turnos[j]}<br>`;
            }
            let tdTurno = document.createElement("td");
            tdTurno.innerHTML = `<p>${horario}</p>`;
            trNuevaJornada.appendChild(tdTurno);
        }

        let tdBotones = document.createElement("td");
        let btBorrarJornada = document.createElement("button");
        btBorrarJornada.classList = "btn shadow-none";
        btBorrarJornada.title = "borrar jornada";
        let btEditarJornada = document.createElement("button");
        btEditarJornada.classList = "btn shadow-none";
        btEditarJornada.title = "editar jornada";

        btBorrarJornada.addEventListener("click", function () {
            trNuevaJornada.remove();
        });

        //btEditarJornada.addEventListener("click", this.editarJornada(1));

        this.crearEventoBtEditarJornada(btEditarJornada, this.editarJornada, null);

        btBorrarJornada.innerHTML =
            `<i class="bi bi-x-square-fill"></i>`;
        btEditarJornada.innerHTML =
            `<i class="fa fa-pencil" aria-hidden="true"></i>`;

        tdBotones.appendChild(btBorrarJornada);
        tdBotones.appendChild(btEditarJornada);

        trNuevaJornada.appendChild(tdBotones);

        bodyJornadas.appendChild(trNuevaJornada);

    }

    crearEventoBtEditarJornada(btEditarJornada, funcion, idJornada) {
        btEditarJornada.addEventListener('click', function () {
            funcion(idJornada);
        });
    }

}
window.customElements.define("wc-jornadas", WcJornadas);

