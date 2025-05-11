import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchWithFirebaseAuth } from '@/lib/fetchWithFirebaseAuth';
import { useAuthCheck } from '@/hooks/useAuthCheck';
import { Article } from '@/types/article';
import LogoutButton from '@/components/LogoutButton';

export default function AdminIndex() {
  const router = useRouter();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const { authChecked } = useAuthCheck();

  useEffect(() => {
    if (!authChecked) return;
    const fetchArticles = async () => {
      const res = await fetchWithFirebaseAuth('/articles');
      if (!res.ok) return;
      const data = await res.json();
      setArticles(data);
      setLoading(false);
    };
    fetchArticles();
  }, [authChecked]);

  if (!authChecked || loading) return <p className="p-6">読み込み中...</p>;

  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">記事一覧</h1>
        <LogoutButton />
      </div>
      <Link
        href="/admin/new"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4 inline-block"
      >
        新規作成
      </Link>
      <ul>
        {articles.map((article) => (
          <li
            key={article.id}
            className="cursor-pointer hover:underline"
            onClick={() => router.push(`/admin/${article.id}/edit`)}
          >
            {article.title}
          </li>
        ))}
      </ul>
    </main>
  );
}
