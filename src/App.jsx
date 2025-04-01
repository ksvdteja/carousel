import { useEffect } from "react";
import { useState } from "react";

const data = [
  "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE=",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtnvAOajH9gS4C30cRF7rD_voaTAKly2Ntaw&s",
  "https://images.unsplash.com/photo-1575936123452-b67c3203c357?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
  "https://images.pexels.com/photos/1054655/pexels-photo-1054655.jpeg?cs=srgb&dl=pexels-hsapir-1054655.jpg&fm=jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&s",
];

function App() {
  const [imageIndex, setImageIndex] = useState(0);

  const handleNextClick = () => {
    if (imageIndex === data.length - 1) setImageIndex(0);
    else setImageIndex(imageIndex + 1);
  };

  const handlePreviousClick = () => {
    if (imageIndex === 0) setImageIndex(data.length - 1);
    else setImageIndex(imageIndex - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleNextClick();
    }, 5000);
    return () => {
      clearTimeout(timer);
    }
  }, [imageIndex]);

  return (
    <div className="flex justify-center">
      <button
        onClick={handlePreviousClick}
        className="font-bold cursor-pointer p-4 m-4"
      >
        Previous
      </button>
      {data.map((url, index) => (
        <img
          key={index}
          src={url}
          alt="img"
          className={
            "m-16 w-[450px] h-[250px] " +
            (imageIndex === index ? "block" : "hidden")
          }
        />
      ))}

      <button
        onClick={() => handleNextClick()}
        className="font-bold cursor-pointer p-4 m-4"
      >
        Next
      </button>
    </div>
  );
}

console.log(App);

export default App;
