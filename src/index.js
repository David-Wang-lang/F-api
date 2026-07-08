const { login, logout } = require("../libs/F-sub1");
const { log } = require("../libs/F-sub2");

const loginResult = login("jack");
const logoutResult = logout("jack");

log(loginResult);
log(logoutResult);
log("F-api is running");