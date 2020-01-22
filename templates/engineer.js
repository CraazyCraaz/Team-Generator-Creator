let engineerCard = (team) => {
    let engineerCard = "";
    for (let i = 0; i < team.length; i++) {

        let role = team[i].getRole();
        let name = team[i].getName()
        let id = team[i].getId()
        let email = team[i].getEmail()
        let github = team[i].getGithub()

        if (role === "Engineer") {

            engineerCard += `<div class="card mb-4" style="width: 18rem;">
          <div class="card-body">
              <h5 class="card-title">${role}</h5>
              <ul class="list-group">
                  <li class="list-group-item active">Name: ${name}</li>
                  <li class="list-group-item">ID: ${id}</li>
                  <li class="list-group-item">Email: ${email}</li>
                  <!-- ENGINEER -->
                  <li class="list-group-item">Github: ${github}</li>
              </ul>
          </div>
      </div>`

        }
    }
    return engineerCard;
}
module.exports = engineerCard;