import { clearSessionToken, getSessionToken } from '@/services/hub';

// post demo data to hub
export async function POST(req: Request) {
  const body = await req.json();

  console.log('data to post', body);

  try {
    const token = await getSessionToken();
    // todo: post demo data to hub
    await clearSessionToken(token);
    return Response.json(null, { status: 200 });
  } catch (error: any) {
    console.error(error);

    return Response.json(
      { error: error.message || 'Internal Server Error' },
      { status: error.status || 500 },
    );
  }
}
