import { ToastContainer } from "react-toastify";
import PageContainer from "../_components/page-container";

import HomeHeader from "../_components/views/home/home-header";
import HomeFooter from "../_components/views/home/home-footer";


export default function HomeLayout({ children }) {
  return (
    <PageContainer >
      <HomeHeader />
      <main id="main" className="grow px-3">
        {children}
      </main>
      <HomeFooter />
    </PageContainer>
  );
}

