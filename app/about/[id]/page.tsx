"use client";

import { Button } from "@/components/ui/button";
import { useParams } from "next/navigation";

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

export default function Page() {
  const id = useParams().id;
  const prod = products.find((p) => p.id.toString() === id);
  return (
    <>
      {prod && (
        <ul>
          <li>{prod.name}</li>
          <li>{prod.description}</li>
          <li>{prod.price}€</li>
          <li>
            <Button onClick={() => console.log("ajouté")}>Ajouter</Button>
          </li>
        </ul>
      )}
    </>
  );
}
