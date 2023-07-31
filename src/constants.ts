type Route = {
  url: string;
  text: string;
};

type SocialMedia = {
  url: string;
  text: string;
};

const aboutContent = { content: "" };
const routes: Route[] = [
  { text: "Excursões", url: "/trips" },
  // { text: "Privacidade", url: "/privacity" },
  // { text: "Sobre", url: "/about" },
  // { text: "Ajuda", url: "/help" },
];
const copyrightText = `Todos os direitos reservados.
Tripzeiros - 2023`;
const socialMedias: SocialMedia[] = [
  { text: "Facebook", url: "https://facebook.com/tripzeiros" },
  { text: "Twitter", url: "https://twitter.com/tripzeiros" },
  { text: "Instagram", url: "https://instagram/tripzerios.viagens" },
];

export { aboutContent, routes, copyrightText, socialMedias };
