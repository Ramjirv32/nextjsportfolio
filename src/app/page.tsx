'use client';'use client';'use client';import Image from "next/image";



import { Suspense } from 'react';

import dynamic from 'next/dynamic';

import Navbar from '@/components/Navbar';import { Suspense } from 'react';

import Hero from '@/components/Hero';

import Loading from '@/components/Loading';import dynamic from 'next/dynamic';

import { useScrollSections } from '@/hooks/useScrollSections';

import Navbar from '@/components/Navbar';import { Suspense } from 'react';export default function Home() {

// Lazy load non-critical components

const About = dynamic(() => import('@/components/About'), {import Hero from '@/components/Hero';

  loading: () => <Loading />,

});import Loading from '@/components/Loading';import dynamic from 'next/dynamic';  return (

const Skills = dynamic(() => import('@/components/skills'), {

  loading: () => <Loading />,import { useScrollSections } from '@/hooks/useScrollSections';

});

const Projects = dynamic(() => import('@/components/Project'), {import Navbar from '@/components/Navbar';    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">

  loading: () => <Loading />,

});// Lazy load non-critical components

const Work = dynamic(() => import('@/components/Works'), {

  loading: () => <Loading />,const About = dynamic(() => import('@/components/About'), {import Hero from '@/components/Hero';      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">

});

const Certificate = dynamic(() => import('@/components/certificate'), {  loading: () => <Loading />,

  loading: () => <Loading />,

});});import Loading from '@/components/Loading';        <Image

const Contact = dynamic(() => import('@/components/Contact'), {

  loading: () => <Loading />,const Skills = dynamic(() => import('@/components/skills'), {

});

const ResearchPublications = dynamic(() => import('@/components/Research'), {  loading: () => <Loading />,import { useScrollSections } from '@/hooks/useScrollSections';          className="dark:invert"

  loading: () => <Loading />,

});});



export default function Home() {const Projects = dynamic(() => import('@/components/Project'), {          src="/next.svg"

  const { currentSection, setCurrentSection, isScrollingProgrammatically } = useScrollSections();

  loading: () => <Loading />,

  return (

    <>});// Lazy load non-critical components          alt="Next.js logo"

      <Navbar

        activeSection={currentSection}const Work = dynamic(() => import('@/components/Works'), {

        setActiveSection={setCurrentSection}

        isScrollingProgrammatically={isScrollingProgrammatically}  loading: () => <Loading />,const About = dynamic(() => import('@/components/About'), {          width={100}

      />

      <div id="home"><Hero /></div>});

      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loading /></div>}>

        <div id="about"><About /></div>const Certificate = dynamic(() => import('@/components/certificate'), {  loading: () => <Loading />,          height={20}

        <div id="skills"><Skills /></div>

        <div id="projects"><Projects /></div>  loading: () => <Loading />,

        <div id="works"><Work /></div>

        <div id="research"><ResearchPublications /></div>});});          priority

        <div id="certificate"><Certificate /></div>

        <div id="contact" className="contact-mobile-margin"><Contact /></div>const Contact = dynamic(() => import('@/components/Contact'), {

      </Suspense>

    </>  loading: () => <Loading />,const Skills = dynamic(() => import('@/components/skills'), {        />

  );

}});


const ResearchPublications = dynamic(() => import('@/components/Research'), {  loading: () => <Loading />,        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">

  loading: () => <Loading />,

});});          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">



export default function Home() {const Projects = dynamic(() => import('@/components/Project'), {            To get started, edit the page.tsx file.

  const { currentSection, setCurrentSection, isScrollingProgrammatically } = useScrollSections();

  loading: () => <Loading />,          </h1>

  return (

    <>});          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">

      <Navbar

        activeSection={currentSection}const Work = dynamic(() => import('@/components/Works'), {            Looking for a starting point or more instructions? Head over to{" "}

        setCurrentSection={setCurrentSection}

        isScrollingProgrammatically={isScrollingProgrammatically}  loading: () => <Loading />,            <a

      />

      <div id="home"><Hero /></div>});              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loading /></div>}>

        <div id="about"><About /></div>const Certificate = dynamic(() => import('@/components/certificate'), {              className="font-medium text-zinc-950 dark:text-zinc-50"

        <div id="skills"><Skills /></div>

        <div id="projects"><Projects /></div>  loading: () => <Loading />,            >

        <div id="works"><Work /></div>

        <div id="research"><ResearchPublications /></div>});              Templates

        <div id="certificate"><Certificate /></div>

        <div id="contact" className="contact-mobile-margin"><Contact /></div>const Contact = dynamic(() => import('@/components/Contact'), {            </a>{" "}

      </Suspense>

    </>  loading: () => <Loading />,            or the{" "}

  );

}});            <a


const ResearchPublications = dynamic(() => import('@/components/Research'), {              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

  loading: () => <Loading />,              className="font-medium text-zinc-950 dark:text-zinc-50"

});            >

              Learning

export default function Home() {            </a>{" "}

  const { currentSection, setCurrentSection, isScrollingProgrammatically } = useScrollSections();            center.

          </p>

  return (        </div>

    <>        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">

      <Navbar          <a

        activeSection={currentSection}            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"

        setActiveSection={setCurrentSection}            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

        isScrollingProgrammatically={isScrollingProgrammatically}            target="_blank"

      />            rel="noopener noreferrer"

      <div id="home"><Hero /></div>          >

      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loading /></div>}>            <Image

        <div id="about"><About /></div>              className="dark:invert"

        <div id="skills"><Skills /></div>              src="/vercel.svg"

        <div id="projects"><Projects /></div>              alt="Vercel logomark"

        <div id="works"><Work /></div>              width={16}

        <div id="research"><ResearchPublications /></div>              height={16}

        <div id="certificate"><Certificate /></div>            />

        <div id="contact" className="contact-mobile-margin"><Contact /></div>            Deploy Now

      </Suspense>          </a>

    </>          <a

  );            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"

}            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"

            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main>
    </div>
  );
}
