let Pelis = []

let pelisFilter = []

document.addEventListener("DOMContentLoaded", function(){

    
    fetchDatos().then((datos) => { Pelis= datos })

})



function fetchDatos(){
    const arrayDatos = fetch("https://japceibal.github.io/japflix_api/movies-data.json").then(res => res.json())

    return arrayDatos
}


//funcion para mostarr estrellas
function generateStarRating(rating) {
    //escala de
    const maxRating = 5;

    const redondeo = Math.round(rating / 2);
    //estrella color
    const star = `<i class="fa fa-star checked"></i>`;
    //estrella vacia
    const emptyStar = `<i class="fa fa-star icon-color"></i>`;
    let starsHTML = "";
  
    for (let i = 1; i <= maxRating; i++) {
      if (i <= redondeo) {
        starsHTML += star;
      } else {
        starsHTML += emptyStar;
      }
    }
  
    return starsHTML;
  }


//Añadir funcion al boton busqueda
let btnBuscar = document.getElementById("btnBuscar");


btnBuscar.addEventListener("click", function(){
    let inpBuscar = document.getElementById("inputBuscar").value
    let Conteiner = document.getElementById("content");

    Conteiner.innerHTML = ``

    inpBuscar = inpBuscar.toLowerCase();    

    pelisFilter = Pelis.filter((pelis) => {
        const moveTitle = pelis.title.toLowerCase();
        const moveTagline = pelis.tagline.toLowerCase();
        const moveOverview = pelis.overview.toLowerCase();
        return(
            moveTitle.includes(inpBuscar)||
            moveTagline.includes(inpBuscar)||
            moveOverview.includes(inpBuscar)
        )

    }) 
    
    showPelisFilter(pelisFilter);
 
})


function showPelisFilter(arrayPelisFilter){

    let numeroLine = 0

    arrayPelisFilter.forEach(element => {
        let Conteiner = document.getElementById("content");
        let canvaDiv = document.getElementById("offcanvasTop")

        Conteiner.innerHTML +=` 
        <div class="list-group list-group-item-action flex-colum align-items-start">
        <div class="list-group-item list-group-item-action flex-column align-items-start bg-dark">
          <div class="d-flex w-100 justify-content-between">
            <h5 class="mb-1 text-light">${element.title}</h5>
            <small>${generateStarRating(element.vote_average)}</small>
          </div>
          <p class="text-light"> ${element.tagline}</p>
          <h1 hidden>${element.id}</h1>
          <button type="button" class="btn btn-danger dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false"> </button>
        </div>
      </div>
        
    
        <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">   
            <div class="offcanvas-header">
            <h1>${element.title} </h1>
          <p class="offcanvas-title" id="offcanvasTopLabel">${element.overview} </p>
          
             </div>
            <hr>
            <div class="offcanvas-body">
            <h3 class="" id="Generos"> </h3>
            <p class="nav-item dropdown" id="Opcion"> </p>
            <a class="nav-link  me-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-bs-haspopup="true" aria-expanded="false">
              more
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item active card">
                      <p> año: ${element.release_date} </p>
                    </li>
                    <li class="nav-item card">
                      <p> Runtime: ${element.runtime}m </p>
                    </li>
                    <li class="nav-item dropdown card">
                        <p> Budget: $${element.budget} </p>
                    </li>
                    <li class="nav-item dropdown card">
                        <p> Revenue: $${element.revenue} </p>
                    </li>
                  </ul>
            </div>
            </div>
            `
    });
}



let canvaDiv = document.getElementById("canva")

if(canvaDiv !== null){
    canvaDiv.addEventListener("click", function(){

    


    })
}
