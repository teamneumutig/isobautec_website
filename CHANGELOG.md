# Changelog

Alle relevanten Änderungen an den im Projekt hochgeladenen und veränderten Dateien werden in dieser Datei dokumentiert.

## [1.1.7] - 2026-09-23

### Behoben

- Die rote Trennlinie über den Kontaktdaten in der mobilen Navigation wurde auf die verfügbare Breite des Kontaktbereichs begrenzt.
- Der linke Abstand bleibt unverändert erhalten und rechts wird nun ebenfalls ein gleichmäßiger Abstand zur Außenkante gelassen.
- Nur `.site-nav__details::before` wurde angepasst; Höhe, Farbe, Navigationspunkte, Telefonnummer, E-Mail, SVG-Rahmen und Desktop-Verhalten bleiben unverändert.

## [1.1.6] - 2026-09-23

### Behoben

- Der rote Trennstrich oberhalb der Telefonnummer in der mobilen Navigation reicht jetzt bis zur rechten Kante des blauen mobilen Navigationsbereichs.
- Der Strich beginnt weiterhin am linken Rand des Kontaktbereichs und nutzt dabei die vorhandenen seitlichen Abstände der mobilen Navigation responsiv korrekt.
- Nur `.site-nav__details::before` wurde angepasst; andere Navigationsstriche, SVG-Rahmen, Telefonnummer und E-Mail bleiben unverändert.
- Desktop-Verhalten wurde nicht verändert.

## [1.1.1] - 2026-09-23

### Behoben

- Der SVG-Rahmen des Kontakt-Links wird in der mobilen Navigation nicht mehr im HTML ausgegeben.
- Auf Desktop bleibt der Kontakt-Rahmen unverändert erhalten.
- Der Kontakt-Text, Telefonnummer und E-Mail bleiben unverändert.
- Andere Navigationspunkte und ihre Striche wurden nicht verändert.

## [1.1.5] - 2026-09-23

### Behoben

- In `main.scss` wurde der SVG-Rahmen des Kontakt-Links in der mobilen Navigation vollständig ausgeblendet.
- Die normalen Unterstreichungen anderer Navigationspunkte bleiben unverändert erhalten.
- Desktop-Verhalten und andere CSS-Regeln wurden nicht verändert.

## [1.1.4] - 2026-09-23

### Behoben

- Die horizontale Trennlinie im mobilen Kontaktbereich der Navigation wurde entfernt.
- Die kurze rote Linie vor `.site-nav__details` bleibt unverändert erhalten.
- Telefonnummer und E-Mail im Kontaktbereich wurden nicht geändert.

## [1.0.0] - 2026-09-23

### Hinzugefügt

- Die Datei `rsce_ib_navigation.html.twig` wurde als erste Release-Version 1.0 in das GitHub-Repository hochgeladen.
- Die Hauptnavigation wurde damit im Projekt als freigegebene Version aufgenommen und dokumentiert.
