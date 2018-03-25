//Init github since its a
const github = new Github;

//init ui
const ui = new UI;

const searchUser = document.getElementById('searchUser');

//search input event listener
searchUser.addEventListener('keyup', (e) => {
    const userText = e.target.value;

    if(userText !== '') {
        //make hhtp call
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                //show alert
            } else {
                ui.showProfile(data.profile);
            }
        })    
    } else {
        //clear profile
    }
}) 