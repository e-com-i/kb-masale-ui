/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";
import { Input } from "@/components/ui/input";
import {Search } from "lucide-react";
import { useState } from "react";

const SearchProducts = () => {

    const [inputValue, setInputValue] = useState("");

    const handleChange = (event:any) => {
      setInputValue(event.target.value);
    };

    const handleSubmit = () => {
      console.log("Input Value:", inputValue);
    };


    return (
      <div className="relative flex items-center" suppressHydrationWarning>
        <Input
          className="pr-10 max-w-[200px] md:max-w-[500px]"
          style={{width:"500px"}}
          placeholder="Search for products..."
          value={inputValue}
          onChange={handleChange}
        />
        <button onClick={handleSubmit} className="absolute right-3">
          <Search size={15} className="text-gray-400" />
        </button>
      </div>
    );

};

export default SearchProducts;
