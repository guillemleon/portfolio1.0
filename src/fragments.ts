import { graphql } from "gatsby"

export const fragments = graphql`
  fragment HelperDatoCmsFixed on DatoCmsFixed {
    aspectRatio
    base64
    height
    sizes
    src
    srcSet
    tracedSVG
    width
  }

  fragment HelperDatoCmsFluid on DatoCmsFluid {
    aspectRatio
    base64
    height
    sizes
    src
    srcSet
    tracedSVG
    width
  }
`
