function listView(act) {
  return `<div>${act.DATE} | ${act.LOCATION}</div>`;
}

export default function render(props) {
  return `
  <h1>Acted Alone</h1>
    ${
      props.actedAlone
      .map(act => listView(act))
      .reduce((a, b) => a + b)
    }
  `;
}``
