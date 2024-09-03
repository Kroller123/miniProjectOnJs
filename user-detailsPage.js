let url = new URL (location.href)
let user = url.searchParams.get('value');
let parseUser = JSON.parse(user);

function userBuilder(user, tag) {
    for (let key in user) {
        if (typeof user[key] !== 'object') {
            let li = document.createElement('li')
            li.innerText = `${key} --- ${user[key]}`
            tag.appendChild(li)
        } else {
            let ul = document.createElement('ul')
            ul.innerHTML = `<b>${key}</b>`
            tag.appendChild(ul)
            userBuilder(user[key], ul)
        }
    }
}

function dsdas(user,tag) {
    for (let userKey in user) {
        if (typeof user[userKey] !== 'object'){
            let li = document.createElement('li')
            li.innerText = `${userKey} --- ${user[userKey]}`
            tag.appendChild(li)
        }else {
            let ul = document.createElement('ul')
            ul.innerHTML = `<b> ${userKey} </b>`
            tag.appendChild(ul)
            userBuilder(user[userKey], ul)
        }
    }
}

console.log(parseUser)
