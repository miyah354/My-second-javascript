fetch('\'./js/example.json')
    .then(response =>response.json())
    .then(example => {
      displayUsers(examples);
    }).catch(error =>{
      errorEl = document.getElementById('error');
      errorEL.style.display = "block";
      errorEL.innerHTML = "Error fetching Data from Eaxample.json", error;
    });


    let htmlElement = document.getElementById('display-info');

    function displayUsers(examples) {
      let allUsers = '<ul>'
      examples.forEach(user => {
        let userlist = `<li>Full Name: ${user.FullName} | Age: ${user.Age} </li>`;
        alluser += userlist;
      });
      allUsers += '</u>';
      htmlElement.innerHTML = allUsers;
    }
