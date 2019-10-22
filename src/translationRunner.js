const path = require("path");
const manageTranslations = require("react-intl-translations-manager").default;

manageTranslations({
  messagesDirectory: path.join(__dirname, "./languages/messages"),
  translationsDirectory: path.join(__dirname, "./languages/locales/"),
  languages: ["en", "fr", "it"] // any language you need
});