import React from 'react'
import { Wrench } from 'lucide-react';

const Logo = () => (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center transform rotate-12">
          <Wrench className="w-6 h-6 text-white transform -rotate-12" />
        </div>
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-bold">!</span>
        </div>
      </div>
      <span className="text-2xl font-bold ">FixFast</span>
    </div>
  );
  export default Logo;