import React from "react";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import cismetLogo from "./assets/cismetSignet2k.png";
import pecherLogo from "./assets/pecher.png";
import klasLogo from "./assets/Signet_AIS_RZ.png";
import customerLogo from "./assets/customerLogo.png";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = ({ email }) => {
  return (
    <GenericModalMenuSection
      sectionKey="kontakt"
      sectionTitle="Kontakt"
      sectionBsStyle="warning"
      sectionContent={
        <div>
          <p>
            Für telefonische Auskünfte zum Umgang mit der TopciMap Hochwasser
            stehen Ihnen die Mitarbeiterinnen und Mitarbeiter der
            Stadtverwaltung Wuppertal zur Verfügung.
          </p>
          <p>
            Weitere Informationen zum Thema „Schutz vor Hochwasser finden Sie
            auf der Homepage der Stadt Wuppertal.
          </p>

          <p style={{ display: "flex" }}>
            <div>
              Stadt
              <br />
              Abteilung
              <br />
              Straße
              <br />
              PLZ Stadt
              <br />
              Telefon: 0000 000000
              <br />
              E-Mail: <a href="mailto:{email)}">{email}</a>
              <br />
            </div>
            <img
              style={{ marginBottom: 10, marginLeft: 20 }}
              target="_contacts"
              alt="Logo Auftraggeber"
              height="150"
              src={customerLogo}
            />
          </p>

          <table width="100%" style={{ marginTop: 50 }}>
            <tbody>
              <tr>
                <td style={{ textAlign: "left", paddingBottom: 20 }}>
                  <strong>Bearbeitung des Hochwasserrisikomanagement</strong>
                </td>
                <td style={{ textAlign: "left", paddingBottom: 20 }}>
                  <strong>Aufbau und Bereitstellung TopicMap Hochwasser</strong>
                </td>
              </tr>
              <tr>
                <td style={{ textAlign: "left", paddingBottom: 20 }}>
                  <img
                    target="_contacts"
                    alt="Logo Pecher AG"
                    height="40"
                    src={pecherLogo}
                  />
                </td>
                <td style={{ textAlign: "left", paddingBottom: 20 }}>
                  <img
                    target="_contacts"
                    alt="Logo cismet GmbH"
                    height="40"
                    src={cismetLogo}
                  />
                </td>
              </tr>
              <tr>
                <td style={{ verticalAlign: "bottom" }}>
                  Dr. Pecher AG
                  <br />
                  Klinkerweg 5<br />
                  40699 Erkrath
                  <br />
                  Telefon: 02104 93 96-0
                  <br />
                  E-Mail:{" "}
                  <a href="mailto:mail.erkrath@pecher.de">
                    mail.erkrath@pecher.de
                  </a>
                </td>
                <td style={{ verticalAlign: "bottom" }}>
                  cismet GmbH
                  <br />
                  <br />
                  Tholey ▪️ Saarbrücken <br />
                  Telefon: 0681 965 901-20
                  <br />
                  <a href="https://cismet.de/" title={"and it just works"}>
                    https://cismet.de/
                  </a>
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
