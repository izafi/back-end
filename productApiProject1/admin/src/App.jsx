
import { Routes, Route } from "react-router-dom";
import RootLayout from "./layout/RootLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<RootLayout />}>
        <Route
          index
          element={
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <h1 className="text-2xl font-bold text-slate-800">
                Product Management
              </h1>
              <p className="mt-2 text-slate-500">
                Manage your store products from here.
              </p>
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
