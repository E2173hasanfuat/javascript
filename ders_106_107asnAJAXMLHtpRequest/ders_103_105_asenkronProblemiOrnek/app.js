//ajax bir prog. dil degil serverden tarayici uzerinden veri alamak icin.
const xhr = new XMLHttpRequest();
console.log(xhr);
// JSONPlaceholder comes with a set of 6 common resources:
	
// /posts 	100 posts
// /comments 	500 comments
// /albums 	100 albums
// /photos 	5000 photos
// /todos 	200 todos
// /users 	10 users

function prepareURL(url,id) {
    if(id===null){
        return url;
    }
    return `${url}?postId=${id}`
    
}

function getComment(url,id) {
    let newURL=prepareURL(url,id);

    
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", ()=>{
        if (xhr.readyState===4 && xhr.status===200) {
            console.log(JSON.parse(xhr.responseText));
        }
    })

    xhr.open("GET",newURL )
    xhr.send();
}

function getData(url) {
    const xhr = new XMLHttpRequest();
    xhr.addEventListener("readystatechange", ()=>{
        if(xhr.readyState===4&&xhr.status===200){
            console.log(JSON.parse(xhr.response));
        }
    })
    xhr.open("GET",url);
    xhr.send()
}

getComment("https://jsonplaceholder.typicode.com/users",2)
getComment("https://jsonplaceholder.typicode.com/comments",2)