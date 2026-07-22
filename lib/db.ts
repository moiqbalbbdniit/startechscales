import { Db, MongoClient } from 'mongodb'

const uri = process.env.MONGODB_URI
const dbName = process.env.MONGODB_DB_NAME || 'star_tech_scales'

if (!uri) {
  throw new Error('MONGODB_URI is not configured. Add it to your environment variables before using the backend.')
}

type MongoGlobal = typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>
}

const globalWithMongo = globalThis as MongoGlobal

const clientPromise = globalWithMongo._mongoClientPromise ?? new MongoClient(uri).connect()

if (process.env.NODE_ENV !== 'production') {
  globalWithMongo._mongoClientPromise = clientPromise
}

export async function getDb(): Promise<Db> {
  const client = await clientPromise
  return client.db(dbName)
}

