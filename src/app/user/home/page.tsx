"use client";
import Button from "@/common/Button";
import FoldingCont from "@/components/FoldingCont";
import Nav from "@/components/Nav";
import TakedPackagesService from "../../../services/deliveryMan.services";
import { useEffect, useState } from "react";
import { PackagesTypes } from "@/types/package.types";

const Home = () => {
  const [packages, setPackages] = useState<PackagesTypes[]>([]);
  const [packagesDelivered, setPackagesDelivered] = useState<PackagesTypes[]>(
    []
  );
  useEffect(() => {
    const getTakedPack = async () => {
      try {
        const data = await TakedPackagesService.getTakedPackages();
        const packages = data.data.message;
        
        const nonDeliveredPackages = packages.filter((pack: PackagesTypes) => !pack.is_delivered);
        const deliveredPackages = packages.filter((pack: PackagesTypes) => pack.is_delivered);

        setPackages(nonDeliveredPackages);
        setPackagesDelivered(deliveredPackages);
      } catch (error) {
        console.error("Error geting packages : ", error);
      }
    };
    getTakedPack();
  }, []);

  console.log('packages: ',packages, 'packagesDelivered: ', packagesDelivered);

  return (
    <div>
      <Nav href="/user/home" lHref="/" />
      <FoldingCont
        tasks={packages}
        position="mt-3"
        text={"Repartos pendientes"}
      />
      <FoldingCont
        tasks={packagesDelivered}
        position="mt-5"
        text={"Repartos terminados"}
      />
      <Button
        type="button"
        href="/user/get-products"
        bgc="bg-green text-blue"
        position="mx-auto mt-4"
        text="Obtener paquetes"
      />
    </div>
  );
};
export default Home;
