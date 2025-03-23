'use server';

import { ScheduleDemoFormFields } from '@/components/ScheduleDemoForm';

const url = process.env.HUB_URL || '';
const username = process.env.HUB_USERNAME || '';
const password = process.env.HUB_PASSWORD || '';
const auth = `Basic ${Buffer.from(`${username}:${password}`).toString('base64')}`;

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

// post schedule demo data to hub
export async function postScheduleDemoData(
  token: string,
  data: ScheduleDemoFormFields,
) {
  const fieldData = {
    notes: `email: ${data.email}\r\nphone: ${data.phone}\r\nmessage: I would like to schedule a demo.`,
    contact: `${data.firstName} ${data.lastName}`,
    answered_by: 'Website',
    unread: 1,
  };

  const options = {
    entrymode: 'script',
    prohibitmode: 'script',
  };

  const payload = { fieldData, options };
  const res = await fetch(`${url}/layouts/support_calls/records`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw { status: res.status, message: res.statusText, url: res.url };
  }
}
