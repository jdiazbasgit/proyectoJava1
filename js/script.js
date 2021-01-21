class WCJornadasEmpleados extends HTMLElement {
    constructor() {
        super();        
    }

    connectedCallback() {
        var empleados = [];        
        var jornadas = [];

        let shadowRoot = this.attachShadow({ mode: "open" });

        const template = document.querySelector("#plantilla3");
        const plantilla = template.content.cloneNode(true);
        shadowRoot.appendChild(plantilla);

        let tbody = shadowRoot.querySelector("#tbody");
        
        getData(this.url).then(function (datos){
            Array.prototype.forEach.call(datos, dato => {
                empleados.push(dato);
            })
        });
        getData(this.url2).then(function (datos){
            Array.prototype.forEach.call(datos, dato => {
                jornadas.push(dato);
            })
        });
        console.log(empleados);
        this.rellenarTabla(empleados, jornadas, tbody);
    }

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
            
            empleados.forEach(empleado => {
                console.log("hola");
                //var columna = [];            
                let fila = document.createElement("tr");

                let nombre = document.createElement("td");
                let apellidos = document.createElement("td");
                let jornada = document.createElement("td");
                let jornadaSelect = document.createElement("select");

                
                    /* jornadas.forEach(jornada => {
                        let option = [];
                        for (let j = 0; j < jornadas.lenght; j++) {
                            //for (let jornada of dato){
                            option[j] = document.createElement("option");
                            option.innerHTML = jornada.descripcion;
                            jornadaSelect.appendChild(option);
                        }
                    }); */
                

                console.log(empleado.nombre);
                nombre.innerHTML = empleado.nombre;
                apellidos.innerHTML = empleado.apellidos;

                jornada.appendChild(jornadaSelect);
                fila.appendChild(nombre);
                fila.appendChild(apellidos);
                fila.appendChild(jornada);

                /* let i = 0;
                for (const propiedad in dato) {
                    columna[i] = document.createElement("td");
                    columna[i].innerHTML = dato[propiedad];
                    fila.appendChild(columna[i]);
                    i++;
                } */


                tbody.appendChild(fila);

                i++;

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