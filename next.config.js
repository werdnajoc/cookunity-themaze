const withCSS = require('@zeit/next-css')
module.exports = withCSS({
    /* config options here */
    assetPrefix: process.env.NODE_ENV === 'production' ? '/cookunity-themaze.github.io' : '',
});
