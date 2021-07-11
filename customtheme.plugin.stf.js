// Metadata
let customtheme_meta = {
    id: 'com.quix.customtheme', // ID's should be a unique string
    name: 'Custom Theme',
    path: 'customtheme',
    repo: 'QuixThe2nd/starfiles-plugin-demo',
    author: 'Parsa Yazdani (Quix)',
    version: '1.0',
    link: 'https://github.com/QuixThe2nd/starfiles-plugin-demo',
    compatibility:{
        website: true
    }
}
// Declare Plugin
window['start_' + customtheme_meta.id] = function(){
    // Import Theme
    theme.import('https://starfiles.co/inc/themes/ocean.json');
    // Remove Plugin
    // theme.unset();
}
// Installation
window['install_' + customtheme_meta.id] = function(){
    alert('Plugin installed');
}
// Run Plugin
init_plugin(customtheme_meta);
