import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { fetchWithFirebaseAuth } from '@/lib/fetchWithFirebaseAuth';
import { useAuthCheck } from '@/hooks/useAuthCheck';
import ArticleForm from '@/components/ArticleForm';
import LogoutButton from '@/components/LogoutButton';

export default function EditArticle() {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');
  const { authChecked } = useAuthCheck();

  useEffect(() => {
    if (!id) return;
    const fetchArticle = async () => {
      const res = await fetchWithFirebaseAuth(`/articles/${id}`);
      if (!res.ok) return setError('記事の取得に失敗しました');
      const data = await res.json();
      setTitle(data.title);
      setBody(data.body);
    };
    fetchArticle();
  }, [id]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetchWithFirebaseAuth(`/articles/${id}`, {
      method: 'PATCH',
      body: JSON.stringify({ article: { title, body } }),
    });
    if (res.ok) {
      router.push('/admin');
    } else {
      setError('更新に失敗しました');
    }
  };

  const handleDelete = async () => {
    if (!confirm('本当に削除しますか？')) return;
    const res = await fetchWithFirebaseAuth(`/articles/${id}`, {
      method: 'DELETE',
    });
    if (res.ok) {
      router.push('/admin');
    } else {
      setError('削除に失敗しました');
    }
  };

  if (!authChecked) return <p className="p-6">読み込み中...</p>;

  return (
    <main className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">記事を編集</h1>
        <LogoutButton />
      </div>
      <ArticleForm
        title={title}
        body={body}
        error={error}
        onSubmit={handleUpdate}
        onTitleChange={(e) => setTitle(e.target.value)}
        onBodyChange={(e) => setBody(e.target.value)}
        submitButtonText="更新"
      />
      <button onClick={handleDelete} className="text-red-600 hover:underline">
        削除する
      </button>
    </main>
  );
}