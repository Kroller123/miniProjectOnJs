
//      Этот второй метод //

// let url = new URL(location.href)
//
// let parsePost = JSON.parse(url.searchParams.get('value'))



let parsePost = JSON.parse(localStorage.getItem('post'))


let ul = document.createElement('ul')
ul.classList.add('main_ul')

for (let key in parsePost) {
    let li = document.createElement('li')
    li.innerHTML = `<b>${key}</b> --- ${parsePost[key]}`
    ul.appendChild(li)
}

let hr = document.createElement('hr')
let hr2 = document.createElement('hr')
let h1 = document.createElement('h1')
h1.innerHTML = `<b> Comments info of post </b>`


let commentsDiv = document.createElement('div')
commentsDiv.classList.add('comments_div')

let commentsURL = `https://jsonplaceholder.typicode.com/posts/${parsePost.id}/comments`



fetch(commentsURL).then(res=>res.json())
    .then(comments => {
        for (let comment of comments) {
            let div = document.createElement('div')
            for (let commentKey in comment) {
                let p = document.createElement('p')
                p.innerHTML = `<b>${commentKey}</b> --- ${comment[commentKey]}`
                div.appendChild(p)
                commentsDiv.appendChild(div)
            }

        }
    })

document.body.append(ul,hr,h1,hr2,commentsDiv)

