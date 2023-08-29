const { NextResponse } = require("next/server")

const POST = async (req, res) => {
    return NextResponse.json({
        "message": "Welcome to our API!",
        "version": "1.0"
    })
}

export { POST }