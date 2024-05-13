import React, { useContext } from "react";
import {
  Help05Introduction,
  //   Help20Karteninhalt,
  //   Help80ModellfehlerMelden,
  //   Help90Haftungsausschluss,
  Help99Footer,
} from "@cismet-collab/rainhazardmaps-base-texts";

import Help10AllgemeineHinweise from "./help/Help10AllgemeineHinweise";
import Help15Datengrundlage from "./help/Help15Datengrundlage";
import Help20Karteninhalt from "./help/Help20Karteninhalt";
import Help30InKartePositionieren from "./help/Help30InKartePositionieren";
import Help35KoppelungMitStarkregengefahrenkarte from "./help/Help35KoppelungMitStarkregengefahrenkarte";
import Help40MeinStandort from "./help/Help40MeinStandort";
import Help50WasserstandAbfragen from "./help/Help50WasserstandAbfragen";
import Help60SimulierteSzenarien from "./help/Help60SimulierteSzenarien";
import Help70AussagekraftDerSimulationen from "./help/Help70AussagekraftDerSimulationen";
import Help80ModellfehlerMelden from "./help/Help80ModellfehlerMelden";
import Help90Haftungsausschluss from "./help/Help90Haftungsausschluss";
import Help98DigitalerZwilling from "./help/Help98DigitalerZwilling";
import DigiTalLogo from "./help/assets/Logo_DigiTalZwilling.png";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
const getCollabedHelpComponentConfig = ({
  version,
  reactCismapRHMVersion,
  footerLogoUrl = DigiTalLogo,
  email,
}) => {
  const MyFooter = () => {
    const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);
    return (
      <Help99Footer
        appName="Teilzwilling Hochwassergefahrenkarte Wuppertal"
        taglineModelling={
          <div>
            <b>Modellierung</b>:{" "}
            <a
              target="_wsw"
              href="https://www.gis-rest.nrw.de/atomFeed/rest/atom/182925c1-879f-4054-bd69-b6f28e05b270.html"
            >
              Land NRW
            </a>{" "}(2. Umsetzungszyklus der EU-HWRM-RL 12/2019)
          </div>
        }
        version={version}
        reactCismapRHMVersion={reactCismapRHMVersion}
        logo={
          <a
            className="renderAsLink"
            onClick={() => {
              setAppMenuActiveMenuSection("zwilling");
            }}
          >
            <img
              style={{ width: 50, margin: 5, marginTop: -5, cursor: "pointer" }}
              align="right"
              src={footerLogoUrl}
            />
          </a>
        }
      />
    );
  };

  const menuIntroduction = <Help05Introduction />;
  const menuIcon = "info";
  const menuTitle = "Kompaktanleitung und Hintergrundinformationen";
  const menuSections = [
    <Help10AllgemeineHinweise key="AllgemeineHinweise" />,
    <Help15Datengrundlage key="Datengrundlage" />,
    <Help20Karteninhalt key="Karteninhalt" />,
    <Help30InKartePositionieren key="InKartePositionieren" />,
    <Help35KoppelungMitStarkregengefahrenkarte key="Koppelung" />,
    <Help40MeinStandort key="MeinStandort" />,
    <Help50WasserstandAbfragen key="WasserstandAbfragen" />,
    <Help60SimulierteSzenarien key="SimulierteSzenarien" />,
    <Help70AussagekraftDerSimulationen key="AussagekraftDerSimulationen" />,
    <Help80ModellfehlerMelden key="ModellfehlerMelden" email={email} />,
    <Help90Haftungsausschluss key="Haftungsausschluss" />,
    <Help98DigitalerZwilling key="zwilling" email={email} />,
  ];

  return {
    menuIntroduction,
    menuIcon,
    menuTitle,
    menuSections,
    menuFooter: <MyFooter />,
  };
};

export { getCollabedHelpComponentConfig };
