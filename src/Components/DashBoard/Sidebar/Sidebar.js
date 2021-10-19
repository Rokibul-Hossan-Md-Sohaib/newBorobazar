import React, { useState } from 'react';

import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBDropDown, CDBDropDownMenu, CDBDropDownToggle, CDBContainer,CDBSelect

} from 'cdbreact';

import { NavLink } from 'react-router-dom';

const Sidebar = () => {
     const [option] = useState([
          {
            text: "Select Option",
            icon:"stack-overflow",
          },
          {
            text: "Another Option",
            icon:"reddit",
          },
          {
            text: "Option 3",
            icon:"instagram",
          },
          {
            text: "Option 4",
          },
          {
            text: "Last Option",
          },
        ]);
  return (
    <div
      style={{ display: 'flex', height: '500vh', overflow: 'scroll initial'}}
    >
      <CDBSidebar className=" sidebar" textColor="black" backgroundColor="RGB(247 ,247,247)" border = "1px solid black"
        borderRadius= "10px"
        boxShadow= "5px 5px 10px lightgray"
     
    >
     

        <CDBSidebarContent className="  sidebar-content">
          <CDBSidebarMenu>
           
          <CDBSelect selected="Options" options={option}/><br />
            <NavLink exact to="/profile" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Profile</CDBSidebarMenuItem>
   

            <CDBSelect selected="Options" options={option}/><br />
   
    

            <NavLink exact to="/tables" activeClassName="activeClicked">
    <CDBSidebarMenuItem icon="table">Table</CDBSidebarMenuItem>
            </NavLink><br />

            <CDBSelect selected="Options" options={option}/><br />
     
            <NavLink exact to="/lock" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="lock">Lock</CDBSidebarMenuItem>
            </NavLink><br />

            <CDBSelect selected="Options" options={option}/><br />

            <CDBSelect selected="Options" options={option}/>

   
            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Dashboard</CDBSidebarMenuItem>
            </NavLink><br />

            <CDBSelect selected="Options" options={option}/><br />
            <NavLink exact to="/map" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="map">Map</CDBSidebarMenuItem>
            </NavLink><br />
       <CDBSelect selected="Options" options={option}/><br />
   
            </NavLink>
            <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">
                Analytics
              </CDBSidebarMenuItem>
            </NavLink>

            <NavLink
              exact
              to="/hero404"
              target="_blank"
              activeClassName="activeClicked"
            >
              <CDBSidebarMenuItem icon="exclamation-circle">
                404 page
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
        

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
            Sidebar Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;