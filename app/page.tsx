'use client';

import { useEffect, useState } from 'react';

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (window.WebApp) {
        alert('WebApp is defined.');
        if (window.WebApp.initDataUnsafe?.user) {
          alert('User data: ' + JSON.stringify(window.WebApp.initDataUnsafe.user));
          setUserData(window.WebApp.initDataUnsafe.user);
        } else {
          alert('No user data found in WebApp.initDataUnsafe');
        }
      } else {
        alert('WebApp is not defined');
      }
    }
  }, []);
  
  return (
    <main className="p-4">
      {userData ? (
        <>
          <h1 className="text-2xl font-bold mb-4">User Data</h1>
          <ul>
            <li>ID: {userData.id}</li>
            <li>First Name: {userData.first_name}</li>
            <li>Last Name: {userData.last_name || 'N/A'}</li>
            <li>Username: {userData.username || 'N/A'}</li>
            <li>Language Code: {userData.language_code || 'N/A'}</li>
            <li>Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
          </ul>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}
