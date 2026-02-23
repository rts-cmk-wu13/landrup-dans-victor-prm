import { ToastContainer } from "react-toastify";
import PageContainer from "../_components/page-container";

import HomeHeader from "../_components/views/home/home-header";
import HomeFooter from "../_components/views/home/home-footer";

import UserContextProvider from "../_contexts/user-context";

export default function HomeLayout({ children }) {
  return (
    <UserContextProvider>
      <PageContainer >
        <HomeHeader />
        <main id="main" className="grow px-3">
          {children}
        </main>
        <HomeFooter />
      </PageContainer>
    </UserContextProvider>
  );
}

