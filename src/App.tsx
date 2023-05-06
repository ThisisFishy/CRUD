import { AddSection, RecentlyAddedSection, SearchSection } from "./sections"

function App() {

  return (
    <>
      <header className="flex justify-center pt-4">
        <h1 className="font-bold text-3xl text-white">CRUD APP</h1>
      </header>

      <main className="flex flex-col gap-4 m-5">
        <AddSection />
        <RecentlyAddedSection />
        <SearchSection />
      </main>
    </>
  )
}

export default App
