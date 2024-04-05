// let btn = document.querySelector("button");


// btn.addEventListener("click", async()=>{
//     let fact =  await getfac(); 
//     let p = document.querySelector("p");
//     p.innerText = fact;
// });



// let url ="https://animechan.xyz/api/random";
// async function getfac(){
//     try{
//         let res = await fetch(url);
//         let data = await res.json();
//         return data.quote
        

//     }
//     catch(e){
//         return "Too many trys, try after some time";
//     }
    
// }
let btn = document.querySelector("button");

btn.addEventListener("click", async () => {
    try {
        let { quote, anime } = await getfac(); 
        let p = document.querySelector("p");
        p.innerText = `${quote} \n \n\n\nAnime: ${anime}`;
    } catch (error) {
        let p = document.querySelector("p");
        p.innerText = "Too many tries, try after some time";
    }
});

let url = "https://animechan.xyz/api/random";
async function getfac() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        return { quote: data.quote, anime: data.anime };
    } catch (e) {
        throw new Error("API request failed");
    }
}




