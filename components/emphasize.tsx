import { Children, Fragment, type ReactNode } from "react";

const NUMBER = /(\d+(?:[  .,]\d+)*(?:\s?[%€])?)/g;

/** Met en gras les chiffres d'un texte pour faire ressortir les ordres de grandeur. */
export function emphasize(node: ReactNode): ReactNode {
  return Children.map(node, (child) => {
    if (typeof child === "string") {
      return child.split(NUMBER).map((part, i) =>
        i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>,
      );
    }
    return child;
  });
}
