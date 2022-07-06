const {
  deployAndRun,
  AuthType,
} = require("../../../tests/gqltest.js");

const endpoint = process.env.STEPZEN_ENDPOINT;

describe(__dirname, function () {
  const tests = [
    { label: "restquery(q,v)", 
      query: '{restquery(q: ["Joe Smith", "Jane Smith"] v:"New York")  { args { q v } url } }', 
      expected: {restquery: {args: {q: ["Joe Smith", "Jane Smith"],v: "New York",},url: "https://httpbin.org/get?q=Joe+Smith&q=Jane+Smith&v=New+York",},},
      authType: AuthType.adminKey,
    },
    { label: "restquery(v)",
      query:  '{restquery(v:"New York")  { args { q v } url } }',
      expected: {restquery: {args: {q: null,v: "New York",}, url: "https://httpbin.org/get?v=New+York",},},
      authType: AuthType.adminKey,
    },
  ]
  return deployAndRun(__dirname, tests);
});