//output my info from my github account
//have the ability to grab from my account
//what information do I need to gather from my profile?
  //the basics <h2>
  //story title <h2>
  //name > .name
  //github URL > .html_url
  //company > .company
  //website > .blog
  //bio > .bio
  //avatar > .avatar_url

  let dataSection = document.querySelector('#github-data')
  let nameHeader  = document.querySelector('#name-header')

  fetch('https://api.github.com/users/DPBefumo')
  .then(function (response){
    return response.json()
  })
  .then(function (data){
    const h1El = document.createElement('h1')
    h1El.innerText = data.name
    nameHeader.appendChild(h1El)
    return data.name
  })







// fetch('https://api.github.com/users/DPBefumo')
//   .then(function (response) {
//     // console.log(response)
//     return response.json()
//   })
//   .then(function (data) {
//     // console.log(data)
//     let orgName = data.orgName
//     // console.log(orgName)
//     return data.name
//   })
//   .then(reposUrl => fetch(reposUrl))
//   .then(response => response.json())
//   .then(function (reposData){
//     // console.log(reposData)
//     let container = document.querySelector('#github-data')
//     const repoList = document.createElement('ul')
//     container.appendChild(repoList)
//     for (let repo of reposData){
//       // console.log(repo.name)
//       const listItem = document.createElement('li')
//       listItem.innerHTML = repo.name
//       // listItem.classList.add()
//       repoList.appendChild(listItem)
//     }
//   // repoList.classList.add()
//   })
