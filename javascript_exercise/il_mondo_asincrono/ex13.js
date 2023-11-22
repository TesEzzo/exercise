let user = { id: 1, name: 'John' }
let userPosts = ['Post 1', 'Post 2', 'Post 3']


const fetchUserData = (person) => new Promise((resolve, reject) => {
    if (typeof person.id == "number" && person.name.length >= 2) {
        return resolve(user);
    } else {
        return reject(new Error("nome e/o ID non valido"));
    }
})

const fetchUserPosts = (posts) => new Promise((resolve, reject) => {
    let postsVerified = []
    posts.forEach(element => {
        if (typeof element === "string") {
            (postsVerified.push(element));
        } else {
            return reject(new Error("inserire un post valido"));
        }
        return resolve(postsVerified)
    });
})

const init = async () => {
    try {
        const theUser = await fetchUserData(user);
        const theUserPosts = await fetchUserPosts(userPosts);
        console.log(theUser);
        console.log(theUserPosts);
    } catch (error) {
        console.log(error);
    }
}

init()