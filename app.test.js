const request = require("supertest");
const express = require("express");
const app = require("./app");
describe("Decimal to Binary API", () => {
    it("deve retornar um número binário se o número informado for um decimal válido", async () => {
        const response = await request(app).get("/to-binary/10");
        expect(response.status).toBe(200);
        expect(response.body).toEqual({ decimal: 10, binary: "1010" });
    });
    it("deve retornar erro 400 caso for informado um número decimal inválido", async () => {
        const response = await request(app).get("/to-binary/invalid");
        expect(response.status).toBe(400);
        expect(response.body).toEqual({ error: "Número decimal inválido" });
    });
});