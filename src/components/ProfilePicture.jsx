import React, { useEffect, useState } from "react";
import AvatarEditor from "react-avatar-editor";
import html2canvas from "html2canvas";
import { MdOutlineZoomOut } from "react-icons/md";
import { MdZoomIn } from "react-icons/md";
import ImageOverlay from "./ImageOverlay";
import { MdDelete } from "react-icons/md";
import { Slider, Button } from "@nextui-org/react";

const ProfilePicture = () => {
  const [image, setImage] = useState(null);
  const [editor, setEditor] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  const [modalZoomSlider, setModalZoomSlider] = useState(1.2);
  const [dtLogoArray, setDtLogoArray] = useState([1, 2, 3, 4, 5, 6]);
  const [dtLogo, setDtLogo] = useState("/src/assets/dtlogo2.png");

  const handleDtLogoChange = (logoNo) => {
    console.log(logoNo);
    setDtLogo(`/src/assets/dtlogo${logoNo}.png`);
  };

  const handleDeleteImage = () => {
    setImage(null);
    setEditor(null);
    setCroppedImage(null);
  };

  console.log("Zoom Slider", modalZoomSlider);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
        setModalOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCrop = () => {
    const canvas = editor.getImageScaledToCanvas();
    const imageData = canvas.toDataURL("image/png");
    setCroppedImage(imageData);
    setModalOpen(false); // Close the modal after saving
  };

  const handleDownload = () => {
    if (!croppedImage) return; // Ensure main image is available

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const img = new Image();
    img.onload = () => {
      canvas.width = 400;
      canvas.height = 400;

      // Draw main image
      ctx.drawImage(img, 0, 0, 400, 400);

      if (dtLogo) {
        const overlayImg = new Image();
        overlayImg.onload = () => {
          // Set desired width and height for overlay image
          const overlayWidth = 250; // Set your desired width
          const overlayHeight = 100; // Set your desired height

          // Calculate position for overlay image to be at the bottom center
          const posX = (400 - overlayWidth) / 2;
          const posY = 400 - overlayHeight - 25;

          // Draw overlay image with custom width and height at the calculated position
          ctx.drawImage(overlayImg, posX, posY, overlayWidth, overlayHeight);

          // Create download link
          const link = document.createElement("a");
          link.download = "profile_picture.png";
          link.href = canvas.toDataURL("image/png");
          link.click();
        };
        overlayImg.src = dtLogo;
      } else {
        // If no overlay image, create download link with only the main image
        const link = document.createElement("a");
        link.download = "profile_picture.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
      }
    };
    img.src = croppedImage;
  };

  return (
    <>
      <div className="bg-white p-8 shadow-lg rounded-lg max-w-4xl w-full">
        <div className="grid sm:grid-cols-2 gap-12">
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold mb-4">Preview</h2>
              <Button isIconOnly onClick={handleDeleteImage}>
                <MdDelete size={"25px"} />
              </Button>
            </div>

            {modalOpen && (
              <div className="fixed z-30 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
                <div className="bg-white p-4 rounded-lg">
                  <div className="flex my-4 items-center justify-between">
                    <h2>Crop Profile</h2>
                    <Button
                      onClick={handleCrop}
                      className="bg-black text-white"
                    >
                      Apply
                    </Button>
                  </div>
                  <AvatarEditor
                    ref={(ref) => setEditor(ref)}
                    image={image}
                    width={200}
                    height={200}
                    border={50}
                    color={[255, 255, 255, 0.6]} // RGBA
                    scale={modalZoomSlider}
                  />
                  <Slider
                    aria-label="Volume"
                    size="md"
                    color="success"
                    maxValue={5}
                    step={0.1}
                    minValue={1.1}
                    value={modalZoomSlider}
                    onChange={setModalZoomSlider}
                    startContent={<MdOutlineZoomOut className="my-4" />}
                    endContent={<MdZoomIn className="my-4" />}
                    className="max-w-md"
                  />
                </div>
              </div>
            )}
            <div className="sm:min-h-[400px] border p-4 flex items-center justify-center">
              {image ? (
                <div id="profile-pic" className="max-w-[400px]">
                  <ImageOverlay
                    mainImage={croppedImage}
                    overlayImage={dtLogo}
                  />
                </div>
              ) : (
                <div className="w-full">
                  <label className="cursor-pointer w-full">
                    <div className="w-full sm:min-h-[400px] flex flex-col items-center justify-center rounded-md border-dashed border-2 border-gray-200 bg-white px-8 text-sm shadow-sm ">
                      <img
                        src="https://generated.vusercontent.net/placeholder.svg"
                        className="rounded-md"
                      />
                      <p className="my-2 text-gray-500">
                        Add Your Profile Picture
                      </p>
                    </div>
                    <input
                      type="file"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </label>
                </div>
              )}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Options</h2>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {dtLogoArray.map((logo) => {
                return (
                  <div className="p-2">
                    <Button
                      variant="solid"
                      onClick={() => {
                        handleDtLogoChange(logo);
                      }}
                    >
                      <img
                        src={`/src/assets/dtlogo${logo}.png`}
                        className="bg-transparent"
                      />
                    </Button>
                  </div>
                );
              })}
            </div>
            <Button
              onClick={handleDownload}
              className="w-full bg-primary text-primary-content"
            >
              Download
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePicture;
