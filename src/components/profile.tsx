import Image from "next/image";

export default function Profile() {
  return (
    <Image
      src="https://i.imgur.com/MK3eW3Am.jpg"
      alt="Katherine Johnson"
      width={100}
      height={100}
      style={{ margin: "13px" }}
    />
  );
}
