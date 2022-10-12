/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizdavima <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
turėti bent minimalų stilių ir būti responsive;
-------------------------------------------------------------------------- */

const ENDPOINT = 'https://api.github.com/users';



const buton = document.getElementById('btn') 

buton.addEventListener('click', getUsers)



async function getUsers() {
    const usersResponse = await fetch('https://api.github.com/users');
    const users = await usersResponse.json();
    console.log(users);
    users.forEach((user) => {
    generateUserHtml(user);
    });
    document.getElementById('message').style.display = 'none' ;
    }
    
    
    
    function generateUserHtml(user) {
    const outputContainer = document.getElementById('output')
    const container = document.createElement('div');
    const login = document.createElement('p');
    const image = document.createElement('img');
    
    login.textContent = user.login;
    image.src = user.avatar_url;
    
    container.appendChild(login);
    container.appendChild(image);
    
    outputContainer.appendChild(container)
    }
    







