class UI{
    constructor(){
        this.profile = document.querySelector('.profile');
    }

    //show profile
    showProfile(user){
        this.profile.innerHTML = `
        <div class="card card-body mb-3">
              <div class="row">
                  <div class="col-3">
                      <img src="${user.avatar_url}" alt="image profile" class="img-fluid mb-3">
                      <a href="${user.html_url}" class="btn btn-primary btn-block" target="_blank">View Profile</a>
                  </div>
                  <div class="col-9">
                    <span class="badge badge-primary">Profile Repos : ${user.public_repos}</span>
                    <span class="badge badge-secondary">Profile Gists :  ${user.public_gists}</span>
                    <span class="badge badge-success">Profile Followers : ${user.followers}</span>
                    <span class="badge badge-info">Profile Following :  ${user.following}</span>

                    <ul class="list-group mt-5">
                      <li class="list-group-item">Company :  ${user.company}</li>
                      <li class="list-group-item">Website / Blog :  ${user.blog}</li>
                      <li class="list-group-item">Location : ${user.location} </li>
                      <li class="list-group-item">Member Since :  ${user.created_at}</li>
                    </ul>
                  </div>
              </div>
          </div>

          <h3 class="page-heading mb-3">Latest Repose</h3>
          <div id="repos"></div>
        
        
        
        `;
    }

    //show repos
    showRepos(repos){
        let output = '';

        repos.forEach(repo => {
            output +=  `
            <div class="card card-body">
                <div class="row">

                    <div class="col-6">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-6">
                        <span class="badge badge-primary"> Star : ${repo.stargazers_count}</span>
                        <span class="badge badge-secondary"> Watchers : ${repo.watchers}</span>
                        <span class="badge badge-success">Fork : ${repo.forks_count}</span>
                    </div>
                </div>

            </div>
            `;
        });

        document.querySelector('#repos').innerHTML = output;
    }
    //clear profile
    clearProfile(){
        this.profile.innerHTML = '';

    }
   
    //show alert
    showAlert(message,className){
        this.clearAlert();
        let seaerchContent = document.querySelector('.searchContent');
        let search = document.querySelector('.search');
        let alert = document.createElement('div');
        alert.className = className;
        alert.textContent = message;

        seaerchContent.insertBefore(alert, search);
        setTimeout(() => {
           this.clearAlert()     
        }, 2000);

    }

    clearAlert(){
        let currentAlert = document.querySelector('.alert-danger');

        if(currentAlert){
            currentAlert.remove();
        }
    }
}

