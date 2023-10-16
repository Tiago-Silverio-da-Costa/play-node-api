//npx tsx src/index.ts ==> converte o arquivo para js sem criar arquivo
//tsx ==> se usa em desenvolvimento, em produção usa-se tsc
// npx watch tsx src/index.ts ==> roda o app e fica escutando as alterações
//npx tsc src/index.ts ==> converte o arquivo para js e cria um arquivo js
import fastify from "fastify";
import knex from "knex";

const app = fastify();

app.get("/hello", async () => {
  const tables = await knex("sqlite_schema").select("*");

  return tables;
});

app
  .listen({
    port: 3000,
  })
  .then(() => console.log("Server is running on port 3000"));
