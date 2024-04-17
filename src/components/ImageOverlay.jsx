import { useState, useEffect } from 'react';

const ImageOverlay = ({ mainImage, overlayImage }) => {
  console.log("main",mainImage)
  console.log("overlay",overlayImage)
  const [canvas, setCanvas] = useState(null);

  useEffect(() => {
    if (mainImage && overlayImage) {
      console.log("Done")
      const canvasElement = document.createElement('canvas');
      const ctx = canvasElement.getContext('2d');

      const mainImg = new Image();
      mainImg.onload = () => {
        canvasElement.width = 400;
        canvasElement.height = 400;

        // Draw main image
        ctx.drawImage(mainImg, 0, 0,400,400);

        const overlayImg = new Image();
        overlayImg.onload = () => {
                    // Set desired width and height for overlay image
          const overlayWidth = 250; // Set your desired width
          const overlayHeight = 100; // Set your desired height

          // Calculate position for overlay image to be at the bottom center
          const posX = (400 - overlayWidth) / 2;
          const posY = 400 - overlayHeight-25;

          // Draw overlay image with custom width and height at the calculated position
          ctx.drawImage(overlayImg, posX, posY, overlayWidth, overlayHeight);

          setCanvas(canvasElement);
        };
        overlayImg.src = overlayImage;
      };
      mainImg.src = mainImage;
    }
  }, [mainImage, overlayImage]);

  return (
    <div className='overflow-hidden rounded-full'>
      {canvas && <img src={canvas.toDataURL("image/png")} alt="Combined Image" />}
    </div>
  );
};

export default ImageOverlay;