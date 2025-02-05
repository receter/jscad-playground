const jscadDefaultSource = `import { honeycomb } from "jscad-honeycomb";

function main() {
  return honeycomb({
    rows: 3,
    columns: 3,
    radius: 10,
    gap: 5,
    height: 5,
  });
}

export { main };
`;

export default jscadDefaultSource;
