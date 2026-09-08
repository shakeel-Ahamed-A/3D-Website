export function normalizeRegistration(values) {
  return { teamName: String(values.teamName ?? '').trim().replace(/\s+/g, ' '), leadName: String(values.leadName ?? '').trim().replace(/\s+/g, ' '), email: String(values.email ?? '').trim().toLowerCase(), teamSize: String(values.teamSize ?? '').trim(), track: String(values.track ?? '').trim(), consent: Boolean(values.consent) };
}
export function validateRegistration(values) {
  const data = normalizeRegistration(values); const errors = {};
  if (data.teamName.length < 2) errors.teamName = 'Enter a team name (at least 2 characters).';
  if (data.leadName.length < 2) errors.leadName = 'Enter the team lead’s name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(data.email)) errors.email = 'Enter a valid email address.';
  if (!['1', '2', '3', '4', '5'].includes(data.teamSize)) errors.teamSize = 'Choose a valid team size.';
  if (!data.track) errors.track = 'Choose an arena.';
  if (!data.consent) errors.consent = 'Confirm the information before saving.';
  return { data, errors, isValid: Object.keys(errors).length === 0 };
}
