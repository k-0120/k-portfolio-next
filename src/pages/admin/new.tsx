import { useState } from 'react';
import { useRouter } from 'next/router';
import { fetchWithFirebaseAuth } from '@/lib/fetchWithFirebaseAuth';
import { useAuthCheck } from '@/hooks/useAuthCheck';
import ArticleForm from '@/components/ArticleForm';
import LogoutButton from '@/components/LogoutButton';

export default function NewArticle() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [error, setError] = useState('');
  const { authChecked } = useAuthCheck();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetchWithFirebaseAuth('/articles', {
      method: 'POST',
      body: JSON.stringify({ article: { title, body } }),
    });
    if (res.ok) {
      router.push('/admin');
    } else {
      setError('投稿に失敗しました');
    }
  };

  if (!authChecked) return <p className="p-6">読み込み中...</p>;

  return (
    <main className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">新規記事作成</h1>
        <LogoutButton />
      </div>
      <ArticleForm
        title={title}
        body={body}
        error={error}
        onSubmit={handleSubmit}
        onTitleChange={(e) => setTitle(e.target.value)}
        onBodyChange={(e) => setBody(e.target.value)}
        submitButtonText="投稿"
      />
    </main>
  );
}
