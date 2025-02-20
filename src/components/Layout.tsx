import { ReactNode } from "react";
import { Link } from "react-router-dom";
type Props = {
  children?: ReactNode;
};
export const Layout = ({ children }: Props) => {
  return (
    <div className="wrapper main max-w-[1170px] my-[50px] flex flex-col items-center mx-auto gap-[30px]">
      <header className="border-b border-pink-500 w-[260px] py-[5px]">
        <nav>
            <ul className="flex justify-between items-center">
                <li><Link to={'/react-ts-tailwind-qrcode'}>Create</Link></li>
                <li><Link to={'/react-ts-tailwind-qrcode/scan-qrcode'}>Scan</Link></li>
                <li><Link to={'/react-ts-tailwind-qrcode/history'}>History</Link></li>
            </ul>
        </nav>
      </header>
      <main className="w-[260px]">
        <div className="text-pink-500">
          {children}
        </div>
      </main>
    </div>
  );
};
