import React from "react";

export default function Card() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:w-48"
            src="/img/store.jpg"
            alt="Man looking at item at a store"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Case study
          </div>
          <button className="btn-blue border-pink-700 border-2">Detail</button>
          <p className="mt-2 text-gray-500">Getting a</p>
        </div>
      </div>
    </div>

    // <div className="flex p-6">
    //   <div className="flex-none w-44 relative">
    //     <img
    //       src="/kids-jumpsuit.jpg"
    //       alt
    //       className="absolute inset-0 w-full h-full object-cover rounded-lg"
    //     />
    //   </div>
    //   <form className="flex-auto pl-6" onSubmit={handleSubmit}>
    //     <div className="flex flex-wrap items-baseline">
    //       <h1 className="w-full flex-none font-semibold mb-2.5">
    //         Kids Jumpsuit
    //       </h1>
    //       <div className="text-4xl leading-7 font-bold text-purple-600">
    //         $39.00
    //       </div>
    //       <div className="text-sm font-medium text-gray-400 ml-3">In stock</div>
    //     </div>
    //     <div className="flex items-baseline my-8">
    //       <div className="w-full flex-none flex items-center mt-2 mb-8">
    //         <ul
    //           className="flex text-sm space-x-2"
    //           style={{ transformOrigin: "50% 50% 0px" }}
    //         >
    //           <li
    //             className="relative flex-none items-center justify-center border-2 cursor-pointer flex"
    //             style={{
    //               width: 38,
    //               height: 38,
    //               borderRadius: 19,
    //               borderColor: "rgb(126, 34, 206)",
    //               color: "rgb(255, 255, 255)",
    //               backgroundColor: "rgb(126, 34, 206)",
    //             }}
    //           >
    //             <span
    //               className="absolute inset-0 flex items-center justify-center font-medium pointer-events-none"
    //               style={{ opacity: 0 }}
    //             >
    //               <span className="hidden sm:inline">XS</span>
    //               <span className="sm:hidden">S</span>
    //             </span>
    //             <span
    //               className="absolute inset-0 flex items-center justify-center Poppins-Medium_font__3_dHC "
    //               style={{ opacity: 1 }}
    //             >
    //               <span className="hidden sm:inline">XS</span>
    //               <span className="sm:hidden">S</span>
    //             </span>
    //             <span
    //               className="absolute inset-0 flex items-center justify-center font-light pointer-events-none"
    //               style={{ opacity: 0 }}
    //             >
    //               <span className="hidden sm:inline">XS</span>
    //               <span className="sm:hidden">S</span>
    //             </span>
    //             <span
    //               className="absolute inset-0 flex items-center justify-center RobotoMono-Bold_font__226og pointer-events-none"
    //               style={{ opacity: 0 }}
    //             >
    //               <span className="absolute w-6 h-1 bg-lime-300 left-1/2 -ml-3 bottom-2.5" />
    //               <span className="relative hidden sm:inline">XS</span>
    //               <span className="relative sm:hidden">S</span>
    //             </span>
    //           </li>
    //           <li
    //             className="relative flex-none items-center justify-center border-2 cursor-pointer hidden sm:flex"
    //             style={{
    //               width: 38,
    //               height: 38,
    //               borderRadius: 19,
    //               borderColor: "rgb(244, 244, 245)",
    //               color: "rgba(0, 0, 0, 0.5)",
    //             }}
    //           >
    //             <span
    //               className="absolute inset-0 flex items-center justify-center font-medium pointer-events-none"
    //               style={{ opacity: 0 }}
    //             >
    //               S
    //             </span>
    //             <span
    //               className="absolute inset-0 flex items-center justify-center Poppins-Medium_font__3_dHC "
    //               style={{ opacity: 1 }}
    //             >
    //               S
    //             </span>
    //             <span
    //               className="absolute inset-0 flex items-center justify-center font-light pointer-events-none"
    //               style={{ opacity: 0 }}
    //             >
    //               S
    //             </span>
    //             <span
    //               className="absolute inset-0 flex items-center justify-center RobotoMono-Regular_font__3rARI pointer-events-none"
    //               style={{ opacity: 0 }}
    //             >
    //               S
    //             </span>
    //           </li>
    //           <li
    //             className="relative flex-none items-center justify-center border-2 cursor-pointer flex"
    //             style={{
    //               width: 38,
    //               height: 38,
    //               borderRadius: 19,
    //               borderColor: "rgb(244, 244, 245)",
    //               color: "rgba(0, 0, 0, 0.5)",
    //             }}
    //           >
    //             <span
    //               className="absolute inset-0 flex items-center justify-center font-medium pointer-events-none"
    //               style={{ opacity: 0 }}
    //             >
    //               M
    //             </span>
    //             <span
    //               className="absolute inset-0 flex items-center justify-center Poppins-Medium_font__3_dHC "
    //               style={{ opacity: 1 }}
    //             >
    //               M
    //             </span>
    //             <span
    //               className="absolute inset-0 flex items-center justify-center font-light pointer-events-none"
    //               style={{ opacity: 0 }}
    //             >
    //               M
    //             </span>
    //             <span
    //               className="absolute inset-0 flex items-center justify-center RobotoMono-Regular_font__3rARI pointer-events-none"
    //               style={{ opacity: 0 }}
    //             >
    //               M
    //             </span>
    //           </li>
    //           <li
    //             className="relative flex-none items-center justify-center border-2 cursor-pointer flex"
    //             style={{
    //               width: 38,
    //               height: 38,
    //               borderRadius: 19,
    //               borderColor: "rgb(244, 244, 245)",
    //               color: "rgba(0, 0, 0, 0.5)",
    //             }}
    //           >
    //             <span
    //               className="absolute inset-0 flex items-center justify-center font-medium pointer-events-none"
    //               style={{ opacity: 0 }}
    //             >
    //               L
    //             </span>
    //             <span
    //               className="absolute inset-0 flex items-center justify-center Poppins-Medium_font__3_dHC "
    //               style={{ opacity: 1 }}
    //             >
    //               L
    //             </span>
    //             <span
    //               className="absolute inset-0 flex items-center justify-center font-light pointer-events-none"
    //               style={{ opacity: 0 }}
    //             >
    //               L
    //             </span>
    //             <span
    //               className="absolute inset-0 flex items-center justify-center RobotoMono-Regular_font__3rARI pointer-events-none"
    //               style={{ opacity: 0 }}
    //             >
    //               L
    //             </span>
    //           </li>
    //           <li
    //             className="relative flex-none items-center justify-center border-2 cursor-pointer hidden sm:flex"
    //             style={{
    //               width: 38,
    //               height: 38,
    //               borderRadius: 19,
    //               borderColor: "rgb(244, 244, 245)",
    //               color: "rgba(0, 0, 0, 0.5)",
    //             }}
    //           >
    //             <span
    //               className="absolute inset-0 flex items-center justify-center font-medium pointer-events-none"
    //               style={{ opacity: 0 }}
    //             >
    //               XL
    //             </span>
    //             <span
    //               className="absolute inset-0 flex items-center justify-center Poppins-Medium_font__3_dHC "
    //               style={{ opacity: 1 }}
    //             >
    //               XL
    //             </span>
    //             <span
    //               className="absolute inset-0 flex items-center justify-center font-light pointer-events-none"
    //               style={{ opacity: 0 }}
    //             >
    //               XL
    //             </span>
    //             <span
    //               className="absolute inset-0 flex items-center justify-center RobotoMono-Regular_font__3rARI pointer-events-none"
    //               style={{ opacity: 0 }}
    //             >
    //               XL
    //             </span>
    //           </li>
    //         </ul>
    //         <div className="relative whitespace-nowrap ml-3">
    //           <div
    //             className="inline-flex leading-5 cursor-pointer text-sm underline absolute bottom-0 left-0"
    //             style={{
    //               opacity: 0,
    //               color: "rgb(113, 113, 122)",
    //               transformOrigin: "50% 50% 0px",
    //             }}
    //           >
    //             Size Guide
    //           </div>
    //           <div
    //             className="inline-flex leading-5 cursor-pointer text-sm underline Poppins-Regular_font__V38lz "
    //             style={{
    //               opacity: 1,
    //               color: "rgb(113, 113, 122)",
    //               transformOrigin: "50% 50% 0px",
    //             }}
    //           >
    //             Size Guide
    //           </div>
    //           <div
    //             className="inline-flex leading-5 cursor-pointer text-sm font-light absolute bottom-0 left-0"
    //             style={{
    //               opacity: 0,
    //               color: "rgb(113, 113, 122)",
    //               transformOrigin: "50% 50% 0px",
    //             }}
    //           >
    //             Size Guide
    //           </div>
    //           <div
    //             className="inline-flex leading-5 cursor-pointer text-xs underline RobotoMono-Regular_font__3rARI absolute bottom-0 left-0"
    //             style={{
    //               opacity: 0,
    //               color: "rgb(0, 0, 0)",
    //               transformOrigin: "50% 50% 0px",
    //             }}
    //           >
    //             Size Guide
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex space-x-3 mb-4 text-sm font-semibold">
    //       <div className="flex-auto flex space-x-3">
    //         <button
    //           className="w-1/2 flex items-center justify-center rounded-full bg-purple-700 text-white"
    //           type="submit"
    //         >
    //           Buy now
    //         </button>
    //         <button
    //           className="w-1/2 flex items-center justify-center rounded-full bg-purple-50 text-purple-700"
    //           type="button"
    //         >
    //           Add to bag
    //         </button>
    //       </div>
    //       <button
    //         className="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-purple-50 text-purple-700"
    //         type="button"
    //         aria-label="like"
    //       >
    //         <svg width={20} height={20} fill="currentColor">
    //           <path
    //             fillRule="evenodd"
    //             clipRule="evenodd"
    //             d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
    //           />
    //         </svg>
    //       </button>
    //     </div>
    //     <p className="text-sm text-gray-500">
    //       Free shipping on all continental US orders.
    //     </p>
    //   </form>
    // </div>
  );
}
