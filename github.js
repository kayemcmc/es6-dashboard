class Github {
    constructor() {
       this.client_id = 'bc15bb43f50016516227';
       this.client_secret = '431fd9b7d4f5a634cc7de9173b1eca63207ef201';
       this.repos_count = 5;
       this.repos_sort = 'created: asc';     
    }

    async getUser(user) {
        const profileResponse = await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&client_secret${this.client_secret}`);

        const reposResponse = await fetch(`http://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await reposResponse.json();

        return {
            profile,
            repos
        }
    }
}