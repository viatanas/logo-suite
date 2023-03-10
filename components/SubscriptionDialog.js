// Library Imports
import { Dialog } from "@headlessui/react";
import { AnimatePresence, motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

const SubscriptionDialog = ({ isOpen, closeDialog }) => {
  return (
    <AnimatePresence>
      <Dialog
        open={isOpen}
        onClose={() => closeDialog()}
        className="fixed inset-0 z-40 overflow-y-auto filter backdrop-blur"
      >
        <div className="flex items-center justify-center h-full mx-2">
          <Dialog.Overlay className="fixed inset-0 z-50 bg-gray-900 opacity-20 " />
          <motion.div
            initial={{ y: -30 }}
            animate={{ y: 0 }}
            className="relative z-50 flex flex-col w-full max-w-md bg-white pt-14 drop-shadow-xl rounded-xl filter"
          >
            <button
              onClick={() => closeDialog()}
              className="absolute p-2 bg-white rounded-full top-2 right-2 hover:bg-neutral-100"
            >
              <XMarkIcon className="w-4 h-4 text-neutral-900" />
            </button>
            <div className="w-full overflow-hidden">
              <img
                src="/img/dialog-image.png"
                className="h-[140px] -ml-32  max-w-none"
              />
            </div>
            <div className="flex flex-col items-center w-full p-10">
              <img src="/img/logos/shapes-logo.svg" className="h-11" />
              <h1 className="w-10/12 mt-6 text-3xl font-light tracking-tight text-center font-garamond text-neutral-900">
                Receive new <span className="italic font-bold">logos</span> in
                your inbox every month.
              </h1>
              <p className="mt-6 text-base font-normal leading-6 text-center font-inter text-neutral-600">
                Subscribe to never miss out on the 25 new logos we add to the
                collection every month.
              </p>
              <div className="flex w-full space-x-2 mt-7">
                <input
                  placeholder="Enter your email"
                  className="w-full h-8 px-4 text-sm font-normal border rounded-full outline-none bg-neutral-50 border-neutral-200 font-inter text-neutral-900 focus:border-neutral-900"
                />
                <button className="flex items-center h-8 px-5 text-sm font-normal text-white rounded-full bg-neutral-900 font-inter hover:opacity-80">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </Dialog>
    </AnimatePresence>
  );
};

export default SubscriptionDialog;
