const baseUrl = 'https://nordpass.com';

module.exports = {
    baseUrl: baseUrl,
    businessUrl: baseUrl + "/business-password-manager/",
    personalUrl: baseUrl + "/personal-password-manager/",

    accessMyPasswordsText: "Access my passwords",
    manageMySubscriptionText: "Manage my subscription",
    accessBusinessAdminPanelText: "Access Business Admin Panel",

    xpathForFirstBusinessButton: "//*[@id='Hero - homepage']/section/div/div/div[1]/div[2]/div[1]/a",
    xpathForFirstPersonalButton: "//*[@id='Hero - homepage']/section/div/div/div[1]/div[2]/div[2]/a"
};