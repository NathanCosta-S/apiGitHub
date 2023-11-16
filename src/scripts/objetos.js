const user = {
    avatarUrl: '',
    name:'',
    bio:'',
    userName:'',
    repositorios:[],
    setInfo(gitHubUser){
        this.avatarUrl = gitHubUser.avatar_url
        this.name = gitHubUser.name
        this.bio = gitHubUser.bio
        this.userName = gitHubUser.login
    },
    setRepositorios(repositorios){
        this.repositorios = repositorios
    }
}

export {user}