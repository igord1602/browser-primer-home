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

function renderTree(Tree) {
  const rootUlElement = document.createElement("ul");

  const liEventTarget = document.createElement("li");
  rootUlElement.append(liEventTarget);
  liEventTarget.innerHTML = "EventTarget";

  const ulEventTarget = document.createElement("ul");
  rootUlElement.append(ulEventTarget);

  const liNode = document.createElement("li");
  ulEventTarget.append(liNode);
  liNode.innerHTML = "Node";

  const ulNode = document.createElement("ul");
  ulEventTarget.append(ulNode);

  const liText = document.createElement("li");
  ulNode.append(liText);
  liText.innerHTML = "Text";

  const liComment = document.createElement("li");
  ulNode.append(liComment);
  liComment.innerHTML = "Comment";

  const liElement = document.createElement("li");
  ulNode.append(liElement);
  liElement.innerHTML = "Element";

  const ulElement = document.createElement("ul");
  ulNode.append(ulElement);

  const liSVGElement = document.createElement("li");
  ulElement.append(liSVGElement);
  liSVGElement.innerHTML = "SVGElement";

  const liHTMLElement = document.createElement("li");
  ulElement.append(liHTMLElement);
  liHTMLElement.innerHTML = "HTMLElement";

  const ulHTMLElement = document.createElement("ul");
  liHTMLElement.append(ulHTMLElement);

  const liHTMLInputElement = document.createElement("li");
  ulHTMLElement.append(liHTMLInputElement);
  liHTMLInputElement.innerHTML = "HTMLInputElement";

  const liBodyElement = document.createElement("li");
  ulHTMLElement.append(liBodyElement);
  liBodyElement.innerHTML = "HTMLBodyElement";

  const liAnchorElement = document.createElement("li");
  ulHTMLElement.append(liAnchorElement);
  liAnchorElement.innerHTML = "HTMLAnchorElement";

  // conver tree into elements
  return rootUlElement;
}

export function renderPage() {
  const browserTreeList = renderTree(browserTree);
  const nodesHierarchyList = renderTree(nodesHierarchy);

  const rootDiv = document.getElementById("root");
  rootDiv.append(browserTreeList);
  rootDiv.append(nodesHierarchyList);
}
