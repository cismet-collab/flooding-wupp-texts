import React, { useContext } from "react";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";
import LicenseLBK from "react-cismap/topicmaps/wuppertal/LicenseLuftbildkarte";
import LicenseStadtplanTagNacht from "react-cismap/topicmaps/wuppertal/LicenseStadtplanTagNacht";
import aislogo from "./assets/Signet_AIS_RZ.png";
/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="allgemeineHinweise"
      sectionTitle="Allgemeine Hinweise"
      sectionBsStyle="warning"
      sectionContent={
        <div>
          Platzhaltertext
          <p>
            Die TopicMap Hochwasser stellt in drei umschaltbaren Kartenansichten
            maximale Wassertiefen bzw. maximale Fließgeschwindigkeiten im
            gesamten Gültigkeitsgebiet dar, die im Verlauf von drei simulierten
            Starkregenszenarien berechnet wurden. Bei den Ergebnissen handelt es
            sich um eine modelltechnische Untersuchung des Gültigkeitsgebiets
            mit dem Ziel die Realität möglichst gut abzubilden. Bei der
            Betrachtung und Interpretation der Ergebnisse sind die
            Modellgrundlagen und -annahmen zu berücksichtigen. Hinweise zur
            Aussagekraft der Ergebnisse werden nachfolgend beschrieben.
          </p>
          <p>
            Das Ergebnis der Simulation ist von der Dauer und Intensität des
            Regens abhängig, der für die Simulation angenommen wird. Wir bieten
            Ihnen hierzu drei unterschiedliche{" "}
            <a
              className="renderAsLink"
              onClick={() => setAppMenuActiveMenuSection("szenarien")}
            >
              simulierte Szenarien
            </a>{" "}
            an, darunter ein außergewöhnlicher Starkregen (SRI 7) und ein
            extremer Starkregen (SRI 9 bzw. 10) als "Modellregen" sowie die
            Abbildung der Niederschlagsbelastung des Ereignisses vom 14.07 und
            15.07.2021, basierend auf Radardaten.{" "}
          </p>
          <p>
            Der Farbverlauf für die <strong>Wassertiefen</strong> nutzt die
            Eckwerte 20 cm (blau), 40 cm (gelb), 75 cm (orange) und {">"} 100 cm
            (rot). Wassertiefen unter 5 cm werden nicht mehr farbig ausgeprägt
            (transparente Darstellung).
          </p>
          <p>Die Simulationsberechnungen wurden durch ... durchgeführt.</p>
          <p>
            Die Bemessungsgrenze des Kanalnetzes wird bei den hier simulierten
            Ereignissen überschritten. Der größte Anteil des Niederschlagwassers
            fließt oberirdisch ab, wobei im urbanen Raum sowohl die
            Leistungsfähigkeit des Kanalnetzes als auch der Überstau des
            Kanalnetzes einen Einfluss auf die Überflutungssituation haben kann.
            Das Abflussverhalten des Kanalnetzes wurde durch eine kombinierte
            Betrachtung berücksichtigt. Die Eigenschaften der Geländeoberfläche
            variieren je nach Flächennutzung. Die verschiedenen
            Oberflächeneigenschaften wurden im Modell über unterschiedliche
            Geländerauheiten und zeitlich variable Versickerungsansätze
            abgebildet. Relevante Retentionsräume sowie Gewässerverrohrungen und
            Durchlässe wurden aufgrund ihrer Bedeutung für die Ableitungs- und
            Speicherwirkung von Oberflächenwasser als Elemente in das Modell
            aufgenommen. Je nach Regen und Randbedingungen in der Realität
            können in Teilgebieten die Wassertiefen auf dem Gelände höher oder
            geringer ausfallen. Um diese Variationen zu verstehen und besser
            einschätzen zu können, sind die unterschiedlichen Szenarien
            dargestellt.
          </p>
        </div>
      }
    />
  );
};
export default Component;
