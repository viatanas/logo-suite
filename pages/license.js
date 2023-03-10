import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import SubscriptionDialog from "@/components/SubscriptionDialog";

const License = () => {
  const [subscriptionDialog, setSubscriptionDialog] = useState(false);

  const openSubscriptionDialog = () => {
    setSubscriptionDialog(true);
  };

  const closeSubscriptionDialog = () => {
    setSubscriptionDialog(false);
  };

  return (
    <div>
      <Head>
        {/* HTML Meta Tags */}
        <title>Logo Suite - Free to use logos for your next project</title>
        <meta
          name="description"
          content="LogoSuite is a collection of 75+ free-to-use logos, each professionally designed by Simple Suite, with 25 new logos added to the collection every month."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* Facebook Meta Tags */}
        <meta name="og:url" content="https://logosuite.co/" />
        <meta name="og:type" content="website" />
        <meta
          name="og:title"
          content="Logo Suite - Free to use logos for your next project"
        />
        <meta
          name="og:description"
          content="LogoSuite is a collection of 75+ free-to-use logos, each professionally designed by Simple Suite, with 25 new logos added to the collection every month."
        />
        <meta name="og:image" content="/og.png" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:domain" content="logosuite.co" />
        <meta name="twitter:url" content="https://logosuite.co" />
        <meta
          name="twitter:title"
          content="Logo Suite - Free to use logos for your next project"
        />
        <meta
          name="twitter:description"
          content="LogoSuite is a collection of 75+ free-to-use logos, each professionally designed by Simple Suite, with 25 new logos added to the collection every month."
        />
        <meta name="twitter:image:src" content="/og.png" />
      </Head>
      <main className="px-8 pb-8 lg:px-0 lg:pb-0">
        <nav className="w-full h-auto">
          <div className="flex items-center justify-between w-full h-auto max-w-6xl py-6 mx-auto">
            <Link href="/">
              <img src="/img/logos/shapes-logo.svg" />
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-xs font-normal lowercase font-inter text-neutral-500">
                a side project by
              </span>
              <a
                target="_blank"
                href="https://simplesuite.co"
                className="hover:opacity-80"
              >
                <img src="/img/logos/simple-suite-logo.svg" />
              </a>
            </div>
          </div>
        </nav>
        <SubscriptionDialog
          isOpen={subscriptionDialog}
          closeDialog={closeSubscriptionDialog}
        />
        <article className="w-full h-auto">
          <div className="flex flex-col w-full max-w-lg py-20 mx-auto">
            <h1 className="text-5xl font-normal font-garamond text-neutral-900">
              Fair Use License
            </h1>
            <p className="mt-6 text-base font-normal leading-7 font-inter text-neutral-900">
              Here's what our Simple Suite Fair Use License allows for, for each
              Item available for download on logosuite.co.
            </p>
            <ul className="flex flex-col pl-6 mt-2 space-y-4 text-base font-normal leading-7 list-disc font-inter text-neutral-900">
              <li>
                The Simple Suite Fair Use License grants the user an ongoing,
                non-exclusive, worldwide license to utilise the digital work
                (“Item”).
              </li>
              <li>
                You are licensed to use the Item to create unlimited End
                Projects for yourself or for your clients and the End Projects
                may be Sold, licensed, sub-licensed or freely distributed.
              </li>
            </ul>
            <h3 className="mt-8 text-base font-bold font-inter text-neutral-900">
              You can:
            </h3>
            <ul className="flex flex-col pl-6 mt-2 space-y-4 text-base font-normal leading-7 list-disc font-inter text-neutral-900">
              <li>
                The Simple Suite Fair Use License grants the user an ongoing,
                non-exclusive, worldwide license to utilise the digital work
                (“Item”).
              </li>
              <li>
                You are licensed to use the Item to create unlimited End
                Projects for yourself or for your clients and the End Projects
                may be Sold, licensed, sub-licensed or freely distributed.
              </li>
            </ul>

            <h3 className="mt-8 text-base font-bold font-inter text-neutral-900">
              You cannot:
            </h3>
            <ul className="flex flex-col pl-6 mt-2 space-y-4 text-base font-normal leading-7 list-disc font-inter text-neutral-900">
              <li>
                Re-distribute the Item as a stock image or it’s source files,
                regardless of any modifications, under any circumstances. In
                other words, you cannot replicate or make modifications to the
                item and sell it as your own, even if the source files are not
                included.
              </li>
              <li>
                Resell or otherwise distribute downloaded assets online, or via
                private channels and bots under any circumstances.
              </li>
              <li>File the Item for copyright, or register a trade mark. </li>
              <li>
                Note: Violation of these terms will be pursued to the fullest
                extent of the law.
              </li>
            </ul>
            <h3 className="mt-8 text-base font-bold font-inter text-neutral-900">
              Sample End Products:
            </h3>
            <ul className="flex flex-col pl-6 mt-2 space-y-4 text-base font-normal leading-7 list-disc font-inter text-neutral-900">
              <li>
                End Products include but are not limited to: Commercial or
                personal websites, mobile apps, web apps, games, illustrations,
                wireframes, presentations and videos.
              </li>
            </ul>
          </div>
        </article>

        <footer className="w-full h-auto mt-32 lg:mt-20 lg:mb-10">
          <div className="flex flex-col w-full max-w-6xl pt-10 mx-auto border-t lg:justify-between lg:items-center lg:flex-row border-neutral-200">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <img src="/img/logos/shapes-logo.svg" />
              </Link>
              <div className="flex items-center space-x-2">
                <span className="text-sm font-normal font-inter text-neutral-900">
                  by
                </span>
                <a
                  target="_blank"
                  href="https://simplesuite.co"
                  className="hover:opacity-80"
                >
                  <img src="/img/logos/simple-suite-logo.svg" />
                </a>
              </div>
            </div>

            <div className="flex flex-col mt-6 space-y-6 lg:mt-0 lg:space-y-0 lg:space-x-10 lg:items-center lg:flex-row">
              <a
                href="mailto:hello@simplesuite.co"
                className="flex items-center space-x-2 group"
              >
                <span className="text-base font-normal text-black font-inter">
                  Contact us
                </span>
                <ArrowUpRightIcon className="w-3 h-3 text-black transition duration-100 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <Link
                href="/license"
                className="flex items-center space-x-2 group"
              >
                <span className="text-base font-normal text-black font-inter">
                  Fair use license
                </span>
                <ArrowUpRightIcon className="w-3 h-3 text-black transition duration-100 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
              <button
                onClick={() => openSubscriptionDialog()}
                className="flex items-center h-8 px-5 text-base font-normal text-white bg-black rounded-full w-max font-inter hover:opacity-80"
              >
                Subscribe
              </button>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default License;
