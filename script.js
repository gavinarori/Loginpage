const userLeft = false;
const useWatchingCatMeme = false

function watchTutorialPromise()
{
    return new Promise((resolve, reject) =>
    {
    if(userLeft){
        reject({
            name: "user Left",
            reaction:":("
        })
    }else if(useWatchingCatMeme){
            reject({
                name:"user Right",  
                reaction:"oops!"
            })  
        }else{
            resolve("thumbs and subriscribe!")
        }
    })
}
watchTutorialPromise().then((message) =>{
    console.log("success: " + message)
}).catch((message) => {
    console.log("failed: "+ message)
})