// Metadata
let dependencies_conflicts_demo_meta = {
    id: 'com.quix.dependencies_conflicts_demo', // ID's should be a unique string
    name: 'Dependencies Conflicts Demo',
    path: 'dependencies_conflicts_demo',
    repo: 'QuixThe2nd/starfiles-plugin-demo',
    author: 'Parsa Yazdani (Quix)',
    version: '0.1',
    dependencies: '["test.plugin.1", "test.plugin.2"]',
    conflicts: '["test.plugin.3"]',
    link: 'https://github.com/QuixThe2nd/starfiles-plugin-demo',
    compatibility:{
        website: true
    }
}
// Declare Plugin
window['start_' + dependencies_conflicts_demo_meta.id] = function(){
    // Run plugin
}
// Installation
window['install_' + dependencies_conflicts_demo_meta.id] = function(){
    alert('Plugin installed');
}

// Run Plugin
init_plugin(dependencies_conflicts_demo_meta);
