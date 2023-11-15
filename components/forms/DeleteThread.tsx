'use client';
import Image from 'next/image';
import { useRouter, usePathname } from 'next/navigation';
import { deleteThread } from '@/lib/actions/thread.actions';

const DeleteThread = () => {
  return (
    <Image
      src="/assets/delete.svg"
      alt="delete icon"
      width={18}
      height={18}
      className="cursor-pointer object-contain"
      onClick={() => {}}
    />
  );
};

export default DeleteThread;
