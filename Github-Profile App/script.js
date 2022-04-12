const APIURL = "https://api.github.com/users/";

const form = document.querySelector(".form");
const search = document.querySelector(".search");
const main = document.querySelector(".main");

getUser("orzech445");

async function getUser(userName) {
    const resp = await fetch(APIURL + userName);
    const respData = await resp.json();

    createUserCard(respData);

    getUserRepos(userName);
}

async function getUserRepos(userName) {
    const resp = await fetch(APIURL + userName + "/repos");
    const respData = await resp.json();

    addReposToCard(respData);
}

function createUserCard(user) {
    const cardHTML = `
        <div class="card">
            <img src="${user.avatar_url}" alt="${user.name}" />
            <div class="profile-info">
                <h2>${user.name}</h2>
                <p>${user.bio}</p>
                <ul>
                    <li>${user.followers}<strong>Followers</strong></li>
                    <li>${user.following}<strong>Following</strong></li>
                    <li>${user.public_repos}<strong>Repos</strong></li>
                </ul>

                <div class="repos"></div>
            </div>
        </div>
    `;

    main.innerHTML = cardHTML;
}

function addReposToCard(repos) {
    const reposEl = document.querySelector(".repos");

    repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .forEach((repo) => {
        const repoEl = document.createElement("a");
        repoEl.classList.add("repo");

        repoEl.href = repo.html_url;
        repoEl.target = "_blank";
        repoEl.innerHTML = repo.name;

        reposEl.append(repoEl);
    });
}

form.addEventListener("submit", e => {
    e.preventDefault();

    const searchValue = search.value;

    if (searchValue) {
        getUser(searchValue);

        search.value = "";
    }
});