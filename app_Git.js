// Create the variable

let container = document.querySelector('.container');

let userI = document.getElementById('input');

let btn = document.getElementById('btn');

let showData = document.getElementById("show");


///////////////////

//add event to the element

btn.addEventListener("click", () => {
    
    
    if (userI.value == "") {
        
        // console.log("Value Cannot Be empty")

        showData.style.color = '#ef5350'
        showData.innerHTML = "Value Cannot Be empty !";
        userI.style.border = "1px solid #ef5350"



    }

    else {
        // console.log(userI.value);
        
        gitData()

    }

});


userI.addEventListener("mouseup", () => {

    showData.style.color = ''
    showData.innerHTML = "Please Enter the Githup Username";
    userI.style.border = ""

});


// btn.onclick = () => gitData();

function gitData() {

    let username = userI.value;

    fetch(`https://api.github.com/users/${username}/repos`)
        
        .then((respone) => {
        
            return (respone).json();
        })
        .then((reposy) => {
            
            showData.innerHTML = ""
            reposy.forEach(repo => {
                
                if (repo.name == "") showData.innerHTML = "Noo";
                
                console.log(repo.name);
                
                //create the elemnent span
                let repoName = document.createElement("div");

                repoName.className = "show-data";
                //add the text node

                repoName.append(repo.name);

                //add reponame in the show data class

                console.log(repo);

                showData.appendChild(repoName)
                //add element in the container

                //////////////////////////////////////

                let repoUrl = document.createElement("a");

                repoUrl.append("Visit");

                repoUrl.target = '_blank';

                repoUrl.href = `https://github.com/${username}/${repo.name}`;

                repoUrl.id = 'btnv'

                repoName.appendChild(repoUrl);


                ////////////////////////////////////////////


                let repoStars = document.createElement("a");

                repoStars.append("Stars: "+repo.stargazers_count);

                repoName.appendChild(repoStars)

                repoStars.id = 'star'


                //////////////////////////////////////////

                let repoWatch = document.createElement('span');

                repoWatch.append('Watching: ' + repo.watchers_count)
                
                repoName.appendChild(repoWatch);

                repoWatch.id = 'watch';

            })
            
        });
        

    //Loop data in repo
}


// Dark mode

let dark = document.getElementById("dark");
let bodye = document.querySelector("body");
let head = document.querySelector(".head");
// head.addEventListener('change', (e) => {
//     console.log(e.target.cheaked);
// }) 
dark.addEventListener("click", function () {
    // console.log(ev.target.checked);
    bodye.classList.add('dark');
    dark.style.transform = 'translateX(0px)';
    dark.style.backgroundColor = 'springgreen';
    dark.style.borderColor = "springgreen";
    dark.style.color = "black";
    dark.innerHTML = '';

})

dark.addEventListener('dblclick', function() {
    dark.style.transform = 'translateX(50px)';
    bodye.classList.remove('dark');
    dark.style.backgroundColor = '#424242';
    dark.style.borderColor = "#424242";
    if (screen.availWidth <= 767) {
        dark.style.transform = 'translateX(30px)'
    }
})