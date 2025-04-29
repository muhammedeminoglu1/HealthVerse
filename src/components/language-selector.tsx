"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';

const languages = [
  { name: 'Türkçe', code: 'tr' },
  { name: 'English', code: 'en' },
];

export default function LanguageSelector() {
  const [selectedLanguage, setSelectedLanguage] = React.useState(languages[0]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="gap-1">
          {selectedLanguage.name}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((language) => (
          <DropdownMenuItem
            key={language.code}
            className={`cursor-pointer ${language.code === selectedLanguage.code ? 'bg-muted/50' : ''}`}
            onClick={() => setSelectedLanguage(language)}
          >
            {language.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
