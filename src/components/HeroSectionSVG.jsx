import { useAnimate, useInView, motion } from "framer-motion";
import { useEffect, useState } from "react";

const HeroSectionSVG = () => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);
  const [isCursorLoaded, setIsCursorLoaded] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [editImageUI, setEditImageUI] = useState(false)
  const [profilePicture,setProfilePicture]=useState("uploadNull.png")
  const [overlayImage, setOverlayImage] = useState("dtlogo1.png")

  useEffect(() => {
    if (isSubscribed) {
      const buttonTextAnimation = async () => {
        await animate(
          "#subscribe",
          {
            opacity: 0,
            y: 20,
          },
          {
            duration: 0.5,
            ease: "easeOut",
          }
        );

        await animate(
          "#subscribed",
          {
            opacity: 1,
            y: -20,
            display: "inline",
          },
          {
            duration: 0.5,
          }
        );
      };

      buttonTextAnimation();
    }
  }, [isSubscribed]);

  useEffect(() => {
    if (isInView && isCursorLoaded) {
      const cursorAnimation = async () => {
        await animate(
          "#cursor",
          {
            opacity: [1, 0],
            x: [0, -150],
            y: [0, 150],
          },
          {
            duration: 1,
          }
        );
        await animate(
          "#cursor",
          {
            opacity: [0, 1],
            x: [-150, -10],
            y: [150, 30],
            scale: 0.9,
          },
          {
            duration: 1,
          }
        );
        await animate(
          "#cursor",
          {
            scale: 1,
          },
          {
            duration: 0.2,
          }
        );

        // Click Animation
        // await animate(
        //   "#cursor",
        //   {
        //     scale: 0.9,
        //   },
        //   {
        //     delay: 0.05,
        //     repeatType: "reverse",
        //     repeat: 1,
        //     onComplete() {
        //       setIsSubscribed(true);
        //     },
        //   }
        // );

        await animate(
          "#cursor",
          {
            x: [-10, 40],
            y: [30, 80],
          },
          {
            duration: 1.4,
          }
        );

        // Click Animation
        await animate(
          "#cursor",
          {
            scale: 0.9,
          },
          {
            delay: 0.05,
            repeatType: "reverse",
            repeat: 1,
            onComplete() {
              setIsSubscribed(true);
            },
          }
        );
        setOverlayImage('dtlogo3.png')

        await animate(
            "#cursor",
            {
              x: [40, -10],
            },
            {
              duration: 1.4,
            }
          );

                  // Click Animation
        await animate(
            "#cursor",
            {
              scale: 0.9,
            },
            {
              delay: 0.05,
              repeatType: "reverse",
              repeat: 1,
              onComplete() {
                setIsSubscribed(true);
              },
            }
          );
          setOverlayImage('dtlogo2.png');

          await animate(
            "#cursor",
            {
              x: [-10, 10],
              y:[80,140]
            },
            {
              duration: 1.4,
            }
          );
                    // Click Animation
        await animate(
            "#cursor",
            {
              scale: 0.9,
            },
            {
              delay: 0.05,
              repeatType: "reverse",
              repeat: 1,
              onComplete() {
                setIsSubscribed(true);
              },
            }
          );

      };

      const uploadImageAnimation = async () => {
        await animate(
          "#upload-image",
          {
            x: [-150, -10],
            y: [150, 30],
          },
          {
            delay: 1,
            duration: 1,
          }
        );

        await animate(
          "#upload-image",
          {
            scale: 0,
          },
          {
            duration: 0.3,
          }
        );
        setProfilePicture('profile.jpg');
        setEditImageUI(true)
        document.getElementById("upload-image").style.display="none";
      };

      const profilePictureAnimation = async () => {};

      //   const buttonAnimation = async () => {
      //     await animate(
      //       "#subscribeButton",
      //       {
      //         boxShadow: "5px 5px 0 rgba(0, 0, 0, 0.9)",
      //       },
      //       {
      //         delay: 0.4,
      //         duration: 0.1,
      //       }
      //     );
      //     await animate(
      //       "#subscribeButton",
      //       {
      //         boxShadow: "2px 2px 0 rgba(0, 0, 0, 0.9)",
      //       },
      //       {
      //         delay: 0.5,
      //         repeatType: "reverse",
      //         repeat: 1,
      //       }
      //     );
      //     await animate("#subscribeButton", {
      //       backgroundColor: "#4338ca",
      //     });
      //   };

      cursorAnimation();
      uploadImageAnimation();
      profilePictureAnimation();
      //   buttonAnimation();
    }
  }, [isInView, isCursorLoaded]);

  return (
    <main
      className="flex items-center justify-center relative overflow-hidden"
      ref={scope}
    >
      <img
        src="/profile.jpg"
        alt="Profile Upload Image"
        id="upload-image"
        className="absolute w-28 h-28 opacity-60 z-10"
        onLoad={() => setIsCursorLoaded(true)}
        style={{ display: isCursorLoaded ? "block" : "none" }}
      />
      <img
        src="/cursor.svg"
        alt="Pointing Hand Cursor"
        id="cursor"
        className="w-20 h-20 absolute z-40"
        onLoad={() => setIsCursorLoaded(true)}
        style={{ display: isCursorLoaded ? "block" : "none" }}
      />


      <img
        src={profilePicture}
        className={`w-40 h-40 rounded-full border-dashed border-2 border-gray-200 ${editImageUI?"hidden":"block"}`}
      />

      <div className={`${editImageUI?"flex":"hidden"} flex flex-col items-center`}>
        <div className="w-40 h-40 bg-blue-700 rounded-full flex justify-center items-end object-cover bg-center bg-cover"
        style={{
            backgroundImage:`url(${profilePicture})`
        }}
        >
          <img src={overlayImage} alt="" className="w-15 h-10 rounded-full mb-[10%] "/>
        </div>

        <div className="flex justify-between my-4 gap-4">
          <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full">
            <img src={'dtlogo1.png'} alt="" />
          </div>
          <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full">
            <img src={'dtlogo2.png'} alt="" />
          </div>
          <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full">
            <img src={'dtlogo3.png'} alt="" />
          </div>
          <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full">
            <img src={'dtlogo4.png'} alt="" />
          </div>
        </div>
        <button className="text-white bg-blue-700 focus:ring-4  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">
          Download
        </button>
      </div>
    </main>
  );
};

export default HeroSectionSVG;
