import { PiggyBank } from "lucide-react";
import Link from "next/link";
import React from "react";

type Props = {};

function Logo() {
  return (
    <div>
      <Link href={"/"} className="flex items-center gap-2">
        <PiggyBank className="stroke h-11 w-11 stroke-amber-500 stroke-[1.5]" />
        <p className="bg-gradient-to-r from-blue-400 to-aqua-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        OmegayonBudget
        </p>
      </Link>
    </div>
  );
}

export function LogoMobile() {
  return (
    <div>
      <Link href={"/"} className="flex items-center gap-2">
        <p className="bg-gradient-to-r from-blue-400 to-aqua-500 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent">
        OmegayonBudget
        </p>
      </Link>
    </div>
  );
}

export default Logo;
