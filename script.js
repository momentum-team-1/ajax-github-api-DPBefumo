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
    const basic = document.createElement('h2')
    basic.innerText = `The Basics`
    dataSection.appendChild(basic)
    const basicList = document.createElement('ul')
    dataSection.appendChild(basicList)
    const listItem1 = document.createElement('li')
    listItem1.innerText = `Name: ${data.name}`
    basicList.appendChild(listItem1)
    const listItem2 = document.createElement('li')
    listItem2.innerText = `GitHub Url: ${data.html_url}`
    basicList.appendChild(listItem2)
    const listItem3 = document.createElement('li')
    listItem3.innerText = `Company: ${data.company}`
    basicList.appendChild(listItem3)
    const listItem4 = document.createElement('li')
    listItem4.innerText = `Website: ${data.blog}`
    basicList.appendChild(listItem4)
    const story = document.createElement('h2')
    story.innerText = `The Story`
    dataSection.appendChild(story)
    const bio = document.createElement('h6')
    bio.innerText = `${data.bio}`
    story.appendChild(bio)
    const userImg = document.createElement('div')
    userImg.innerHTML = `<img src= ${data.avatar_url}>`
    dataSection.appendChild(userImg)
    return data.basic
  })