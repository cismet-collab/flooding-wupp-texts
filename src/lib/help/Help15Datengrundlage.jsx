import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import LicenseLBK from "react-cismap/topicmaps/wuppertal/LicenseLuftbildkarte";
import LicenseStadtplanTagNacht from "react-cismap/topicmaps/wuppertal/LicenseStadtplanTagNacht";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="datengrundlage"
      sectionTitle="Datengrundlagen"
      sectionBsStyle="warning"
      sectionContent={
        <div>
          <p>
            Die Hochwassergefahrenkarte Wuppertal basiert auf den{" "}
            <a 
              className="renderAsLink" 
              onClick={() => setAppMenuActiveMenuSection("szenarien")}>
              Hochwassersimulationen
            </a>,{" "} 
            die das Land NRW nach den Vorgaben der 
            EU-Hochwasserrisikomanagement-Richtlinie (EU-HWRM-RL) in einem 
            Turnus von sechs Jahren für die Risikogewässer des Landes 
            berechnet. Derzeit sind die im Dezember 2019 vorgelegten 
            Ergebnisse des zweiten Umsetzungszyklus der EU-HWRM-RL verfügbar. 
            Sie wurden vom Land NRW als Open Data unter der Lizenz 
            "Datenlizenz Deutschland – Zero – Version 2.0" publiziert 
            und sind z. B. über einen {" "} 
            <a
              target="_blank"
              href="https://www.gis-rest.nrw.de/atomFeed/rest/atom/182925c1-879f-4054-bd69-b6f28e05b270.html"
            >
              ATOM-Feed-Downloadservice
            </a>{" "}
            zu beziehen. Die Hochwassergefahrenkarte Wuppertal verwendet 
            nur die Simulationsergebnisse für die Risikogewässer, die durch 
            das Wuppertaler Stadtgebiet verlaufen (Wupper, Schwelme, Mirker Bach, 
            Morsbach, Hardenberger Bach, Deilbach).
          </p>
          <p>
            Zur Betrachtung der Wassertiefen stellen wir Ihnen drei verschiedene 
            Hintergrundkarten bereit, die auf den folgenden Geodatendiensten und 
            Geodaten basieren:
          </p>
          <ul>
            <li>
              <strong>Stadtplan (grau)</strong>: Kartendienst (vektorbasiert)
              der cismet GmbH. Datengrundlage: <strong>cismet light</strong>.
              Wöchentlich in einem automatischen Prozess aktualisierte
              Bereitstellung der OpenStreetMap als Vektorlayer mit der
              OpenMapTiles-Server-Technologie. Lizenzen der Ausgangsprodukte:{" "}
              <a
                target="_legal"
                href="https://github.com/openmaptiles/openmaptiles/blob/master/LICENSE.md"
              >
                Openmaptiles
              </a>{" "}
              und{" "}
              <a
                target="_legal"
                href="https://www.opendatacommons.org/licenses/odbl/1.0/"
              >
                ODbL
              </a>{" "}
              (OpenStreetMap contributors).
            </li>
            <li>
              <strong>Luftbildkarte</strong>: (1) Kartendienst (WMS) des RVR.
              Datengrundlage:{" "}
              <strong>Digitale Orthophotos (DOP) des Landes NRW</strong>{" "}
              WMS-Dienst für farbige, digitale, georeferenzierte, lagegenaue,
              entzerrte Luftbilder des Landes NRW. (
              <a
                target="_legal"
                href="https://www.bezreg-koeln.nrw.de/brk_internet/geobasis/luftbildinformationen/aktuell/digitale_orthophotos/index.html"
              >
                weiter Informationen
              </a>
              ). (2) Kartendienste (WMS) des Regionalverbandes Ruhr (RVR).
              Datengrundlagen: <strong>Stadtkarte 2.0</strong> und{" "}
              <strong>Kartenschrift aus der Stadtkarte 2.0</strong>. (Details s.
              Hintergrundkarte Stadtplan).
            </li>
            <li>
              <strong>DTK (bunt)</strong>: DTK Sammeldienst des Landes NRW.
              Datengrundlage: <strong>DTK (bunt)</strong> Dieser Dienst enthält
              alle topographischen Kartenwerke des Landes Nordrhein-Westfalen
              sowie in den kleineren Maßstäben topographische Kartenwerke des
              Bundes. Angefangen von einer Übersichtskarte für NRW über die
              DTK500 bis zur DTK250 des Bundesamtes für Kartographie und
              Geodäsie und den topographischen Karten DTK100, DTK50, DTK25,
              DTK10 NRW von Geobasis NRW, bis hin zur ABK und ALKIS der Kommunen
              sind alle Standardkartenwerke in einem Layer vereint. Durch die
              voreingestellten Maßstabsbereiche wird gewährleistet, dass in
              jedem Maßstab die ideale Karte präsentiert wird.
              Nutzungsbedingungen: siehe{" "}
              <a
                target="_legal"
                href="http://www.bezreg-koeln.nrw.de/brk_internet/geobasis/lizenzbedingungen_geobasis_nrw.pdf"
              >
                Nutzungsbedingungen Geobasis NRW
              </a>
              , Für die DTK 250, DTK 500 gelten die Nutzungsbedingungen des BKG:
              ©{" "}
              <a target="_legal" href="www.govdata.de/dl-de/by-2-0">
                GeoBasis-DE / BKG(2020) dl-de/by-2-0
              </a>
            </li>
          </ul>
        </div>
      }
    />
  );
};
export default Component;
