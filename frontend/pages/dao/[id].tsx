import { useRouter } from 'next/router';

export default function DaoPage() {
  const router = useRouter();
  const { id } = router.query;

  if (!id) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white dark:bg-black text-black dark:text-white">
      <h1 className="text-3xl font-bold mb-4">DAO: {id}</h1>
      <p className="text-lg text-center max-w-xl">
        This is a mock DAO page for <span className="font-semibold">{id}</span>.
      </p>
    </div>
  );
}
