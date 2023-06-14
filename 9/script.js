let apidata
const text = document.querySelector("#text")

async function getApi(){
    try {
        const request = await fetch(`https://jsonplaceholder.typicode.com/posts`)
        const data = await request.json()
        return data
    } catch (error) {
        console.log("There was an error",error)
    }
}

async function setup(){
    apidata = await getApi()

    // let title =apidata.title
    // let post =apidata.body

    apidata.forEach((i) => {
        const obj = new posttext(i.title,i.body,i.id)
        text.innerHTML += obj.createnew()
    });

}
setup()

class posttext{
    constructor(title,body,id){
        this.title=title
        this.body=body
        this.id=id
        console.log(id)

    }

    createnew(){
        return`
        <div id="div">
        <div><h6>${this.title}</h6></div>
        <div>${this.body}</div>
        <div><a href="https://jsonplaceholder.typicode.com/comments?postId=${this.id}">link</a></div>
        </div>`
    }

}