import { ToastContainer } from "react-toastify";
import PageContainer from "../_components/page-container";

import AuthHeader from "../_components/views/auth-page/auth-header";
import Link from "next/link";


export default function HomeLayout({ children }) {
  return (
    <PageContainer >
      <header className="text-white">Header</header>
      <main id="main" className="grow px-3">
        {children}
      </main>
      <footer className="text-white">Footer</footer>
    </PageContainer>

  );
}

