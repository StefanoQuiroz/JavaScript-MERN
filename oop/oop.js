//Object User
const user1 = {
    name : "Kermit",
    email: "kermit@sesame.org",
    friend : {
        name:"Miss Piggy",
        email: "piggy@sesame.org"
    }
};

const { friend: {name: MissPiggy}} = user1;
console.log(MissPiggy);

