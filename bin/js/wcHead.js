class WcHead extends HTMLElement {
    constructor() {
        super();

    }
    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: "open" });

        const template = document.querySelector("#wc-head");
        const plantilla = template.content.cloneNode(true);
        shadowRoot.appendChild(plantilla);

        var icono1b = document.createElement("img");
        var icono2b = document.createElement("img");
        var icono3b = document.createElement("img");
        var icono4b = document.createElement("img");
        var icono5b = document.createElement("img");
        let div = document.createElement("div");
        let div1 = document.createElement("div");
        let div2 = document.createElement("div");
        let div21 = document.createElement("div");
        let div3 = document.createElement("div");
        let div4 = document.createElement("div");
        let div5 = document.createElement("div");
        let div6 = document.createElement("div");
        let div7 = document.createElement("div");
        let div8 = document.createElement("div");
        let div9 = document.createElement("div");
        let div10 = document.createElement("div");
        let div11 = document.createElement("div");
        let div12 = document.createElement("div");
        let div13 = document.createElement("div");
        let div14 = document.createElement("div");
        let div15 = document.createElement("div");
        let div16 = document.createElement("div");
        let div17 = document.createElement("div");
        let div18 = document.createElement("div");
        let div19 = document.createElement("div");
        let logo = document.createElement("img");
        var a1 = document.createElement("a");
        var a2 = document.createElement("a");
        var a3 = document.createElement("a");
        var a4 = document.createElement("a");
        var a5 = document.createElement("a");
        var figure = document.createElement("figure")
        var imagenUsuario = document.createElement("img");
        var figurecaption = document.createElement("figurecaption");
        var nombreUsuario1 = document.createElement("div");
        var simboloMenu = document.createElement("div");
        var imagenBoton = document.createElement("img");
        var hr = document.createElement("hr");


        logo.id = "logo";
        div.classList.add("container-fluid");
        div1.classList.add("container-row");
        div2.classList.add("col-md-2");
        div21.classList.add("col-md-12");
        div3.classList.add("col-md-2");
        div4.classList.add("col-md-3");
        div5.classList.add("col-md-2");
        div6.classList.add("col-md-3");
        div7.classList.add("col-md-2");
        div8.classList.add("col-md-9");
        div9.classList.add("col-md-2");
        div10.classList.add("col-md-9");
        div11.classList.add("col-md-2");
        div12.classList.add("col-md-9");
        div13.classList.add("col-md-2");
        div14.classList.add("col-md-9");
        div15.classList.add("col-md-2");
        div16.classList.add("col-md-9");
        div17.classList.add("col-md-12");
        div18.classList.add("col-md-2");
        div19.classList.add("col-md-7");
        nombreUsuario1.classList.add("col-md-2");
        simboloMenu.classList.add("col-md-1")
        nombreUsuario1.classList.add("imagenUsuario");
        hr.classList.add("linea");



        //metemos los iconos en los img
        icono1b.src = "./img/svg/icono1blanco.svg";
        icono1b.id = "icono1b";
        icono2b.src = "./img/svg/icono2blanco.svg";
        icono2b.id = "icono2b";
        icono3b.src = "./img/svg/icono3blanco.svg";
        icono3b.id = "icono3b";
        icono4b.src = "./img/svg/icono4blanco.svg";
        icono4b.id = "icono4b";
        icono5b.src = "./img/svg/icono5blanco.svg";
        icono5b.id = "icono5b";
        logo.src = "./img/logo.png";
        imagenUsuario.src = "./img/svg/usuario.svg";
        imagenBoton.src = "./img/svg/list.svg";
        imagenBoton.id = "botonMenu";
        imagenUsuario.id = "imgUsuario";
        figurecaption.innerHTML = " Admin";
        figurecaption.id = "usuario";




        //metemos los textos en los divs
        div19.innerHTML = "Sistema de control de accesos";
        div8.id = "div8";
        div8.href = "#";
        div8.innerHTML = " Empleados";
        a1.appendChild(div8);
        a1.id = "empleados";
        div10.innerHTML = "Jornadas";
        div10.id = "div10";
        div10.href = "#";
        a2.appendChild(div10);
        a2.id = "jornadas";
        div12.innerHTML = "Jornadas/Empleados ";
        div12.id = "div12";
        div12.href = "#";
        a3.appendChild(div12);
        a3.id = "jornadasempleados";
        div14.innerHTML = "Calendario ";
        div14.id = "div14";
        div14.href = "#";
        a4.appendChild(div14);
        a4.id = "calendario";
        div16.innerHTML = "Calendario/Empleados";
        div16.id = "div16";
        div16.href = "#";
        a5.appendChild(div16);
        a5.id = "calendarioempleados";
        div7.id = "div7";
        div9.id = "div9";
        div11.id = "div11";
        div13.id = "div13";
        div15.id = "div15";

        // div sistema de acceso
        div18.appendChild(logo);
        div17.appendChild(div18);
        div17.appendChild(div19);

        nombreUsuario1.appendChild(figure);
        nombreUsuario1.appendChild(imagenUsuario);
        nombreUsuario1.appendChild(figurecaption);
        div17.appendChild(nombreUsuario1);
        simboloMenu.appendChild(imagenBoton);
        div17.appendChild(simboloMenu);
        div17.appendChild(hr);


        //div empleados

        div7.appendChild(icono1b);
        div2.appendChild(div7);
        div2.appendChild(a1);
        //div jornadas
        div9.appendChild(icono2b);
        div3.appendChild(div9);
        div3.appendChild(a2);
        //div jornadas/empleados
        div11.appendChild(icono3b);
        div4.appendChild(div11);
        div4.appendChild(a3);
        //div calendario
        div13.appendChild(icono4b);
        div5.appendChild(div13);
        div5.appendChild(a4);
        //div calendario-empleados
        div15.appendChild(icono5b);
        div6.appendChild(div15);
        div6.appendChild(a5);
        // div21 metemos todos los div anteriores
        div21.appendChild(div2);
        div21.appendChild(div3);
        div21.appendChild(div4);
        div21.appendChild(div5);
        div21.appendChild(div6);
        //div1 metemos el sistema de accesos y el div anterior
        div1.appendChild(div17);
        div1.appendChild(div21);

        div.appendChild(div1);

        shadowRoot.appendChild(div);


        var a1 = shadowRoot.querySelector('#empleados');
        var a2 = shadowRoot.querySelector('#jornadas');
        var a3 = shadowRoot.querySelector('#jornadasempleados');
        var a4 = shadowRoot.querySelector('#calendario');
        var a5 = shadowRoot.querySelector('#calendarioempleados');


        this.cambiarColor(a1, div8, div7, 1);
        this.cambiarColor(a2, div10, div9, 2);
        this.cambiarColor(a3, div12, div11, 3);
        this.cambiarColor(a4, div14, div13, 4);
        this.cambiarColor(a5, div16, div15, 5);


        var style = document.createElement('style');
        shadowRoot.appendChild(style);
        shadowRoot.querySelector('style').textContent = `
        .container-fluid {
          background-color: rgb(50, 64, 71);
          color:white;
          font-family: arial;
        }
        #logo{
            width:50px;
            heigh:50px;
        }
        hr{
            
            border: white solid 1.5px;
        }
        #botonMenu{
         
            width:50px;
            heigh:50px;
        }
        #imgUsuario{
            width:45px;
            heigh:45px;
        }
        
        img{
            width:20px;
            heigh:20px;
            margin-top:15px;
            margin-bottom:10px;
        }
        .col-md-2{
            display: inline-block;
            
          
            
        } 
        .col-md-3{
            display: inline-block;
            
        }   
        .col-md-9{
            color: white;
            display: inline-block;
            heigh:20px;
        }
        .col-md-9:hover{
            color: #F2BB3F;
        }
        .col-md-10{
            display: inline-block;
            text-align:center;
            font-size: 30px;
            
        } 
        .imagenUsuario{
            text-align:center;
            
        }
        .col-md-1{
            display: inline-block;
        }
        .col-md-7{
            display: inline-block;
            text-align:center;
            font-size: 30px;
        }
        .col-md-9{
            display: inline-block;
        }

        #usuario{
            position:absolute; 
            margin: 60px 10px 10px -45px;

        }
        #div7{
          
            border-left: #FFFFFF 3px solid;
            border-radius: 3px;

        }
        #div9{
          
            border-left: #FFFFFF 3px solid;
            border-radius: 3px;
        }

        #div11{
          
            border-left: #FFFFFF 3px solid;
            border-radius: 3px;
        }

        #div13{
          
            border-left: #FFFFFF 3px solid;
            border-radius: 3px;
        }


        #div15{
          
            border-left: #FFFFFF 3px solid;
            border-radius: 3px;
        }


        `
            ;

    }

    cambiarColor(componente, componente1, componente2, numero) {
        componente.addEventListener("click", (() => {

            if (contenido.hasChildNodes()) {
                var children = contenido.childNodes;
                for (var j = 0; j < children.length; j++) {

                    for (let i = 1; i <= 5; i++) {
                        var icono = "#icono" + i + "b";

                        this.shadowRoot.querySelector(icono).src = "./img/svg/icono" + i + "blanco.svg";

                        for (let i = 8; i <= 16; i = i + 2) {
                            var a = this.shadowRoot.querySelector("#div" + i);

                            a.style.color = "#FFFFFF";

                            for (let i = 7; i <= 15; i = i + 2) {
                                var e = this.shadowRoot.querySelector("#div" + i);
                                e.style.borderLeft = "#FFFFFF 3px solid";

                            }

                        }

                    }

                    var icono = "#icono" + numero + "b";
                    this.shadowRoot.querySelector(icono).src = "./img/svg/icono" + numero + "amarillo.svg";
                    componente1.style.color = "#F2BB3F";
                    componente2.style.borderLeft = "#F2BB3F 3px solid";

                    contenido.removeChild(children[j]);
                }

            }

            if (componente.id === "empleados") {

                let contenido = document.querySelector("#contenido");
                let empleados = document.createElement("wc-empleados");
                empleados.setAttribute("url","datos/empleados.json")
               
                contenido.appendChild(empleados);

            }

            if (componente.id === "jornadas") {

                let contenido = document.querySelector("#contenido");
                let jornadas = document.createElement("Wc-Jornadas");
                contenido.appendChild(jornadas);

            }

            if (componente.id === "jornadasempleados") {

                let contenido = document.querySelector("#contenido");
                let jornadasempleados = document.createElement("wc-jornadasempleados");
                contenido.appendChild(jornadasempleados);
            }

            /*if (componente.id === "calendario") {

                let contenido = document.querySelector("#contenido");
                let empleados = document.createElement("wc-empleados");
                contenido.appendChild(empleados);
            }

            if (componente.id === "calendarioempleados") {

                let contenido = document.querySelector("#contenido");
                let empleados = document.createElement("wc-empleados");
                contenido.appendChild(empleados);
            }
            */



        }));




    };






}




window.customElements.define("wc-head", WcHead);