export function CreateFile(varName, content){
    var a = document.createElement("a");
    let text = `export let ${varName} = "${content}"`
    a.href = window.URL.createObjectURL(new Blob([text], {type: "text/plain"}));
    a.download = `${varName}.js`
    a.click()
}