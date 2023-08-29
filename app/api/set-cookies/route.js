import { NextRequest } from "next/server"
import { NextResponse } from "next/server"

// GET
const GET = async (req, res) => {
    return NextResponse.json({}, {
        status: 200,
        headers: {
            "Set-Cookie": "theme=dark; path=/;"
        }
    })
}

// POST

// PUT

// DELETE

// PATCH 


export { GET, }