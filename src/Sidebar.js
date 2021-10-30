import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import { Avatar, IconButton } from '@material-ui/core';     //this is used to add avatar and icon button
import DonutLargeIcon from '@material-ui/icons/DonutLarge';      //adding icons to the project
import ChatIcon from '@material-ui/icons/Chat';                  //adding icons to the project
import MoreVertIcon from '@material-ui/icons/MoreVert';          //adding icons to the project
import { SearchOutlined } from '@material-ui/icons';
import SidebarChat from './SidebarChat';
import db from './Firebase';
import { useStateValue } from './StateProvider';


function Sidebar() {
    //here we installed @material-ui/core to add avatar and then installed @material-ui/icons at terminal to add any icon(s) 
    //on your site like setting icon and some icons are shown below and google it for more examples
    //Avatar s used to add avatar to the site with <Avatar> tag
    //icon button is used to add cliking fuctionality to the icons or it makes an icon a button


    const [rooms, setRooms] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        const unsubscribe = db.collection('rooms').onSnapshot((snapshot) => (
            setRooms(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            }))) 
        ))

        return () => {
            unsubscribe();
        };
        
    }, []);
    return (

        <div className="sidebar">
           <div className="sidebar__header">
               <Avatar src={user?.photoURL} />
               <div className="sidebar__headerRight">
                   <IconButton>
                      <DonutLargeIcon />
                      </IconButton>
                   <IconButton>
                       <ChatIcon />
                   </IconButton>
                   <IconButton>
                      <MoreVertIcon />
                   </IconButton>
               </div>
           </div>
           <div className="sidebar__search">
               <div className="sidebar__searchContainer">
                  <SearchOutlined />
                  <input placeholder="Search or start new chat" type="text" />
               </div>
               
           </div>
           <div className="sidebar__chats">
               <SidebarChat addNewChat />
               {rooms.map((room) =>(
                   <SidebarChat key={room.id} id={room.id} name={room.data.name} />
               ))}
           </div>
            
        </div>
    )
}

export default Sidebar
