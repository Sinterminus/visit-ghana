// Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

// Step 2: Define your component
const destinations = () => {
  return (
    <main>
    <Layout pageTitle="Destinations">
      <p>Hi there! I'm the proud creator of this site, which I built with Gatsby.</p>
    </Layout>
    </main>
  )
}

// Step 3: Export your component
export default destinations
export const Head = () => (
    <>
      <title>Destinations</title>
      <meta name="description" content="Your description" />
    </>
  )