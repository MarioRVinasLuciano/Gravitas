import React from "react";
import current_year from "../Functions/CurrentYear";

export default function (){
    return(
<footer
  class="flex flex-col items-center text-center text-surface dark:text-black mb-6">
  <div class="w-full p-4 text-center font-pirulen">
    ©{current_year} Copyright Gravitas
  </div>
</footer>
    )
}