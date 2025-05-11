import { useRouter } from 'next/router';
import { auth } from '@/lib/firebase';
import { signOut } from 'firebase/auth';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut(auth);
    router.push('/login');
  };

  return (
    <button
      onClick={handleLogout}
      className="text-sm text-gray-600 underline hover:text-black"
    >
      ログアウト
    </button>
  );
} 