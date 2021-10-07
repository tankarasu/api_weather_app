// Third-Party requirement
import { FastifyInstance } from "fastify";

// Internal Requirements
import { buildServer } from "../../src/server";
import { fakeDatabase } from "../../src/server";

// CONSTANTS & variable declarations
const method = "GET";
const url = "/forecasts";
let testedServer: FastifyInstance;

beforeAll(async() => {
  testedServer = buildServer();
});

afterAll(async() => {
  await testedServer.close();
});
// TODO error-first testing

describe("GET suite",()=>{
  test(`
    GIVEN 'http://localhost:8080/forecasts' route method = GET
    WHEN request is sent
    THEN should return expected string
  `,
  async()=>{
    const response = await testedServer.inject({
      method,
      url
    })

    expect(response.payload).toBe(JSON.stringify(fakeDatabase))
  })

})
