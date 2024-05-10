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
              <strong>Topographische Karte</strong>: (1) Kartendienste (WMS) der 
              Stadt Wuppertal. Datengrundlagen: (a) <b>Amtliche Basiskarte ABK 
              Graustufen</b>. (Wöchentlich in einem automatisierten Prozess aus dem 
              Fachverfahren ALKIS des Liegenschaftskatasters abgeleitete 
              großmaßstäbige topographische Karte in Graustufen.) © Stadt Wuppertal 
              (<a
                target="_legal"
                href="https://www.govdata.de/dl-de/zero-2-0"
              >
                Datenlizenz Deutschland - Zero - Version 2.0)
              </a>.{" "}
              (b) <b>Hillshade</b> (Schummerungsdarstellung eines für hydrologische 
              Fragestellungen optimierten Digitalen Geländemodells aus 
              Laserscanner-Befliegungen (12/2008 und 01/2009) mit ergänztem 
              Gebäudebestand (Auflösung 25cm x 25cm), ausgeführt in 2012 vom 
              Ingenieurbüro Reinhard Beck GmbH & Co. KG / Wuppertal.) © Wuppertaler 
              Stadtwerke WSW Energie & Wasser AG. (2) Kartendienst (WMS) des 
              Regionalverbandes Ruhr (RVR). Datengrundlage: <b>Stadtkarte 2.0</b>{" "} 
              ohne Kartenschrift. (Details s. Hintergrundkarte Stadtplan.)
            </li>
            <li>
              <strong>Luftbildkarte</strong>: (1) Kartendienst (WMS) der Stadt Wuppertal. Datengrundlage:{" "} 
              <b>True Orthophoto aus Bildflug vom 16.03.2022</b>, hergestellt durch Aerowest 
              GmbH/Dortmund, Bodenauflösung 5 cm. (True Orthophoto: Aus Luftbildern 
              mit hoher Längs- und Querüberdeckung in einem automatisierten 
              Bildverarbeitungsprozess berechnetes Bild in Parallelprojektion, also 
              ohne Gebäudeverkippung und sichttote Bereiche.) © Stadt Wuppertal 
              ( 
              <a
                target="_blank"
                href="https://www.wuppertal.de/geoportal/Nutzungsbedingungen/NB-GDIKOM-C_Geodaten.pdf"
              >
                NB-GDIKOM C
              </a>). (2) Kartendienste (WMS) des Regionalverbandes Ruhr (RVR). 
              Datengrundlagen: <b>Stadtkarte 2.0</b> (ohne Kartenschrift) und <b>Kartenschrift aus der 
              Stadtkarte 2.0</b>. (Details s. Hintergrundkarte Stadtplan.)
            </li>
            <li>
              <strong>Stadtplan</strong>: Kartendienst (WMS) des Regionalverbandes Ruhr (RVR). 
              Datengrundlage: <b>Stadtkarte 2.0</b>. Wöchentlich in einem automatischen Prozess aktualisierte 
              Zusammenführung des Straßennetzes der OpenStreetMap mit Amtlichen Geobasisdaten des Landes 
              NRW aus den Fachverfahren ALKIS (Gebäude, Flächennutzungen) und ATKIS (Gewässer). 
              © RVR und Kooperationspartner (
              <a
                target="_blank"
                href="https://www.govdata.de/dl-de/by-2-0"
              >
                Datenlizenz Deutschland - Namensnennung - Version 2.0
              </a>).{" "}  
              Lizenzen der Ausgangsprodukte:{" "} 
              <a
                target="_blank"
                href="https://www.govdata.de/dl-de/zero-2-0"
              >
                Datenlizenz Deutschland - Zero - Version 2.0
              </a>{" "}
              (Amtliche Geobasisdaten) und{" "}  
              <a
                target="_blank"
                href="https://www.opendatacommons.org/licenses/odbl/1.0/"
              >
                ODbL
              </a>{" "}
              (OpenStreetMap contributors).
            </li>
          </ul>
        </div>
      }
    />
  );
};
export default Component;
