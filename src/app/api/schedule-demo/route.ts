import {
  clearSessionToken,
  getSessionToken,
  postScheduleDemoData,
} from '@/services/hub';
import { scheduleDemoFormSchema } from '@/utils/schemas';

// post schedule demo data to hub
export async function POST(req: Request) {
  const body = await req.json();
  const result = scheduleDemoFormSchema.safeParse(body);

  if (!result.success) {
    const errors = Object.fromEntries(
      result.error?.issues?.map((issue) => [issue.path[0], issue.message]) ||
        [],
    );

    return Response.json({ errors });
  }

  try {
    const token = await getSessionToken();

    await postScheduleDemoData(token, result.data);
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
