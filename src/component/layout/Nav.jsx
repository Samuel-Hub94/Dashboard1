import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, Table, theme } from 'antd';
import SearchInput from '../ui/SearchInput';
import avatar from '../../assets/img.png';
import CardComponent from '../ui/Card';
import { MehOutlined, MergeCellsOutlined, SafetyOutlined } from '@ant-design/icons';
import TableComponent from '../ui/TableComponent';


const { Header, Sider, Content } = Layout;

const Nav = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className='h-screen w-screen'>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <h1 className="text-2xl font-bold text-white p-6">V-Dashboard</h1>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            { key: '1', icon: <UserOutlined />, label: 'Dashboard' },
            { key: '2', icon: <VideoCameraOutlined />, label: 'UI elements' },
            { key: '3', icon: <UploadOutlined />, label: 'Tables' },
            { key: '4', icon: <UserOutlined />, label: 'Forms' },
            { key: '5', icon: <UserOutlined />, label: 'Card' },
            { key: '6', icon: <UserOutlined />, label: 'Modal' },
            { key: '7', icon: <UserOutlined />, label: 'Blank' },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: '0 24px',
            background: "white",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={{
                fontSize: '16px',
                width: 64,
                height: 64,
              }}
            />
            <div className='ml-4'>
              <SearchInput />
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <BellOutlined style={{ fontSize: '24px', marginRight: '24px' }} />
            <div className="w-[50px] h-[50px] rounded-full">
              <img src={avatar} alt="User Avatar" className="w-full h-full rounded-full" />
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '0px 10px',
            padding: 14,
            minHeight: 280,
            background: "whitesmoke",
            borderRadius: borderRadiusLG,
          }}
        >
          <div>Dashboard</div>
          <div className='h-screan w-screen'>
          <div className='mt-4 mb-3 flex gap-20'>
            <CardComponent
              Icon={<MehOutlined />}
              CardData="8,282"
              CardTitle="New Users"
              iconBgColor="bg-red-300" // Only the icon's background color changes
            />
            <CardComponent
              Icon={<MergeCellsOutlined />}
              CardData="200,521"
              CardTitle="Total Orders"
              iconBgColor="bg-blue-300"
            />
            <CardComponent
              Icon={<SafetyOutlined />}
              CardData="215,542"
              CardTitle="Available Products"
              iconBgColor="bg-green-300"
            />
          </div>
          <div>
            <TableComponent/>
            </div>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Nav;



// import React, { useState } from 'react';
// import {
//   MenuFoldOutlined,
//   MenuUnfoldOutlined,
//   UploadOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
//   BellOutlined,
// } from '@ant-design/icons';
// import { Button, Layout, Menu, theme } from 'antd';
// import SearchInput from '../ui/SearchInput';
// import avatar from '../../assets/img.png';
// import CardComponent from '../ui/Card';
// import { MehOutlined, MergeCellsOutlined, SafetyOutlined } from '@ant-design/icons';
// import TableComponent from '../ui/TableComponent';

// const { Header, Sider, Content } = Layout;

// const Nav = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const {
//     token: { colorBgContainer, borderRadiusLG },
//   } = theme.useToken();

//   return (
//     <Layout className='h-screen w-screen'>
//       <Sider trigger={null} collapsible collapsed={collapsed}>
//         <div className="demo-logo-vertical" />
//         <h1 className="text-2xl font-bold text-white p-6">V-Dashboard</h1>
//         <Menu
//           theme="dark"
//           mode="inline"
//           defaultSelectedKeys={['1']}
//           items={[
//             { key: '1', icon: <UserOutlined />, label: 'Dashboard' },
//             { key: '2', icon: <VideoCameraOutlined />, label: 'UI elements' },
//             { key: '3', icon: <UploadOutlined />, label: 'Tables' },
//             { key: '4', icon: <UserOutlined />, label: 'Forms' },
//             { key: '5', icon: <UserOutlined />, label: 'Card' },
//             { key: '6', icon: <UserOutlined />, label: 'Modal' },
//             { key: '7', icon: <UserOutlined />, label: 'Blank' },
//           ]}
//         />
//       </Sider>
//       <Layout>
//         <Header
//           style={{
//             padding: '0 24px',
//             background: "white",
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'space-between',
//           }}
//         >
//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <Button
//               type="text"
//               icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
//               onClick={() => setCollapsed(!collapsed)}
//               style={{
//                 fontSize: '16px',
//                 width: 64,
//                 height: 64,
//               }}
//             />
//             <div className='ml-4'>
//               <SearchInput />
//             </div>
//           </div>

//           <div style={{ display: 'flex', alignItems: 'center' }}>
//             <BellOutlined style={{ fontSize: '24px', marginRight: '24px' }} />
//             <div className="w-[50px] h-[50px] rounded-full">
//               <img src={avatar} alt="User Avatar" className="w-full h-full rounded-full" />
//             </div>
//           </div>
//         </Header>
//         <Content
//         style={{
//           margin: '24px 16px',
//           padding: 2,
//           minHeight: 280,
//           background: "whitesmoke",
//           borderRadius: borderRadiusLG,
//         }}
//       >
//         <div>Dashboard</div>
//         <div className='h-screen w-screen'>
//           <div className='mt-2 flex justify-'>
//             <CardComponent
//               Icon={<MehOutlined />}
//               CardData="8,282"
//               CardTitle="New Users"
//               iconBgColor="bg-red-300"
//             />
//             <CardComponent
//               Icon={<MergeCellsOutlined />}
//               CardData="200,521"
//               CardTitle="Total Orders"
//               iconBgColor="bg-blue-300"
//             />
//             <CardComponent
//               Icon={<SafetyOutlined />}
//               CardData="215,542"
//               CardTitle="Available Products"
//               iconBgColor="bg-green-300"
//             />
//           </div>
//           <div>
//             <TableComponent />
//           </div>
//         </div>
//       </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default Nav;
