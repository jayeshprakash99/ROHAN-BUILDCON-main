import { NextResponse } from 'next/server'
import { MongoClient } from 'mongodb'
import { randomUUID } from 'crypto'

let clientPromise

function getClient() {
  if (!process.env.MONGO_URL) throw new Error('MONGO_URL is not configured')
  if (!clientPromise) clientPromise = new MongoClient(process.env.MONGO_URL).connect()
  return clientPromise
}

export async function POST(request) {
  try {
    const body = await request.json()
    const inquiry = {
      id: randomUUID(),
      name: String(body?.name || '').trim(),
      phone: String(body?.phone || '').trim(),
      email: String(body?.email || '').trim(),
      projectType: String(body?.projectType || '').trim(),
      location: String(body?.location || '').trim(),
      message: String(body?.message || '').trim(),
      createdAt: new Date(),
    }
    if (!inquiry.name || !inquiry.phone || !inquiry.email || !inquiry.projectType) {
      return NextResponse.json({ error: 'Please complete all required fields.' }, { status: 400 })
    }
    const client = await getClient()
    await client.db().collection('inquiries').insertOne(inquiry)
    return NextResponse.json({ ok: true, message: 'Your enquiry has been received.' }, { status: 201 })
  } catch (error) {
    console.error('Inquiry submission failed', error)
    return NextResponse.json({ error: 'Unable to submit right now. Please call us directly.' }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, service: 'rohan-buildcon-api' })
}
