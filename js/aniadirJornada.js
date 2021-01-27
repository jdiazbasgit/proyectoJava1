function aniadirJornada(){
    let main = document.querySelector("#midiv");
    let divBoton = document.querySelector("#divBoton");

    // boton añadir

    let btnAdd = document.querySelector("#btnAdd");
   /* btnAdd.type = ("button");
    btnAdd.innerHTML = "AñadirJS";
    btnAdd.classList.add("btn");
    btnAdd.classList.add("btn-primary");
    btnAdd.modal="toggle";
    btnAdd.dataset.toggle = "modal";
    btnAdd.dataset.target = "#exampleModalCenter" */

    divBoton.appendChild(btnAdd);

//     main.innerHTML= ` <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
//     Añadir
// </button>`;

   // btnAdd.data-open("modal");
    btnAdd.addEventListener("click", function(){
        main.innerHTML= `<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
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

    })
    
    




























//  //modal. 
//     //div1
//     let div1 = document.createElement("div");
//     div1.id = "exampleModalCenter";
//     div1.classList.add("modal");
//     div1.classList.add("fade");

//     //div document
//     let divDoc = document.createElement("div");
//     divDoc.classList.add("modal-dialog");
//     divDoc.classList.add("modal-dialog-centered");
//     // divDoc.role ="document";

//     // div content
//     let divContent = document.createElement("div");
//     divContent.classList.add("modal-content");

//     //div header 
//     let divHeader= document.createElement("div");
//     divHeader.classList.add("modal-header");

//         // title
//         let h5 = document.createElement("h5");
//         h5.innerHTML = "Nueva Jornada";


//     divHeader.appendChild(h5);
//     divContent.appendChild(divHeader);
//     divDoc.appendChild(divContent);
//     div1.appendChild(divDoc);
    









    

}