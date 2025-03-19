import { notFound } from "next/navigation";

interface SectionTypes {
  title: string;
  body: string;
}
interface ArticlesTypes {
  main_title: string;
  sections: SectionTypes[];
  intro: string;
}
const articles: Record<string, ArticlesTypes> = {
  "avantages-site-web": {
    main_title: "Pourquoi avoir un site web ?",
    intro:
      "Dans le monde numérique d'aujourd'hui, avoir un site web est devenu indispensable pour toute entreprise ou professionnel souhaitant se démarquer et atteindre un public plus large. Voici quelques raisons convaincantes pour lesquelles un site web est essentiel :",
    sections: [
      {
        title: "Amélioration de la Visibilité",
        body: "Un site web bien conçu et optimisé pour les moteurs de recherche (SEO) peut considérablement améliorer votre visibilité en ligne. Selon une étude, 90% du trafic sur le web provient de Google, ce qui montre l'importance d'être bien référencé sur ce moteur de recherche1. De plus, un site web vous permet d'être accessible 24h/24 et 7j/7, ce qui n'est pas toujours possible avec un magasin physique.",
      },
      {
        title: "Crédibilité et Confiance",
        body: "Avoir un site web professionnel renforce votre crédibilité auprès de vos clients potentiels. Un site sécurisé (HTTPS) est particulièrement important, car 82% des internautes ne cliquent jamais sur un site non sécurisé2. Un site web bien conçu, avec des témoignages clients et des informations détaillées sur vos services ou produits, peut instaurer un climat de confiance et encourager les visiteurs à faire affaire avec vous.",
      },
      {
        title: "Augmentation des Ventes",
        body: "Un site web peut directement contribuer à l'augmentation de vos ventes. Les entreprises qui investissent dans leur propre site web génèrent jusqu’à 25% de ventes supplémentaires grâce à cette présence digitale3. De plus, les sites web adaptés aux mobiles génèrent 40% plus de conversions, ce qui montre l'importance d'avoir un site responsive.",
      },
      {
        title: "Accessibilité et Confort pour les Clients",
        body: "Un site web permet à vos clients d'accéder facilement à vos produits ou services, où qu'ils soient et à tout moment. Plus de 50% de toutes les ventes en e-commerce sont effectuées via des appareils mobiles, ce qui montre l'importance d'avoir un site optimisé pour les smartphones et tablettes",
      },
      {
        title: "Analyse et Optimisation",
        body: "Avec un site web, vous pouvez facilement analyser le comportement de vos visiteurs grâce à des outils comme Google Analytics. Ces données vous permettent d'optimiser votre site en fonction des préférences de vos utilisateurs et d'améliorer continuellement leur expérience",
      },
      {
        title: "Conclusion",
        body: "En résumé, avoir un site web est crucial pour toute entreprise ou professionnel souhaitant se développer dans le monde numérique. Il améliore votre visibilité, renforce votre crédibilité, augmente vos ventes, offre un confort d'accès à vos clients et vous permet d'analyser et d'optimiser vos performances. <br />Ne manquez pas cette opportunité de booster votre présence en ligne et de développer votre activité. Contactez-moi dès aujourd'hui pour discuter de votre projet et démarrer la création de votre site web sur mesure. Ensemble, faisons de votre vision une réalité digitale !.",
      },
    ],
  },
  "no-code-vs-dev": {
    main_title: "No-Code vs Développement Traditionnel : Comment Choisir ?",
    intro:
      "Dans le monde du développement de logiciels, deux approches se distinguent : le no-code et le développement traditionnel (ou 'full code'). Chacune a ses avantages et ses inconvénients, et le choix entre les deux dépend de vos besoins spécifiques, de vos ressources et de vos objectifs. Voici un aperçu pour vous aider à faire un choix éclairé.",
    sections: [
      {
        title: "Qu'est-ce que le No-Code ?",
        body: "Le no-code est une approche de développement qui permet de créer des applications sans écrire une seule ligne de code. À la place, les utilisateurs utilisent des interfaces visuelles, des modèles préconçus et des fonctionnalités de glisser-déposer pour construire leurs applications. Cette méthode est particulièrement accessible aux non-développeurs, souvent appelés 'citizen developers'.",
      },
      {
        title: "Avantages du No-Code",
        body: "1. **Rapidité de Développement** : Le no-code permet de créer des applications beaucoup plus rapidement qu'avec le développement traditionnel. Les fonctionnalités de glisser-déposer et les modèles préconçus accélèrent considérablement le processus. 2. **Accessibilité** : Pas besoin de compétences en programmation. Les outils no-code sont conçus pour être utilisés par des personnes de tous horizons, y compris les entrepreneurs, les analystes et les employés sans formation technique. 3. **Coût Réduit** : Moins de besoin en ressources humaines spécialisées. Les entreprises peuvent économiser sur les coûts de développement en utilisant des plateformes no-code. 4. **Flexibilité** : Idéal pour les MVP (Minimum Viable Products) et les projets nécessitant une mise sur le marché rapide. Les modifications et les ajustements peuvent être faits rapidement sans nécessiter de refactorisation complète du code.",
      },
      {
        title: "Inconvénients du No-Code",
        body: "1. **Limitations de Personnalisation** : Les solutions no-code offrent moins de flexibilité pour des personnalisations avancées. Vous êtes souvent limité aux fonctionnalités et aux intégrations fournies par la plateforme. 2. **Dépendance à la Plateforme** : Vous êtes dépendant de la plateforme no-code que vous utilisez. Si la plateforme ferme ou change ses conditions, cela peut affecter votre application. 3. **Performance** : Les applications no-code peuvent parfois être moins performantes que celles développées avec du code traditionnel, surtout pour des applications complexes ou à grande échelle.",
      },
      {
        title: "Qu'est-ce que le Développement Traditionnel ?",
        body: "Le développement traditionnel, ou 'full code', implique l'écriture de code à partir de zéro. Les développeurs utilisent des langages de programmation comme Python, Java, ou JavaScript pour créer des applications sur mesure.",
      },
      {
        title: "Avantages du Développement Traditionnel",
        body: "1. **Personnalisation Totale** : Vous avez un contrôle total sur chaque aspect de votre application. Vous pouvez créer des fonctionnalités uniques et optimiser les performances selon vos besoins spécifiques. 2. **Évolutivité** : Les applications développées avec du code traditionnel sont souvent plus évolutives et peuvent gérer des charges de travail plus importantes. 3. **Propriété du Code** : Vous possédez le code source de votre application, ce qui vous donne la liberté de le modifier, de le vendre ou de le réutiliser comme bon vous semble.",
      },
      {
        title: "Inconvénients du Développement Traditionnel",
        body: "1. **Temps et Coûts** : Le développement traditionnel prend plus de temps et nécessite des compétences spécialisées, ce qui peut être coûteux. 2. **Complexité** : La gestion d'un projet de développement traditionnel peut être complexe, surtout pour les grandes équipes. Les bugs et les problèmes de compatibilité peuvent également être plus fréquents. 3. **Maintenance** : Les applications développées avec du code traditionnel nécessitent une maintenance régulière pour rester à jour avec les nouvelles technologies et les standards de sécurité.",
      },
      {
        title: "Conclusion",
        body: "Le choix entre no-code et développement traditionnel dépend de vos besoins spécifiques. Si vous avez besoin de lancer rapidement une application avec un budget limité et sans compétences techniques, le no-code est une excellente option. En revanche, si vous recherchez une solution hautement personnalisée et évolutive, le développement traditionnel pourrait être plus adapté. Quel que soit votre choix, il est crucial de bien comprendre les avantages et les inconvénients de chaque approche pour prendre une décision éclairée. Si vous avez des questions ou besoin de conseils personnalisés, n'hésitez pas à me contacter. Ensemble, nous trouverons la meilleure solution pour votre projet.",
      },
    ],
  },
};

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];

  if (!article) return notFound();

  return (
    <article className="px-6 py-8 md:px-16">
      <h1 className="text-4xl font-bold text-secondary-12 mb-4">
        {article.main_title}
      </h1>
      <p className="mb-4">{article.intro}</p>
      {article.sections.map((article, i) => (
        <section key={i}>
          <h2 className="text-2xl font-semibold mb-3">{article.title}</h2>
          <p className="mb-4">{article.body}</p>
        </section>
      ))}
    </article>
  );
}
