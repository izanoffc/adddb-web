const partA = "ghp_a9fIcqD48fpq";
const partB = "LGjL5YpKjIObxZDXUV25Iue5";

const CONFIG = {
    TOKEN: partA + partB,
    USER: "izanoffc",
    REPO: "adddb-web",
    DB_FILE: "db.json",
    USER_FILE: "user.json"
};

function getApiUrl(filename) {
    return `https://api.github.com/repos/${CONFIG.USER}/${CONFIG.REPO}/contents/${filename}`;
}