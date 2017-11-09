module.exports = {
    sections: [
        {
            name: 'Introduction',
            content: 'docs/introduction.md'
        },
        {
            name: 'Documentation',
            sections: [
                {
                    name: 'Installation',
                    content: 'docs/installation.md'
                },
                {
                    configuration: "Configuration",
                    content: "docs/configuration.md"
                }
            ]
        },
        {
            name: 'UI Components',
            content: 'docs/ui.md',
            components: 'src/components/*.js'
        }
    ],
    webpackConfig: require('./sample/webpack.config.js'),
    serverPort:3000
}