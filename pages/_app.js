import Layout from '../layouts/index'


export default function App({ Component, pageProps }) {
  return (
  <>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </>
  )
}
