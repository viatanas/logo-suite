// External exports
import Head from "next/head";
import Link from "next/link";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";

// Internal imports
import LogoBox from "@/components/LogoBox";

// Data imports
import logos from "@/lib/data/logos";

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

export default function Home() {
  return (
    <>
      <Head>
        <title>Logo Suite</title>
        <meta name="description" content="Free Logos for Your Next Project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full h-auto px-5 pb-40 lg:px-0">
        <nav className="w-full h-auto">
          <div className="flex items-center justify-between w-full h-auto py-12 mx-auto max-w-7xl">
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
            <h1 className="text-5xl font-normal text-black lg:text-6xl font-garamond">
              Free <span className="italic font-semibold">logos</span> for your
              next project
            </h1>
            <p className="w-10/12 text-lg lg:w-full lg:text-center font-noraml mt-7 font-inter text-neutral-800">
              Subscribe to receive new logos in your inbox every week.
            </p>
            <div className="flex items-center space-x-5 mt-7">
              <button className="flex items-center h-8 px-5 text-base font-normal text-white bg-black rounded-full font-inter hover:opacity-80">
                Subscribe
              </button>
              <a className="flex items-center space-x-2 group">
                <span className="text-base font-normal text-black font-inter">
                  Fair use license
                </span>
                <ArrowUpRightIcon className="w-3 h-3 text-black transition duration-100 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
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
                100
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
              <a className="flex items-center space-x-2 group">
                <span className="text-base font-normal text-black font-inter">
                  Contact us
                </span>
                <ArrowUpRightIcon className="w-3 h-3 text-black transition duration-100 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <a className="flex items-center space-x-2 group">
                <span className="text-base font-normal text-black font-inter">
                  Fair use license
                </span>
                <ArrowUpRightIcon className="w-3 h-3 text-black transition duration-100 transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </a>
              <button className="flex items-center h-8 px-5 text-base font-normal text-white bg-black rounded-full w-max font-inter hover:opacity-80">
                Subscribe
              </button>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
