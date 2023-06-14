let countrydata = 0
let countrydata1 = 0
let code
async function getCountry(){
    let name_person = document.getElementById("name").value;
    try {
        const request = await fetch(`https://api.nationalize.io?name=${name_person}`)
        const data = await request.json()
        console.log(data)
        return data
    } catch (error) {
        console.log("There was an error",error)
    }
}

async function setup() {
     countrydata = await getCountry()
    const tbody = document.querySelector("tbody")
    str = JSON.stringify(countrydata);
    str = JSON.stringify(countrydata, null, 4);
    console.log(str);
let i = 0
for (i = 0; i<countrydata.country.length; i++) {
    code = JSON.stringify(countrydata.country[i]);
    code = code.substring(15,17)
    probability= JSON.stringify(countrydata.country[i]);
    probability = probability.substring(33,38)
    const trTmpl = `
    <tr>
    <td scope="col">${JSON.stringify(countrydata.country[i])}</td>
    <td scope="col">${code}</td>
    <td scope="col"><img src="https://flagsapi.com/`+code+`/flat/48.png"></td>
    <td scope="col">${probability}</td>
    </tr>`
    tbody.innerHTML+=trTmpl
}
}

function btn(){
   return setup()  
}
async function getFullName(country_code) {
    try {
        const requestdata = await fetch(`https://restcountries.com/v3.1/alpha/${country_code}`)
        const datafind = await requestdata.json()
        console.log(datafind)
        return datafind
    } catch (error) {
        console.log("There was an error",error)
    }
    datadat1.innerHTML += "<pre>"+getFullName(code)+"</pre>";
}

