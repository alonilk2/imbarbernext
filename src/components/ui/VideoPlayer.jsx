/**
 * Reusable VideoPlayer component
 */
const VideoPlayer = ({ 
  src, 
  poster, 
  width = 400, 
  height = 480, 
  controls = true, 
  preload = "metadata",
  className = "",
  ...props 
}) => {
  return (
    <div
      style={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        controls={controls}
        preload={preload}
        width={width}
        height={height}
        poster={poster}
        className={className}
        {...props}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;