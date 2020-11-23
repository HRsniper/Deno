// deno run --allow-net  04-networking.ts

const result = await fetch("https://deno.land/");

console.log(result);

import { serve } from "https://deno.land/std@0.79.0/http/server.ts";
const server = serve({ hostname: "localhost", port: 8000 });
console.log("http://localhost:8000/");
console.log(server);

for await (const req of server) {
  req.respond({ body: "Hello World\n" });
}

import uuid from "./deps.ts"

uuid.generate()