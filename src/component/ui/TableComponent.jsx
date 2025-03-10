
// const data = [
//   {
//     name: 'Lindsay Walton',
//     email: 'lindsay.walton@example.com',
//     title: 'Front-end Developer',
//     department: 'Optimization',
//     status: 'Active',
//     role: 'Member',
//     image: 'https://via.placeholder.com/40',
//   },
//   {
//     name: 'Courtney Henry',
//     email: 'courtney.henry@example.com',
//     title: 'Designer',
//     department: 'Intranet',
//     status: 'Active',
//     role: 'Admin',
//     image: 'https://via.placeholder.com/40',
//   },
//   {
//     name: 'Tom Cook',
//     email: 'tom.cook@example.com',
//     title: 'Director of Product',
//     department: 'Directives',
//     status: 'Active',
//     role: 'Member',
//     image: 'https://via.placeholder.com/40',
//   },
//   {
//     name: 'Whitney Francis',
//     email: 'whitney.francis@example.com',
//     title: 'Copywriter',
//     department: 'Program',
//     status: 'Active',
//     role: 'Admin',
//     image: 'https://via.placeholder.com/40',
//   },
//   {
//     name: 'Leonard Krasner',
//     email: 'leonard.krasner@example.com',
//     title: 'Senior Designer',
//     department: 'Mobility',
//     status: 'Active',
//     role: 'Owner',
//     image: 'https://via.placeholder.com/40',
//   },
//   {
//     name: 'Floyd Miles',
//     email: 'floyd.miles@example.com',
//     title: 'Principal Designer',
//     department: 'Security',
//     status: 'Active',
//     role: 'Member',
//     image: 'https://via.placeholder.com/40',
//   },
// ];

// const TableComponent = () => {
//   return (
//     <div className="flex flex-col">
//       <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
//         <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
//           <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
//             <table className="min-w-full divide-y divide-gray-200">
//               <thead className="bg-gray-50">
//                 <tr>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Name
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Title
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Status
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
//                   >
//                     Role
//                   </th>
//                   <th scope="col" className="relative px-6 py-3">
//                     <span className="sr-only">Edit</span>
//                   </th>
//                 </tr>
//               </thead>
//               <tbody className="bg-white divide-y divide-gray-200">
//                 {data.map((person) => (
//                   <tr key={person.email}>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <div className="flex-shrink-0 h-10 w-10">
//                           <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
//                         </div>
//                         <div className="ml-4">
//                           <div className="text-sm font-medium text-gray-900">{person.name}</div>
//                           <div className="text-sm text-gray-500">{person.email}</div>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-900">{person.title}</div>
//                       <div className="text-sm text-gray-500">{person.department}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
//                         {person.status}
//                       </span>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
//                       <a href="#" className="text-indigo-600 hover:text-indigo-900">
//                         Edit
//                       </a>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TableComponent;

import React from 'react';
import { Table, Tag, Avatar } from 'antd';

const data = [
  {
    key: '1',
    name: 'Lindsay Walton',
    email: 'lindsay.walton@example.com',
    title: 'Front-end Developer',
    department: 'Optimization',
    status: 'Active',
    role: 'Member',
    image: 'https://via.placeholder.com/40',
  },
  {
    key: '2',
    name: 'Courtney Henry',
    email: 'courtney.henry@example.com',
    title: 'Designer',
    department: 'Intranet',
    status: 'Active',
    role: 'Admin',
    image: 'https://via.placeholder.com/40',
  },
  {
    key: '3',
    name: 'Tom Cook',
    email: 'tom.cook@example.com',
    title: 'Director of Product',
    department: 'Directives',
    status: 'Active',
    role: 'Member',
    image: 'https://via.placeholder.com/40',
  },
  {
    key: '4',
    name: 'Whitney Francis',
    email: 'whitney.francis@example.com',
    title: 'Copywriter',
    department: 'Program',
    status: 'Active',
    role: 'Admin',
    image: 'https://via.placeholder.com/40',
  },
  {
    key: '5',
    name: 'Leonard Krasner',
    email: 'leonard.krasner@example.com',
    title: 'Senior Designer',
    department: 'Mobility',
    status: 'Active',
    role: 'Owner',
    image: 'https://via.placeholder.com/40',
  },
  {
    key: '6',
    name: 'Floyd Miles',
    email: 'floyd.miles@example.com',
    title: 'Principal Designer',
    department: 'Security',
    status: 'Active',
    role: 'Member',
    image: 'https://via.placeholder.com/40',
  },
];

const TableComponent = () => {
  return (
    <div className="flex flex-col" style={{ width: '78%' }}> {/* Adjust the width percentage as needed */}
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Role
                  </th>
                  <th scope="col" className="relative px-2 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.map((person) => (
                  <tr key={person.email}>
                    <td className="px-6 py-1 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src={person.image} alt="" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{person.name}</div>
                          <div className="text-sm text-gray-500">{person.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-3 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{person.title}</div>
                      <div className="text-sm text-gray-500">{person.department}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        {person.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{person.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="#" className="text-indigo-600 hover:text-indigo-900">
                        Edit
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableComponent;
