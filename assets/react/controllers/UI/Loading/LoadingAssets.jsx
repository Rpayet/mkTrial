import React from "react";

export function LoadingLogo() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <img className="w-32" src="/assets/admin/img/gif/Loading-Logo.gif" alt="Logo" />
            <p className="text-silver text-2xl font-bold">Chargement</p>
        </div>
    )
}