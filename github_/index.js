
document.addEventListener('DOMContentLoaded', () => {
    loadProfile();
    let inputBox = document.querySelector('.input_Box.glass');
    inputBox.addEventListener('keydown', (e) => createProfile(e));

    function createProfile(e) {
        if (e.key === "Enter") {
            if (!inputBox.value) {
                alert("enter github username");
                return;
            }
            let inputValue = inputBox.value.split(' ').join('');
            fetch("https://api.github.com/users/" + inputValue)
                .then((result) => {
                    if (!result.ok) {
                        throw new Error('User not found');
                    }
                    return result.json();
                })
                .then((data) => {
                    inputValue = inputBox.value.split(' ').join('');
                    document.querySelector('.profilephotu').src = data.avatar_url;
                    document.querySelector('.followers').innerHTML = `Followers: ${data.followers}`;
                    document.querySelector('.following').innerHTML = `Following: ${data.following}`;
                    sessionStorage.setItem('githubData', JSON.stringify(data));
                    localStorage.setItem('githubUsername', inputValue);
                })
                .catch((err) => {
                    alert("User doesn't exist");
                });
        }
    };
});

function loadProfile() {
    let data = JSON.parse(sessionStorage.getItem('githubData'));
    if (data) {
        document.querySelector('.profilephotu').src = data.avatar_url;
        document.querySelector('.input_Box.glass').value = localStorage.getItem('githubUsername');
        document.querySelector('.followers').innerHTML = `Followers: ${data.followers}`;
        document.querySelector('.following').innerHTML = `Following: ${data.following}`;
    }
}
