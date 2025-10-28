"use client";

import "./globals.css";
import LateralMenu from "@/components/LateralMenu";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { API } from "@/api";
import dayjs from '../utils/dayjs'

export default function PrivateLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  async function auth() {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      setIsAuth(false);
      return false;
    }

    try {
      const res = await API.get("/auth/validate-token", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setIsAuth(res.data.valid);
      return res.data.valid;
    } catch {
      setIsAuth(false);
      return false;
    }
  }

  useEffect(() => {
    auth();
    if (isAuth === false) {
      router.replace("/login");
    }
  }, []);

  useEffect(() => {
    if(isAuth === false){
      router.replace("/login")
    }
  }, [isAuth, router])

  if (isAuth === null) {
    return <p>Carregando...</p>;
  }

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <LateralMenu />
      <div
        className="pageContent"
        style={{
          overflowY: "auto",
          flex: 1,
        }}
      >
        {children}
      </div>
    </div>
  );
}
