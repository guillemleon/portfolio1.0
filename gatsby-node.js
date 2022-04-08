const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const getLocale = await graphql(`
        query Locale {
            allDatoCmsSite {
                edges {
                    node {
                        locale
                    }
                }
            }
        }
    `);
    const defaultLocale = getLocale.data.allDatoCmsSite.edges[0].node.locale;

    await Promise.all([
        homePageGeneration(),
        console.log("--- Home page built ---"),
        projectsPageGeneration(),
        console.log("--- Projects page built ---"),
        contactPageGeneration(),
        console.log("--- Contact page built ---"),
    ])

    function homePageGeneration() {
        const index = path.resolve("./src/templates/index.tsx");

        getLocale.data.allDatoCmsSite.edges.forEach(page => {
            createPage({
                path: page.node.locale === defaultLocale ? "/" : `/${page.node.locale}`,
                component: index,
                context: {
                    locale: page.node.locale,
                    defaultLocale
                },
            })
        })
    }

    function projectsPageGeneration() {
        const projects = path.resolve("./src/templates/projects/projects-page.tsx");

        getLocale.data.allDatoCmsSite.edges.forEach(page => {
            createPage({
                path: page.node.locale === defaultLocale ? "/projects" : `/${page.node.locale}/projects`,
                component: projects,
                context: {
                    locale: page.node.locale,
                    defaultLocale
                },
            })
        })
    }

    function contactPageGeneration() {
        const contact = path.resolve("./src/templates/contact/contact-page.tsx");

        getLocale.data.allDatoCmsSite.edges.forEach(page => {
            createPage({
                path: page.node.locale === defaultLocale ? "/contact" : `/${page.node.locale}/contact`,
                component: contact,
                context: {
                    locale: page.node.locale,
                    defaultLocale
                },
            })
        })
    }
}
