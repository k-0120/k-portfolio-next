import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { auth, db } from '@/lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getDoc, doc } from 'firebase/firestore';

export const useAuthCheck = () => {
  const router = useRouter();
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        router.push('/login');
        return;
      }

      const ref = doc(db, 'users', user.uid);
      const snap = await getDoc(ref);

      if (!snap.exists()) {
        alert('許可されていません');
        await signOut(auth);
        router.push('/login');
        return;
      }

      const data = snap.data();
      if (data.role !== 'admin') {
        alert('管理者権限がありません');
        await signOut(auth);
        router.push('/login');
        return;
      }

      setAuthChecked(true);
    });

    return () => unsubscribe();
  }, [router]);

  return { authChecked };
}; 