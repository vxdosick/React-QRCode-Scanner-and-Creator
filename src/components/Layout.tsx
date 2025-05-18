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
            <li>
              <Link to={"/"}>Create</Link>
            </li>
            <li>
              <Link to={"/scan-qrcode"}>Scan</Link>
            </li>
            <li>
              <Link to={"/history"}>History</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="w-[260px]">
        <div className="text-pink-500">{children}</div>
      </main>
      <footer className="text-pink-500 py-3.5 border-t border-pink-500 ">
        <div className="flex flex-col items-center">
          <a className="logo" href="/">
            vxdosick
          </a>
          <p>Strength in consistency</p>
          <p>&copy; {new Date().getFullYear()}</p>
        </div>
      </footer>
    </div>
  );
};
