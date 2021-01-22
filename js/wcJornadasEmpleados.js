class WCJornadasEmpleados extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.empleados = new Array();
        this.jornadas = new Array();

        let shadowRoot = this.attachShadow({ mode: "open" });

        const template = document.querySelector("#plantilla3");
        const plantilla = template.content.cloneNode(true);
        shadowRoot.appendChild(plantilla);

        /* let thNombre = shadowRoot.querySelector("#thNombre");
        let thApellidos = shadowRoot.querySelector("#thApellidos");

        thApellidos.addEventListener("click", function(){
            console.log("apellidos");
        });

        thNombre.addEventListener("click", function(){
            console.log("nombre");
        }); */

        let tbody = shadowRoot.querySelector("#tbody");

        this.cargaEmpleados(this.empleados, this.jornadas, tbody, this.rellenarTabla, this.url, this.url2);

        this.rellenarTabla(this.empleados, this.jornadas, tbody);

    }

    cargaEmpleados(empleados, jornadas, tbody, funcion, url, url2) {
        getData(url).then(function (datos) {
            Array.prototype.forEach.call(datos, dato => {
                empleados.push(dato);

            })
            getData(url2).then(function (datos) {
                Array.prototype.forEach.call(datos, dato => {
                    jornadas.push(dato);
                })
                funcion(empleados, jornadas, tbody);
            });

        });
    }

    /* ordenarPorApellidos (empleados, jornadas, tbody){
        empleados.sort(dynamicSort("apellidos"));        
        this.rellenarTabla(empleados, jornadas, tbody);        
    } */

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === "url")
            this.url = newValue;
        else
            this.url2 = newValue;

    }

    static get observedAttributes() {
        return ["url", "url2"];
    }

    rellenarTabla(empleados, jornadas, tbody) {
        empleados.sort(dynamicSort("apellidos"));

        empleados.forEach(empleado => {
            if (empleado.fecha_baja != null)
                return;
            let fila = document.createElement("tr");

            let nombre = document.createElement("td");
            let apellidos = document.createElement("td");
            let jornada = document.createElement("td");
            let jornadaSelect = document.createElement("select");

            let option = [];
            option[0] = document.createElement("option");
            option[0].innerHTML = "Seleccione una jornada...";
            jornadaSelect.appendChild(option[0]);
            let i = 1;
            jornadas.forEach(jornada => {
                option[i] = document.createElement("option");
                option[i].innerHTML = jornada.descripcion;
                jornadaSelect.appendChild(option[i]);
                if (empleado.jornada == jornada.id)
                    jornadaSelect.selectedIndex = i;
                else if (empleado.jornada == null)
                    jornadaSelect.selectedIndex = "0";
                i++;
            });

            nombre.innerHTML = empleado.nombre;
            apellidos.innerHTML = empleado.apellidos;

            jornada.appendChild(jornadaSelect);

            fila.appendChild(nombre);
            fila.appendChild(apellidos);
            fila.appendChild(jornada);

            tbody.appendChild(fila);

            jornadaSelect.addEventListener("change", function () {
                let jornadaSeleccionada = option[jornadaSelect.selectedIndex].text;
                console.log("Ha seleccionado la jornada \"" + jornadaSeleccionada + "\" para " + empleado.apellidos);
            });

        });

    }

}
window.customElements.define("wc-jornadasempleados", WCJornadasEmpleados);


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

function dynamicSort(property) {
    var sortOrder = 1;
    if (property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a, b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}