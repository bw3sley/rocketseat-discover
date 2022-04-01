const url = "https://api.github.com/users/bw3sley";

const token = "";

function GetGitHubAPI(url, token) {
    axios.get(url, {
        headers: {
            "Authorization": `token ${token}`
        }
    })
    .then(response => {
        const avatar_url = response.data.avatar_url;
        const location = response.data.location;
        const company = response.data.company;
        const name = response.data.name;
        const login = response.data.login;

        document.querySelector("img#SideImages").setAttribute("src", avatar_url);
        document.querySelector("img#PostImages").setAttribute("src", avatar_url);
        document.querySelector("p#user-location").textContent = location;
        document.querySelector("a#user-company").textContent = company;
        document.querySelector("h2#user-name").textContent = name;
        document.querySelector("a#user-github").textContent = login;
    })
    .catch(error => alert(`Error: ${error}`))
}

GetGitHubAPI(url, token);

const scrollReveal = ScrollReveal({
    origin: "top",
    distance: "32px",
    duration: 700,
    reset: true
});

scrollReveal.reveal(
    `main`
    , { interval: 100 }
);