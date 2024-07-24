let inpSearch = document.getElementById('search-profile');
let searchBtn = document.getElementById('search');
let profileCard = document.getElementById('profile-card');

const apiUrl = "https://api.github.com/users/";

let gitUser = async (username) => {
    let response = await fetch(apiUrl + username);
    let data = await response.json();
    console.log(data);

    profileCard.innerHTML = `
        <div class="git-card">
            <img class="round" src="${data.avatar_url}" alt="user" />
            <h3>${data.name || 'No name available'}</h3>
            <h6>${data.location || 'Location not provided'}</h6>
            <p>${data.bio || 'No bio available'}</p>
            <div class="buttons">
                <button class="primary ghost">
                    Follow
                </button>
            </div>
            <div class="followers">
                <div class="following-head">
                    <h5>
                        Followers
                        <p>${data.followers}</p>
                    </h5>
                    <h5>
                        Following
                        <p>${data.following}</p>
                    </h5>
                    <h5>
                        Repo
                        <p>${data.public_repos}</p>
                    </h5>
                </div>
            </div>
        </div>
    `;
};

let handleSearch = () => {
    gitUser(inpSearch.value);
};

searchBtn.addEventListener('click', handleSearch);

inpSearch.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleSearch();
    }
});
