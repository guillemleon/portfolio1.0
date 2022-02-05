const path = require(`path`)

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  await Promise.all([
    homePageGeneration(),
    console.log("--- Home page built ---"),
  ])

  function homePageGeneration() {
    const index = path.resolve("./src/templates/index.tsx");

    createPage({
      path: "/",
      component: index,
      context: {},
    })
  }
}
