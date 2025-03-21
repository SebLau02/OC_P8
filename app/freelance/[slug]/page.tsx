import { notFound } from "next/navigation";
import { ReactElement } from "react";

interface SectionTypes {
  title: string;
  content: string;
}
interface ArticlesTypes {
  title: string;
  sections: SectionTypes[];
  intro: string;
  conclusion: string;
}

const articles: Record<string, ArticlesTypes> = {
  "avantages-site-web": {
    title: "Pourquoi avoir un site web ?",
    sections: [
      {
        title: "Augmentation de la Visibilité",
        content:
          "Un site web permet à votre entreprise d'être visible 24h/24 et 7j/7. Les clients potentiels peuvent trouver vos produits ou services à tout moment, ce qui augmente vos chances de conversion.",
      },
      {
        title: "Crédibilité et Confiance",
        content:
          "Un site web professionnel renforce la crédibilité de votre entreprise. Il montre que vous êtes sérieux et engagé dans votre activité, ce qui peut inspirer confiance à vos clients.",
      },
      {
        title: "Accessibilité et Confort",
        content:
          "Un site web permet à vos clients d'accéder facilement à vos informations, produits et services depuis n'importe quel appareil. Cela améliore leur expérience et leur satisfaction.",
      },
      {
        title: "Marketing et SEO",
        content:
          "Un site web optimisé pour le référencement naturel (SEO) peut attirer plus de visiteurs grâce à une meilleure visibilité sur les moteurs de recherche. Cela peut augmenter votre trafic organique et vos opportunités de conversion.",
      },
    ],
    intro:
      "Dans le monde numérique d'aujourd'hui, avoir un site web est devenu indispensable pour toute entreprise souhaitant se démarquer et atteindre un public plus large. Un site web bien conçu peut offrir de nombreux avantages, allant de l'amélioration de la visibilité à l'augmentation des ventes. Découvrez pourquoi il est crucial d'avoir un site web pour votre entreprise.",
    conclusion:
      "Avoir un site web est essentiel pour toute entreprise moderne. Il augmente votre visibilité, renforce votre crédibilité, améliore l'accessibilité pour vos clients et offre des opportunités de marketing efficaces. Ne manquez pas cette chance de booster votre présence en ligne et de développer votre entreprise.",
  },
  "no-code-vs-dev": {
    title: "Développement sur mesure vs No-Code",
    sections: [
      {
        title: "Personnalisation Totale",
        content:
          "Le développement sur mesure permet de créer un site web entièrement personnalisé selon vos besoins spécifiques. Vous n'êtes pas limité par les fonctionnalités ou les designs prédéfinis des solutions No-Code.",
      },
      {
        title: "Performance Optimisée",
        content:
          "Un site web sur mesure est optimisé pour offrir des performances maximales. Les développeurs peuvent ajuster chaque aspect du site pour garantir une vitesse de chargement rapide et une expérience utilisateur fluide.",
      },
      {
        title: "Évolutivité",
        content:
          "Les sites web sur mesure sont plus faciles à faire évoluer. Vous pouvez ajouter de nouvelles fonctionnalités ou modifier le design sans être limité par les contraintes des plateformes No-Code.",
      },
      {
        title: "Sécurité Renforcée",
        content:
          "Le développement sur mesure permet d'intégrer des mesures de sécurité spécifiques à votre site web. Cela peut offrir une protection supplémentaire contre les vulnérabilités et les attaques.",
      },
    ],
    intro:
      "Lorsqu'il s'agit de créer un site web, vous avez le choix entre le développement sur mesure et les solutions No-Code. Bien que les deux options aient leurs avantages, le développement sur mesure offre des bénéfices uniques qui peuvent faire une réelle différence pour votre entreprise. Découvrez pourquoi opter pour un développement sur mesure peut être la meilleure décision.",
    conclusion:
      "Bien que les solutions No-Code puissent sembler attrayantes pour leur simplicité, le développement sur mesure offre des avantages significatifs en termes de personnalisation, de performance, d'évolutivité et de sécurité. Investir dans un site web sur mesure peut offrir un retour sur investissement à long terme et aider votre entreprise à se démarquer de la concurrence.",
  },
  "importance-maintenance": {
    title: "L'Importance de la Maintenance de Votre Site Web",
    sections: [
      {
        title: "Sécurité",
        content:
          "Les mises à jour régulières des plugins et du CMS peuvent aider à protéger votre site contre les vulnérabilités et les attaques.",
      },
      {
        title: "Performance",
        content:
          "La maintenance régulière peut améliorer la vitesse de chargement de votre site, ce qui est crucial pour l'expérience utilisateur et le référencement.",
      },
      {
        title: "Compatibilité",
        content:
          "Les navigateurs et les appareils évoluent constamment. La maintenance permet de s'assurer que votre site reste compatible avec les dernières technologies.",
      },
      {
        title: "Contenu à Jour",
        content:
          "Un site web avec du contenu à jour est plus attrayant pour les visiteurs et peut améliorer votre référencement.",
      },
    ],
    intro:
      "La création d'un site web n'est que la première étape. La maintenance régulière est essentielle pour garantir que votre site reste performant, sécurisé et à jour. Découvrez pourquoi la maintenance de votre site web est cruciale.",
    conclusion:
      "La maintenance régulière de votre site web est essentielle pour garantir sa sécurité, sa performance, sa compatibilité et la pertinence de son contenu. Ne négligez pas cette étape cruciale pour le succès de votre présence en ligne.",
  },
  "benefices-ecommerce": {
    title: "Les Avantages d'un Site E-commerce",
    sections: [
      {
        title: "Accessibilité 24/7",
        content:
          "Un site e-commerce permet à vos clients d'acheter vos produits à tout moment, augmentant ainsi vos opportunités de vente.",
      },
      {
        title: "Réduction des Coûts",
        content:
          "Les coûts opérationnels d'un site e-commerce sont souvent inférieurs à ceux d'un magasin physique.",
      },
      {
        title: "Expansion du Marché",
        content:
          "Un site e-commerce vous permet de toucher une audience mondiale, élargissant ainsi votre marché potentiel.",
      },
      {
        title: "Analyse des Données",
        content:
          "Les outils d'analyse intégrés permettent de suivre les comportements des clients et d'optimiser vos stratégies de vente.",
      },
    ],
    intro:
      "Dans un monde de plus en plus connecté, avoir un site e-commerce peut offrir de nombreux avantages à votre entreprise. Découvrez comment un site e-commerce peut booster vos ventes et améliorer votre présence en ligne.",
    conclusion:
      "Un site e-commerce offre une accessibilité 24/7, réduit les coûts opérationnels, permet une expansion du marché et fournit des outils d'analyse précieux. Ne manquez pas l'opportunité de booster vos ventes en ligne.",
  },
  "importance-design-responsive": {
    title: "L'Importance du Design Responsive",
    sections: [
      {
        title: "Amélioration de l'Expérience Utilisateur",
        content:
          "Un design responsive garantit que votre site est accessible et agréable à utiliser sur tous les appareils, améliorant ainsi l'expérience utilisateur.",
      },
      {
        title: "Augmentation du Trafic Mobile",
        content:
          "Avec l'augmentation de l'utilisation des smartphones, un design responsive peut attirer plus de visiteurs mobiles.",
      },
      {
        title: "Meilleur Référencement",
        content:
          "Google privilégie les sites mobiles dans ses résultats de recherche. Un design responsive peut donc améliorer votre SEO.",
      },
      {
        title: "Réduction des Taux de Rebond",
        content:
          "Un site bien adapté aux différents écrans réduit les taux de rebond, gardant les visiteurs plus longtemps sur votre site.",
      },
    ],
    intro:
      "Le design responsive est devenu un élément crucial pour tout site web moderne. Découvrez pourquoi il est essentiel d'adopter un design responsive pour votre site.",
    conclusion:
      "Un design responsive améliore l'expérience utilisateur, augmente le trafic mobile, améliore le référencement et réduit les taux de rebond. Assurez-vous que votre site est accessible et agréable à utiliser sur tous les appareils.",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogArticle({
  params,
}: Readonly<PageProps>): Promise<ReactElement> {
  const slug = (await params).slug;
  const article = articles[slug];

  if (!article) return notFound();

  return (
    <article className=" max-w-5xl mx-auto px-6 py-8 md:px-16">
      <h1 className="text-4xl font-bold text-secondary-12 mb-6">
        {article.title}
      </h1>
      <p className="text-lg leading-relaxed mb-6">{article.intro}</p>
      <div className="space-y-8">
        {article.sections.map((section, i) => (
          <section key={i} className="border-l-4 border-secondary-12 pl-4">
            <h2 className="text-2xl font-semibold mb-2">{section.title}</h2>
            <p className="leading-relaxed">{section.content}</p>
          </section>
        ))}
      </div>
      <p className="mt-11 text-lg font-semibold text-secondary-12">
        {article.conclusion}
      </p>
    </article>
  );
}
