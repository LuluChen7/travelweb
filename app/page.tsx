'use client';

import LanguageSwitcher from '../components/LanguageSwitcher';
import { useLanguage } from '../providers/LanguageProvider';

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-900">
      {/* 顶部导航 */}
      <header className="max-w-5xl mx-auto px-6 py-4 md:py-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-sky-500" />
          <span className="font-semibold tracking-tight text-lg">
            Travel Web
          </span>
        </div>

        <div className="flex items-center gap-6">
          {/* 顶部文字导航：锚点跳转到页面下方 section */}
          <nav className="hidden md:flex gap-4 text-sm text-gray-700">
            <a href="#routes" className="hover:text-gray-900">
              {t('nav.routes')}
            </a>
            <a href="#about" className="hover:text-gray-900">
              {t('nav.about')}
            </a>
            <a href="#contact" className="hover:text-gray-900">
              {t('nav.contact')}
            </a>
          </nav>

          <LanguageSwitcher />
        </div>
      </header>

      {/* Hero + 简介 */}
      <section className="max-w-5xl mx-auto px-6 pb-16 md:pb-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center mt-10 md:mt-16">
          {/* 左侧文字 */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              {t('hero.subtitle')}
            </p>

            <a
              href="#routes"
              className="inline-block px-6 py-3 rounded-2xl bg-black text-white text-base shadow-sm hover:bg-gray-900 transition"
            >
              {t('cta.start')}
            </a>

            <p className="mt-6 text-sm text-gray-500 max-w-md">
              {t('sections.introBody')}
            </p>
          </div>

          {/* 右侧“示意卡片” */}
          <div className="bg-white/80 backdrop-blur-sm shadow-sm rounded-2xl p-5 border border-gray-100">
            <div className="text-xs font-medium text-sky-600 mb-2">
              {t('sections.introTitle')}
            </div>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>China ⇄ Brazil</span>
                <span className="text-gray-500">10–18 days</span>
              </div>
              <div className="flex justify-between">
                <span>City &amp; culture</span>
                <span className="text-gray-500">3–5 stops</span>
              </div>
              <div className="flex justify-between">
                <span>Budget range</span>
                <span className="text-gray-500">mid / flexible</span>
              </div>
            </div>
            <div className="mt-4 h-24 rounded-xl bg-gradient-to-r from-sky-200 via-emerald-200 to-amber-200" />
          </div>
        </div>
      </section>

      {/* 为什么用这个网站 */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {t('sections.whyTitle')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-sm rounded-xl p-5 border border-gray-100">
            <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-sky-600">
              01
            </h3>
            <p className="text-sm text-gray-700">
              {t('sections.why1')}
            </p>
          </div>
          <div className="bg-white shadow-sm rounded-xl p-5 border border-gray-100">
            <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-sky-600">
              02
            </h3>
            <p className="text-sm text-gray-700">
              {t('sections.why2')}
            </p>
          </div>
          <div className="bg-white shadow-sm rounded-xl p-5 border border-gray-100">
            <h3 className="font-semibold mb-2 text-sm uppercase tracking-wide text-sky-600">
              03
            </h3>
            <p className="text-sm text-gray-700">
              {t('sections.why3')}
            </p>
          </div>
        </div>
      </section>

      {/* Routes 区：示例路线卡片 */}
      <section id="routes" className="max-w-5xl mx-auto px-6 pb-20 scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {t('sections.destinationsTitle')}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <article className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100 flex flex-col">
            <div className="h-28 bg-gradient-to-tr from-sky-300 to-emerald-200" />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-semibold text-sm mb-2">
                China ⇄ Brazil highlights
              </h3>
              <p className="text-xs text-gray-600 mb-3">
                {t('sections.destinationsBrazilChina')}
              </p>
              <span className="text-xs text-gray-400 mt-auto">
                10–14 days · mixed pace
              </span>
            </div>
          </article>

          <article className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100 flex flex-col">
            <div className="h-28 bg-gradient-to-tr from-amber-200 to-rose-200" />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-semibold text-sm mb-2">
                City &amp; food trips
              </h3>
              <p className="text-xs text-gray-600 mb-3">
                {t('sections.destinationsCityBreaks')}
              </p>
              <span className="text-xs text-gray-400 mt-auto">
                4–7 days · city focus
              </span>
            </div>
          </article>

          <article className="bg-white shadow-sm rounded-xl overflow-hidden border border-gray-100 flex flex-col">
            <div className="h-28 bg-gradient-to-tr from-emerald-200 to-sky-200" />
            <div className="p-4 flex-1 flex flex-col">
              <h3 className="font-semibold text-sm mb-2">
                Nature &amp; slow routes
              </h3>
              <p className="text-xs text-gray-600 mb-3">
                {t('sections.destinationsNature')}
              </p>
              <span className="text-xs text-gray-400 mt-auto">
                7–12 days · slower pace
              </span>
            </div>
          </article>
        </div>
      </section>

      {/* About 区 */}
      <section id="about" className="max-w-5xl mx-auto px-6 pb-20 border-t border-gray-100 pt-12 scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {t('sections.aboutTitle')}
        </h2>
        <p className="text-sm md:text-base text-gray-700 mb-3">
          {t('sections.aboutBody1')}
        </p>
        <p className="text-sm md:text-base text-gray-700">
          {t('sections.aboutBody2')}
        </p>
      </section>

      {/* Contact 区 */}
      <section id="contact" className="max-w-5xl mx-auto px-6 pb-16 border-t border-gray-100 pt-12 scroll-mt-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          {t('sections.contactTitle')}
        </h2>
        <p className="text-sm md:text-base text-gray-700 mb-6">
          {t('sections.contactIntro')}
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white shadow-sm rounded-xl p-5 border border-gray-100">
            <h3 className="text-sm font-semibold mb-2">
              {t('sections.contactEmailLabel')}
            </h3>
            {/* 把这里的邮箱换成你自己的 */}
            <a
              href="mailto:youremail@example.com"
              className="text-sm text-sky-700 hover:underline break-all"
            >
              youremail@example.com
            </a>
          </div>

          <div className="bg-white shadow-sm rounded-xl p-5 border border-gray-100">
            <h3 className="text-sm font-semibold mb-2">
              {t('sections.contactSocialLabel')}
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              {/* 这里可以放 Instagram、微信、WhatsApp 等 */}
              <li>Instagram: @youraccount</li>
              <li>WeChat: your-wechat-id</li>
              <li>WhatsApp: +55 xx xxxx-xxxx</li>
            </ul>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-10 pb-4">
          © {new Date().getFullYear()} Travel Web. All rights reserved.
        </p>
      </section>
    </main>
  );
}
