// import { useState } from "react";
// import { MessageData } from "../../../Messages/MessageData";
// import "./Sidebar.css"

// const Sidebar = () => {
//   const [isExpanded, setExpendState] = useState(false)
//   return (
//     // <div className="h-screen inline-flex py-8 pr-10 pl-8 flex-col items-start gap-6 flex-shrink-0 border-r-foundationGrey-50">

//     // </div>

//     <div
//       className={
//         isExpanded
//           ? "side-nav-container"
//           : "side-nav-container side-nav-container-NX"
//       }
//     >
//       <div className="nav-upper">
//         <div className="nav-heading">
//           {isExpanded && (
//             <div className="nav-brand">
//               <img src="icons/Logo.svg" alt="" srcset="" />
//               <h2>Showkart</h2>
//             </div>
//           )}
//           <button
//             className={
//               isExpanded ? "hamburger hamburger-in" : "hamburger hamburger-out"
//             }
//             onClick={() => setExpendState(!isExpanded)}
//           >
//             <span></span>
//             <span></span>
//             <span></span>
//           </button>
//         </div>
//         <div className="nav-menu">
//           {MessageData.map(({ item, icon }) => (
//             <a
//               className={isExpanded ? "menu-item" : "menu-item menu-item-NX"}
//               href="#"
//             >
//               <img className="menu-item-icon" src={icon} alt="" srcset="" />
//               {isExpanded && <p>{item.name}</p>}
//             </a>
//           ))}
//         </div>
//       </div>
//       <div className="nav-footer">
//         {isExpanded && (
//           <div className="nav-details">
//             <img
//               className="nav-footer-avatar"
//               src={item.img}
//               alt=""
//               srcset=""
//             />
//             <div className="nav-footer-info">
//               <p className="nav-footer-user-name">M Showkat</p>
//               <p className="nav-footer-user-position">store admin</p>
//             </div>
//           </div>
//         )}
//         {/* <img className="logout-icon" src={} alt="" srcset="" /> */}
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
