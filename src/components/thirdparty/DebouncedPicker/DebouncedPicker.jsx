import React, { useState } from "react";
import useDebounce from "use-debouncy";
import { HexColorPicker } from "react-colorful";
import "react-colorful/dist/index.css";
import './DebouncedPicker.css';

export const DebouncedPicker = ({ color, onChange }) => {
  const [value, setValue] = useState(color);

  useDebounce(() => onChange(value), 200, [value]);

  return <HexColorPicker className="Color-Picker" color={value} onChange={setValue} />;
};

export const hexToRgba = (hex) => {
  if (hex[0] === "#") hex = hex.substr(1);

  if (hex.length < 6) {
    return {
      r: parseInt(hex[0] + hex[0], 16),
      g: parseInt(hex[1] + hex[1], 16),
      b: parseInt(hex[2] + hex[2], 16),
      a: 1,
    };
  }

  return {
    r: parseInt(hex.substr(0, 2), 16),
    g: parseInt(hex.substr(2, 2), 16),
    b: parseInt(hex.substr(4, 2), 16),
    a: 1,
  };
};