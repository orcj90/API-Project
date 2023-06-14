// varaibles:
let arrdata
let arrdatabox=[]
let arrdatatext=0
let btn=1
let num=0
let x 
let Array1
let objarr
let text
let text1=""
let apidata
let apifulldata

let a ='"'+ 'alt="" style='+'"width:100px;height:100px;margin:20px">'
let b ='<img src="'
let f='<a href="'
let f1='" target="_blank">'
let u='</a>'
const tbody = document.querySelector("tbody")

// get data API 
async function getApi(){
    try {
        const request = await fetch(`https://jsonplaceholder.typicode.com/albums`)
        const data = await request.json()
        return data
    } catch (error) {
        console.log("There was an error",error)
    }
}

async function setup() {
    apidata = await getApi()
    apifulldata = await getFullApi()

    let i = 0
    for (i = 0; i<apidata.length; i++) {
    arrdata = apifulldata.filter(function(item){
    return item.albumId ==  [i];         
    })

    const trTmpl = `
    <tr>
    <td id="tdid">${apidata[i].id}</td>
    <td >${JSON.stringify(apidata[i].userId)}</td>
    <td>
    <button id="${btn}" type="button" class="btn btn-primary btndiv" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
    Open
  </button>
    </td>
    </tr>`
    tbody.innerHTML+=trTmpl
    btn+=1
}
modalupdate()
}


// change the text with gallery after button click
function modalchange(){
    document.querySelector(".modal-title").innerText='Id Number : '+num
    x=document.querySelector(".modal-body")
    x.innerHTML=text1
  }

//   get URL photos API 
async function getFullApi() {
    try {
        const requestdata = await fetch(`https://jsonplaceholder.typicode.com/photos`)
        const datafind = await requestdata.json()
        return datafind
    } catch (error) {
        console.log("There was an error",error)
    }
}

// change the gallery of albums
function modalupdate(){
    document.querySelectorAll('.btndiv').forEach(occurence => {
        let id = occurence.getAttribute('id');
        occurence.addEventListener('click', function() {
            num=id
        //   console.log('A button with ID ' + id + ' was clicked!') 
      let arrdatabtn
      arrdatabtn = apifulldata.filter(function(item){
      return item.albumId ==  [num];         
      })
      for(let j=0;j<arrdatabtn.length;j++){
          arrdatabox[j]=arrdatabtn[j].url
       }
  arrdatatext=JSON.stringify(arrdatabox);


    arrdatatext=arrdatatext.replaceAll(','," ")
    arrdatatext=arrdatatext.replaceAll('[',"")
    arrdatatext=arrdatatext.replaceAll(']',"")
    arrdatatext=arrdatatext.replaceAll('"',"")
    Array1 = arrdatatext.split(' ')
    i = 0
    text1=""
    for (i = 0; i<Array1.length; i++) {
     objarr=Array1[i]
     text =f+objarr+f1+b+objarr+a+u
     text1=text1.concat(text)
    } 
  modalchange()
        });
    });
}
setup()