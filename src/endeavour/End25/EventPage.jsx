import AllEvents from "../../components/End25/AllEvents/AllEvents"

function EndEventPage() {

  
  return (
    <div className="bg-black  bg-opacity p-6 " >
         <div className="fixed inset-0 bg-gradient-to-b from-black via-[#001a1a] to-black"></div>
         
        <div className="absolute top-0 left-0 w-full h-full border-t border-l border-teal-500/5 grid grid-cols-4 grid-rows-4">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="border-b border-r border-teal-500/5" />
          ))}
        </div>
        <AllEvents />
    </div>
  )
}

export default EndEventPage