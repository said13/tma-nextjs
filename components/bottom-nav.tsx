'use client';

import React from 'react';

import Link from 'next/link';

import useNavigation from '@/hook/use-navigation';
import useScrollingEffect from '@/hook/use-scroll';
import { Icon } from '@iconify/react';

const BottomNav = () => {
  const scrollDirection = useScrollingEffect(); // Use the custom hook
  const navClass = scrollDirection === 'up' ? '' : 'opacity-25 duration-500';

  const {
    isHomeActive,
    isExploreActive,
    isNotificationsActive,
    isMessagesActive,
  } = useNavigation();

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-zinc-100 dark:bg-zinc-950 border-t dark:border-zinc-800 border-zinc-200 shadow-lg">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <Link href="/" className="inline-flex flex-col items-center justify-center px-5 group">
          {isHomeActive ? (
            <Icon icon="mingcute:home-5-fill" width="32" height="32" />
          ) : (
            <Icon icon="mingcute:home-5-line" width="32" height="32" />
          )}
        </Link>

        <Link href="/explore" className="inline-flex flex-col items-center justify-center px-5 group">
          {isExploreActive ? (
            <Icon icon="bxs:search" width="32" height="32" className="stroke-current stroke-5" />
          ) : (
            <Icon icon="bx:search" width="32" height="32" />
          )}
        </Link>

        <Link href="/notifications" className="inline-flex flex-col items-center justify-center px-5 group">
          {isNotificationsActive ? (
            <Icon icon="mingcute:notification-fill" width="32" height="32" />
          ) : (
            <Icon icon="mingcute:notification-line" width="32" height="32" />
          )}
        </Link>

        <Link href="/profile" className="inline-flex flex-col items-center justify-center px-5 group">
          {isMessagesActive ? (
            <Icon icon="ic:baseline-face" width="32" height="32" />
          ) : (
            <Icon icon="ic:outline-face" width="32" height="32" />
          )}
        </Link>
      </div>
    </div>
  );
};

export default BottomNav;