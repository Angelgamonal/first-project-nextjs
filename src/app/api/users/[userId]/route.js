import { NextResponse } from 'next/server';

export function GET(req, res) {
	console.log(res.params);

	return NextResponse.json('user search');
}
