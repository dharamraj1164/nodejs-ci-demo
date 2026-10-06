const test = require("node:test");
const assert = require("node:assert");

const { getMessage } = require("../src/index");

test("getMessage should return correct message", () => {
    assert.strictEqual(
        getMessage(),
        "Welcome to Node.js CI/CD Pipeline"
    );
});