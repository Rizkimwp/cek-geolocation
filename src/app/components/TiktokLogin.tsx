"use client";

import React from 'react';
import { User, QrCode, Facebook, Mail, Apple, Github } from 'lucide-react';

const LoginButton = ({ icon: Icon, text }: { icon: any, text: string }) => (
    <button className="flex items-center justify-between w-full px-4 py-3 mb-3 border border-gray-200 rounded-sm hover:bg-gray-50 transition-all text-sm font-semibold text-gray-800">
        <Icon size={20} className="text-gray-900" />
        <span className="flex-1 text-center">{text}</span>
    </button>
);

export default function TikTokLogin() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white w-full max-w-[480px] min-h-[600px] rounded-xl shadow-sm flex flex-col items-center p-8 relative">

                {/* Header Section */}
                <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4">Log in to TikTok</h1>
                <p className="text-gray-500 text-center mb-8 text-[15px]">
                    Manage your account, check notifications, comment on videos, and more.
                </p>

                {/* Login Options List */}
                <div className="w-full px-4 overflow-y-auto max-h-[400px]">
                    <LoginButton icon={QrCode} text="Use QR code" />
                    <LoginButton icon={User} text="Use phone / email / username" />
                    <LoginButton icon={Facebook} text="Continue with Facebook" />
                    <LoginButton icon={Mail} text="Continue with Google" />
                    <LoginButton icon={Github} text="Continue with Twitter" />
                    <LoginButton icon={Apple} text="Continue with Apple" />
                    <LoginButton icon={Mail} text="Continue with Instagram" />
                </div>

                {/* Policy Section */}
                <div className="mt-6 px-8 text-center text-[12px] text-gray-500 leading-relaxed">
                    By continuing, you agree to TikTok&apos;s <span className="font-semibold hover:underline cursor-pointer text-gray-800">Terms of Service</span> and confirm that you have read TikTok&apos;s <span className="font-semibold hover:underline cursor-pointer text-gray-800">Privacy Policy</span>.
                </div>

                {/* Footer Section */}
                <div className="absolute bottom-0 w-full border-t border-gray-200 p-6 text-center text-[15px]">
                    Don&lsquo;t have an account? <span className="text-pink-600 font-semibold hover:underline cursor-pointer">Sign up</span>
                </div>

            </div>
        </div>
    );
} 