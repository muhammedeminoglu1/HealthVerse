"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import QuickLinks from './quick-links';
import LanguageSelector from './language-selector';
import Image from 'next/image';

export default function LoginContent() {
  return (
    <div className="content w-full lg:w-3/5 flex flex-col">
      <div className="top p-4 flex justify-between items-center">
        <div>
          <a href="#" className="block text-primary lg:hidden">Tanıtım</a>
        </div>
        <div>
          <div className="flex items-center gap-5">
            <QuickLinks />
            <LanguageSelector />
          </div>
        </div>
      </div>

      <div className="bottom flex-1 flex flex-col items-center justify-center p-8">
        <div className="logo-wrapper mb-10">
          <div className="logo">
            <Image
              src="https://ext.sahttps://lh3.googleusercontent.com/fife/ALs6j_GdUT28h27npra15WUMkHqmc-PhmT3gwltF7mG_yFEihP6S-lDD2im0vW1xIocStiOVKVTPaKVuf5qwOwVAnjNOry-JjyKXBvgAptfBJq0e6Jg43u2CZsqLOgXDVGO9ehN4xrqg_lbtaQqMr53UQlLGXfnArUPWsJpQc8gJ_IIli-lI0a2K4Tjqvip4aeXNcuHF5rw7v44ZttjJgXCOUyRp2JncvELYy55e3UYc2wjG42Y7PTtaW3EmtgpSYLEMpNxCuN89PT_IJUF8dz1GHvqJ4tcsTqN8Q0lm6C-pTGbt26-tuAFGJFmpZXpMNta2i32awRoQ_04KKQ-b6osUGANmOLSpbdLIXvaTTMLQ_Zs2nCu0apDghVawiGALZbhJG-Do0w7SJBzCwBrmthkBfj5nKUtz2xBYkJFlG16EPhwv2qq3aw0x3nXQSJ7UDr_1la7gdUAUAQUCtkvtimkJ1nM5f1Iu4CG30lQulM297FOggMMLtlSgAtYqsxQb9sEXZYgYADyGgUW43dO-i7nZa7ZsLoODLmZdJFicXGheSikpFDrCVwIoKz0KMrvJjl1NmGGflqKzFzZ4X8jWmbfNkv_VgyQUUXDGJnV-4O1ysTNy0WcagrzhFFA5tugZf1vOPPs6SJ5eBMq7Pvsxp62hpMw6tRZblAHFj_bfGDWb3STOhM32k__ceHgrs7ls69aSXuDmVUBs6iCnAQKxwg5_0uAuqkzfFuOVPi4sZ35Wif2ohhL08IL2nL8BhKifFQp1WP9MJzalYuB4BY929ZK_89oJAOB9m98r08Dj2RCkbB2Qllvp-CzdgiNWXL1yZMnRuiuFRxaKUOaSuxLkERN55aybLbOiz5hvQC-_fEUz_UWZAq_XmMT6C3VRiaMLN7hZra9RWPbdJvAwiIGM6WhLHSBUqQ3G9fWV-dxZa1DcfQmuacFKYIRTmuxkQ5FdT96uxiIJANYu8Br321LUjpg01ZjJJwt9rI1Ixk0-Y1zjCbN1_AdvNlvYQPhi5VAgblQNSpxzlmSEbAbovQan2OBfLQtkiFi1wetSLIBVFizv1-5A-u_dKEwejYoZHN4SW41yn81KzNAAB5RVV4kYqdLVwHmyOdp3M1CJPtDSPQhNY1nterKeNww-7pfBxJRh3nOkIIls9Yjy4GqFNr2y7vZqCyZTJLx0UhJ4_oVk-oUJvESpjw_Ioz7zsvAtvtBgK55AxHcJVSw7kdUnOOb6x1uBXZIo6TGydY1Epd6dESD0F0BQt2tFukIczmKIERu4DY9OySjbxjCW5O_oDUF0E_Lo_TCEIQcH8I55xLZ3cEhMhqTIsbJ6gkEJIcR-L4giElwTXoi6Pm1bcwo_OYN-mpLScgfZoS9vCoG6GEy6SlBwluzH47op=s1024
                me-assets.com/3789494674/1857330433.svg"
              alt="HealthVerse"
              width={180}
              height={64}
              className="h-16"
            />
          </div>
        </div>

        <div className="flex flex-col items-center text-center mb-8">
          <div className="text-xl font-bold mb-2">HealthVerse uygulaması ne işe yarar?</div>
          <p className="w-full lg:w-4/6">
            Girdiğiniz şikayetlerinizi değerlendirerek sizin doğru branşa yönlendirilmenizi sağlar.
          </p>
        </div>

        <div className="login-buttons flex flex-col sm:flex-row gap-6 mb-8">
          <div className="e-nabiz">
            <a href="#">
              <Image
                src="https://ext.sahttps://lh3.googleusercontent.com/fife/ALs6j_GdUT28h27npra15WUMkHqmc-PhmT3gwltF7mG_yFEihP6S-lDD2im0vW1xIocStiOVKVTPaKVuf5qwOwVAnjNOry-JjyKXBvgAptfBJq0e6Jg43u2CZsqLOgXDVGO9ehN4xrqg_lbtaQqMr53UQlLGXfnArUPWsJpQc8gJ_IIli-lI0a2K4Tjqvip4aeXNcuHF5rw7v44ZttjJgXCOUyRp2JncvELYy55e3UYc2wjG42Y7PTtaW3EmtgpSYLEMpNxCuN89PT_IJUF8dz1GHvqJ4tcsTqN8Q0lm6C-pTGbt26-tuAFGJFmpZXpMNta2i32awRoQ_04KKQ-b6osUGANmOLSpbdLIXvaTTMLQ_Zs2nCu0apDghVawiGALZbhJG-Do0w7SJBzCwBrmthkBfj5nKUtz2xBYkJFlG16EPhwv2qq3aw0x3nXQSJ7UDr_1la7gdUAUAQUCtkvtimkJ1nM5f1Iu4CG30lQulM297FOggMMLtlSgAtYqsxQb9sEXZYgYADyGgUW43dO-i7nZa7ZsLoODLmZdJFicXGheSikpFDrCVwIoKz0KMrvJjl1NmGGflqKzFzZ4X8jWmbfNkv_VgyQUUXDGJnV-4O1ysTNy0WcagrzhFFA5tugZf1vOPPs6SJ5eBMq7Pvsxp62hpMw6tRZblAHFj_bfGDWb3STOhM32k__ceHgrs7ls69aSXuDmVUBs6iCnAQKxwg5_0uAuqkzfFuOVPi4sZ35Wif2ohhL08IL2nL8BhKifFQp1WP9MJzalYuB4BY929ZK_89oJAOB9m98r08Dj2RCkbB2Qllvp-CzdgiNWXL1yZMnRuiuFRxaKUOaSuxLkERN55aybLbOiz5hvQC-_fEUz_UWZAq_XmMT6C3VRiaMLN7hZra9RWPbdJvAwiIGM6WhLHSBUqQ3G9fWV-dxZa1DcfQmuacFKYIRTmuxkQ5FdT96uxiIJANYu8Br321LUjpg01ZjJJwt9rI1Ixk0-Y1zjCbN1_AdvNlvYQPhi5VAgblQNSpxzlmSEbAbovQan2OBfLQtkiFi1wetSLIBVFizv1-5A-u_dKEwejYoZHN4SW41yn81KzNAAB5RVV4kYqdLVwHmyOdp3M1CJPtDSPQhNY1nterKeNww-7pfBxJRh3nOkIIls9Yjy4GqFNr2y7vZqCyZTJLx0UhJ4_oVk-oUJvESpjw_Ioz7zsvAtvtBgK55AxHcJVSw7kdUnOOb6x1uBXZIo6TGydY1Epd6dESD0F0BQt2tFukIczmKIERu4DY9OySjbxjCW5O_oDUF0E_Lo_TCEIQcH8I55xLZ3cEhMhqTIsbJ6gkEJIcR-L4giElwTXoi6Pm1bcwo_OYN-mpLScgfZoS9vCoG6GEy6SlBwluzH47op=s1024
                me-assets.com/3789494674/1857330433.svg"
                alt="e-Nabız"
                width={240}
                height={64}
                className="h-16 w-60 hover:opacity-90 transition-opacity"
              />
            </a>
          </div>
          <div className="e-devlet">
            <a href="#">
              <Image
                src="https://ext.same-assets.com/3789494674/3906270216.svg"
                alt="e-Devlet"
                width={240}
                height={64}
                className="h-16 w-60 hover:opacity-90 transition-opacity"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center text-center mb-8">
          <h2 className="font-bold mb-2">NeyimVar Sistemine Nasıl Giriş Yaparım?</h2>
          <p className="w-full text-sm lg:w-4/6">
            Sisteme girişte kimlik doğrulama google üxerinden yapılmaktdır.
          </p>
        </div>

        <div className="flex justify-center my-6">
          <ul className="flex gap-4">
            {/* Social Media Links would go here */}
          </ul>
        </div>

        <div className="text-primary text-center text-xs mb-8">
          NeyimVar T.C. Sağlık Bakanlığı uygulamasıdır.
        </div>

        <div className="mt-8">
          <div className="flex justify-center mb-2">
            <Image
              src="https://ext.same-assets.com/3789494674/2229089733.svg"
              alt="T.C. Sağlık Bakanlığı"
              width={180}
              height={64}
              className="h-16"
            />
          </div>
          <p className="text-xs text-center">Copyright © T.C. Sağlık Bakanlığı</p>
        </div>
      </div>
    </div>
  );
}
