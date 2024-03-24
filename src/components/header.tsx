import { MenuIcon } from 'lucide-react';
import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

export function Header() {
  return (
    <Card>
      <CardContent className="p-5 justify-between items-center flex">
        <Image src="/logo.png" alt="Barbershop Logo" height={22} width={120} />
        <Button variant="outline" size="icon" className="size-8">
          <MenuIcon size={18} />
        </Button>
      </CardContent>
    </Card>
  );
}
