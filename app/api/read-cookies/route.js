import { NextRequest } from "next/server"
import { NextResponse } from "next/server"

// GET
const GET = async (req, res) => {
    let cookie = req.cookies.get('theme')
    console.log('display :',cookie)
    return NextResponse.json(cookie)
}

// POST

// PUT

// DELETE

// PATCH 


export { GET, }