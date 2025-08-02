import React from 'react';
import { MessageCircleMore, Package, ShoppingCart, Users } from 'lucide-react';

const QuickActions = () => {
  const actions = [
    {
      title: 'Messages',
      description: 'View user messages',
      icon: <MessageCircleMore className="h-6 w-6" />,
      bg: 'bg-blue-50',
      color: 'text-blue-600',
      href: '/admin/messages',
    },
    {
      title: 'Products',
      description: 'Manage inventory',
      icon: <Package className="h-6 w-6" />,
      bg: 'bg-green-50',
      color: 'text-green-600',
      href: '/admin/manageProducts',
    },
    {
      title: 'Orders',
      description: 'Process orders',
      icon: <ShoppingCart className="h-6 w-6" />,
      bg: 'bg-orange-50',
      color: 'text-orange-600',
      href: '/admin/manageOrders',
    },
    {
      title: 'Users',
      description: 'Manage user accounts',
      icon: <Users className="h-6 w-6" />,
      bg: 'bg-purple-50',
      color: 'text-purple-600',
      href: '/admin/manageUser',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto py-16 px-6">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-4">
          <Users className="h-10 w-10 text-blue-600" />
          <h1 className="text-4xl font-bold text-gray-800 ml-2">Admin Dashboard</h1>
        </div>
        <p className="text-gray-500">Manage messages, products, orders, and users all in one place.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {actions.map((action, index) => (
          <a
            key={index}
            href={action.href}
            className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md p-6 transition-all"
          >
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-full ${action.bg} ${action.color}`}>
                {action.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{action.title}</h3>
                <p className="text-sm text-gray-600">{action.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;
