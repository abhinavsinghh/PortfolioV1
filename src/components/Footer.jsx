export default function Footer() {
    const year = new Date().getFullYear()
  
    return (
      <footer className="border-t border-gray-200 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© {year} Abhinav Singh. All rights reserved.</p>
          <div className="flex gap-5 text-sm text-gray-500">
            <a href="https://github.com/abhinavsinghh" target="_blank" rel="noreferrer" className="hover:text-black">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/singhabhinav510" target="_blank" rel="noreferrer" className="hover:text-black">
              LinkedIn
            </a>
            <a href="mailto:siabhinav200@gmail.com" className="hover:text-black">
              Email
            </a>
          </div>
        </div>
      </footer>
    )
  }