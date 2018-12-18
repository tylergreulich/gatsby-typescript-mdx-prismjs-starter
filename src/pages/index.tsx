import * as React from 'react';
import { RouterProps } from '@reach/router';

import Layout from '../components/layout';
import Listing from '../components/listing';

const IndexPage: React.SFC<RouterProps> = ({ location }) => (
  <Layout location={location}>
    <Listing />
  </Layout>
);

export default IndexPage;
