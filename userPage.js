let url = new URL ('https://jsonplaceholder.typicode.com/users')

fetch(url).then(res => res.json())
    .then(users => {
        let leftDiv = document.querySelector('.left')
        let rightDiv = document.querySelector('.right')
        for (let user of users) {
            if (user.id % 2 !== 0) {
                let userDiv = document.createElement('div')
                let p = document.createElement('p')
                let detailsOfUser = document.createElement('button')



                p.innerHTML = `<b>${user.id}</b> - <b>${user.name}</b>`


                detailsOfUser.innerHTML = `<b>user details</b>`


                //      Этот способ которому нас не учили //


                // detailsOfUser.addEventListener('click', function (){
                //     document.location = `user-detailsPage.html?value=${JSON.stringify(user)}`
                // })



                detailsOfUser.addEventListener('click', function (){
                    document.location = 'user-detailsPage.html'
                    localStorage.setItem('user', JSON.stringify(user))
                })
                userDiv.append(p,detailsOfUser)

                leftDiv.appendChild(userDiv)
            }else {
                let userDiv = document.createElement('div')
                let p = document.createElement('p')
                let detailsOfUser = document.createElement('button')



                p.innerHTML = `<b>${user.id}</b> - <b>${user.name}</b>`
                detailsOfUser.innerHTML = `<b>user details</b>`


                //      Этот способ которому нас не учили //

                // detailsOfUser.addEventListener('click', function (){
                //     document.location = `user-detailsPage.html?value=${JSON.stringify(user)}`
                // })






                detailsOfUser.addEventListener('click', function (){
                    document.location = 'user-detailsPage.html'
                    localStorage.setItem('user', JSON.stringify(user))
                })

                userDiv.append(p,detailsOfUser)

                rightDiv.appendChild(userDiv)
            }
        }
    })

