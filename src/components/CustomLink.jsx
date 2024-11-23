"use client"

import { useRouter } from "next/navigation"; 
import Link from "next/link"; 

function CustomLink({ to, children, className, ...props }) {
  const router = useRouter(); 
  const isActive = router.pathname === to; 

  return (
    <div className={`${className} ${isActive ? "active" : ""}`}>
      <div className="link">
        <Link href={to} {...props}>
          <a>{children}</a> 
        </Link>
      </div>
    </div>
  );
}

export default CustomLink;