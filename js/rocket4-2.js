const reposListContainer = document.querySelector("#rocket4-2 .result")

function listRepos(username){
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest()

        xhr.open("GET", "https://api.github.com/users/" + username + "/repos")
        xhr.send()

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4){
                if(xhr.status === 200){
                    resolve(JSON.parse(xhr.responseText))
                }else{
                    reject("Can't find the user " + username)
                }
            }
        }
    })
}

document.querySelector("#rocket4-2 .trigger").onclick = function(){
    reposListContainer.innerHTML = "Loading..."
    listRepos(document.querySelector("#rocket4-2 .input").value)
        .then(function(response){
            if(response.length > 0){
                reposListContainer.innerHTML = ""

                var reposList = document.createElement("ul")
                for(repos of response){
                    var reposItem = document.createElement("li")
                    reposItem.innerHTML = repos.name

                    reposList.appendChild(reposItem)
                }

                reposListContainer.appendChild(reposList)
            }else{
                reposListContainer.innerHTML = "No repositories found"
            }
        })
        .catch(function(error){
            reposListContainer.innerHTML = error
        })
}