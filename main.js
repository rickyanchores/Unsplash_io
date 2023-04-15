let btn = document.querySelector(".btn")
let result = document.querySelector(".result")


// const ACCESS_KEY:  "DRyWQshwghkCo9Ls_D22kCtG0JYWnKgo3O-yElpbB38";
// const unsplashEndpoint = `https://api.unsplash.com/search/photos?client_id=${"DRyWQshwghkCo9Ls_D22kCtG0JYWnKgo3O-yElpbB38"}&query=`;
// const response = fetch(unsplashEndpoint + searchName)

const fetchData = async (searchName) => {
    let url = `https://api.unsplash.com/search/photos?client_id=${"DRyWQshwghkCo9Ls_D22kCtG0JYWnKgo3O-yElpbB38"}&query=`
    try{
        let res = await fetch(url + searchName)
        let data = await res.json()
        console.log(data.results[0])
        return(data.results[0])
    }
    catch(err){
        console.log("Something went wrong", err)
    }
}

const renderData = async (searchName) => {
    let data = await fetchData()


    let content = `<p>${data.results[0].description}</p>`

    result.innerHTML = content;
}


btn.addEventListener("click",() => {
    console.log("Click")
    renderData()
})
