// Lädt alle JS-Dateien aus src/components/forms (keine Unterordner)
const context = require.context("../components/forms", false, /\.js$/);

const forms = {};

context.keys().forEach((key) => {
    if (key === "./index.js") return; // sich selbst ignorieren
    const name = key.replace("./", "").replace(".js", "");
    forms[name] = context(key).default;
});

export default forms;
