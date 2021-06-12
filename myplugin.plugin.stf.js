// Metadata
const meta = {
    id: 'com.quix.myplugin', // ID's should be a unique string
    name: 'My Plugin',
    path: 'myplugin',
    repo: 'QuixThe2nd/starfiles-plugin-demo',
    author: 'Parsa Yazdani (Quix)',
    version: '0.1',
    link: 'https://github.com/QuixThe2nd/starfiles-plugin-demo',
    compatibility:{
        website: true
    }
}
// Declare Plugin
window['start_' + meta.id] = function(){
    alert('Message from plugin.');
}
// Installation
window['install_' + meta.id] = function(){
    alert('Plugin installed');
}
// Run Plugin
init_plugin(meta);
