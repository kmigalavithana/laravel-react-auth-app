import React from "react";

const sidebarLinks = [
  { name: "Home", icon: "🏠" },
  { name: "Analytics", icon: "📊" },
  { name: "Orders", icon: "🛒" },
  { name: "Products", icon: "🎁" },
  { name: "Settings", icon: "⚙️" },
];

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg flex flex-col">
        <div className="h-16 flex items-center justify-center font-bold text-xl text-blue-600 border-b">
          MyDashboard
        </div>
        <nav className="flex-1 px-4 py-8">
          <ul>
            {sidebarLinks.map((link) => (
              <li key={link.name} className="mb-3">
                <a
                  href="#"
                  className="flex items-center px-3 py-2 rounded-lg hover:bg-blue-50 transition-colors text-gray-700 font-medium"
                >
                  <span className="text-xl mr-3">{link.icon}</span>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t">
          <button className="w-full flex items-center justify-center px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2 text-blue-500">👤</span>
            <div className="text-xl font-semibold">Users</div>
            <div className="mt-1 text-lg text-gray-500">1,234</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2 text-green-500">💰</span>
            <div className="text-xl font-semibold">Sales</div>
            <div className="mt-1 text-lg text-gray-500">$9,876</div>
          </div>
          <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center">
            <span className="text-3xl mb-2 text-purple-500">📦</span>
            <div className="text-xl font-semibold">Orders</div>
            <div className="mt-1 text-lg text-gray-500">456</div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
