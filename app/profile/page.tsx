'use client';

import { useEffect, useState } from 'react';
import { Card, Avatar, Badge, Spacer } from '@nextui-org/react';

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
}

const mockUser: UserData = {
  id: 0,
  first_name: 'Guest',
  last_name: undefined,
  username: undefined,
  language_code: 'en',
  is_premium: false,
};

export default function Home() {
  const [userData, setUserData] = useState<UserData>(mockUser);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.Telegram?.WebApp) {
      const { WebApp } = window.Telegram;

      // Set up Telegram Web App swipe behavior
      WebApp.setSwipeBackAllowed(false); // Disable swipe-back behavior

      // Initialize user data from Telegram Web App
      const realUser = WebApp.initDataUnsafe?.user;
      if (realUser) {
        setUserData(realUser);
      }

      return () => {
        // Reset swipe-back behavior on unmount
        // WebApp.setSwipeBackAllowed(true);
      };
    }
  }, []);

  const fullName = `${userData.first_name}${userData.last_name ? ` ${userData.last_name}` : ''}`;
  const initial = userData.first_name.charAt(0).toUpperCase();

  return (
      <main className="p-4 flex justify-center items-center min-h-screen bg-gray-100 pb-10">
        <Card className="bg-white rounded-lg shadow-md p-6 max-w-md w-full">
          <div className="flex flex-col items-center text-center">
            <Avatar size="sm" color="primary">
              {initial}
            </Avatar>
            <Spacer y={0.5} />
            <h1 className="text-2xl font-bold mb-1">{fullName}</h1>
            {userData.username && (
              <p className="text-sm text-gray-500">@{userData.username}</p>
            )}
            {userData.is_premium && (
              <Badge color="primary" className="mt-2">
                Premium User
              </Badge>
            )}
          </div>
          <div className="py-10 text-center">
            <p className="text-gray-800 text-md">Language: {userData.language_code || 'N/A'}</p>
            <Spacer y={0.5} />
            <p className="text-gray-800 text-md">User ID: {userData.id}</p>
          </div>
        </Card>
      </main>
  );
}
