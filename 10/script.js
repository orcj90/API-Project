let apidata
let api
let fullapi
let text
let obj
let filter
let x

async function getApi(city1){
    try {
        const request = await fetch(`https://data.gov.il/api/3/action/datastore_search?resource_id=bb68386a-a331-4bbc-b668-bba2766d517d&q=${city1}`)
        const data = await request.json()

        return data.result.records
    } catch (error) {
        console.log("There was an error",error)
    }
}

async function setup(){
    
    api = await getcities()
    file()
}

setup()


async function getcities(){
    try {
        const req = await fetch(`https://raw.githubusercontent.com/royts/israel-cities/master/israel-cities.json`)
        const data1 = await req.json()
        return data1
    } catch (error) {
        console.log("There was an error",error)
    }
}

function file() {
 let i=0
  obj = api
  text = '<select id="filter">'
  for ( i=0 ; i<obj.length ; i++ ){

    text += "<option>" + obj[i].name + "</option>";
  }
  text += "</select>"

document.getElementById("filter1").innerHTML = text;
  }
  
  
async function btn(){
     filter= document.getElementById("filter").value
     document.querySelector("#text").innerHTML=""
     apidata =await  getApi(filter)

     for ( i=0 ; i<apidata.length ; i++){
        document.querySelector("#text").innerHTML+=`
        <div id="div">
        <div><h6>${apidata[i].mispar_mosah}</h6></div>
        <div>${apidata[i].shem_mosah}</div>
        <div class="hide">
        <div>${apidata[i].sug_mosah}</div>
        <div>${apidata[i].miktzoa}</div>
        <div>${apidata[i].rank}</div>
        <div>${apidata[i].yishuv}</div>
        </div>
        <div><button id="${i}" class="btnid">בחר</button></div>
        </div>`
     }
     x=document.querySelectorAll('button.btnid')
     btn1()
}

function btn1(){
x.forEach(occurence => {
            let id = occurence.getAttribute('id');
            occurence.addEventListener('click', function(){
                let div = document.getElementById(id).parentElement.parentElement.childNodes[5]
                if(div.getAttribute("class")=="hide"){
                    div.classList.replace("hide","display")
                    document.getElementById(id).parentElement.parentElement.childNodes[7].firstChild.textContent="סגור"
                }
                else{
                    div.classList.replace("display","hide")
                    document.getElementById(id).parentElement.parentElement.childNodes[7].firstChild.textContent="בחר"
                }   
            })})
    }
    