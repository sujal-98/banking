import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const RightSidebar = ({user,transactions,banks}: RightSidebarProps) => {
  return (
    <aside className='right-sidebar'>
        <section className="flex flex-col pb-3 mt-0 mb-12 ">
            <div className="profile-banner ">
                <div className="profile mt-12">
                    <div className="profile-img mt-12">
                        <span className='text-5xl font-bold text-blue-500'>
                            {user.firstName[0]}
                        </span>
                    </div>
                    <div className="profile-details mt-8 ">
                        <h1 className="profile-name ">
                            {user.firstName} {user.lastName}
                        </h1>
                        <p className="profile-email">
                            {user.email}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="banks mt-8">
            <div className="flex w-full justify-between">
                <h2 className="header-2">
                    My Banks
                </h2>
                <Link href="/" className="flex gap-2">
                <Image src="/icons/plus.svg" height={20} width={20} alt="plus" />
                <h2 className="text-14 font-semibold">
                    Add Bank
                </h2>
                </Link>
            </div>
            {banks?.length>0 && (
                <div className="relative flex flex-col items-center justify-center gap-5">
                    <div className="relative z-10">
                        Bank 1
                    </div>
                    {
                        banks[1] && (
                            <div className="absolute right-0 top-8 z-0 w-[90%]">
                                Bank 2
                            </div>
                        )
                    }
                </div>
            ) }
        </section>
    </aside>
  )
}

export default RightSidebar
