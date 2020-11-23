import {
  opine,
  // response,
  // request,
  json,
  urlencoded,
} from "https://deno.land/x/opine@0.25.0/mod.ts";

const server = opine();

server.use(json());
// server.use(urlencoded());

server.get("/", (request, response) => {
  response.status = 200;
  response.json({ message: "hello world" });
});

server.listen(3000, () => console.log("Server listening..."));

// deno run --allow-net --allow-read  .\expressJS-Opine\server.ts
