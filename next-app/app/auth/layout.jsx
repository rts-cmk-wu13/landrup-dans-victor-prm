import { ToastContainer } from "react-toastify";
import PageContainer from "../_components/page-container";

import AuthHeader from "../_components/views/auth-page/auth-header";
import Link from "next/link";


export default function AuthLayout({ children }) {
  return (
    <PageContainer >
      <AuthHeader />
      <main id="main" className="grow px-3">
        {children}
      </main>
      <footer><p>Ingen konto endnu? <Link href="auth/login"></Link></p></footer>
    </PageContainer>

  );
}

