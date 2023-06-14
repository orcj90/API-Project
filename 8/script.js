let apidata
const text = document.querySelector("#text")

async function getApi(){
    try {
        const request = await fetch(`https://newsapi.org/v2/top-headlines?sources=ynet&apiKey=51a1f1de53944e58be88f2d96e98efa6`)
        const data = await request.json()
        return data
    } catch (error) {
        console.log("There was an error",error)
    }
}

async function setup(){
    apidata = await getApi()

    let arts =apidata.articles

    arts.forEach((i) => {
        const obj = new articles(i.title,i.description,i.url)
        text.innerHTML += obj.createnew()
    });

}
setup()

class articles{
    constructor(title,description=0,url=0){
        this.title=title
        this.description=description
        this.url=url
    }

    createnew(){
        return`
        <div id="div">
        <div><h6>${this.title}</h6></div>
        <div>${this.description}</div>
        <div><a href="${this.url}">קישור לכתבה</a></div>
        </div>`
    }

}