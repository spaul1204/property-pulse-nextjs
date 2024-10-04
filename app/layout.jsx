import Navbar from "@/components/Navbar";
import React from "react";
import Footer from "@/components/Footer";
import AuthProvider from "@/components/AuthProvider";

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html>
        <body>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </AuthProvider>
  );
};

export default MainLayout;
