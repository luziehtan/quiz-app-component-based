export default function createElement(type, props, ...children) {
  // children is a rest parameter (starting after the first two parameters)
  const el = document.createElement(type)
  Object.assign(el, props)
  children && el.append(...children.map(child => child.el ?? child)) // spread operator (takes what inside an array)
  return el
}
