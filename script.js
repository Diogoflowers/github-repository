botarDados()
function catchName() {
    const inputName = document.querySelector('input').value
    git(inputName)
    


}


function git(username) {
    const gitApi = `https://api.github.com/users/${username}`
    const resultApi = fetch(gitApi).
        then(result => result.json()).
        then(e => {           
            const gitStorage = {
                name: e.name, 
                login: e.login, 
                public_repos: e.public_repos, 
                followers: e.followers 
            }
            
            localStorage.setItem('key', JSON.stringify(gitStorage))
            botarDados()
        })
}

function botarDados(){
    const testeDados = JSON.parse(localStorage.getItem('key'))
    console.log(testeDados)
    construirHTML(testeDados)
}





function construirHTML(dados){
    document.querySelector('a').innerHTML = `${dados.name}`
    document.querySelector('.repositores').innerHTML = `Repositores: ${dados.public_repos}`
    document.querySelector('.followers').innerHTML = `Followers: ${dados.followers}`
    document.querySelector('.name').innerHTML = `User: ${dados.login}`
    document.querySelector('.perfil').src = `https://github.com/${dados.login}.png`
}

botarDados()