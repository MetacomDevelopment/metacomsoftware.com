import React from 'react';
import { Link } from 'gatsby';

const ListSidebar = () => (
  <div className="lg:h-full">
    <div className="space-y-6 lg:sticky lg:top-44 lg:bottom-96">
      <h2 className="text-center">Recruiting Industries</h2>
      <div className="bg-blueGray-600 p-3 lg:p-5 rounded-xl shadow-xl">
        <ul className="space-y-3 divide-y">
          <li>
            <Link to="/medical-device-biotechnology/">
              <h3 className="font-normal text-accent hover:text-yellow-600">
                Medical Device & Biotechnology
              </h3>
            </Link>
          </li>
          <li className="pt-2">
            <Link to="/it-technology/">
              <h3 className="font-normal text-accent hover:text-yellow-600">
                Information Technology (IT)
              </h3>
            </Link>
          </li>
          <li className="pt-2">
            <Link to="/civil-structural-engineering/">
              <h3 className="font-normal text-accent hover:text-yellow-600">
                Civil & Structural Engineering
              </h3>
            </Link>
          </li>
          <li className="pt-2">
            <Link to="/manufacturing/">
              <h3 className="font-normal text-accent hover:text-yellow-600">
                Manufacturing
              </h3>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default ListSidebar;
