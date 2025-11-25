'use client';

import { LazyDynamicComponent } from "@/components/LazyDynamicComponent";
import Navbar from "./common/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
    
      <LazyDynamicComponent 
        importFunc={() => import("./components/sections/Hero")}
      />
      
      <LazyDynamicComponent 
        importFunc={() => import("./components/sections/Section2")}
      />
      
      <LazyDynamicComponent 
        importFunc={() => import("./components/sections/Section3")}
      />
      
      <LazyDynamicComponent 
        importFunc={() => import("./components/sections/Banner1")}
      />
      
      <LazyDynamicComponent 
        importFunc={() => import("./components/sections/Partners")}
      />
      
      <LazyDynamicComponent 
        importFunc={() => import("./components/sections/BlogPosts")}
      />
      
      <LazyDynamicComponent 
        importFunc={() => import("./components/sections/Banner2")}
      />
      
      <LazyDynamicComponent 
        importFunc={() => import("./components/sections/Quote")}
      />
      
      <LazyDynamicComponent 
        importFunc={() => import("./components/sections/Mockup")}
      />
      
      <LazyDynamicComponent 
        importFunc={() => import("./components/sections/Gallery")}
      />
      
      <LazyDynamicComponent 
        importFunc={() => import("./components/sections/Gallery2")}
      />
      
      <LazyDynamicComponent 
        importFunc={() => import("./components/sections/Employees")}
      />
      
      <LazyDynamicComponent 
        importFunc={() => import("./components/sections/Section9")}
      />
      
      <LazyDynamicComponent 
        importFunc={() => import("./components/sections/Section10")}
      />
      
      <LazyDynamicComponent 
        importFunc={() => import("./components/sections/Community")}
      />
      
      <LazyDynamicComponent 
        importFunc={() => import("./components/sections/FAQs")}
      />
      
      <LazyDynamicComponent 
        importFunc={() => import("./components/LinkSection")}
      />
    </div>
  );
}
