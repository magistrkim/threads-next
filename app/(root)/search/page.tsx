import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { fetchUser } from '@/lib/actions/user.actions';
import ProfileHeader from '@/components/shared/ProfileHeader';
import { profileTabs } from '@/constants';
import Image from 'next/image';
import ThreadsTab from '@/components/shared/ThreadsTab';

const Page = async () => {
  const user = await currentUser();
  if (!user) return null;
  const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect('/onboarding');
    
    // Fetch users
    
  return (
    <section>
      <h1 className="head-text mb-10">Search</h1>
    </section>
  );
};

export default Page;
