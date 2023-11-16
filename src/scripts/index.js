import { getUser } from '/src/scripts/user.js';
import { getRepositorios } from '/src/scripts/repositorios.js';
import { user } from '/src/scripts/objetos.js';
import { screen } from '/src/scripts/screen.js';

document.getElementById('btn-search').addEventListener('click', () => {

    const userName = document.getElementById('input-search').value
    if(userName.length === 0){
        alert('Preencha o campo com nome do usuário do GitHub')
        return
    }
    getUserData(userName);
})

document.getElementById('input-search').addEventListener('keyup', (e) => {

    const userName = e.target.value
    if(userName.length === 0){
        alert('Preencha o campo com nome do usuário do GitHub')
        return
    }

    const key = e.which || e.keyCode

    const isEnterKeyPressed = key === 13

    if (isEnterKeyPressed) {
        getUserData(userName)
    }
})

async function getUserData(userName) {
    
   const userResponse = await getUser(userName) 

   if(userResponse.message === "Not Found"){
    screen.usuarioNaoEncontrado()
    return
   }

   const repositoriosResponse = await getRepositorios(userName) 

   user.setInfo(userResponse)
   user.setRepositorios(repositoriosResponse)
   screen.renderUser(user)
}




