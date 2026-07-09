const { login, logout, getCurrentUser } = require("../libs/F-sub1");
const { log } = require("../libs/F-sub2");

const loginResult = login("jack");
const logoutResult = logout("jack");
const user = getCurrentUser();

log(loginResult);
log(logoutResult);
log(`Current user: ${user.username}, role: ${user.role}`);
log("F-api is running");