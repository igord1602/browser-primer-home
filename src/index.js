/* eslint-disable import/prefer-default-export */
/* eslint-disable no-console */

const browserTree = {
  label: "Window",
  children: [
    {
      label: "DOM - Document Object Model; DOM Tree",
      children: [
        {
          label: "document",
          children: [],
        },
        {
          label: "CSSOM - CSS Object Model",
          children: [],
        },
      ],
    },
    {
      label: "BOM - Browser Object Model",
      children: [
        {
          label: "navigator",
          children: [],
        },
        {
          label: "screen",
          children: [],
        },
        {
          label: "location",
          children: [],
        },
        {
          label: "frames",
          children: [],
        },
        {
          label: "history",
          children: [],
        },
        {
          label: "XMLHttpReques",
          children: [],
        },
      ],
    },
    {
      label: "JavaScript",
      children: [
        {
          label: "Object",
          children: [],
        },
        {
          label: "Array",
          children: [],
        },
        {
          label: "Function",
          children: [],
        },
        {
          label: "...",
          children: [],
        },
      ],
    },
  ],
};

// рекурсия

const nodesHierarchy = {
  label: "EventTarget",
  children: [
    {
      label: "Node",
      children: [
        {
          label: "Text",
          children: [],
        },
        {
          label: "Comment",
          children: [],
        },
        {
          label: "Element",
          children: [
            {
              label: "SVGElement",
              children: [],
            },
            {
              label: "HTMLElement",
              children: [
                {
                  label: "HTMLInputElement",
                  children: [],
                },
                {
                  label: "HTMLBodyElement",
                  children: [],
                },
                {
                  label: "HTMLAnchorElement",
                  children: [],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const data = [
  {
    label: "data 001",
    level: "001",
    children: [],
  },
  {
    label: "data 002",
    level: "002",
    children: [],
  },
  {
    label: "data 003",
    level: "003",
    children: [],
  },
  {
    label: "data 004",
    level: "004",
    children: [],
  },
];

function createLiElement(text) {
  const li = document.createElement("li");
  li.innerHTML = text;
  return li;
}

function renderTreeToList(treeArray) {
  const list = document.createElement("ol");

  treeArray
    .map((node) => `${node.label} ${node.level}`)
    .map((item) => createLiElement(item))
    .forEach((liElement) => list.append(liElement));

  return list;
}

function renderTree(treeArray) {
  if (treeArray.lenght === 0) return null;
  const rootUlElement = document.createElement("ul");
  treeArray.forEach((node) => {
    const liElement = document.createElement("li");
    liElement.innerHTML = node.label;
    rootUlElement.append(liElement);
    const subTree = renderTree(node.children);
    if (subTree !== null) rootUlElement.append(subTree);
  });
  return rootUlElement;
}

const complexArray = [1, 2, 3, [4, 5, 6, [7, 8, 9], 10, [11, 12]]];

function flattenArray(array) {
  let result = [];
  array.forEach((values) => {
    if (Array.isArray(values)) {
      result = [...result, ...flattenArray(values)];
    } else {
      result = [...result, values];
    }
  });

  return result;
}

const DOMmodule = DOMArray();

function DOMArray() {
  const DOMbrowserTree = Object.values(browserTree);
  const DOMnodesHierarchy = Object.values(nodesHierarchy);
  const result = [...DOMbrowserTree, ...DOMnodesHierarchy];

  return result;
}

function renderArray(array) {
  const p = document.createElement("p");
  p.innerHTML = JSON.stringify(array);

  return p;
}

export function renderPage() {
  const tree = renderTree([browserTree, nodesHierarchy]);
  const list = renderTreeToList(data);

  const rootDiv = document.getElementById("root");
  if (tree !== null) rootDiv.append(tree);
  if (list !== null) rootDiv.append(list);

  const flatArray = flattenArray(complexArray);
  rootDiv.append(renderArray(flatArray));

  const flatDOMArray = flattenArray(DOMmodule);
  rootDiv.append(renderArray(flatDOMArray));
}
