const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
               <div class="info">
                   <img src="${user.avatarUrl}" alt="Foto De Perfil">
                <div class="data">
                   <h1>${user.name ?? 'não possui nome cadastrado'}</h1>
                  <p>${user.bio ?? 'não possui bio cadastrado'}</p>
                 </div>
              </div>
          `;

          let repositoriosItens = '';
          user.repositorios.forEach(repo => repositoriosItens += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`);
          
          if (user.repositorios.length > 0) {
              this.userProfile.innerHTML += 
                  `<div class="repositories section">
                      <h2>Repositórios </h2>
                      <ul>${repositoriosItens}</ul>
                  </div>`;
          }
          
        },
        usuarioNaoEncontrado(){
            this.userProfile.innerHTML = "<h3>Usuário não encontrado!</h3>"
        }




}

export { screen }