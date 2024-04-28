import Image from "next/image";

export default function Header() {
  return (
    <div className="p-0">
      <Image width={100} height={100} style={{background: "white"}} src={"/generalAssets/bookmyshow-logo.png"} alt="" />
    </div>
  );
}

// "use client"

// // components/Header.js
// import Link from 'next/link';
// import { useState } from 'react';

// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const handleSearch = (e: any) => {
//     e.preventDefault();
//     // Perform search action with the searchQuery
//     console.log('Search query:', searchQuery);
//   };

//   return (
//     <header className="bg-white shadow">
//       <div className="container mx-auto px-4 py-6 flex items-center justify-between">
//         <Link href="/">
//           <div>bookmyshow</div>
//         </Link>
//         <div className="flex items-center">
//           <form onSubmit={handleSearch} className="mr-4">
//             <input
//               type="text"
//               placeholder="Search for Movies, Events, Plays, Sports and Activities"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//               className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
//             />
//           </form>
//           <div className="mr-4">
//             <select className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500">
//               <option>Chennai</option>
//               {/* Add more city options */}
//             </select>
//           </div>
//           <Link href="/user">
//             <div>hello user</div>
//           </Link>
//         </div>
//       </div>
//       <nav className="bg-gray-100">
//         <div className="container mx-auto px-4 py-3">
//           <ul className="flex space-x-4">
//             <li>
//               <Link href="/movies">
//                 <div>movies</div>
//               </Link>
//             </li>
//             <li>
//               <Link href="/stream">
//                 <div>streaming</div>
//               </Link>
//             </li>
//             <li>
//               <Link href="/events">
//                 <div>events</div>
//               </Link>
//             </li>
//             <li>
//               <Link href="/plays">
//                 <div>playing</div>
//               </Link>
//             </li>
//             <li>
//               <Link href="/sports">
//                 <div>sports</div>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Header;