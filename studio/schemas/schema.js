import createSchema from 'part:@sanity/base/schema-creator';
import schemaTypes from 'all:part:@sanity/base/schema-type';

import * as singletons from './singletons';
import * as documents from './documents';
import * as objects from './objects';
import * as plugs from './plugs';

const allSingletons = Object.values(singletons).map((singleton) => {
  return { ...singleton };
});

const allDocuments = Object.values(documents).map((document) => {
  return { ...document };
});

const allObjects = Object.values(objects).map((object) => {
  return { ...object };
});

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug };
});

export default createSchema({
  name: 'default',
  types: schemaTypes
    .concat(allSingletons)
    .concat(allDocuments)
    .concat(allObjects)
    .concat(allPlugs),
});
