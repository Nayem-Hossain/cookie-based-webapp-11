import { headers } from 'next/headers'
import { NextResponse } from 'next/server';

const GET = async (req, res) => {
    const headerProperties = headers();
    let authToken = headerProperties.get('authToken');
    let modifiedToken = `Bearer ${authToken}`;

    // console.log("Modified Token", modifiedToken);

    return NextResponse.json({ 'authToken': modifiedToken }, { headers: { 'authToken': modifiedToken } })
}

export { GET }