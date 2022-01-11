
const affichageUserName = document.querySelector("#userName");
const affichagecity = document.querySelector("#city")
const affichagelng = document.querySelector("#lng")
const affichageLat = document.querySelector("#lat")
console.log(affichageLat);
const UserList = fetch('https://jsonplaceholder.typicode.com/users')

UserList 
  .then((response) => {
      console.log(response);

      const userData = response.json()
      console.log(userData);

      userData.then((utilisateur)=> {
          console.log(utilisateur[0]);
          
          const txtUserName = utilisateur[0].name;

          const txtCity = utilisateur[0].address.city;
          const txtLat = utilisateur[0].address.geo["lat"]
          const txtlng = utilisateur[0].address.geo["lng"]


          affichageUserName.innerHTML = txtUserName;
          affichagecity.innerHTML = txtCity;
          affichagelng.innerHTML = txtlng;
          affichageLat.innerHTML = txtLat;
        });
  })

  .catch((err) => console.log(err));
  
export default UserList;