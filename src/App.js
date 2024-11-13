import "./App.css";

function App() {
  return (
    <div className="App bg-white jua-regular h-screen">
      <div className="container mx-auto px-4 h-full py-4">
        <div className="flex items-center flex-col justify-around h-full">
          <img
            src="/images/logo.png"
            alt="hero"
            className="sm:w-4/12 mx-auto mb-4"
          />
          <img
            src="/images/hero.png"
            alt="hero"
            className="sm:w-[30%] md:w-[30%] mx-auto"
          />
          <div className="text-center mb-4 text-[32px] sm:text-[60px]">
            the name <span className="text-[#025F2A]">says it all.</span>
          </div>
          <div className="text-center sm:w-[45%] sm:text-[24px] mx-auto mb-4">
            Derived from the original Nintendogs game, tendog brings the
            nostalgia of childhood gaming to Solana.
          </div>
          <div className="flex items-center justify-center gap-4">
            <a href="https://x.com/tendogSOL" target="_blank" className="">
              <img src="/images/x.png" width={50} height={50} alt="icon" />
            </a>
            <a href="https://t.me/tendogSOL" target="_blank" className="">
              <img src="/images/tg.png" width={50} height={50} alt="icon" />
            </a>
            <a href="https://dexscreener.com/solana/4vi4teijfdxwe1mbclrqqwd6sebezfsyd8ft9bzublk5" target="_blank" className="">
              <img src="/images/dex.png" width={50} height={50} alt="icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
