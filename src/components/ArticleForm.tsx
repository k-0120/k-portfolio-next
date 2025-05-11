type ArticleFormProps = {
  title: string;
  body: string;
  error?: string;
  onSubmit: (e: React.FormEvent) => Promise<void>;
  onTitleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBodyChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  submitButtonText: string;
};

export default function ArticleForm({
  title,
  body,
  error,
  onSubmit,
  onTitleChange,
  onBodyChange,
  submitButtonText,
}: ArticleFormProps) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <input
        type="text"
        value={title}
        onChange={onTitleChange}
        placeholder="タイトル"
        className="block w-full border p-2"
      />
      <textarea
        value={body}
        onChange={onBodyChange}
        placeholder="本文"
        className="block w-full border p-2 h-40"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        {submitButtonText}
      </button>
    </form>
  );
} 