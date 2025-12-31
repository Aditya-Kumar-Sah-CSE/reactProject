import Counter from "./components/Counter"

function App() {
 

  return (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 
  dark:text-white
  flex flex-col">
<header className="border-b py-4 text-black dark:text-white">
  <div className="container mx-auto px-4 flex justify-center text-9xl">
    <h1 className="text-2xl font-bold">
      React Coding Projects
    </h1>
  </div>
</header>
<main>
  <Counter/>
</main>
  </div>
  )
}

export default App
