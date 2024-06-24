import "./sp.css"
function SplashScreen() {
  return (
    <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
    <div className="flex items-center justify-center h-screen ">
      {/* Custom Loader */}
      <div className="loader text-black relative overflow-hidden border-r-4 border-white w-0 animate-typewriter">
      
        <span className="loader-text text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500 font-bold text-4xl">
          Developer,Curator,Vibes
        </span>
      </div></div>
    </div>
  );
}

export default SplashScreen;