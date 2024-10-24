import { Check } from "lucide-react"

export const Stats = () => {
  const stats = [
    { text: "24/7 Node monitoring" },
    { text: "IBC Relayer" },
    { text: "Explorer Chain" },
    { text: "Rpc/Api Endpoint" },
  ]

  return (
    <section>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          {stats.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 whitespace-nowrap"
            >
              <div className="flex items-center justify-center w-8 h-8 rounded-full ">
                <Check className="w-5 h-5 text-white" />
              </div>
              <p className="text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats