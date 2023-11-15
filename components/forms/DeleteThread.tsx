'use client';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { deleteThread } from '@/lib/actions/thread.actions';

interface Props {
  threadId: string;
  currentUserId: string;
  authorId: string;
  parentId: string | null;
  isComment?: boolean;
}

const DeleteThread = ({
  threadId,
  currentUserId,
  authorId,
  parentId,
  isComment,
}: Props) => {
  const pathname = usePathname();
  const router = useRouter();

  if (currentUserId !== authorId || pathname === '/') return null;

  const handleDeleteClick = async () => {
    await deleteThread(JSON.parse(threadId), pathname);
    if (!parentId || !isComment) {
      router.push('/');
    }
  };
  return (
    <Image
      src="/assets/delete.svg"
      alt="delete icon"
      width={18}
      height={18}
      className="cursor-pointer object-contain"
      onClick={handleDeleteClick}
    />
  );
};

export default DeleteThread;
