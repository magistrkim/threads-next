import Link from 'next/link';
import Image from 'next/image';
import { SignedIn, SignOutButton, OrganizationSwitcher } from '@clerk/nextjs';

const Topbar = () => {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/assets/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-light-1 text-heading3-bold max-xs:hidden ">
          Threads
        </p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton aria-label="signout button">
              <div className="flex cursor-pointer">
                <Image
                  src="/assets/logout.svg"
                  alt="logout"
                  width={24}
                  height={24}
                />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
        <OrganizationSwitcher />
      </div>
    </nav>
  );
};

export default Topbar;
