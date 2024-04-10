import React from "react";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import cismetLogo from "./assets/cismetSignet2k.png";
import pecherLogo from "./assets/pecher.png";
import klasLogo from "./assets/Signet_AIS_RZ.png";
import Logo_DigiTalZwilling from "./assets/Logo_DigiTalZwilling.png";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = ({ email }) => {
  return (
    <GenericModalMenuSection
      sectionKey="zwilling"
      sectionTitle="Urbaner Digitaler Zwilling"
      sectionBsStyle="warning"
      sectionContent={
        <div>
          <p style={{ display: "flex" }}>
            <div>
              Die Hochwassergefahrenkarte basiert auf dem <b>DigiTal Zwilling</b>, 
              dem{" "}  
              <a href="https://smart.wuppertal.de/projekte/digital-zwilling/digitaler-zwilling.php" title={""}>
                Urbanen Digitalen Zwilling der Stadt Wuppertal
              </a>. Sie stellt einen themenspezifischen Ausschnitt aus den Daten und 
              Methoden des DigiTal Zwillings für den ebenfalls spezifischen Anwendungsfall 
              "Hochwasser-Gefährdungsbeurteilung" bereit. 
            </div>
            <img
              style={{ marginBottom: 10, marginLeft: 20 }}
              target="_zwilling"
              alt="Logo DigiTal Zwilling"
              height="120"
              src={Logo_DigiTalZwilling}
            />
          </p>
          <p>Im Konzept des DigiTal Zwillings implementiert die Hochwassergefahrenkarte 
            einen {" "}<b>Teilzwilling</b>, der dem <b>Fachzwilling Klimawandel</b>{" "}  
            zuzuordnen ist.
          </p>
          <p>
            Der Aufbau des DigiTal Zwillings ist eines der drei großen Umsetzungsprojekte 
            aus der bis Ende 2026 laufenden Phase B des Wuppertaler Smart-City-Projekts 
            {" "}  
            <a href="https://smart.wuppertal.de/strategie/strategieprozess.php" title={""}>
              smart.wuppertal
            </a>. Das Projekt wird im Rahmen der dritten Session des Förderprogramms 
            {" "}  
            <a href="https://www.bmwsb.bund.de/Webs/BMWSB/DE/themen/stadt-wohnen/staedtebau/smart-cities/smart-cities-node.html" title={""}>
              Smart Cities made in Germany
            </a>{" "}vom Bundesministerium für Wohnen, Stadtentwicklung und Bauwesen gefördert. Als Projektträger fungiert die 
            Kreditanstalt für Wiederaufbau KfW. 
          </p>

          <table width="100%" style={{ marginTop: 50 }}>
            <tbody>
              <tr>
                <td style={{ textAlign: "left", paddingBottom: 20 }}>
                  <img
                    target="_zwilling"
                    alt="Logo Pecher AG"
                    height="40"
                    src={pecherLogo}
                  />
                </td>
                <td style={{ textAlign: "left", paddingBottom: 20 }}>
                  <img
                    target="_zwilling"
                    alt="Logo cismet GmbH"
                    height="40"
                    src={cismetLogo}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      }
    />
  );
};
export default Component;
