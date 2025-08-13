// src/components/forms/index.js
const context = require.context("./", false, /\.js$/);

const forms = {};

context.keys().forEach((key) => {
    if (key === "./index.js") return; // Sich selbst überspringen
    const moduleName = key.replace("./", "").replace(".js", "");
    forms[moduleName] = context(key).default;
});

export default forms;