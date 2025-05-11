import { auth } from './firebase';

export const fetchWithFirebaseAuth = async (
  endpoint: string,
  options: RequestInit = {}
): Promise<Response> => {
  const user = auth.currentUser;
  const token = user ? await user.getIdToken() : null;
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;

  const res = await fetch(`${apiUrl}${endpoint}`, {
    ...options,
    headers: {
      ...(options.headers || {}),
      Authorization: token ? `Bearer ${token}` : '',
      'Content-Type': 'application/json',
    },
  });

  return res;
};
