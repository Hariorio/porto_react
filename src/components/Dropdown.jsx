import { useState } from "react";
import Avatar from "./Avatar";
import Card from "./Card";
import MenuItem from "./MenuItem";
import { PrimaryButton } from "./Button";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <Avatar label="AD" onClick={() => setOpen(!open)} />

      {open && (
        <div className="absolute right-0 mt-3 w-64 z-50">
          <Card className="p-4">
            {/* Header */}
            <div className="flex items-center gap-3 mb-4">
              <Avatar label="AD" />
              <div>
                <p className="text-sm font-semibold text-slate-900">
                  SPV User
                </p>
                <p className="text-xs text-slate-500">
                  Administrator
                </p>
              </div>
            </div>

            {/* Menu */}
            <div className="space-y-1">
              <MenuItem icon="🏠" label="Home" />
              <MenuItem icon="👤" label="User Profile" />
            </div>

            {/* Logout */}
            <div className="mt-4">
              <PrimaryButton>Logout</PrimaryButton>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}


// Cara pakai di App.jsx
// import ProfileDropdown from "./components/Dropdown";

// export default function App() {
//   return (
//     <div className="p-6 flex justify-end">
//       <ProfileDropdown />
//     </div>
//   );
// }
