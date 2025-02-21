'use client'

import React from 'react'
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import Image from 'next/image'
import Link from 'next/link'
import { sidebarLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { DialogTitle } from '@radix-ui/react-dialog'
  

const MobileNav = ({ user }: MobileNavProps) => {
    const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
            <Image 
                src="/icons/hamburger.svg"
                alt="menu"
                width={30}
                height={30}
                className="cursor-pointer"
            />
        </SheetTrigger>
        <SheetContent className='border-none bg-white max-w-72'>
            <DialogTitle className='hidden'>Mobile Navigation</DialogTitle>
            <Link href='/' className='mb-12 cursor-pointer flex gap-1 items-center px-4'>
                <Image
                    src='/icons/logo.svg'
                    alt='logo'
                    width={34}
                    height={34}
                />
                <h1 className='text-26 font-ibm-plex-serif font-bold text-black-1'>Horizon</h1>
            </Link>
            <div className='mobilenav-sheet'>
              <SheetClose asChild>
                <nav className='flex flex-col h-full gap-12 pt-8 text-white'>
                  {sidebarLinks.map((item) => {
                  const isActive = pathname === item.route || pathname.startsWith(`${item.route}/`)

                return (
                  <SheetClose asChild key={item.route}>
                    <Link 
                      href={item.route}
                      key={item.label}
                      className={cn('mobilenav-sheet_close w-full', {'bg-bankGradient': isActive})}
                    >
                      <div className='relative size-6'>
                        <Image 
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={cn({
                                'brightness-[3] invert-0': isActive
                            })}
                        />
                      </div>
                      <p className={cn('text-16 font-semibold text-black-2', {
                        'text-white': isActive
                      })}>
                        {item.label}
                      </p>
                    </Link>
                  </SheetClose>
                    )
                  })}

                  USER
                </nav>
              </SheetClose>

              FOOTER
            </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav