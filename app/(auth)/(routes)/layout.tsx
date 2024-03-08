import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="bg-red-500">{children}</div>;
}
