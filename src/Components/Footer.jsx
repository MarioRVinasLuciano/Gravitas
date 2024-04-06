import React from "react";
import current_year from "../Functions/CurrentYear";

export function Footer() {
    return(
      
<footer
  class="flex flex-col items-center text-center text-black pb-6 pt-10">
    <hr className="h-2 w-2/3 bg-grey-400"/>
  <div class="w-full p-4 text-center font-pirulen">
    ©{current_year} Copyright Gravitas
  </div>
</footer>
    )
}