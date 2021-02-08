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
       <style>
       body{
        background-color: #EEEEEE;
    }
    
    /* #bodyJornadas{
        text-align: center;
    } */
    
    #divContainer{
        display: none;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #504646de;
    }
    
    #divContainer2{
        display: none;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #504646de;
    }
    
    
    #modalContainer{
        min-width: 40%;
        margin: 0 auto;
        padding: 2rem 3rem;
        background-color: #EEEEEE;
        border-radius: 30px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        text-align: center;
    }
    
    #modalContainer2{
        min-width: 40%;
        margin: 0 auto;
        padding: 2rem 3rem;
        background-color: #EEEEEE;
        border-radius: 30px;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
        text-align: center;
    }
    
    
    #tablaNuevaJornada{
        border-collapse:separate; 
        border-spacing: 0 2px;
        width: 90%;
        margin: 0 auto;
        text-align: left; 
        margin-bottom: 1.5rem;
        margin-top: 1rem;
    }
    
    .flexCol > p{
        text-align: left;
    }
    
    .flexCol > #labelNumTurnos{
        margin-bottom: 0.5rem;
    }
    
    .flexCol > div{
        text-align: left;
    }
    
    #cerrarModal{
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
    
    #cerrarModalEditar{
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
    
    #cerrarModal:hover{
        background-color:#F2BB3F;
        
    }
    
    #cerrarModalEditar:hover{
        background-color:#F2BB3F;
        
    }
    
    #guardarJornada{
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
    
    #guardarJornadaEditar{
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
    
    #guardarJornada:hover{
        background-color:#324047;
    }
    
    #guardarJornadaEditar:hover{
        background-color:#324047;
    }
    
    button i:hover{
        color: #F2BB3F;
    }
    
    
    .btn:active > i{
        text-shadow: 5px 5px 16px #17171a;
        font-size: small;
        margin-left: 3px;
    }
    
    #flexContainer{
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-top: 5rem;
        margin-bottom: 2rem;
        padding-left: 5vw;
        padding-right: 5vw;
    }
    
    #flexContainer h3{
        margin-top: 2px;
        margin-bottom: 0;
    }
    
    .fa-plus-circle{
        margin-top: 1px;
    }
    
    #newJornada{
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
    }
    #newJornada:hover{
        background-color: #324047;
    }
    #newJornada:hover i{
        color: #F2BB3F;
    } 
    
    #newJornada > i{
        font-size: medium;
    }
    
    #tableJornadas{
        width: 90vw;
        margin: 0 auto;
        text-align: left; 
        border-collapse:separate; 
        border-spacing: 0 2px;
    }
    .bi-clock-history{
        color: #F2BB3F;
    }
    .fa-history{
        color: #F2BB3F;
    }
    
    #tableJornadas td:last-child{
        text-align: right;
    }
    
    .thead{
        background-color: #324047;
        color: white;
    }
    
    .thead th:first-child{
        padding-left: 1rem;
    }
    
    
    tbody > tr{
        background-color: #FFFFFF;
    }
    
    p {
        display: block;
        margin-block-start: 0;
        margin-block-end: 0;
        margin-inline-start: 0px;
        margin-inline-end: 0px;
    }
    
    /* tbody > tr > td:nth-child(2),tbody > tr > td:first-child, tbody > tr > td:last-child{
        vertical-align: middle;
    } */
    
    tbody > tr > td:first-child{
        padding-left: 1rem;
    }
    
    .table td{
        font-size: 0.85em;
        vertical-align: middle;
    }
    
       </style>


        <div id="containerJornadas">
            <div id="divContainer2">
                <div id="modalContainer2">
                    <h3>Editar Jornada</h3>
                    <div id="containerFormEditarJornada" class="d-flex justify-content-between">
                        <div class="flexCol" id="jornadaNameEditar">
                            <p for="nombreJornadaEditar">Nombre</p>
                            <input type="text" id="descripcionEditar" name="nombreJornadaEditar" placeholder="Nombre Jornada">
                        </div>
                        <div class="flexCol">
                            <p id="labelNumTurnosEditar">Número de turnos</p>
                            <div>
                                <input type="radio" class="radio" name="numJorEdit" id="numJorEdit1" value="1">
                                <label for="inlineRadio1">1</label>
                                <input type="radio" class="radio" name="numJorEdit" id="numJorEdit2" value="2" checked>
                                <label for="inlineRadio2">2</label>
                                <input type="radio" class="radio" name="numJorEdit" id="numJorEdit3" value="3">
                                <label for="inlineRadio3">3</label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <table id="tablaEditarJornada" class="table table-sm table-hover">
                        
                        </table>
                    </div>
                    <div class="d-flex justify-content-around">
                        <button id="cerrarModalEditar" type="button" class="btn  shadow-none">CANCELAR</button>
                        <button id="guardarJornadaEditar" type="button" class="btn shadow-none">ACTUALIZAR</button>
                    </div>
                </div>
            </div>
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
                                <input type="radio" class="radio" name="numJorNew" id="numJorNew1" value="1">
                                <label for="inlineRadio1">1</label>
                                <input type="radio" class="radio" name="numJorNew" id="numJorNew1" value="2" checked>
                                <label for="inlineRadio2">2</label>
                                <input type="radio" class="radio" name="numJorNew" id="numJorNew1" value="3">
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

        const url = "./datos/jornadas.json";
        var jornadas = this.getDatos(url);



        jornadas
            .then(listaJornadas => {
                this.rellenarTabla(listaJornadas);
                let radios = this.shadowRoot.querySelectorAll(".radio")
                let tablaTurnos = this.shadowRoot.getElementById('tablaNuevaJornada');
                let tablaEditar = this.shadowRoot.getElementById('tablaEditarJornada')
                let modalContainer = this.shadowRoot.getElementById('divContainer');
                let modalContainer2 = this.shadowRoot.getElementById('divContainer2');
                let btAniadirJornada = this.shadowRoot.getElementById("newJornada");
                let botonCerrar = this.shadowRoot.getElementById('cerrarModal');
                let botonCerrarEditar = this.shadowRoot.getElementById('cerrarModalEditar');
                let botonGuardar = this.shadowRoot.getElementById('guardarJornada');
                let numTurnos = this.shadowRoot.querySelector('input[type="radio"]:checked');


                botonCerrarEditar.addEventListener('click', () => {
                    modalContainer2.style.display = 'none';
                    let thead = this.shadowRoot.getElementById('theadEditarJornada');
                    let tbody = this.shadowRoot.getElementById('tbodyEditarJornada');
                    thead.remove();
                    tbody.remove();
                    numTurnos.checked = "false";
                })


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
                    this.guardarJornada(tablaTurnos, listaJornadas);
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
                            let thead = this.shadowRoot.getElementById("headTableNuevaJornada");
                            let tbody = this.shadowRoot.getElementById("bodyTableNuevaJornada");
                            thead.remove();
                            tbody.remove();
                            this.generarTablaJornadaNueva(valorNumTurnos, tablaTurnos);
                        })
                    }


                })
            })

    }

    rellenarTabla(listaJornadas) {

        console.table(listaJornadas);


        let tablaJornadas = this.shadowRoot.getElementById("tableJornadas");
        let bodyJornadas = this.shadowRoot.getElementById("bodyJornadas");

        bodyJornadas.innerHTML = "";

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
                    td.id = `${property}`;
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
            btEditarJornada.classList = "btnEditar btn shadow-none";
            btEditarJornada.title = "editar jornada";

            btBorrarJornada.addEventListener("click", function () {
                tr.remove();
            });


            btEditarJornada.addEventListener('click', () => {
                this.generarTablaEditarJornada()
                this.editarJornada(jornada);
            });

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

    editarJornada(jornada) {
        let modalEditar = this.shadowRoot.getElementById('divContainer2')
        modalEditar.style.display = "flex";
        modalEditar.style.alignItems = "center"
        //TODO Reccorrer los arrays de String de los días para rellenar los inputs
        var jornadaEnHoras = Object.assign({}, jornada);
        let arrayHorario = [];
        //Horario ordenado en pares entrada impares salida
        for (const key in jornadaEnHoras) {

            if (key != "id" && key != "descripcion" && key != "especial") {

                jornadaEnHoras[key] = `${jornada[key]}`.split(/-|&/)
                arrayHorario = jornadaEnHoras[key]
                console.log(arrayHorario);
                let contador = 0;
                let inputHora;
                arrayHorario.forEach(hora => {
                    
                    inputHora = this.shadowRoot.querySelector(`#${key}${contador}`)
                    inputHora.value = hora;
                    contador++;
                });
            }
        }
        

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

    guardarJornada(tablaTurnos, listaJornadas) {

        //TODO Condicion de editar o guardar en base a si ya existe el id

        let jornada = {
            "id": listaJornadas.length + 1,
            "lunes": "",
            "martes": "",
            "miercoles": "",
            "jueves": "",
            "viernes": "",
            "sabado": "",
            "domingo": "",
            "descripcion": this.shadowRoot.querySelector("#descripcion").value,
            "especial": 0
        };

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
                jornada[tablaTurnos.rows[i].id] = turno;
            }
        }

        listaJornadas.push(jornada);

        this.rellenarTabla(listaJornadas);

    }

    generarTablaEditarJornada() {

        //TODO Cambiar checked en función al numero de turnos

        let tablaEditar = this.shadowRoot.getElementById("tablaEditarJornada");

        let thead = document.createElement("thead");
        thead.classList = "thead";
        thead.id = "theadEditarJornada";
        let trHead = document.createElement("tr");
        let thDia = document.createElement("th");

        let tbody = document.createElement("tbody");
        tbody.id = "tbodyEditarJornada";
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
        tablaEditar.appendChild(tbody);
        trHead.appendChild(thDia);
        thead.appendChild(trHead);
        tablaEditar.appendChild(thead);

        let c = 0
        for (var i = 1; i <= 3; i++) {
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

            thSalida.innerHTML = "Salida";
            thEntrada.innerHTML = "Entrada";
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

            //añadir id a los input
            inputEntradaLunes.id = "lunes" + c;
            inputEntradaMartes.id = "martes" + c;
            inputEntradaMiercoles.id = "miercoles" + c;
            inputEntradaJueves.id = "jueves" + c;
            inputEntradaViernes.id = "viernes" + c;
            inputEntradaSabado.id = "sabado" + c;
            inputEntradaDomingo.id = "domingo" + c;
            c++;

            inputSalidaLunes.id = "lunes" + c;
            inputSalidaMartes.id = "martes" + c;
            inputSalidaMiercoles.id = "miercoles" + c;
            inputSalidaJueves.id = "jueves" + c;
            inputSalidaViernes.id = "viernes" + c;
            inputSalidaSabado.id = "sabado" + c;
            inputSalidaDomingo.id = "domingo" + c;
            c++;

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
        }
    }
}
window.customElements.define("wc-jornadas", WcJornadas);

