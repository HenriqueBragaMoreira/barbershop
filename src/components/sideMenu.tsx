'use client';
import { CalendarIcon, CircleUserRound, HomeIcon, LogInIcon, LogOutIcon } from 'lucide-react';
import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Avatar, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';
import { SheetHeader, SheetTitle } from './ui/sheet';

export function SideMenu() {
  const { data } = useSession();
  return (
    <>
      <SheetHeader className="text-left border-b border-solid p-5">
        <SheetTitle>Menu</SheetTitle>
      </SheetHeader>
      <div className="px-5 py-6">
        {data?.user ? (
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <Avatar>
                <AvatarImage src={data.user?.image ?? ''} />
              </Avatar>
              <h2 className="font-bold">{data.user.name}</h2>
            </div>
            <Button onClick={() => signOut()} variant="secondary" size="icon">
              <LogOutIcon />
            </Button>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <CircleUserRound size={32} />
              <h2 className="font-bold">Olá, faça seu login!</h2>
            </div>
            <Button onClick={() => signIn('google')} className="justify-start" variant="secondary">
              <LogInIcon className="mr-2" size={18} />
              Fazer Login
            </Button>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-3 px-5">
        <Button className="justify-start" variant="outline" asChild>
          <Link href="/">
            <HomeIcon className="mr-2" size={18} />
            <span>Início</span>
          </Link>
        </Button>

        {data?.user && (
          <Button className="justify-start" variant="outline">
            <CalendarIcon className="mr-2" size={18} />
            <span>Agendamentos</span>
          </Button>
        )}
      </div>
    </>
  );
}
