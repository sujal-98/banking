import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import BankCard from './BankCard'

const RightSidebar = ({ user, transactions, banks }: RightSidebarProps) => {
  return (
    <aside className='right-sidebar p-4 bg-gray-100 shadow-lg rounded-xl'> {/* Reduced padding */}
      <section className="profile-section flex flex-col items-center pb-4 mt-0 mb-8"> {/* Reduced bottom margin */}
        <div className="profile-banner w-full bg-blue-600 rounded-t-xl h-20"></div> {/* Reduced banner height */}
        <div className="profile relative -mt-10 flex flex-col items-center"> {/* Reduced top margin */}
          <div className="profile-img w-20 h-20 bg-blue-500 text-white flex items-center justify-center rounded-full text-4xl font-bold shadow-lg"> {/* Reduced profile size */}
            {user.firstName[0]}
          </div>
          <div className="profile-details mt-4 text-center"> {/* Reduced top margin */}
            <h1 className="profile-name text-lg font-semibold text-gray-800"> {/* Reduced text size */}
              {user.firstName} {user.lastName}
            </h1>
            <p className="profile-email text-xs text-gray-500"> {/* Reduced text size */}
              {user.email}
            </p>
          </div>
        </div>
      </section>

      <section className="banks mt-0"> {/* Reduced top margin */}
        <div className="flex w-full justify-between items-center mb-2"> {/* Reduced bottom margin */}
          <h2 className="header-2 text-md font-bold text-gray-800"> {/* Reduced text size */}
            My Banks
          </h2>
          <Link href="/" className="flex items-center gap-2 bg-blue-600 text-white px-2 py-1 rounded-full hover:bg-blue-700 transition-all"> {/* Reduced padding */}
            <Image src="/icons/plus.svg" height={16} width={16} alt="plus" /> {/* Reduced icon size */}
            <h2 className="text-xs font-semibold">Add Bank</h2> {/* Reduced text size */}
          </Link>
        </div>

        {banks?.length > 0 && (
          <div className="relative flex flex-1 flex-col items-center justify-center gap-2"> {/* Reduced gap between cards */}
            <div className='relative z-10 transform -translate-x-2'> {/* Slightly shifted top card */}
              <BankCard 
                key={banks[0].$id}
                account={banks[0]}
                userName={`${user.firstName} ${user.lastName}`}
                showBalance={false}
              />
            </div>
            {banks[1] && (
              <div className="absolute right-0 top-6 z-0 transform translate-x-2 w-[90%]"> {/* Reduced top spacing and shifted bottom card */}
                <BankCard 
                  key={banks[1].$id}
                  account={banks[1]}
                  userName={`${user.firstName} ${user.lastName}`}
                  showBalance={false}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </aside>
  );
}

export default RightSidebar;
