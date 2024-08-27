import React from 'react';
import Sidebar from '../components/Sidebar';
import Image from "next/image";
import MobileNav from '../components/MobileNav';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const loggedIn={
    firstName:'sujal', lastName:"gupta"
  }
  const user={
    $id: "1",
  email: "email",
  userId: "123",
  dwollaCustomerUrl: "234",
  dwollaCustomerId: "234",
  firstName: "3455",
  lastName: "gupta",
  address1: "e3d",
  city: "33",
  state: "delhi",
  postalCode: "22222",
  dateOfBirth: "233",
  ssn: "ferfw"
  }
  return (
    <main className="flex h-screen w-full font-inter">
        <Sidebar user={user} />
        <div className="flex size-full flex-col">
          <div className="root-layout">
            <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon" />
            <div>
              <MobileNav user={user} />
            </div>
          </div>
          {children}
        </div>

    </main>
  );
}