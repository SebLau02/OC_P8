"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const products = [
  {
    id: 1,
    name: "T-shirt 100% coton",
    description: "Un t-shirt confortable en coton de haute qualité.",
    price: 19.99,
  },
  {
    id: 2,
    name: "Casque Bluetooth",
    description: "Casque audio sans fil avec réduction de bruit.",
    price: 59.99,
  },
  {
    id: 3,
    name: "Montre connectée",
    description: "Montre avec suivi d'activité et notifications.",
    price: 129.99,
  },
  {
    id: 4,
    name: "Sac à dos étanche",
    description:
      "Sac à dos durable et étanche pour vos aventures en extérieur.",
    price: 49.99,
  },
];

const Hello = () => {
  const router = useRouter();

  return (
    <>
      {products.map((prod, i) => (
        <div
          key={i}
          className="border border-custom p-2 w-fit rounded-sm my-2 mx-auto"
        >
          <ul>
            <li>{prod.name}</li>
            <li>{prod.description}</li>
            <li>{prod.price}€</li>
            <li>
              <Button onClick={() => router.push("/about/" + prod.id)}>
                Voir
              </Button>
            </li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Hello;
