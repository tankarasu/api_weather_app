// Third-party requirements
import Fastify, { FastifyInstance } from "fastify";

// CONSTANTS
export const fakeDatabase = [
  { temperature: 15 },
  { temperature: 20 },
  { temperature: 5 }
]

// Function
export function buildServer(options = {}): FastifyInstance{
  const server = Fastify(options)
  // Routes
  server.get('/forecasts', getForecast)

  return server
}

async function getForecast(): Promise<Forecast[]>{
  return fakeDatabase
}

// Type definition
interface Forecast {
  temperature: number
}
