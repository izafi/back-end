
import { benefits } from "../../data/homeData";

const Benefits = () => {
  return (
    <section className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
      <div className="grid grid-cols-1 gap-5 rounded-2xl bg-gradient-to-r from-blue-50 to-sky-100 p-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:p-7">
        {benefits.map((item, index) => (
          <div
            key={item.id}
            className={`flex items-center gap-4 ${
              index !== benefits.length - 1
                ? "lg:border-r lg:border-blue-200 lg:pr-5"
                : ""
            } ${index !== 0 ? "lg:pl-5" : ""}`}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-600 text-xl text-white shadow-md shadow-blue-200">
              {item.icon}
            </span>

            <div>
              <h3 className="text-xs font-extrabold text-slate-900">
                {item.title}
              </h3>
              <p className="mt-1.5 text-xs leading-5 text-slate-500">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Benefits;
