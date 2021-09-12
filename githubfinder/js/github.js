let input = document.getElementById("serch");
input.addEventListener("keyup", e => {
  let searchText = e.target.value;
  getGitHubPrifile(searchText);
});
 async function getGitHubPrifile(searchText) {

  let githubUrl = 
  `https://api.github.com/users/${searchText}?client_id=${Client_ID}&client_secret=${Client_Secret}`;
  let res = await window.fetch("https://gihub.com/users/shashikunal")
  .catch(err => console.log (err));
  let Data = await res.json().catch( err => console.log(err));
  document.getElementById('template').innerHTML = `<div class ="container">4</div>`
}