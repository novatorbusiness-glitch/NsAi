import { NextResponse } from "next/server";

export async function POST() {
	return NextResponse.json(
		{ ok: false, message: "Contact API is not configured in this environment." },
		{ status: 501 },
	);
}
