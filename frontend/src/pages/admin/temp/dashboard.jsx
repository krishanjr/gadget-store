
// import { AdminRoute, UserRoute } from "./components/ProtectedRoute";

import ManageOrders from './manageOrders'
import ManageUsers from './manageUser'
import ManageProducts from './manageProducts'
import ProductForm from './ProductForm'
import ManageMessages from './manageMessage'

import React from 'react';
import { MessageCircleMore, Package, ShoppingCart, Users } from 'lucide-react';

const QuickActions = ({ handleNavigation }) => {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <a href='/admin/messages'
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow text-left w-64"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-blue-50 text-blue-600">
              <MessageCircleMore className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Message</h3>
              <p className="text-sm text-gray-600">View messages</p>
            </div>
          </div>
        </a>

        <a href='/admin/manageProducts'
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow text-left w-64"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-green-50 text-green-600">
              <Package className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Products</h3>
              <p className="text-sm text-gray-600">Manage inventory</p>
            </div>
          </div>
        </a>

        <a href='/admin/manageOrders'
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow text-left w-64"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-orange-50 text-orange-600">
              <ShoppingCart className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Orders</h3>
              <p className="text-sm text-gray-600">Process orders</p>
            </div>
          </div>
        </a>

        <a href='/admin/manageUser'
          className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow text-left w-64"
        >
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-purple-50 text-purple-600">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Users</h3>
              <p className="text-sm text-gray-600">Manage users</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default QuickActions;