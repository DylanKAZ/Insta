let dataLikes = [0, 0, 0]; 
let dataTexts = ["Stonks", "OK", "My life be like"]; 
let dataImgs = ["https://upload.wikimedia.org/wikipedia/en/thumb/9/96/Meme_Man_on_transparent_background.webp/316px-Meme_Man_on_transparent_background.webp.png", "https://i.pinimg.com/1200x/84/29/94/8429942830ee706352fa51d1af23d503.jpg", "https://storage.googleapis.com/pod_public/1300/200776.jpg"]; 

let korobkaPostov = document.getElementById("postsBox"); 
let originalPost = document.getElementById("firstPost"); 

let likes = Array(10).fill(0); // Initialize likes array

for (let i = 0; i < 10; i++) { 
    let newPost = originalPost.cloneNode(true); 

    let img = newPost.getElementsByClassName("img")[0]; 
    img.setAttribute("src", dataImgs[i % 3]); 

    let numberOfLikes = newPost.getElementsByClassName("numberOfLikes")[0]; 
    numberOfLikes.innerHTML = dataLikes[i % 3]; 

    let postText = newPost.getElementsByClassName("postText")[0]; 
    postText.innerHTML = dataTexts[i % 3]; 

    let likeBtn = newPost.getElementsByClassName("likeBtn")[0]; 
    likeBtn.setAttribute("onclick", "like(" + i + ")"); 
    
    let list = newPost.getElementsByClassName("list")[0]; 
    list.setAttribute("id", 'list' + i); 

    let input = newPost.getElementsByClassName("input")[0]; 
    input.setAttribute("id", 'input' + i); 

    let a = newPost.getElementsByClassName("a")[0]; 
    a.setAttribute("onclick", "addComment(" + i + ")"); 

    korobkaPostov.appendChild(newPost); 
} 

let c=0;
function like(i){
    c++;
    if(c%2!==0){
        document.getElementsByClassName('po4444')[i+1].style.backgroundColor = "red";
    }
    else{
        let a = newPost.getElementsByClassName("a")[0] 
        a.setAttribute("onclick", "addComment(" + i + ")") 
        document.getElementsByClassName('po4444')[i+1].style.backgroundColor = "white";
    }
}

function addComment(i) {
    var Input = document.getElementById('input' + i);
    var Text = Input.value;
    Input.value = "";
    if (Text.trim() !== "") {
        var List = document.getElementById('list' + i);
        var newComment = document.createElement("b");
        newComment.textContent = Text;
        List.appendChild(newComment);
    } else {
        alert("Add a comment");
    }
}