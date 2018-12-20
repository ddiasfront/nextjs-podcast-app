import {Layout} from '../components';
import {TextComponent} from '../components';
import {ReactStripeConnectForm} from 'tacos-test'

export default () => (
  <Layout>
    <TextComponent textType="H1">This is the about page</TextComponent>
    <ReactStripeConnectForm/>
  </Layout>
) 