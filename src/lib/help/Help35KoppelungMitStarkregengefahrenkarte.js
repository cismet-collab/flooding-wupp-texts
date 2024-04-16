import React from "react";
import Icon from "react-cismap/commons/Icon";
import GenericModalMenuSection from "react-cismap/topicmaps/menu/Section";

const Component = () => {
  return (
    <GenericModalMenuSection
      sectionKey="koppelung"
      sectionTitle="Koppelung mit Starkregengefahrenkarte"
      sectionBsStyle="success"
      sectionContent={
        <div>
          <p>
            Sobald die Hochwassergefahrenkarte und die{" "} 
            <a
                target="_legal"
                href="https://topicmaps-wuppertal.github.io/starkregen/#/hoehen?lat=51.271680556266894&lng=7.199681997299195&zoom=18"
              >
                Starkregengefahrenkarte
            </a>, 
            auf einem Endgerät in zwei Fenstern desselben Browsers 
            gestartet werden, sind sie standardmäßig miteinander gekoppelt. 
            Änderungen des Kartenausschnittes (Position und Maßstab), die in einer 
            der beiden Anwendungen erfolgen, werden dadurch automatisch auch in der 
            anderen Anwendung durchgeführt. Das funktioniert auch bei{" "}
            <a 
              className="renderAsLink" 
              onClick={() => setAppMenuActiveMenuSection("positionieren")}>
              Positionierungen über Suchbegriffe
            </a>.
            Dabei gibt es keine feste 
            Rollenverteilung, welche der Anwendungen die führende und welche die 
            folgende ist. Die synchronisierte Steuerung der Kartenausschnitte erfolgt 
            wechselweise immer aus derjenigen Anwendung, deren Fenster gerade den 
            Fokus hat.
          </p>
          <p>
            Die Koppelung der beiden Kartenanwendungen ist nicht auf zwei 
            Browserfenster beschränkt. Sie können beliebig viele weitere 
            Anwendungsfenster öffnen, die alle standardmäßig synchronisiert werden. 
            Damit können Sie z. B. auch unterschiedliche Hochwasser-Szenarien aus 
            er Hochwassergefahrenkarte gut miteinander vergleichen.
          </p>
          <p>
            Mit dem Wechselschalter "Synchronisation stoppen / Synchronisation 
            starten" (das unterste Werkzeug in der Werkzeugleiste links oben) 
            können Sie einzelne Anwendungsfenster aus der Gruppe der 
            synchronisierten Kartenanwendungen herausnehmen und wieder hinzufügen.
          </p>
        </div>
      }
    />
  );
};
export default Component;
