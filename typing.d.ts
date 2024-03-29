declare module "*.svg" {
  import * as React from "react"

  export const ReactComponent: React.FunctionComponent<
      React.SVGProps<SVGSVGElement>
      >

  const src: string
  export default src
}
declare module "*.jpg"
declare module "*.png"
declare module "*.scss"
declare module "*.json"
