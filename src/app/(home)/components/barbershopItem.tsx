import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Barbershop } from '@prisma/client';
import Image from 'next/image';

type BarbershopItemProps = {
  barbershop: Barbershop;
};

export function BarbershopItem({ barbershop }: BarbershopItemProps) {
  return (
    <Card className="min-w-[167px] max-w-[167px] rounded-2xl">
      <CardContent className="px-1 py-0">
        <div className="w-full h-[159px] relative">
          <Image
            src={barbershop.imageUrl}
            alt={barbershop.name}
            sizes="100vw"
            style={{
              objectFit: 'cover'
            }}
            fill
            className="rounded-2xl"
          />
        </div>

        <div className="px-2 pb-3">
          <h2 className="font-bold mt-2 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.name}
          </h2>
          <p className="text-sm text-gray-400 overflow-hidden text-ellipsis text-nowrap">
            {barbershop.address}
          </p>
          <Button className="w-full mt-3" variant="secondary">
            Reservar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
