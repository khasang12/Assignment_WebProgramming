import React from 'react';
import * as FaIcons from "react-icons/fa";
import avatar from "../../assets/avatar.jpg"

function Settings({navbarAdmin}) {
  return (
    <div className={"px-5 pt-2 "+(navbarAdmin?"fade":"")}>
      <h1>Thông tin cá nhân</h1>
      <div className="mt-5 flex flex-column text-center text-md-start col-12 col-lg-12">
        <div className="card d-flex flex-column flex-md-row col-12 col-lg-6">
          <img src={avatar} className="img-fluid mx-auto d-block card-header w-50 h-50 col-md-4" alt="dsadsa"/>
          
          <div class="card-body">
            <h1 class="card-title p-2">Admin</h1>
            <h3 class="card-text p-2">Admin 1 at BKZone</h3>
            <p class="card-text p-2">Email: admin@admin.com</p>
            <p class="card-text p-2">Phone: (+84) 0782 041 297</p>
            <p class="card-text p-2"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;