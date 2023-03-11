const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(userData){
        this.userProfile.innerHTML = `<div class="info">
            <img src="${userData.avatarUrl}" alt="Foto de perfil do usuário" />
            <div class="data">
                <h1>${userData.name ?? 'Não possui nome cadastrado 😭'}</h1>
                <p>${userData.bio ?? 'Não possui nenhuma bio cadastrada 😭'}</p>
            </div>
        </div>`

        let repositoriesItens = ''
        userData.repositories.forEach(repo => repositoriesItens += `<li> <a href="${repo.html_url}" target="_blank">${repo.name}</a> </li>`)

        if(userData.repositories.length > 0){
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <ul>${repositoriesItens}</ul>
                                            </div>`
        } else {
            this.userProfile.innerHTML += `<div class="repositories section">
                                                <h2>Repositórios</h2>
                                                <p>Esse usuário não possui repositórios públicos.</p>
                                            </div>`
        }
    }
}

export { screen }