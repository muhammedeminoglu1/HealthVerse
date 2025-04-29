"use client";
import React from 'react';
import PromotionSection from './promotion-section';
import LoginContent from './login-content';
import CookieBanner from './cookie-banner';

export default function LoginLayout() {
  return (
    <div className="login-wrapper flex flex-col lg:flex-row min-h-screen">
      <PromotionSection />
      <LoginContent />
      <CookieBanner />
    </div>
  );
}
