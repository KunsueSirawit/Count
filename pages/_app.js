import Layout from '../layouts/index'
import { RecoilRoot } from 'recoil';

export default function App({ Component, pageProps }) {
  return (
  <>
  <RecoilRoot>
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </RecoilRoot>
  </>
  )
}
