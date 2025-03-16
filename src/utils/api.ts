export async function submitScheduleDemoForm(data: any) {
  const res = await fetch('api/demo', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }
}
