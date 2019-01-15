class Github{
    constructor(){
        this.client_id ="e1ee0ea8809376818a4e";
        this.client_secret = "ce8c59a89f0c951fe42aaf38e179b274a1fb214a"
        this.repos_count = 5;
        this.repos_sort = 'created: acs'
    }

   async getUser(username){

        let responseProfile = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        let responseRepos = await fetch(`https://api.github.com/users/${username}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        

        let profile = await responseProfile.json();
        let repos = await responseRepos.json();
       

        return {
            profile ,
            repos
           
        }
   }
}