import * as React from "react"
import './src/styles/global.css'
import type { GatsbyBrowser } from "gatsby"
import Layout from "./src/components/Layout"

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => {
  return (
    <Layout>
      {element}
    </Layout>
  )
}