"use client";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { Container } from "../container";
import { Link } from "../link";
import { Button } from "../actions/button";
import { NavItem } from "../nav-item";
import { List } from "@phosphor-icons/react";

export function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <nav>
        <Container className="flex justify-between p-2 shadow-md">
          <Link className="px-4 py-2" href="/">
            Home
          </Link>
          <ul className="md:flex flex-row gap-x-4 hidden">
            {["", "", ""].map(({}, index) => (
              <li key={index}>
                <NavItem.Root href="#">
                  <NavItem.Label text="Teste" />
                </NavItem.Root>
              </li>
            ))}
          </ul>
          <div></div>
          <Button onClick={onOpen} className="md:hidden text-teal-400">
            <List size={20} />
          </Button>
        </Container>
      </nav>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Páginas</DrawerHeader>

          <DrawerBody>
            <ul className="flex flex-col gap-y-2">
              {["", "", ""].map(({}, index) => (
                <li key={index}>
                  <NavItem.Root href="#">
                    {/* <NavItem.Icon icon={House} /> */}
                    <NavItem.Label text="Teste" />
                  </NavItem.Root>
                </li>
              ))}
            </ul>
          </DrawerBody>
          <DrawerFooter>
            <></>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
