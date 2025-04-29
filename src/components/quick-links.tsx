"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { HelpCircle, HelpingHand, MessageSquare } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';

export default function QuickLinks() {
  const [sssOpen, setSssOpen] = React.useState(false);
  const [helpOpen, setHelpOpen] = React.useState(false);
  const [contactOpen, setContactOpen] = React.useState(false);

  return (
    <div>
      <ul className="flex items-center gap-2">
        <li>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-muted hover:text-primary"
            onClick={() => setSssOpen(true)}
          >
            <HelpCircle className="h-5 w-5" />
            <span className="sr-only">Sıkça Sorulan Sorular</span>
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-muted hover:text-primary"
            onClick={() => setHelpOpen(true)}
          >
            <HelpingHand className="h-5 w-5" />
            <span className="sr-only">Yardım</span>
          </Button>
        </li>
        <li>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full text-muted hover:text-primary"
            onClick={() => setContactOpen(true)}
          >
            <MessageSquare className="h-5 w-5" />
            <span className="sr-only">İletişim</span>
          </Button>
        </li>
      </ul>

      <Sheet open={sssOpen} onOpenChange={setSssOpen}>
        <SheetContent side="right" className="w-80 md:w-96">
          <SheetHeader>
            <SheetTitle>Sıkça Sorulan Sorular</SheetTitle>
          </SheetHeader>
          <div className="p-4">
            <p>Sıkça sorulan sorular içeriği burada yer alacak.</p>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet open={helpOpen} onOpenChange={setHelpOpen}>
        <SheetContent side="right" className="w-80 md:w-96">
          <SheetHeader>
            <SheetTitle>Yardım</SheetTitle>
          </SheetHeader>
          <div className="p-4">
            <p>Yardım içeriği burada yer alacak.</p>
          </div>
        </SheetContent>
      </Sheet>

      <Sheet open={contactOpen} onOpenChange={setContactOpen}>
        <SheetContent side="right" className="w-80 md:w-96">
          <SheetHeader>
            <SheetTitle>İletişim</SheetTitle>
          </SheetHeader>
          <div className="p-4">
            <p>İletişim içeriği burada yer alacak.</p>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
