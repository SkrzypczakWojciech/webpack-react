const path = require('path');

module.exports = (env) => {
    return {
        mode: env || 'production',
        entry: './src/index.js',
        output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.bundle.js'
    },
    module: {
        rules: [
    {
        test: /\.js$/,
        loader: "babel-loader"
    },
    {
        test: /\.css$/,
        use: [
            { loader: 'style-loader'},
            {
                loader: 'css-loader',
                options: {
                    modules: true
                    }
                }
            ]
        },
        {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
        plugins: env !== 'production' ? ["react-hot-loader/babel"] : []
        }
    }
    ]
}
}
};