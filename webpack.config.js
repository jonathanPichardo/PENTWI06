const path = require('path');

module.exports = {
    entry: './app/app.js',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /(node_modules)/
            },
            {
                test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/,
                loader: "file"
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ] 
    },
    devServer: {
        port: 9293,
        contentBase: path.resolve(__dirname, 'dist'),
        inline: true
    }
}