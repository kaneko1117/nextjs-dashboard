'use client';

import { NextAuthProvider } from '@/app/lib/NextAuthProvider';
import { useSession } from 'next-auth/react';
import { lusitana } from '@/app/ui/fonts';
import { use, useCallback, useEffect, useState } from 'react';
import Image from 'next/image';

export const Profile = () => {
  const { data: session } = useSession();
  const [img, setImg] = useState('');

  const image = session?.user?.image ?? '';
  if (img !== image) {
    setImg(image);
  }

  return (
    <div className="flex h-[100px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3">
      <Image
        src={img}
        className="w-5"
        alt="profileImage"
        placeholder="blur"
        width={50}
        height={50}
        blurDataURL="../../../public/blurImage.png"
      />
      <h2 className={`${lusitana.className} mt-[3px]`}>
        {session?.user?.name}
      </h2>
    </div>
  );
};
