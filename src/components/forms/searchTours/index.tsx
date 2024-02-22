"use client";
import {
  Input,
  InputGroup,
  InputLeftElement,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { Button } from "../../actions/button";
import {
  Bus,
  Calendar,
  House,
  MagnifyingGlass,
  MapPin,
  UserCircle,
} from "@phosphor-icons/react";

interface SearchTourProps {}

export default function SearchTour({}: SearchTourProps) {
  return (
    <>
      <form className="flex flex-col gap-y-4 border p-4 rounded">
        <div>
          <span>Excursões</span>
        </div>
        <Tabs>
          <TabList>
            <TabList className="text-sm">
              <Tab>Ida e Volta</Tab>
              <Tab>Multiplos destinos</Tab>
            </TabList>
          </TabList>
          <TabPanels>
            <TabPanel className="flex flex-col gap-y-4">
              <div>
                <div className="border p-2 rounded">
                  <InputGroup variant="flushed">
                    <InputLeftElement>
                      <MapPin size={22} />
                    </InputLeftElement>
                    <Input placeholder="Ida" />
                  </InputGroup>
                  <InputGroup variant="flushed">
                    <InputLeftElement>
                      <Bus size={22} />
                    </InputLeftElement>
                    <Input placeholder="Volta" style={{ borderBottom: 0 }} />
                  </InputGroup>
                </div>
              </div>
              <div>
                <div className="border p-2 rounded flex divide-x">
                  <InputGroup variant="flushed">
                    <InputLeftElement>
                      <Calendar size={22} />
                    </InputLeftElement>
                    <Input
                      placeholder="Selecione uma data"
                      type="date"
                      style={{ borderBottom: 0, fontSize: 12 }}
                    />
                  </InputGroup>
                  <InputGroup variant="flushed">
                    <InputLeftElement>
                      <Calendar size={22} />
                    </InputLeftElement>
                    <Input
                      placeholder="Selecione uma data"
                      type="date"
                      style={{ borderBottom: 0, fontSize: 12 }}
                    />
                  </InputGroup>
                </div>
              </div>
              <Button className="flex border rounded gap-x-2">
                <UserCircle size={16} />
                <span>1</span>
                <span>Pessoas, </span>
                <House size={16} />
                <span>1</span>
                <span>Quartos</span>
              </Button>
              <Button className="flex border rounded justify-center gap-x-2">
                <MagnifyingGlass size={16} />
                <span>Buscar</span>
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </form>
    </>
  );
}
