// External exports
import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

// Internal imports
import LogoBox from "@/components/LogoBox";
import SubscriptionDialog from "@/components/SubscriptionDialog";

// Data imports
import logos from "@/lib/data/logos";

export default function Home() {
  const [subscriptionDialog, setSubscriptionDialog] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSubscriptionDialog(true);
    }, 15000);

    return () => clearTimeout(timer);
  }, []);

  const downloadFile = (fileUrl, index) => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", `logo-#${index}.svg`);

    // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
  };

  const openSubscriptionDialog = () => {
    setSubscriptionDialog(true);
  };

  const closeSubscriptionDialog = () => {
    setSubscriptionDialog(false);
  };

  return (
    <>
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
      <SubscriptionDialog
        isOpen={subscriptionDialog}
        closeDialog={closeSubscriptionDialog}
      />
      <main className="w-full h-auto px-5 pb-20 lg:px-0">
        <nav className="w-full h-auto">
          <div className="flex items-center justify-between w-full h-auto max-w-6xl py-12 mx-auto">
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
        </nav>

        <header className="w-full h-auto mt-16 lg:mt-36">
          <div className="flex flex-col items-center w-full max-w-6xl mx-auto text-center lg:text-left">
            <h1 className="text-5xl font-normal tracking-normal text-black lg:text-6xl font-garamond">
              Free <span className="italic font-semibold">logos</span> for your
              next project
            </h1>
            <p className="w-10/12 text-lg lg:w-full lg:text-center font-noraml mt-7 font-inter text-neutral-800">
              LogoSuite is a collection of free to use logos designed by Simple
              Suite.
            </p>
            <div className="flex items-center space-x-5 mt-7">
              <button
                onClick={() => openSubscriptionDialog()}
                className="flex items-center h-8 px-5 text-base font-normal text-white bg-black rounded-full font-inter hover:opacity-80"
              >
                Subscribe
              </button>
              <Link
                href="/license"
                className="flex items-center space-x-2 group"
              >
                <span className="text-base font-normal text-black font-inter">
                  Fair use license
                </span>
                <ArrowUpRightIcon className="w-3 h-3 text-black transition duration-100 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </header>

        <section className="flex flex-col w-full mt-20 lg:mt-44">
          <div className="w-full max-w-6xl mx-auto">
            <div className="flex w-full space-x-2">
              <span className="text-base font-normal text-black font-inter">
                Logos
              </span>
              <span className="text-base font-bold text-black font-inter">
                75
              </span>
            </div>

            <div className="grid w-full grid-cols-1 gap-px mt-6 border lg:grid-cols-3 bg-neutral-200 border-neutral-200">
              {logos.map((logo) => (
                <LogoBox
                  imageUrl={logo.url}
                  downloadFile={downloadFile}
                  index={logo.index}
                />
              ))}
            </div>
          </div>
        </section>

        <footer className="w-full h-auto mt-32 lg:mt-52">
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
    </>
  );
}
