/* ***** ****** ****** VARIABLES ***** ***** ***** */
const header= document.querySelector(".header");
const headerHeight= header.offsetTop;
const nav= document.querySelector(".nav");
/* ***** ****** ****** ***** ***** ***** */

/* ***** ****** ****** ADD/REMOVE CLASSNAME METHODS ***** ***** ***** */
const addClass= (x,y) => x.classList.add(y);
const removeClass= (x,y) => x.classList.remove(y);
/* ***** ****** ****** ***** ***** ***** */

/* ***** ****** ****** MENU TOGGLE FUNCTION ***** ***** ***** */
function menuToggle () {
    let menu= document.querySelector(".menu"); 
    let nav= document.querySelector(".nav");
    let menuIcon= document.querySelector(".menuIcon"); 
    let menuList= document.querySelector(".menulist");

    menu.addEventListener("click", () => {
        let menuAttr= menuIcon.getAttribute("src");
        
        if(menuAttr== "img/menu.svg"){
            menuIcon.setAttribute("src", "img/x.svg");
        } else {
            menuIcon.setAttribute("src", "img/menu.svg");
        }

        nav.classList.toggle("navactive");
    });  
    
    menuList.addEventListener("click", () => {
        console.log("inside");
        nav.classList.toggle("navactive");
        menuIcon.setAttribute("src", "img/menu.svg");
    });

    window.addEventListener("click", (e) => {
        if(!nav.contains(e.target) && !menu.contains(e.target)){
            console.log("outside");
            removeClass(nav, "navactive");
            menuIcon.setAttribute("src", "img/menu.svg");
        }
    });
};

menuToggle();
/* ***** ****** ****** ***** ***** ***** */

/* ***** ****** ****** HEADER REDUCED ON SCROLL ***** ***** ***** */
window.addEventListener("scroll", () => {
    let scrollY=window.scrollY;
    
    if (scrollY>=headerHeight) {
        addClass(header, "onscroll");
        addClass(nav, "navonscroll");
    } else {
            removeClass(header, "onscroll");
            removeClass(nav, "navonscroll");
        }
    });
/* ***** ****** ****** ***** ***** ***** */

/* ***** ****** ****** WSP SUBMIT BUTTON ***** ***** ***** */


function submit1() {
//GETTING THE VARIABLES FOR THE MSG

    //SIMPLES
    let name= document.getElementById("fname").value;
    let mail= document.getElementById("fmail").value;
    let cel= document.getElementById("ftel").value;
    let clase= document.getElementById("clase").value;
    let horario= document.getElementById("ftime").value;
    let obs= document.getElementById("obs").value;
    
    //MODALIDAD
    let modo= document.getElementsByName("modo");
    let modovalue;
        for( let i=0; i < modo.length; i++) {
            if(modo[i].checked){
                modovalue= modo[i].value;
            }
        }
    //

    //DIAS
    let dias= document.getElementsByName("d");
    let diasnames=[];
    for(let i=0; i < dias.length; i++) {
        if(dias[i].checked){
            diasnames.push(dias[i].value);
        }
    }
   //
    //

//ERROR CHECKING & sCONSTRUCTING THE MSG
    if(name==null || name==""){
        alert("Por favor, completa tu nombre"); 
        return;   
    } if (mail.includes("@")!== true) {
        alert("Por favor, ingresa un mail valido");
        return; 
    } if (/^[0-9]+$/.test(cel)!==true){
        alert("Por favor, ingresa tu numero celular");
        return; 
    }  if (modovalue== null || modovalue== "") {
        alert("Por favor, ingresa la modalidad de cursada");
        return; 
    } if(diasnames.length==0) {
        alert("Por favor, agrega tus dias de cursada");
        return; 
    } if (horario==null || horario==""){
        alert("Por favor, ingresa un horario preferido");
        return; 
    } else  {
        let wspmsg= document.querySelector(".form_button").href= `https://wa.me/5491155773943/?text=!Hola!%0D%0AMi%20nombre%20es%20${name}%20(${mail}%20/%20${cel}).%0D%0ANecesito%20clases%20de%20*${clase}*%20en%20modalidad%20*${modovalue}*%20los%20dias%20_${diasnames}_%20en%20horario:%20${horario}hs.%0D%0AObservaciones:%20${obs}.%0D%0A!Espero%20tu%20respuesta!&lang=spa`;
    }
    //
}


/* ***** ****** ****** HERO TRANSITION***** ***** ***** */
//let cc1= document.querySelector(".aprende");
    let cc1= document.querySelector(".aprende");
    let cc2= document.querySelector(".ingles");
    window.addEventListener('load', () =>  {
        addClass(cc1, "on");
        addClass(cc2, "oni");
    })





/* ***** ****** ****** * ***** ***** ***** */




// !Hola! Mi nombre es {nombre} ({mail}/{tel}). Necesito clases de "{CLASE}" en modalidad "{MODALIDAD}" los dias "{DIAS}" en horario {HORA}. Observaciones: {OBSERVACIONES}. !Espero tu respuesta! 
/* ***** ****** ****** * ***** ***** ***** */



/* ***** ****** ****** RESIZE WINDOW HEIGHT ON MOBILE ***** ***** ***** */
// let root= document.documentElement;

// root.style.setProperty("--screenY", window.innerHeight- 40 +"px"); 

/* ***** ****** ****** * ***** ***** ***** */





// window.addEventListener("resize", () => {
//     console.log("Resizing...")
//     root.style.setProperty("--screenY", window.innerHeight - 50 +"px");
// });

/* ***** ****** ****** ***** ***** ***** */
// function getOffset(el) {
//     const rect = el.getBoundingClientRect();
//     return {
//       left: rect.left + window.scrollX,
//       top: rect.top + window.scrollY
//     };
// }



// window.addEventListener("resize", ()=>{
//     let headPos=getOffset(header).top;
//     navv.style.height= window.scrollY-headPos+"px";

// });