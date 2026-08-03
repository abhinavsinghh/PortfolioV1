import { experience } from '../data/experience'

export default function Timeline() {
  return (
    <div className="relative border-l border-gray-200 ml-3">
      {experience.map((item) => (
        <div key={item.id} className="mb-10 ml-8">
          <span className="absolute -left-[7px] flex items-center justify-center w-3.5 h-3.5 bg-blue-600 rounded-full ring-4 ring-white" />

          <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
            <h3 className="text-lg font-semibold text-gray-900">
              {item.role} <span className="text-gray-400 font-normal">· {item.company}</span>
            </h3>
            <span className="text-sm text-gray-500">{item.duration}</span>
          </div>

          <p className="text-gray-600 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  )
}