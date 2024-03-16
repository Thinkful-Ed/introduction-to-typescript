// Async function with TypeScript
interface Data {
    id: number;
    title: string;
    // Additional properties can be defined as needed
}

async function loadData(url: string): Promise<Data> {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

loadData('https://jsonplaceholder.typicode.com/posts/1')
    .then(data => console.log(data))
    .catch(error => console.error(error));

// Fetching GitHub user information
interface GitHubUser {
    login: string; // GitHub username
    name: string; // Full name of the user
    public_repos: number; // Number of public repositories
    followers: number; // Number of followers
    following: number; // Number of users this user is following
}

async function fetchGitHubUserInfo(username: string): Promise<GitHubUser> {
    const apiURL = `https://api.github.com/users/${username}`;
    const response = await fetch(apiURL);
    if (!response.ok) {
        throw new Error(`Failed to fetch user data: ${response.status} ${response.statusText}`);
    }
    const userData: GitHubUser = await response.json();
    return userData;
}

fetchGitHubUserInfo("octocat")
  .then((userData) => console.log(userData))
  .catch((error) => console.error(error));
