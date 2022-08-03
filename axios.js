//Chiamata su API
const addBtn = document.getElementById('add');
console.log(addBtn);
addBtn.addEventListener('click', getUser);

//Ricava img profilo, nome, cognome
function getUser()
{
    //console.log('bottone linkato ad html')
    axios.get('https://randomuser.me/api').then
        (
            function (response)
            {
                const userData = response.data.results[0];
                
                const userName = userData.name.first;
                const userSurname = userData.name.last;
                const userPic = userData.picture.large;

                createUser(userName, userSurname, userPic);
            }
        )
        .catch(function(err)
        {
            console.log(err);
        });
}

//Inseriscili su card
function createUser(name, surname, image)
{

    //<img> thumbnail content
    const pic = document.createElement('img');
    pic.src = image;
    pic.className = 'img-fluid m-2 rounded-circle shadow';

    //<div> card body content
    const bodyContent = document.createElement('p');
    bodyContent.innerText = name + " " + surname;
    bodyContent.className = "fst-italic";
    
    const cardBody = document.createElement('div');
    cardBody.className= "card-body";
    cardBody.appendChild(bodyContent);

    //<div> card body Template
    const grid = document.createElement('div');
    grid.className = "col-2"
    const card = document.createElement('div');
    card.className = "card shadow m-2";

    card.appendChild(pic);
    card.appendChild(cardBody);


    //creazione card
    const cardSlot = document.getElementById('cardSlot');
    cardSlot.appendChild(grid);
    grid.appendChild(card);
}