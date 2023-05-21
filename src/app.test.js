const app = require("./app");
const supertest = require("supertest")
const request=supertest(app)

describe("/test endpoint",() => {
	it("Powinna zwrócić się odpowiedź", async () => {
	const response = await request.get("./test")
	expect(response.status).toBe(200);
	expect(response.test).toBe("Hello World");
})

})

