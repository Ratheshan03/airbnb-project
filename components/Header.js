import Image from "next/image";

function Header() {
  return (
    <div>
      <h1>Hello header</h1>
      {/* Left side */}
      <div>
        <Image
          src="https://links.papareact.com/qd3"
          fill
          className="object-contain object-left"
        />
      </div>
      {/* middle */}
      <div></div>
      {/* Rigth side */}
      <div></div>
    </div>
  );
}

export default Header;
