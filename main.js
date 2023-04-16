let btn = document.querySelector(".btn")
let result = document.querySelector(".result")
let inputField = document.querySelector(".inputField").innerHTML



const fetchData = async (inputField) => {
    let url = `https://api.unsplash.com/search/photos?client_id=${"DRyWQshwghkCo9Ls_D22kCtG0JYWnKgo3O-yElpbB38"}&query=`
    try{
        let res = await fetch(url + inputField)
        let data = await res.json()
        console.log(data.results[0])
        return(data.results[0])
    }
    catch(err){
        console.log("Something went wrong", err)
    }
}

const renderData = async () => {
    let data = await fetchData()


    let content = ` <img src="${data.urls.regular}" />
                    <p>${data.description}</p>`

    result.innerHTML = content;
}


btn.addEventListener("click",() => {
    console.log("Click")
    renderData()
})
