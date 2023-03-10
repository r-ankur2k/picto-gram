// first Post
let heart1 = document.getElementById("heart1");
let like1 = document.getElementById("like1");
let comment1 = document.getElementById("comment1");
let commentAppear = document.getElementById("comment-appear")


// Second Post
let heart2 = document.getElementById("heart2");
let like2 = document.getElementById("like2");
let comment2 = document.getElementById("comment2");
let comm2 = document.getElementById("comm2");
// third Post
let heart3 = document.getElementById("heart3");
let like3 = document.getElementById("like3");
let comment3 = document.getElementById("comment3");
let comm3 = document.getElementById("comm3");



let likes1 = 1;
heart1.addEventListener("click" , function(){
    like1.innerHTML = `${likes1++} Likes`
})


let commentNow = document.getElementById("comment-btn");
let commentAdd = document.getElementById("comment-add");
let commentUser = document.getElementById("comment-value");

commentNow.addEventListener("click" , function(){
    let commeValue = commentUser.value
    if(commeValue === ""){
    commentAdd.innerHTML += ``
    }else{
        commentAdd.innerHTML += `<p><span>You </span>${commeValue}</p>`
        commentUser.value = ""

    }

})




let likes2 = 1;
heart2.addEventListener("click" , function(){
    like2.innerHTML = `${likes2++} Likes`
})

let likes3 = 1;
heart3.addEventListener("click" , function(){
    like3.innerHTML = `${likes3++} Likes`
})



