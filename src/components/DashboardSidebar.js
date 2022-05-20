import React from 'react';
import { NavLink } from 'react-router-dom';

const DashboardSidebar = ({ children }) => {
    return (
        <div class="drawer drawer-mobile mt-16 bg-accent">
            <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col items-center justify-center">
                {/* <!-- Page content here --> */}
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-2" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-48 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    <li className='mb-2'>
                        <NavLink to={'/dashboard/add-service'}>Add Service</NavLink>
                    </li>

                    <li>
                        <NavLink to={'/dashboard/add-admin'}>Add Admin</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default DashboardSidebar;