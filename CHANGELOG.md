# Changelog

Alle relevanten Änderungen an den im Projekt hochgeladenen und veränderten Dateien werden in dieser Datei dokumentiert.

## [1.1.5] - 2026-09-03

### Geändert

- Die sichtbare Bezeichnung der Tipping-Gruppe im Contao-Backend wurde auf „Tipping Farbe“ angepasst.
- Die technische Gruppen-ID `tipping_words` sowie alle Feldnamen, Inhalte und Funktionen bleiben unverändert.

## [1.1.4] - 2026-09-03

### Behoben

- Die nicht verarbeitete `fieldsets`-Definition wurde durch die von RSCE unterstützte `inputType => 'group'`-Struktur ersetzt.
- Dadurch werden „Hero-Kicker“, „Hero-Überschrift“ und „Text unterhalb des Tipp-Hinweises“ tatsächlich innerhalb der Gruppe „Hero-Inhalt“ dargestellt.
- Die vorhandenen technischen Feldnamen, gespeicherten Inhalte und Felddefinitionen bleiben erhalten.

## [1.1.3] - 2026-09-03

### Geändert

- Die Fieldsets der RSCE-Konfiguration „Hero-Bereich“ werden im Contao-Backend über `collapsed => true` korrekt als auf- und zuklappbare Gruppen dargestellt.
- Die Gruppe „Hero-Inhalt“ enthält „Hero-Kicker“, „Hero-Überschrift“ und „Text unterhalb des Tipp-Hinweises“.

## [1.1.2] - 2026-09-03

### Geändert

- Die aktualisierte `rsce_ib_hero_config.php` wurde auf GitHub veröffentlicht.
- Die Backend-Felder des „Hero-Bereichs“ sind in die auf- und zuklappbaren Gruppen „Hero-Inhalt“, „Tipping-Wörter“, „Buttons“ und „Bild“ gegliedert.
- Die vorhandenen Felder, technischen Feldnamen und Inhalte wurden unverändert beibehalten.
- Twig-, CSS- und JavaScript-Dateien wurden nicht geändert.

## [1.1.1] - 2026-09-03

### Geändert

- Das bestehende Mehrfachfeld „Bilder“ in `rsce_ib_projects_config.php` im RSCE „IB · Projekt“ unterstützt nun die allgemeine Sortierung der ausgewählten Dateien per Drag & Drop.
- Die gespeicherte Reihenfolge wird unverändert für die Ausgabe im Frontend verwendet. (In dieser Version konnten dann die Bilder dementsprechend im Backend umsortiert werden. Änderungen Siehe in den entsprechenden Datei unter "Use Contao sortable file tree option"n) 
- Die Felder der RSCE-Konfiguration „Hero-Bereich“ wurden im Contao-Backend in die auf- und zuklappbaren Gruppen „Hero-Inhalt“, „Tipping-Wörter“, „Buttons“ und „Bild“ gegliedert.
- „Überschrift“ und „Text unterhalb des Tipp-Hinweises“ liegen gemeinsam in der Gruppe „Hero-Inhalt“.

## [1.1.0] - 2026-09-03

### Geändert

- Das bestehende Mehrfachfeld „Bilder“ in `rsce_ib_projects_config.php` im RSCE „IB · Projekt“ unterstützt nun die allgemeine Sortierung der ausgewählten Dateien per Drag & Drop.
- Die gespeicherte Reihenfolge wird unverändert für die Ausgabe im Frontend verwendet. (Leider können die Bilder in dieser Version im Backend noch nicht umsortiert werden. Änderungen Siehe in den entsprechenden Datei unter "Use Contao sortable file tree option" )
- In `ib-projektgalerie.js` bleibt das aktive Projektbild vollständig scharf und erhält immer `blur: 0`.
- Der bestehende 3D-/Scroll-Effekt sowie die Unschärfe der übrigen Bilder bleiben erhalten.
- In `rsce_ib_hero_config.php` wurden die sichtbaren Backend-Bezeichnungen des Elements und der Hero-Texte präzisiert.
- Das Feld „Text oberhalb des Tipp-Hinweises“ wurde aus der RSCE-Konfiguration des Hero-Bereichs entfernt.

## [1.0.0] - 2026-09-03

### Hinzugefügt

- Initiale Veröffentlichung von `ib-projektgalerie.js` mit Sticky-Scroll-Projektgalerie, Lightbox, Hover-Parallax und Responsive-Verhalten.
- Unveränderte Veröffentlichung von `rsce_ib_hero_config.php`.
- Initiale Veröffentlichung von `rsce_ib_projects_config.php` als RSCE-Konfiguration für den Projekt-Scroller „IB · Projekt“.
