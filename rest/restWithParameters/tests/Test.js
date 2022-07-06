const {
  deployAndRun,
  KeyType,
} = require("../../../tests/gqltest.js");

const endpoint = process.env.STEPZEN_ENDPOINT;

describe("rest/restWithParameters", function () {
  const tests = [
    { label: "restquery(q,v)", 
      fieldSelection: '{restquery(q: ["Joe Smith", "Jane Smith"] v:"New York")  { args { q v } url } }', 
      expected: {restquery: {args: {q: ["Joe Smith", "Jane Smith"],v: "New York",},url: "https://httpbin.org/get?q=Joe+Smith&q=Jane+Smith&v=New+York",},},
      keyType: KeyType.admin,
    },
    { label: "restquery(v)",
      fieldSelection:  '{restquery(v:"New York")  { args { q v } url } }',
      expected: {restquery: {args: {q: null,v: "New York",}, url: "https://httpbin.org/get?v=New+York",},},
      keyType: KeyType.admin,
    },
  ]
  return deployAndRun(__dirname, tests);
});