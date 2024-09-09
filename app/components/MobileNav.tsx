import { Button } from "../../@/components/ui/button"
import { Input } from "../../@/components/ui/input"
import { Label } from "../../@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"

export function MobileNav({user}:MobileNavProps) {
  return (
    <section>
      <Sheet>
        <SheetTrigger >
          <Image src="/icons/hamburger.svg" alt="menu" height={30} width={30} className="cursor-pointer z-20" />
        </SheetTrigger>
        <SheetContent side="left"  className="md:w-11 sm:w-[540px]">
        <p>Sheet Content</p>
        </SheetContent>
      </Sheet>
      </section>
  )
}
