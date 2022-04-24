module.exports = {
    siteMetadata: {
        title: `Guillem Leon`,
        siteUrl: `https://www.yourdomain.tld`,
        author: {
            name: `Guillem Leon`,
        },
    },
    plugins: [
        {
            resolve: 'gatsby-source-datocms',
            options: {
                apiToken: process.env.DATOCMS_TOKEN,
                preview: false,
                disableLiveReload: false,
                environment: `main`
            }
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-sharp",
        "gatsby-plugin-graphql-codegen",
        "gatsby-transformer-sharp",
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                "name": "images",
                "path": "./src/assets/images/"
            },
            __key: "images"
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true, // defaults to false
                jsxPragma: `jsx`, // defaults to "React"
                allExtensions: true, // defaults to false
            },
        },
    ]
};