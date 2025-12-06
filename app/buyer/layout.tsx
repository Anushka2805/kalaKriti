import NavbarBuyer from "../src/components/NavbarBuyer";

export default function BuyerLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavbarBuyer />
      {children}
    </div>
  );
}
