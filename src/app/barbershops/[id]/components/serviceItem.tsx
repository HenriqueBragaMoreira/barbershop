import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Service } from '@prisma/client';
import Image from 'next/image';

type ServiceItemProps = {
  service: Service;
};

export function ServiceItem({ service }: ServiceItemProps) {
  return (
    <Card>
      <CardContent className="p-3">
        <div className="flex gap-4 items-center">
          <div className="relative size-[110px]">
            <Image
              src={service.imageUrl}
              alt={service.name}
              className="rounded-lg"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
          <div className="flex flex-col w-full">
            <h2 className="font-bold">{service.name}</h2>
            <p className="text-sm text-gray-400">{service.description}</p>

            <div className="flex items-center justify-between mt-[10px]">
              <p className="text-primary text-sm font-bold">
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(Number(service.price))}
              </p>
              <Button variant="secondary">Reservar</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
