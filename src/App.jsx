import BnbCard from "./components/BnbCard";

function App() {
  return (
    <>
      <div className="flex justify-center items-center h-screen w-full">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

        <BnbCard />
        <BnbCard />
        <BnbCard />
        <BnbCard />
        </div>
      </div>
    </>
  );
}

export default App;
