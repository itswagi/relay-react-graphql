/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type List_item$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type ListRender_list$ref: FragmentReference;
declare export opaque type ListRender_list$fragmentType: ListRender_list$ref;
export type ListRender_list = {|
  +link: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +$fragmentRefs: List_item$ref
      |}
    |}>
  |},
  +$refType: ListRender_list$ref,
|};
export type ListRender_list$data = ListRender_list;
export type ListRender_list$key = {
  +$data?: ListRender_list$data,
  +$fragmentRefs: ListRender_list$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ListRender_list",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "LinkConnection",
      "kind": "LinkedField",
      "name": "link",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "LinkEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Link",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "List_item"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Viewer",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '0ec740e133fde3407a485019dc9c19f9';

module.exports = node;
