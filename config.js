const baseUrl = 'https://nordpass.com';

module.exports = {
    mainPage: {
        baseUrl: baseUrl,
        header: {
            accessMyPasswordsText: "Access my passwords",
            manageMySubscriptionText: "Manage my subscription",
            accessBusinessAdminPanelText: "Access Business Admin Panel",
        },
        heroHomepage: {
            xpathBusinessButton: "//*[@id='Hero - homepage']/section/div/div/div[1]/div[2]/div[1]/a",
            xpathPersonalButton: "//*[@id='Hero - homepage']/section/div/div/div[1]/div[2]/div[2]/a"
        }
    },

    personalPage: {
        personalUrl: baseUrl + "/personal-password-manager/"
    },

    businessPage: {
        businessUrl: baseUrl + "/business-password-manager/"
    }
};