import { Button, Chip } from "@nextui-org/react";
import { lazy } from 'react';
import { motion } from "framer-motion";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import HeroSectionSVG from "./components/HeroSectionSVG";
const ProfilePicture =lazy(()=> import("./components/ProfilePicture"));

function App() {
  return (
    <>
      <div className="min-h-screen bg-foreground flex flex-col items-center justify-between">
        <div className="bg-white shadow-sm w-full">
          <div className="w-full py-2">
            <div className="container flex items-center px-4 md:px-6">
              <Link to={"/"} className="inline-flex font-bold mr-auto" href="#">
                ProPik
              </Link>
            </div>
          </div>
        </div>
        <Routes>
          <Route
          exact 
          path="/"
            element={
              <section className="w-full py-12 ">
                <div className="container flex flex-col items-center justify-center px-4 space-y-4 md:px-6 md:flex-row md:space-y-0 lg:space-x-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="flex flex-col justify-center space-y-2">
                      <motion.h1
                        className="text-3xl font-bold tracking-tighter sm:text-5xl"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        <span>Propik </span>: Amplify Your Brand Presence on
                        Twitter
                      </motion.h1>
                      <motion.p
                        className="max-[500px] text-gray-500 md:text-xl dark:text-gray-400"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.25 }}
                      >
                        Welcome to Propik, the ultimate tool for members of
                        Dominate Twitter! With Propik, effortlessly enhance your
                        Twitter game by adding the official Dominate Twitter
                        logo to your images.
                      </motion.p>
                    </div>
                    <div className="flex flex-col items-start space-y-2">
                      <div className="w-full rounded-lg border-dashed border-2 border-gray-200 bg-white p-4 text-sm shadow-sm dark:border-gray-800 dark:bg-gray-950 dark:placeholder-gray-300">
                        <HeroSectionSVG />
                      </div>
                      <p className="text-xs text-gray-500"></p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 0.5 }}
                      >
                        <Link to={"/upload"}>
                          <Button color="primary">Get Started</Button>
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </section>
            }
          />
          <Route exact path="/upload" element={<ProfilePicture />} />
          <Route path="/test" element={<h1>Hello World</h1>} />
        </Routes>
        <div className=" mb-4 flex flex-col items-center">
          <p>
            Made By{" "}
            <a
              target="__blank"
              href={"https://twitter.com/Lakshya_roonwal"}
              className="text-blue-500 hover:text-blue-700"
            >
            <Chip className="mx-2" color="primary">
              @Lakshya_roonwal{" "}
            </Chip>
            </a>
            For{" "}
            <a
              target="__blank"
              href={"https://twitter.com/dominateXclub"}
              className="text-blue-500 hover:text-blue-700"
            >
             <Chip className="mx-2" color="primary">

              @dominateXclub
             </Chip>
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
