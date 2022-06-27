function introduction(name) {
    if (name === "Aki"){
        return ("Hi, my name is Aki.")}
    else if (name === "Samip"){
        return ("Hi, my name is Samip.")}
}

function introductionWithLanguage(name, language) {
    if (name === "Aki" && language === "Ember.js") {
        return ("Hi, my name is Aki and I am learning to program in Ember.js.")}
    else if (name === "Samip" && language === "React") {
        return ("Hi, my name is Samip and I am learning to program in React.")}

}

function introductionWithLanguageOptional(name, language = "JavaScript") {
    if (name === "Gracie" && language === "Python") {
        return ("Hi, my name is Gracie and I am learning to program in Python.")}
    else if (name === "Gracie") {
        return ("Hi, my name is Gracie and I am learning to program in ${language}.")}
}
