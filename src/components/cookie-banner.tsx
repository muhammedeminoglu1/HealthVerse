"use client";
import React from 'react';
import { Button } from '@/components/ui/button';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="cerez-table">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <p className="flex-1">
          Sitemizde sizlere daha iyi hizmet verebilmek için gizliliğe uygun şekilde çerezler kullanmaktayız. Çerez politikamızı inceleyebilirsiniz.{' '}
          <a href="#" className="text-white underline hover:opacity-80">
            Çerez Politikası
          </a>
        </p>
        <Button
          onClick={() => setIsVisible(false)}
          className="bg-red-600 text-white hover:bg-red-700"
        >
          Tamam
        </Button>
      </div>
    </div>
  );
}
