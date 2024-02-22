"use client";
import {
  Copyright,
  FacebookLogo,
  InstagramLogo,
  TiktokLogo,
  TwitterLogo,
} from "@phosphor-icons/react";
import { Link } from "../link";
import { Container } from "../container";

interface FooterProps {}

export function Footer({}: FooterProps) {
  return (
    <footer className="mt-16">
      <div className="border-b flex flex-col md:flex-row justify-between">
        <Container className="flex gap-x-4 border-bottom mb-8 justify-center">
          <Link href="#">Home</Link>
        </Container>
        <Container className="flex gap-x-4 border-bottom mb-8">
          <Link href="#">
            <FacebookLogo size={24} />
          </Link>
          <Link href="#">
            <InstagramLogo size={24} />
          </Link>
          <Link href="#">
            <TwitterLogo size={24} />
          </Link>
          <Link href="#">
            <TiktokLogo size={24} />
          </Link>
        </Container>
      </div>
      <div className="grid grid-cols-6 gap-2 mt-8">
        {["", "", "", ""].map(({}, index) => (
          <Container
            className="text-zinc-900 col-span-6 md:col-span-3 lg:col-span-2"
            key={index}
          >
            <div className="my-2">
              <span className="py-2 mb-4 text-xl">Title</span>
              <ul className="my-2">
                {["", "", "", ""].map(({}, index) => (
                  <li key={index}>
                    <Link href="#" className="py-2 mb-2 text-zinc-700">
                      Teste
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        ))}
      </div>
      <Container className="flex align-items-center justify-center gap-x-2 pb-16">
        <Copyright size={18} />
        <span>Tripzeiros. Todos os direitos reservados</span>
      </Container>
    </footer>
  );
}
