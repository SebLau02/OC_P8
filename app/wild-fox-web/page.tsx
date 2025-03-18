import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  return (
    <main className="px-6 py-8 md:px-16">
      <section id="about">
        <h2 className="text-center text-3xl font-bold text-secondary-11 mb-6">
          À propos
        </h2>
        <div className="flex flex-col gap-6 md:gap-16 xl:flex-row">
          <article className="h-fit w-full xl:w-2/3 p-8">
            <section>
              <h1 className="text-4xl font-bold text-secondary-12 mb-4">
                Qui suis-je ?
                <CircleUserRound className="inline " size={48} />
              </h1>
              <p className="text-secondary-12 mb-4">
                Je suis Sébastien, développeur web freelance basé à Rennes,
                spécialisé dans la création d’applications web performantes et
                sur mesure. Avec plusieurs années d’expérience, je conçois des
                solutions digitales qui allient innovation, efficacité et
                expérience utilisateur optimisée.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary-12 mb-3">
                Un accompagnement sur mesure
              </h2>
              <p className="text-secondary-12 mb-4">
                Que vous soyez une startup, une PME ou une grande entreprise, je
                vous accompagne à chaque étape de votre projet : de la
                définition des objectifs à la mise en ligne, en passant par la
                conception, le développement et l’optimisation. Mon approche est
                centrée sur la qualité du code, la performance et l’adaptabilité
                à vos besoins spécifiques.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-secondary-12 mb-3">
                Pourquoi me choisir ?
              </h2>
              <p className="text-secondary-12 mb-4">
                En choisissant mes services, vous bénéficiez d&apos;un
                partenaire dédié et passionné, capable de transformer vos idées
                en réalité. Mon expertise technique et ma créativité sont au
                service de votre succès digital.
              </p>
            </section>
            <div className="flex md:flex-row gap-2 flex-col justify-end">
              <a
                href="https://sebastien-dev-portfolio.vercel.app/"
                className="text-secondary-11 underline hover:text-secondary-12"
              >
                À lire aussi
              </a>
            </div>
          </article>

          <Card className={`w-full xl:w-1/3 border-custom p-8`}>
            <CardHeader className="p-0 block">
              <h3 className="text-xl font-bold text-secondary-12 mb-4">
                Une démarche en 3 étapes !
              </h3>
            </CardHeader>

            <CardContent>
              <ul className="space-y-4">
                <li className="text-secondary-12">
                  <h4 className="font-semibold">
                    I. Premier contact & découverte
                  </h4>
                  <p>
                    Discussion sans engagement sur le projet, les besoins et les
                    objectifs. Présentation de mon approche et de mon expertise.
                  </p>
                </li>
                <li className="text-secondary-12">
                  <h4 className="font-semibold">
                    II. Analyse & recommandations
                  </h4>
                  <p>
                    Étude de faisabilité, identification des contraintes et
                    proposition de solutions adaptées. Explication des étapes à
                    venir sans engagement.
                  </p>
                </li>
                <li className="text-secondary-12">
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
      <div className="bg-primary-6 w-full h-2 my-10 rounded-[50%]"></div>
      <section id="services" className="mt-12">
        <h2 className="text-center text-3xl font-bold text-secondary-11 mb-6">
          Services
        </h2>
        <div className="flex flex-col gap-6 md:gap-12 lg:flex-row">
          <Card className="lg:w-1/3 w-full p-8">
            <CardContent className="p-0">
              <div className="w-full h-40 md:h-80 rounded-sm overflow-hidden">
                <Image
                  width={500}
                  height={320}
                  src="https://res.cloudinary.com/dw7tgqocy/image/upload/v1739543916/dev_jzz1aj.jpg"
                  alt="Illustration d'un hologramme de la Terre avec différentes technologies gravitant autour"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-secondary-12 my-4">
                <i className="fa-solid text-secondary-11 fa-code"></i>{" "}
                Développement
              </h3>
              <p className="text-secondary-12 mb-4">
                Besoin d&apos;un site pour présenter votre entreprise,
                promouvoir un produit ou gérer vos commandes en interne ? Je
                conçois des solutions adaptées à vos besoins.
              </p>
            </CardContent>
          </Card>
          <Card className="lg:w-1/3 w-full p-8">
            <CardContent className="p-0">
              <div className="w-full h-40 md:h-80 rounded-sm overflow-hidden">
                <Image
                  width={500}
                  height={320}
                  src="https://res.cloudinary.com/dw7tgqocy/image/upload/v1739546584/maintenance_y70yu3.jpg"
                  alt="écran d'ordinateur montrant du code de développement"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-secondary-12 my-4">
                <i className="fa-solid text-secondary-11 fa-screwdriver-wrench"></i>
                Maintenance
              </h3>
              <p className="text-secondary-12 mb-4">
                Votre site a besoin d&apos;une nouvelle fonctionnalité ou
                d&apos;une refonte visuelle ? Je vous accompagne pour maintenir
                et faire évoluer votre projet.
              </p>
            </CardContent>
          </Card>
          <Card className="lg:w-1/3 w-full p-8">
            <CardContent className="p-0">
              <div className="w-full h-40 md:h-80 rounded-sm overflow-hidden">
                <Image
                  width={500}
                  height={320}
                  src="https://res.cloudinary.com/dw7tgqocy/image/upload/v1739546621/SEO_dc33me.jpg"
                  alt="image illustrant des statistiques et scores"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-secondary-12 my-4">
                <i className="fa-solid text-secondary-11 fa-circle-up"></i>
                Optimisation & SEO
              </h3>
              <p className="text-secondary-12 mb-4">
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

      <div className="bg-primary-6 w-full h-2 my-10 rounded-[50%]"></div>

      <section id="contact" className="mt-12 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-secondary-11 mb-6">
          Contact
        </h2>
        <p className="text-secondary-12 leading-relaxed mb-4">
          Vous avez un projet ou une idée ? Parlons-en ! Décrivez vos objectifs
          et je vous aiderai à concrétiser votre vision.
        </p>
        <p className="text-secondary-12 mb-4">
          Je suis disponible pour discuter de vos besoins et vous proposer une
          solution adaptée. Mon accompagnement est 100% sur mesure et je suis à
          votre écoute pour vous conseiller et vous guider tout au long de la
          réalisation de votre application.
        </p>
        <p className="text-secondary-12 mt-4">
          Contactez-moi par email : <i className="fa-regular fa-envelope"></i>
          <a
            href="mailto:sebastien.lau2021@gmail.com"
            className="text-secondary-11 underline hover:text-secondary-12"
          >
            sebastien.lau2021@gmail.com
          </a>
          ou via ce
          <a
            href="https://sebastien-dev-portfolio.vercel.app/#contact"
            className="text-secondary-11 underline hover:text-secondary-12"
          >
            formulaire{" "}
          </a>
          .
        </p>
      </section>
    </main>
  );
};

export default Page;
