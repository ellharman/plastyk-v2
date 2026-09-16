import footageJson from "@/public/footage.json";

export type VidProps = {
  assetPath: string;
};

function Vid(assetPath: string) {
  return (
    <video width="100%" height="100%" controls preload="metadata">
      <source src={assetPath} type="video/mp4" />
    </video>
  );
}

export default function Footage() {
  const videos = [...footageJson];

  return (
    <div className="flex justify-center flex-col gap-8 items-center w-full mx-auto">
      <h2 className="text-7xl text-plastyk-kiss-red">FOOTAGE</h2>
      {videos.map((video: VidProps) => (
        <div key={video.assetPath} className="w-full max-w-4xl mx-auto">
          {Vid(video.assetPath)}
        </div>
      ))}
    </div>
  );
}
