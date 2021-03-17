class WCCalendario extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.dias= new Array();

        var shadowRoot = this.attachShadow({ mode: "open" });

        //const template = document.querySelector("#plantilla");
        //const plantilla = template.content.cloneNode(true);
        //shadowRoot.appendChild(plantilla);
        shadowRoot.innerHTML = `
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css">
        <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"/>

            <style>
                #containerFlex{
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    margin-top: 5rem;
                    margin-bottom: 2rem;
                    padding-left: 5vw;
                    padding-right: 5vw;
                }
            </style>

            <div id="containerCalendario">
                <div id="containerFlex">
                    <h3>Calendario</h3>
                    <form method="post" action="#">
                        <select id="anios">
                            <option value="2019">2019</option>
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>                       
                        </select>
                        <!-- <button type="submit">Seleccionar</button> -->
                    </form>
                </div>
                <div id="calendario">

                    <table id=tabla0>
                        <thead><th>Enero</th></thead>            
                    </table>
                    <table id=tabla1>
                        <thead><th>Febrero</th></thead>            
                    </table>
                    <table id=tabla2>
                        <thead><th>Marzo</th></thead>            
                    </table>
                    <table id=tabla3>
                        <thead><th>Abril</th></thead>            
                    </table>
                    <table id=tabla4>
                        <thead><th>Mayo</th></thead>            
                    </table>
                    <table id=tabla5>
                        <thead><th>Junio</th></thead>            
                    </table>
                    <table id=tabla6>
                        <thead><th>Julio</th></thead>            
                    </table>
                    <table id=tabla7>
                        <thead><th>Agosto</th></thead>            
                    </table>        
                    <table id=tabla8>
                        <thead><th>Septiembre</th></thead>           
                    </table>
                    <table id=tabla9>
                        <thead><th>Octubre</th></thead>            
                    </table>
                    <table id=tabla10>
                        <thead><th>Noviembre</th></thead>            
                    </table>
                    <table id=tabla11>
                        <thead><th>Diciembre</th></thead>            
                    </table>
                            
                </div>
            </div>

        `


        let table = [];
        for (let i = 0; i < 12; i++) {
            table[i] = shadowRoot.querySelector("#tabla".concat(i));
        }

        let diasSemana = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado", "Domingo"];

        for (let i = 0; i < 12; i++) {
            let semana = document.createElement("tr");
            for (let i = 0; i < 7; i++) {
                let td = document.createElement("td");
                td.innerHTML = diasSemana[i];
                semana.appendChild(td);
            }
            let tbody = table[i].appendChild(document.createElement("tbody"));
            tbody.appendChild(semana);
            for (let j = 0; j < 6; j++) {
                let tr = tbody.appendChild(document.createElement("tr"));
                for (let k = 1; k < 8; k++) {
                    let td = document.createElement("td");
                    td.setAttribute("id", "".concat(i, j, k));
                    tr.appendChild(td);
                }
            }
        }        
        this.cargaDias(this.dias, this.url, this.shadowRoot);
            
    }

    cargaDias (dias, url, shadowRoot){
        getData(url).then(function (datos) {
            Array.prototype.forEach.call(datos, dato => {
                dias.push(dato);
            });
            dias.forEach(dia=>{
                let id = "".concat(dia.mes, dia.fila, dia.columna);
                console.log(id);
                let tipo = dia.status.descripcion;                
                let fecha = new Date(dia.fecha);
                let numeroDia = fecha.getDate();
                let casilla = shadowRoot.getElementById(id);
                casilla.innerHTML = numeroDia;
                let select = document.createElement("select");
                let laborable = document.createElement("option");
                laborable.innerHTML = "laborable";
                let festivo = document.createElement("option");
                festivo.innerHTML = "festivo";
                select.appendChild(laborable);
                select.appendChild(festivo);
                casilla.appendChild(select);
                casilla.style.backgroundColor = "blue";
                if (tipo == "festivo"){
                    select.selectedIndex = 1;
                    casilla.style.backgroundColor = "red";
                }
                    
            }) 
        });
    }
    


    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "url")
            this.url = newValue;
        else
            this.url2 = newValue;

    }

    static get observedAttributes() {
        return ["url"];
    }
}
window.customElements.define("wc-calendario", WCCalendario);

function getData(url) {
    return new Promise(function (resolve, reject) {
        fetch(url).then(function (response) {
            if (response.status == 200)
                resolve(response.json());
            else
                reject(response.status);
        }).catch(function (error) {
            reject(error);
        });
    });
}