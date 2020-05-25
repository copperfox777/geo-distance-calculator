import React from "react";

function Navbar() {
  return (
<nav className="mynavbar">
      Distance Calculator App
  
</nav>
  );
}

export default React.memo(Navbar)
// Memoized. Rerender only on props change.