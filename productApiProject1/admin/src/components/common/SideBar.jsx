import { useState } from "react";
const SideBar = ({ isOpen = false, onClose }) => {
  const [productOpen, setProductOpen] = useState(true);
  const [activeOption, setActiveOption] = useState("Add Product");

  const options = [
    { name: "Add Product", icon: "＋" },
    { name: "Update Product", icon: "✎" },
    { name: "Delete Product", icon: "⌫" },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-slate-950/50 lg:hidden"
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-slate-950 text-slate-300 transition-transform duration-300 lg:sticky lg:top-0 lg:h-screen lg:translate-x-0 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Logo */}
        <div className="flex h-16 items-center justify-between border-b border-white/10 px-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-xl font-extrabold text-white">
              S
            </div>

            <div>
              <h2 className="text-lg font-extrabold text-white">
                ShopSphere
              </h2>
              <p className="text-[10px] text-slate-400">
                ADMIN PANEL
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/10 lg:hidden"
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        {/* Navigation */}
        <div className="flex-1 px-4 py-7">
          <p className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[2px] text-slate-500">
            Main Menu
          </p>

          <button
            type="button"
            onClick={() => setProductOpen(!productOpen)}
            className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-sm font-semibold transition ${
              productOpen
                ? "bg-blue-600 text-white shadow-lg shadow-blue-950/30"
                : "text-slate-300 hover:bg-white/5 hover:text-white"
            }`}
          >
            <span className="flex items-center gap-3">
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 7.5 12 3l8 4.5v9L12 21l-8-4.5v-9Z"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
                <path
                  d="m4.5 7.7 7.5 4.4 7.5-4.4M12 12v8.5"
                  strokeWidth="1.7"
                  strokeLinejoin="round"
                />
              </svg>

              Product Management
            </span>

            <svg
              className={`h-4 w-4 transition-transform ${
                productOpen ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="m6 9 6 6 6-6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {productOpen && (
            <div className="ml-6 mt-3 space-y-1 border-l border-slate-700 pl-4">
              {options.map((option) => (
                <button
                  key={option.name}
                  type="button"
                  onClick={() => {
                    setActiveOption(option.name);
                    onClose?.();
                  }}
                  className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition ${
                    activeOption === option.name
                      ? "bg-white/10 font-semibold text-blue-400"
                      : "text-slate-400 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="flex h-5 w-5 items-center justify-center text-base">
                    {option.icon}
                  </span>

                  {option.name}
                  {activeOption === option.name && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-blue-400" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Bottom profile */}
        <div className="border-t border-white/10 p-4">
          <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
              A
            </div>

            <div>
              <p className="text-sm font-semibold text-white">Admin User</p>
              <p className="text-xs text-slate-400">Store Manager</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
