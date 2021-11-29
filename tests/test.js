const request = require("supertest");
const app = require("../index");

//caso a variavel cliente tenha da um valor que 
//nao encaixe nos parametros dos testes ira retornar erro

describe("GET /", () => {
    it("responds with Hello World!", (done) => {
        request(app).get("/").expect("Hello World!", done);
    })
});