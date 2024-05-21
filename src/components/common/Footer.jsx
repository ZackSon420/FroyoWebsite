import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="px-[20px] bg-black text-white border-t">
      <div className="max-w-[1100px] mx-auto">
        <div className="py-[20px]">
          
        
          {/* COPYRIGHTS */}
          <div className="flex items-center justify-center py-[20px]">
            <p>
              &copy; 2024 All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer