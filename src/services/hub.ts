const url = process.env.HUB_URL || '';
const username = process.env.HUB_USERNAME || '';
const password = process.env.HUB_PASSWORD || '';
export const auth = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;

// get session token from hub
export async function getSessionToken(): Promise<string> {
  const res = await fetch(`${url}/sessions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
  });

  if (!res.ok) {
    throw { status: res.status, message: res.statusText, url: res.url };
  }

  const body = await res.json();
  return body.response.token;
}

// clear session token from hub
export async function clearSessionToken(token: string) {
  const res = await fetch(`${url}/sessions/${token}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth,
    },
  });

  if (!res.ok) {
    throw { status: res.status, message: res.statusText, url: res.url };
  }
}
