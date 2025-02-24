import { useState } from 'react';
import { IoIosNotifications } from "react-icons/io";

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  

  return (
    <li className="relative flex">
      <button
        onClick={() => {
          setDropdownOpen(!dropdownOpen);
        }}
        to="#"
        className="flex items-center"
      >
        <IoIosNotifications className='text-2xl text-slate-700 flex transition-all duration-300 hover:scale-110'/>
      </button>

      {dropdownOpen && (
        <div className="absolute -right-27 mt-12 flex h-90 w-75 flex-col rounded-xl shadow-slate-700/30 text-slate-700 shadow-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 p-5">
          <div className="px-4.5 py-3">
            <h5 className="text-sm font-medium text-bodydark2">Notification</h5>
          </div>

          <ul className="flex h-auto flex-col overflow-y-auto">
            <li>
              <button className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4" to="#">
                <p className="text-sm">
                  <span className="text-black dark:text-white">Edit your information in a swipe</span> Sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.
                </p>
                <p className="text-xs">12 May, 2025</p>
              </button>
            </li>
            <li>
              <button className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4" to="#">
                <p className="text-sm">
                  <span className="text-black dark:text-white">It is a long established fact</span> that a reader will be distracted by the readable.
                </p>
                <p className="text-xs">24 Feb, 2025</p>
              </button>
            </li>
            <li>
              <button className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4" to="#">
                <p className="text-sm">
                  <span className="text-black dark:text-white">There are many variations</span> of passages of Lorem Ipsum available, but the majority have suffered
                </p>
                <p className="text-xs">04 Jan, 2025</p>
              </button>
            </li>
            <li>
              <button className="flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 hover:bg-gray-2 dark:border-strokedark dark:hover:bg-meta-4" to="#">
                <p className="text-sm">
                  <span className="text-black dark:text-white">There are many variations</span> of passages of Lorem Ipsum available, but the majority have suffered
                </p>
                <p className="text-xs">01 Dec, 2024</p>
              </button>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
};

export default DropdownNotification;
