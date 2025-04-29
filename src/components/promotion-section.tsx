"use client";
import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '@/components/ui/carousel';

type CarouselSlide = {
  title: string;
  image: string;
  content: string;
  extraContent?: string;
};

const carouselData: CarouselSlide[] = [
  {
    title: "NeyimVar",
    image: "https://ext.same-assets.com/3789494674/3318758425.svg",
    content: "Türkiye'de her 100 kişiden 6'sı yanlış branşa başvurmaktadır.",
    extraContent: "NeyimVar uygulaması, şikayetlerinize göre \"muhtemel teşhis\" önerilerinde bulunur, sizi en uygun branşa yönlendirmeye çalışır."
  },
  {
    title: "Şikayetinizi Belirtiniz",
    image: "https://ext.same-assets.com/3789494674/546841154.svg",
    content: "NeyimVar uygulaması üzerinden şikayetlerinizi belirtebilirsiniz."
  },
  {
    title: "Soruları Cevaplayınız",
    image: "https://ext.same-assets.com/3789494674/3584626853.svg",
    content: "Girdiğiniz şikayetlerle ilişkili, sistemin size sorduğu soruları cevaplayınız."
  },
  {
    title: "Sonuçları İnceleyiniz",
    image: "https://ext.same-assets.com/3789494674/1863625384.svg",
    content: "NeyimVar'ın şikayetlerinizi ve verdiğiniz cevapları değerlendirerek size sunduğu muhtemel teşhisleri ve branş önerilerini inceleyiniz."
  },
  {
    title: "Randevu Alabilirsiniz",
    image: "https://ext.same-assets.com/3789494674/3164893002.svg",
    content: "\"Randevu Al\" butonuna basarak \"Merkezi Hekim Randevu Sistemi (MHRS)\" üzerinden randevu alabilirsiniz."
  }
];

export default function PromotionSection() {
  return (
    <div className="tanitim-wrapper bg-primary text-white w-full lg:w-2/5 p-8 flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold lg:hidden mb-4">NeyimVar</h1>
      <Carousel className="w-full max-w-md">
        <CarouselContent>
          {carouselData.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="flex flex-col items-center text-center">
                <div className="text-2xl font-bold mb-6">{slide.title}</div>
                <div className="my-10 w-3/6">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={200}
                    height={200}
                    className="w-full"
                  />
                </div>
                <br /><br />
                <div className="w-full">
                  <div className="text-xl mb-6">{slide.content}</div>
                  {slide.extraContent && <div>{slide.extraContent}</div>}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="border-white text-white" />
        <CarouselNext className="border-white text-white" />
      </Carousel>
    </div>
  );
}
