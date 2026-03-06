import React from "react";

interface IProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export default function Container({ children, title, subtitle }: IProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full w-full relative">
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-8">{subtitle}</p>
      <div className="flex items-center justify-center h-full w-full">
        {children}
      </div>
    </div>
  );
}
