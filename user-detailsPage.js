

//      Этот второй метод //


// let url = new URL(location.href)
//
// let parseUser = JSON.parse(url.searchParams.get('value'))
//


let parseUser = JSON.parse(localStorage.getItem('user'));
let ul = document.querySelector('#user_details')
console.log(parseUser)



function userBuilder(user,tag) {
    for (let userKey in user) {
        console.log(userKey)
        if (typeof user[userKey] !== 'object'){
            let li = document.createElement('li')
            li.innerHTML = `<b>${userKey}</b> --- ${user[userKey]}`
            tag.appendChild(li)
        }else {
            let ul = document.createElement('ul')
            ul.innerHTML = `<b> ${userKey} </b>`
            tag.appendChild(ul)
            userBuilder(user[userKey], ul)
        }
    }
}

let button = document.querySelector('#btn')
let divMain = document.querySelector('#div_main')

let postURL = `https://jsonplaceholder.typicode.com/users/${parseUser.id}/posts`

fetch(postURL).then(js => js.json())
    .then(posts => {
        let click = false
        button.onclick = function () {
            if (!click) {
                divMain.innerHTML = ''
                divMain.style.display = 'none'
                for (let post of posts) {
                    let div = document.createElement('div')
                    div.classList.add('zero')
                    let p = document.createElement('p')
                    p.innerText = `${post.title}`
                    let button = document.createElement('button')
                    button.innerText = 'More info of post'


                    //      Этот второй метод //


                    // button.addEventListener('click', function () {
                    //     document.location = `post-of-user.html?value=${JSON.stringify(post)}`
                    // })




                    button.addEventListener('click', function () {
                        document.location = 'post-of-user.html'
                        localStorage.setItem('post',JSON.stringify(post))
                    })

                    div.append(p, button)
                    divMain.append(div)

                }
            } else {
                divMain.style.display = 'flex'
                divMain.style.background = '#034109'
            }
            click = !click
        }
    })


userBuilder(parseUser,ul)


