import * as React from "react";
import AppRoute from "./utilities/routers/AppRoute.tsx";
import axios from "axios";

axios.defaults.baseURL = import.meta.env. VITE_API_BASE_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';


const App: React.FC = () => {

  return (
      <>
          <AppRoute />
      </>
  )
}

export default App
