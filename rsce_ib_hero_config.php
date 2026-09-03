<?php

return array(
    'label' => array(
        'Hero-Bereich',
        'ISOBAUTEC Hero – Hintergrund, Überschrift, Tipping und CTA',
    ),

    'types' => array('content'),
    'contentCategory' => 'ib_elements',
    'standardFields' => array('cssID'),

    'fields' => array(
        'image' => array(
            'label' => array('Hintergrundbild', 'Austauschbares Hero-Hintergrundbild.'),
            'inputType' => 'fileTree',
            'eval' => array(
                'fieldType' => 'radio',
                'filesOnly' => true,
                'extensions' => 'jpg,jpeg,png,webp',
            ),
        ),

        'video' => array(
            'label' => array('Hintergrundvideo', 'Wird nur verwendet, wenn kein Bild gesetzt ist.'),
            'inputType' => 'fileTree',
            'eval' => array(
                'fieldType' => 'radio',
                'filesOnly' => true,
                'extensions' => 'mp4,webm,ogg',
            ),
        ),

        'eyebrow' => array(
            'label' => array('Hero-Kicker', 'Text oberhalb der Hauptüberschrift.'),
            'inputType' => 'text',
            'eval' => array('tl_class' => 'long'),
        ),

        'hero_heading_intro' => array(
            'label' => array(
                'Hero-Überschrift',
                'Einzelne Wörter können mit TinyMCE fett oder kursiv formatiert werden.',
            ),
            'inputType' => 'textarea',
            'eval' => array(
                'rte' => 'tinyMCE',
                'tl_class' => 'long',
            ),
        ),

        'typing_headline' => array(
            'label' => array(
                'Text oberhalb des Tipp-Hinweises',
                'Einzelne Wörter können mit TinyMCE fett oder kursiv formatiert werden.',
            ),
            'inputType' => 'textarea',
            'eval' => array(
                'rte' => 'tinyMCE',
                'tl_class' => 'long',
            ),
        ),

        'type_color' => array(
            'label' => array('Tipping-Farbe', 'Leer = Originalfarbe #C97267.'),
            'inputType' => 'text',
            'eval' => array(
                'colorpicker' => true,
                'isHexColor' => true,
                'decodeEntities' => true,
                'maxlength' => 6,
                'tl_class' => 'w50 wizard',
            ),
        ),

        'type_words_formatted' => array(
            'label' => array(
                'Tipping-Wörter',
                'Mindestens 3, maximal 5 Wörter. Jedes Wort kann einzeln formatiert werden.',
            ),
            'inputType' => 'list',
            'elementLabel' => '%s. Tipping-Wort',
            'minItems' => 3,
            'maxItems' => 5,
            'fields' => array(
                'word' => array(
                    'label' => array('Wort', ''),
                    'inputType' => 'text',
                ),
                'weight' => array(
                    'label' => array('Schriftgewicht', ''),
                    'inputType' => 'select',
                    'options' => array(
                        '400' => 'Normal',
                        '500' => 'Medium',
                        '600' => 'Semibold',
                        '700' => 'Bold',
                    ),
                    'default' => '700',
                ),
                'style' => array(
                    'label' => array('Schriftstil', ''),
                    'inputType' => 'select',
                    'options' => array(
                        'normal' => 'Normal',
                        'italic' => 'Kursiv',
                    ),
                    'default' => 'normal',
                ),
            ),
        ),

        'cta_headline' => array(
            'label' => array('Text unterhalb des Tipp-Hinweises', 'Text unterhalb der Hero-Überschrift.'),
            'inputType' => 'textarea',
            'eval' => array('tl_class' => 'long'),
        ),

        'buttons' => array(
            'label' => array('Buttons', 'Beliebig viele Buttons hinzufügen.'),
            'inputType' => 'list',
            'fields' => array(
                'link_text' => array(
                    'label' => array('Button-Text', ''),
                    'inputType' => 'text',
                    'eval' => array('tl_class' => 'w50'),
                ),
                'link_url' => array(
                    'label' => array('Button-Link', 'z. B. #projekte oder #leistungen'),
                    'inputType' => 'text',
                    'eval' => array('tl_class' => 'w50'),
                ),
            ),
        ),
    ),
);
