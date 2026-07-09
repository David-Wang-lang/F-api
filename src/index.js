const { login, logout, getCurrentUser } = require("../libs/F-sub1");
const { log, info, error } = require("../libs/F-sub2");

const loginResult = login("jack");
const logoutResult = logout("jack");
const user = getCurrentUser();

log(loginResult);
log(logoutResult);
info(`Current user: ${user.username}, role: ${user.role}`);
error("This is a test error log");
log("F-api is running");