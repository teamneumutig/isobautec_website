<?php

return [
    'label' => ['IB · Projekt', 'Projekt-Scroller mit beliebig vielen Projekten'],
    'types' => ['content'],
    'contentCategory' => 'ib_elements',
    'standardFields' => ['cssID'],
    'beTemplate' => 'be_wildcard',

    'fields' => [
    'projectBg' => [
        'label' => ['Standardfarbe', 'Hintergrundfarbe für Projekt 01, 03, 05 usw.'],
        'inputType' => 'text',
        'eval' => [
            'colorpicker' => true,
            'isHexColor' => true,
            'maxlength' => 6,
            'tl_class' => 'w50 wizard',
        ],
    ],

    'projectBgAlt' => [
        'label' => ['Alternative Farbe', 'Hintergrundfarbe für Projekt 02, 04, 06 usw.'],
        'inputType' => 'text',
        'eval' => [
            'colorpicker' => true,
            'isHexColor' => true,
            'maxlength' => 6,
            'tl_class' => 'w50 wizard',
        ],
    ],

        'projects' => [
            'label' => [
                'Projekte',
                'Beliebig viele Projekte anlegen, bearbeiten, löschen und sortieren.',
            ],
            'elementLabel' => '%s. Projekt',
            'inputType' => 'list',
            'minItems' => 1,

            'fields' => [
                'number' => [
                    'label' => ['Kategorie oder Nummer', 'Hier wird die Kategorie oder Nummer orange angezeigt'],
                    'inputType' => 'text',
                    'eval' => [
                        'maxlength' => 40,
                        'tl_class' => 'w50',
                    ],
                ],

                'category' => [
                    'label' => ['Kategorie', 'Hier wird die Kategorie in normaler Schriftfarbe angezeigt.'],
                    'inputType' => 'text',
                    'eval' => [
                        'maxlength' => 120,
                        'tl_class' => 'w50',
                    ],
                ],

                'showCategory' => [
                    'label' => ['Kategorie anzeigen', 'Kategorie neben der Kennzeichnung anzeigen'],
                    'inputType' => 'checkbox',
                    'eval' => [
                        'tl_class' => 'w50 m12',
                    ],
                    'default' => true,
                ],

                'title' => [
                    'label' => ['Überschrift', 'Projektüberschrift'],
                    'inputType' => 'textarea',
                    'eval' => [
                        'tl_class' => 'clr long',
                    ],
                ],

                'text' => [
                    'label' => ['Beschreibung', 'Beschreibung des Projekts'],
                    'inputType' => 'textarea',
                    'eval' => [
                        'rte' => 'tinyMCE',
                        'tl_class' => 'clr long',
                    ],
                ],

                'reverse' => [
                    'label' => [
                        'Seiten tauschen',
                        'Text und Bilder auf der jeweils anderen Seite anzeigen',
                    ],
                    'inputType' => 'checkbox',
                    'eval' => [
                        'tl_class' => 'clr',
                    ],
                ],

                'images' => [
                    'label' => [
                        'Bilder',
                        'Beliebig viele Bilder für dieses Projekt auswählen.',
                    ],
                    'inputType' => 'fileTree',
                    'eval' => [
                        'multiple' => true,
                        'fieldType' => 'checkbox',
                        'isSortable' => true,
                        'filesOnly' => true,
                        'extensions' => 'jpg,jpeg,png,webp,avif',
                        'tl_class' => 'clr',
                    ],
                ],
            ],
        ],
    ],
];
