import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartNoAxesCombined,
  CircleUserRound,
  Code,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const articles = [
  { slug: "avantages-site-web", title: "Pourquoi avoir un site web ?" },
  { slug: "no-code-vs-dev", title: "Développement sur mesure vs No-Code" },
];

const Page = () => {
  return (
    <main className="md:px-16 px-6 py-8">
      <section id="about">
        <h2 className="text-3xl text-center font-bold mb-6">À propos</h2>
        <div className="flex flex-col gap-6 md:gap-16 xl:flex-row">
          <article className="h-fit p-8 w-full xl:w-2/3">
            <section>
              <h1 className="text-4xl font-bold mb-4">
                Qui suis-je ?
                <CircleUserRound className="inline" size={48} />
              </h1>
              <p className="mb-4">
                Je suis Sébastien, développeur web freelance basé à Rennes,
                spécialisé dans la création d’applications web performantes et
                sur mesure. Avec plusieurs années d’expérience, je conçois des
                solutions digitales qui allient innovation, efficacité et
                expérience utilisateur optimisée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Un accompagnement sur mesure
              </h2>
              <p className="mb-4">
                Que vous soyez une startup, une PME ou une grande entreprise, je
                vous accompagne à chaque étape de votre projet : de la
                définition des objectifs à la mise en ligne, en passant par la
                conception, le développement et l’optimisation. Mon approche est
                centrée sur la qualité du code, la performance et l’adaptabilité
                à vos besoins spécifiques.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-3">
                Pourquoi me choisir ?
              </h2>
              <p className="mb-4">
                En choisissant mes services, vous bénéficiez d&apos;un
                partenaire dédié et passionné, capable de transformer vos idées
                en réalité. Mon expertise technique et ma créativité sont au
                service de votre succès digital.
              </p>
            </section>
            <div className="flex flex-col justify-end gap-2 md:flex-row">
              <Link href="/" className="underline">
                À lire aussi
              </Link>
            </div>
          </article>

          <Card className={`w-full xl:w-1/3 border-custom p-8`}>
            <CardHeader className="p-0 block">
              <h3 className="text-xl font-bold mb-4">
                Une démarche en 3 étapes !
              </h3>
            </CardHeader>

            <CardContent>
              <ul className="space-y-4">
                <li className="">
                  <h4 className="font-semibold">
                    I. Premier contact & découverte
                  </h4>
                  <p>
                    Discussion sans engagement sur le projet, les besoins et les
                    objectifs. Présentation de mon approche et de mon expertise.
                  </p>
                </li>
                <li className="">
                  <h4 className="font-semibold">
                    II. Analyse & recommandations
                  </h4>
                  <p>
                    Étude de faisabilité, identification des contraintes et
                    proposition de solutions adaptées. Explication des étapes à
                    venir sans engagement.
                  </p>
                </li>
                <li className="">
                  <h4 className="font-semibold">
                    III. Cahier des charges & devis
                  </h4>
                  <p>
                    Rédaction d&apos;un cahier des charges détaillé et devis
                    personnalisé. Validation par le client avant signature et
                    lancement du projet.
                  </p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
      <div className="bg-primary-6 h-2 rounded-[50%] w-full my-10"></div>
      <section id="services" className="mt-12">
        <h2 className="text-3xl text-center font-bold mb-6">Services</h2>
        <div className="flex flex-col gap-6 lg:flex-row md:gap-12">
          <Card className="p-8 w-full lg:w-1/3">
            <CardContent className="p-0">
              <div className="h-52 rounded-sm w-full md:h-80 overflow-hidden">
                <Image
                  width={500}
                  height={320}
                  src="https://res.cloudinary.com/dw7tgqocy/image/upload/v1739543916/dev_jzz1aj.jpg"
                  alt="Illustration d'un hologramme de la Terre avec différentes technologies gravitant autour"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold my-4">
                <Code size={30} className="inline" />
                {"  "}
                Développement
              </h3>
              <p className="mb-4">
                Besoin d&apos;un site pour présenter votre entreprise,
                promouvoir un produit ou gérer vos commandes en interne ? Je
                conçois des solutions adaptées à vos besoins.
              </p>
            </CardContent>
          </Card>
          <Card className="p-8 w-full lg:w-1/3">
            <CardContent className="p-0">
              <div className="h-52 rounded-sm w-full md:h-80 overflow-hidden">
                <Image
                  width={500}
                  height={320}
                  src="https://res.cloudinary.com/dw7tgqocy/image/upload/v1739546584/maintenance_y70yu3.jpg"
                  alt="écran d'ordinateur montrant du code de développement"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold my-4">
                <Wrench size={30} className="inline" /> {"  "}Maintenance
              </h3>
              <p className="mb-4">
                Votre site a besoin d&apos;une nouvelle fonctionnalité ou
                d&apos;une refonte visuelle ? Je vous accompagne pour maintenir
                et faire évoluer votre projet.
              </p>
            </CardContent>
          </Card>
          <Card className="p-8 w-full lg:w-1/3">
            <CardContent className="p-0">
              <div className="h-52 rounded-sm w-full md:h-80 overflow-hidden">
                <Image
                  width={500}
                  height={320}
                  src="https://res.cloudinary.com/dw7tgqocy/image/upload/v1739546621/SEO_dc33me.jpg"
                  alt="image illustrant des statistiques et scores"
                  className="h-full w-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold my-4">
                <ChartNoAxesCombined size={30} className="inline" />{" "}
                Optimisation & SEO
              </h3>
              <p className="mb-4">
                Votre site met du temps à charger ou peu visible sur les moteurs
                de recherche ? Je vous aide à améliorer ses performances et sa
                visibilité.
              </p>

              <Button asChild>
                <Link href="/#contact">Prendre contact</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mt-12 mx-auto">
        <h2 className="text-3xl text-center font-bold mb-6">
          Pas encore décidé ?
        </h2>
        <ul>
          {articles.map((article) => (
            <li key={article.slug}>
              <Link
                href={`/wild-fox-web/${article.slug}`}
                className="text-blue-500 underline"
              >
                {article.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default Page;
