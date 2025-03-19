import { ScheduleDemoFormFields } from '@/components/ScheduleDemoForm';

export async function submitScheduleDemoForm(data: ScheduleDemoFormFields) {
  const res = await fetch('api/schedule-demo', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }
}
