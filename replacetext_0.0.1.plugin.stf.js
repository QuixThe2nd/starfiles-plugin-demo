// Metadata
const meta = {
    id: 'com.quix.replacetext', // ID's should be a unique string
    name: 'My Plugin',
    author: 'Parsa Yazdani (Quix)',
    version: '0.0.1',
    link: 'https://github.com/QuixThe2nd/starfiles-plugin-demo',
    compatibility:{
        website: true
    }
}
// Declare Plugin
window['start_' + meta.id] = function(){
    document.body.innerHTML = document.body.innerHTML.replace("Starfiles", "Simon is Gay")
}
// Run Plugin
init_plugin(meta);
