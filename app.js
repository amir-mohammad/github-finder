let github = new Github();
let ui = new UI();

//Search Input
let searchInput = document.querySelector('#searchUser');

//add event listener
searchInput.addEventListener('keyup', e => {

    let username = e.target.value;
    if(username !== ''){
        //get profile form git
        github.getUser(username).then(data =>{
          if(!data.profile.message){
              // show profile in webpage
              ui.showProfile(data.profile);
              ui.showRepos(data.repos);
              
          }else{
              //show alert
              ui.showAlert('User not Found...' , 'alert alert-danger');
          }

        });

    }else{
        
        //clear profile from webpage
       ui.clearProfile();
    }
});