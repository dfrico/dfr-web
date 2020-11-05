import React from 'react';
import ReactMarkdown from 'react-markdown';
import gfm from 'remark-gfm';

import Placeholder from '../components/placeholder';
import helloWorld from './posts/hello-world';

export default {
  ...helloWorld,
  body: (
    <>
      <ReactMarkdown plugins={[gfm]} children={helloWorld.body} />
    </>
  ),
};
