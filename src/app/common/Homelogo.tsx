import Link from "next/link";
import Minilogo from "../assets/Ico/minilogo";
import { NextPage } from "next";
interface Props {
  position: string;
}

const Homelogo: NextPage<Props> = ({ position }) => (
  <div className={position}>
    <Link href="/home">
      <Minilogo />
    </Link>
  </div>
);

export default Homelogo;
