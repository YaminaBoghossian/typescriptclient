module.exports = {
    entry: {
        index: './main.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: './dist'
    },
    module: {
        rules: [{
            test: /\.ts$/, //tout les fichiers qui se terminent par .js
            use: 'ts-loader',
            exclude: /node_modules/
        }]

    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    devtool: 'inline-source-map'
}