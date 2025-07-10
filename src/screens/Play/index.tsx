import { useState, useRef, useEffect } from "react";

const videoUrl =
  "https://veeville-website.s3.ap-south-1.amazonaws.com/milky_mist/animation.mp4";
const videoUrl2 =
  "https://veeville-website.s3.ap-south-1.amazonaws.com/milky_mist/2d+animation+ae.mp4";

const VideoPlayer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [videosPreloaded, setVideosPreloaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const nextVideoRef = useRef<HTMLVideoElement>(null);

  const videos = [videoUrl, videoUrl2];

  // Preload videos when component mounts
  useEffect(() => {
    const preloadVideos = async () => {
      try {
        setIsLoading(true);
        const loadVideo = (url: string) => {
          return new Promise((resolve, reject) => {
            const video = document.createElement("video");
            video.preload = "auto";

            video.onloadeddata = () => resolve(true);
            video.onerror = () =>
              reject(new Error(`Failed to load video: ${url}`));

            video.src = url;
          });
        };

        await Promise.all(videos.map(loadVideo));
        setVideosPreloaded(true);
        setIsLoading(false);
      } catch (err) {
        setError("Failed to preload videos. Please try again.");
        setIsLoading(false);
      }
    };

    preloadVideos();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    const nextVideo = nextVideoRef.current;
    if (!video || !nextVideo || !videosPreloaded) return;

    const handleLoadStart = () => setIsLoading(true);
    const handleLoadedData = () => setIsLoading(false);
    const handleError = () => {
      setError("Failed to load video. Please try again.");
      setIsLoading(false);
    };

    const handleVideoEnd = () => {
      // Switch to the next video when current video ends
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
    };

    // Prepare next video while current is playing
    const handleTimeUpdate = () => {
      if (video.duration - video.currentTime <= 1) {
        // When 1 second remains
        const nextIndex = (currentVideoIndex + 1) % videos.length;
        nextVideo.src = videos[nextIndex];
        nextVideo.load();
      }
    };

    video.addEventListener("loadstart", handleLoadStart);
    video.addEventListener("loadeddata", handleLoadedData);
    video.addEventListener("error", handleError);
    video.addEventListener("ended", handleVideoEnd);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      video.removeEventListener("loadstart", handleLoadStart);
      video.removeEventListener("loadeddata", handleLoadedData);
      video.removeEventListener("error", handleError);
      video.removeEventListener("ended", handleVideoEnd);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, [videosPreloaded, currentVideoIndex]);

  // Effect to handle video source changes
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videosPreloaded) return;

    video.src = videos[currentVideoIndex];
    video.load();
    video.play().catch((error) => {
      console.error("Error playing video:", error);
    });
  }, [currentVideoIndex, videosPreloaded]);

  if (!videosPreloaded) {
    return (
      <div className="relative w-full h-auto rounded-lg overflow-hidden bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-auto overflow-hidden bg-gray-100">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-red-500 text-center p-4">{error}</div>
        </div>
      )}

      <video
        ref={videoRef}
        className="w-full h-auto max-w-full"
        playsInline
        autoPlay
      >
        <source src={videos[currentVideoIndex]} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Hidden video element for preloading next video */}
      <video ref={nextVideoRef} style={{ display: "none" }} preload="auto">
        <source
          src={videos[(currentVideoIndex + 1) % videos.length]}
          type="video/mp4"
        />
      </video>
    </div>
  );
};

export const Play = (): JSX.Element => {
  return (
    <main
      className="bg-white flex flex-row justify-center w-full"
      data-model-id="425:2688"
    >
      <div className="flex flex-col items-center w-full h-full">
        <VideoPlayer />
      </div>
    </main>
  );
};
