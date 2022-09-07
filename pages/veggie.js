import pizza from "../public/pizza.jpg";
import Image from "next/image";

export default function Veggie() {
  return (
    <>
      <h1>Vegetables</h1>
      <p>
        Vegetables are green and healthy. Most kids do not like to eat them at
        first but can quickly adapt. They are part of a balanced and healthy
        nutrition.
      </p>
      <Image layout="responsive" src={pizza} alt="" />
    </>
  );
}
