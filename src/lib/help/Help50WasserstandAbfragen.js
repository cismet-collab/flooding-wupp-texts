import React, { useContext } from "react";
import Icon from "react-cismap/commons/Icon";
import { UIDispatchContext } from "react-cismap/contexts/UIContextProvider";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

/* eslint-disable jsx-a11y/anchor-is-valid */

const Component = () => {
  const { setAppMenuActiveMenuSection } = useContext(UIDispatchContext);

  return (
    <GenericModalMenuSection
      sectionKey="wasserstand"
      sectionTitle="Max. Wassertiefe abfragen"
      sectionBsStyle="success"
      sectionContent={
        <div>
          <p>
            Durch Anklicken der Schaltfläche <Icon name="crosshairs" /> oberhalb 
            des Kontrollfeldes aktivieren Sie den Modus zur Abfrage der maximalen 
            Wassertiefen, die für jede 1x1 m Rasterzelle berechnet worden. Anstelle 
            der Schaltfläche erscheint in diesem Modus das Anzeigefeld "Maximale 
            Wassertiefe" zunächst mit einem kurzen Bedienungshinweis.
          </p>
          <p>
            Ein Klick auf eine beliebige Position in der Karte bewirkt jetzt,
            dass die Zelle in der Karte markiert und der zugehörige Maximalwert
            der Wassertiefe bzw. der Fließgeschwindigkeit in diesem Feld
            angezeigt wird. Die Anzeige der maximalen Wassertiefen wird dabei
            auf volle 10 cm gerundet (z. B. "ca. 20 cm"), um eine mögliche{" "}
            <a onClick={() => setAppMenuActiveMenuSection("aussagekraft")}>
              Varianz der Simulationsergebnisse
            </a>{" "}
            zu verdeutlichen. Aus demselben Grund werden berechnete Wassertiefen
            von mehr als 150 cm nur als "> 150 cm" angezeigt. Bitte beachten
            Sie, dass in der online-Karte Wassertiefen kleiner als 5 cm
            transparent dargestellt sind, um die Aufmerksamkeit auf die
            kritischeren Bereiche zu lenken. Überflutungsgefahren können auch in
            anderen Bereichen vorliegen. Lokale Verhältnisse sind immer zu
            prüfen (inkl. der Grundstücksentwässerungsanlage). Die Anzeige der
            maximalen Fließgeschwindigkeiten erfolgt in der Einheit "Meter pro
            Sekunde" (m/s), gerundet auf eine Nachkommastelle.
            Fließgeschwindigkeiten von mehr als 6 Meter pro Sekunde werden als
            "> 6 m/s" angezeigt.
          </p>
          <p>
            Auch im Abfragemodus können Sie die Karte mit gedrückter linker
            Maustaste verschieben. Wenn Sie auf diese Weise oder durch{" "}
            <a onClick={() => setAppMenuActiveMenuSection("positionieren")}>
              Positionierung über einen Suchbegriff
            </a>{" "}
            einen Kartenausschnitt auswählen, in dem die zuletzt abgefragte
            Zelle nicht mehr enthalten ist, wird das Anzeigefeld auf seinen
            Startzustand zurückgesetzt. Mit einem Klick auf das{" "}
            <Icon name="close" /> Symbol rechts oben im Anzeigefeld beenden Sie
            den Abfragemodus.
          </p>
        </div>
      }
    />
  );
};
export default Component;