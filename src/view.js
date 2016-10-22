function eventView(act) {
  return Object.keys(act)
    .reduce((a, b) => `${a}<li>${b}: ${act[b]}</li>`, '');
}

export default function render(props) {
  return `
    ${
      props.results
      .map(act => eventView(act))
      .reduce((a, b) => `${a}<ul>${b}</ul>`, '')
    }
  `;
}
