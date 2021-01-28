/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type List_item$ref: FragmentReference;
declare export opaque type List_item$fragmentType: List_item$ref;
export type List_item = {|
  +id: string,
  +title: string,
  +description: string,
  +$refType: List_item$ref,
|};
export type List_item$data = List_item;
export type List_item$key = {
  +$data?: List_item$data,
  +$fragmentRefs: List_item$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "List_item",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "description",
      "storageKey": null
    }
  ],
  "type": "Link",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '6be9999ae1f328ff83136845b163138c';

module.exports = node;
