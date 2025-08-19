import React from 'react'

interface MenuProps {
  text: string;
  bgColor: string;
}

export default function Menu({ text, bgColor }: MenuProps) {
  return (
    <div className="Menu" style={{ background: bgColor }}>
      {text}
    </div>
  );
}
