// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2018 Kodular. All rights reserved.

/**
 * Visual Blocks Language
 *
 * Copyright © 2018 Kodular. All rights reserved.
 */

/**
 * @fileoverview German strings.
 */
'use strict';

goog.provide('AI.Blockly.Msg.de');

goog.require('Blockly.Msg.de');

/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

Blockly.Msg.de.switch_language_to_german = {
  // Switch language to German.
  category: '',
  helpUrl: '',
  init: function() {
// Context menus.
    Blockly.Msg.UNDO = 'Rückgängig machen';
    Blockly.Msg.REDO = 'Wiederholen';
    Blockly.Msg.CLEAN_UP = 'Blöcke aufräumen';
    Blockly.Msg.DUPLICATE_BLOCK = 'Kopie erstellen';
    Blockly.Msg.REMOVE_COMMENT = 'Kommentar löschen';
    Blockly.Msg.ADD_COMMENT = 'Kommentar hinzufügen';
    Blockly.Msg.EXTERNAL_INPUTS = 'External Inputs';
    Blockly.Msg.INLINE_INPUTS = 'Inline Inputs';
    Blockly.Msg.HORIZONTAL_PARAMETERS = 'Arrange Parameters Horizontally';
    Blockly.Msg.VERTICAL_PARAMETERS = 'Arrange Parameters Vertically';
    Blockly.Msg.CONFIRM_DELETE = 'Löschen bestätigen';
    Blockly.Msg.DELETE_ALL_BLOCKS = "Alle Blöcke %1 löschen?";
    Blockly.Msg.DELETE_BLOCK = 'Block löschen';
    Blockly.Msg.DELETE_X_BLOCKS = 'Lösche %1 Blöcke';
    Blockly.Msg.COLLAPSE_BLOCK = 'Block minimieren';
    Blockly.Msg.EXPAND_BLOCK = 'Block maximieren';
    Blockly.Msg.DISABLE_BLOCK = 'Block deaktivieren';
    Blockly.Msg.ENABLE_BLOCK = 'Block aktivieren';
    Blockly.Msg.HELP = 'Hilfe';
    Blockly.Msg.EXPORT_IMAGE = 'Blöcke als Bild herunterladen';
    Blockly.Msg.COLLAPSE_ALL = 'Alle Blöcke minimieren';
    Blockly.Msg.EXPAND_ALL = 'Alle Blöcke maximieren';
    Blockly.Msg.ARRANGE_H = 'Blöcke Horizontal anordnen';
    Blockly.Msg.ARRANGE_V = 'Blöcke Vertikal anordnen';
    Blockly.Msg.ARRANGE_S = 'Blöcke Diagonal anordnen';
    Blockly.Msg.SORT_W = 'Blöcke nach Breite sortieren';
    Blockly.Msg.SORT_H = 'Blöcke nach Höhe sortieren';
    Blockly.Msg.SORT_C = 'Blöcke nach Kategorie sortieren';
    Blockly.Msg.COPY_TO_BACKPACK = 'Zum Rucksack hinzufügen';
    Blockly.Msg.COPY_ALLBLOCKS = 'Alle Blöcke in den Rucksack kopieren';
    Blockly.Msg.BACKPACK_GET = 'Alle Blöcke vom Rucksack einfügen';
    Blockly.Msg.BACKPACK_EMPTY = 'Den Rucksack leeren';
    Blockly.Msg.BACKPACK_CONFIRM_EMPTY = 'Möchtest du wirklich den Rucksack leeren und alle darin enthaltenen Blöcke löschen?';
    Blockly.Msg.BACKPACK_DOC_TITLE = "Rucksack Information";
    Blockly.Msg.SHOW_BACKPACK_DOCUMENTATION = "Dokumentation zum Rucksack anzeigen";
    Blockly.Msg.BACKPACK_DOCUMENTATION = "Der Rucksack ist eine Kopier- / Einfügefunktion. Er erlaubt Ihnen, Blöcke von einem Projekt oder Bildschirm zu kopieren" +
   " um sie dann wieder in ein anderes Projekt oder einen anderen Bildschirm einfügen zu können. " +
   " Klicken Sie zum Einfügen auf das Symbol \"Rucksack\" und ziehen Sie die Blöcke in den Arbeitsbereich. " +
   "</p><p>Wenn du Kodular schließt oder dein Projekt verlässt, " +
   " bleiben die gespeicherten Blöcke im Rucksack erhalten." +
   "</p><p>Weitere Dokumentation und ein Beispiel Video finden Sie unter:" +
   '</p><p><a href="https://docs.kodular.io/other/backpack.html" target="_blank">https://docs.kodular.io/other/backpack.html</a>';
    Blockly.Msg.ENABLE_GRID = 'Arbeitsbereich-Raster aktivieren';
    Blockly.Msg.DISABLE_GRID = 'Arbeitsbereichsraster deaktivieren';
    Blockly.Msg.ENABLE_SNAPPING = 'Platzierung am Raster aktivieren';
    Blockly.Msg.DISABLE_SNAPPING = 'Platzierung am Raster deaktivieren';

// Variable renaming.
    Blockly.Msg.CHANGE_VALUE_TITLE = 'Wert ändern:';
    Blockly.Msg.NEW_VARIABLE = 'Neue Variable...';
    Blockly.Msg.NEW_VARIABLE_TITLE = 'Neuer Variablen Name:';
    Blockly.Msg.RENAME_VARIABLE = 'Variable umbenennen...';
    Blockly.Msg.RENAME_VARIABLE_TITLE = 'Umbenennen aller "%1" Variablen zu:';

// Toolbox.
    Blockly.Msg.VARIABLE_CATEGORY = 'Variablen';
    Blockly.Msg.PROCEDURE_CATEGORY = 'Prozeduren';

// Warnings/Errors
    Blockly.Msg.ERROR_BLOCK_CANNOT_BE_IN_DEFINTION = "Dieser Block kann nicht in einer Definition sein";
    Blockly.Msg.ERROR_SELECT_VALID_ITEM_FROM_DROPDOWN = "Wählen Sie ein gültiges Element in der Dropdown-Liste aus.";
    Blockly.Msg.ERROR_DUPLICATE_EVENT_HANDLER = "Dies ist ein doppelter Ereignishandler für diese Komponente.";
    Blockly.Msg.ERROR_COMPONENT_DOES_NOT_EXIST = "Komponente existiert nicht";
    Blockly.Msg.ERROR_BLOCK_IS_NOT_DEFINED = "Dieser Block ist nicht definiert. Lösche diesen Block!";
    Blockly.Msg.ERROR_BREAK_ONLY_IN_LOOP = "The break block should be used only within loops";

// Colour Blocks.
    Blockly.Msg.LANG_COLOUR_PICKER_HELPURL = 'https://docs.kodular.io/blocks/colors#basic';
    Blockly.Msg.LANG_COLOUR_PICKER_TOOLTIP = 'Klicken Sie auf das Quadrat, um eine Farbe auszuwählen.';
    Blockly.Msg.LANG_COLOUR_WHITE = 'Weiß';
    Blockly.Msg.LANG_COLOUR_LIGHT_GRAY = 'Helles Grau';
    Blockly.Msg.LANG_COLOUR_GRAY = 'Grau';
    Blockly.Msg.LANG_COLOUR_BLUE_GRAY = 'Blau Grau';
    Blockly.Msg.LANG_COLOUR_DARK_GRAY = 'Dunkles Grau';
    Blockly.Msg.LANG_COLOUR_BLACK = 'Schwarz';
    Blockly.Msg.LANG_COLOUR_RED = 'Rot';
    Blockly.Msg.LANG_COLOUR_PINK = 'Pink';
    Blockly.Msg.LANG_COLOUR_PURPLE = 'Lila';
    Blockly.Msg.LANG_COLOUR_DEEP_PURPLE = 'Dunkles Lila';
    Blockly.Msg.LANG_COLOUR_INDIGO = 'Indigo';
    Blockly.Msg.LANG_COLOUR_BLUE = 'Blau';
    Blockly.Msg.LANG_COLOUR_LIGHT_BLUE = 'Helles Blau';
    Blockly.Msg.LANG_COLOUR_CYAN = 'Cyan';
    Blockly.Msg.LANG_COLOUR_TEAL = 'Blau Grün';
    Blockly.Msg.LANG_COLOUR_GREEN = 'Grün';
    Blockly.Msg.LANG_COLOUR_LIGHT_GREEN = 'Helles Grün';
    Blockly.Msg.LANG_COLOUR_LIME = 'Limette';
    Blockly.Msg.LANG_COLOUR_YELLOW = 'Gelb';
    Blockly.Msg.LANG_COLOUR_AMBER = 'Bernstein';
    Blockly.Msg.LANG_COLOUR_ORANGE = 'Orange';
    Blockly.Msg.LANG_COLOUR_DEEP_ORANGE = 'Dunkles Orange';
    Blockly.Msg.LANG_COLOUR_BROWN = 'Braun';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR = 'Farbe teilen';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_HELPURL = 'https://docs.kodular.io/blocks/colors#split';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_TOOLTIP = "A list of four elements, each in the range 0 to 255, representing the red, green, blue and alpha components.";
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR = 'Farbe erstellen';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_HELPURL = 'https://docs.kodular.io/blocks/colors#make';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP = "Eine Farbe mit den angegebenen Rot-, Grün-, Blau- und optional Alpha-Werten";

// Control Blocks
    Blockly.Msg.LANG_CATEGORY_CONTROLS = 'Steuerung';
    Blockly.Msg.LANG_CONTROLS_IF_HELPURL = 'https://docs.kodular.io/blocks/control#if';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_1 = 'Wenn ein Wert wahr ist, führen Sie einige Anweisungen aus.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_2 = 'Wenn ein Wert wahr ist, führen Sie den ersten Anweisungsblock aus.\n' +
        'Andernfalls führen Sie den zweiten Anweisungsblock aus.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_3 = 'Wenn der erste Wert wahr ist, führen Sie den ersten Anweisungsblock aus.\n' +
        'Andernfalls, wenn der zweite Wert wahr ist, führen Sie den zweiten Anweisungsblock aus.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_4 = 'Wenn der erste Wert wahr ist, führen Sie den ersten Anweisungsblock aus.\n' +
        'Andernfalls, wenn der zweite Wert wahr ist, führen Sie den zweiten Anweisungsblock aus.\n' +
        'Wenn keiner der Werte wahr ist, führen Sie den letzten Block der Anweisung aus.';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_IF = 'Wenn';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSEIF = 'Sonst, wenn';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSE = 'Sonst';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_THEN = 'Dann';

    Blockly.Msg.LANG_CONTROLS_IF_IF_TITLE_IF = 'Wenn';
    Blockly.Msg.LANG_CONTROLS_IF_IF_TOOLTIP = 'Abschnitte hinzufügen, entfernen oder neu anordnen,\n' +
  'um den "Wenn" Block neu zu konfigurieren.';

    Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TITLE_ELSEIF = 'Sonst, wenn';
    Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TOOLTIP = 'Fügen Sie dem Wenn-Block eine Bedingung hinzu.';

    Blockly.Msg.LANG_CONTROLS_IF_ELSE_TITLE_ELSE = 'Dann';
    Blockly.Msg.LANG_CONTROLS_IF_ELSE_TOOLTIP = 'Füge eine abschließende, Dann-Bedingung zum Wenn-Block hinzu.';

    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_HELPURL = 'https://docs.kodular.io/blocks/control#while';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT = 'wiederholen';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_INPUT_DO = 'tue';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'während';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'bis';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'Wenn ein Wert wahr ist, führen Sie einige Anweisungen aus.';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'Während ein Wert falsch ist, führen Sie einige Anweisungen aus.';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_1 = 'Führt die Blöcke im "tue" Abschnitt aus, während der Test wahr ist.' ;

    Blockly.Msg.LANG_CONTROLS_FOR_HELPURL = '';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_WITH = 'zählen mit';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_VAR = 'x';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_FROM = 'von';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_TO = 'zu';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_DO = 'tue';

    Blockly.Msg.LANG_CONTROLS_FOR_TOOLTIP = 'Zählen Sie von einer Startnummer zu einer Endnummer.\n' +
        'Setzen Sie für jeden Zähler die aktuelle Zählnummer auf\n' +
        'variable "%1", und platziere dann deine Anweisungen.';

    Blockly.Msg.LANG_CONTROLS_FORRANGE_HELPURL = 'https://docs.kodular.io/blocks/control#forrange';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_ITEM = 'für jede';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_VAR = 'Nummer';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_START = 'von';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_END = 'bis';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_STEP = 'durch';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_DO = 'tue';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_TEXT = 'für Nummer im Bereich';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_PREFIX = 'für ';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_SUFFIX = ' im Bereich';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_TOOLTIP = 'Führt die Blöcke im \'tue\' Abschnitt für jeden numerischen '
        + 'Wert aus im Bereich von Anfang bis Ende, wobei der Wert jedesmal schrittweise geändert wird.  Verwende den angegebenen '
        + 'Variablenname, der auf den aktuellen Wert verweist.';

    Blockly.Msg.LANG_CONTROLS_FOREACH_HELPURL = 'https://docs.kodular.io/blocks/control#foreach';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_ITEM = 'für jedes';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_VAR = 'Element';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_INLIST = 'in Liste';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_DO = 'tue';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_TEXT = 'für Elemente in Liste';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_PREFIX = 'für ';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_SUFFIX = ' in Liste';
    Blockly.Msg.LANG_CONTROLS_FOREACH_TOOLTIP = 'Führt die Blöcke im \'tue\' Abschnitt für jedes Element in '
        + 'der Liste aus.  Verwenden Sie den angegebenen Variablennamen, um auf das aktuelle Listenelement zu verweisen.';

    Blockly.Msg.LANG_CONTROLS_GET_HELPURL = 'https://docs.kodular.io/blocks/control#get';


    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL = 'http://en.wikipedia.org/wiki/Control_flow';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP = 'der Schleife';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'stoppen';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'weiter mit nächster Iteration';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Brechen Sie aus der enthaltenen Schleife aus.';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Überspringen Sie den Rest dieser Schleife, und\n' +
        'fahren Sie mit der nächsten Iteration fort.';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_WARNING = 'Warnung:\n' +
        'Dieser Block darf nur\n' +
        'in einer Schleife verwendet werden.';

    Blockly.Msg.LANG_CONTROLS_WHILE_HELPURL = 'https://docs.kodular.io/blocks/control#while';;
    Blockly.Msg.LANG_CONTROLS_WHILE_TITLE = 'während';
    Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_TEST = 'test';
    Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_DO = 'tue';
    Blockly.Msg.LANG_CONTROLS_WHILE_COLLAPSED_TEXT = 'während';
    Blockly.Msg.LANG_CONTROLS_WHILE_TOOLTIP = 'Führt die Blöcke im \'tue\' Abschnitt aus, während der Test '
        + 'wahr ist.';

    Blockly.Msg.LANG_CONTROLS_CHOOSE_HELPURL = 'https://docs.kodular.io/blocks/control#choose';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_TITLE = 'Wenn'
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_TEST = '';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_THEN_RETURN = 'Dann';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_ELSE_RETURN = 'Sonst';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_COLLAPSED_TEXT = 'Wenn';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_TOOLTIP = 'Wenn die getestete Bedingung wahr ist, '
        + 'wird die Anweisung im "Dann" Bereich ausgeführt;'
        + ' ist die Überprüfung allerdings falsch, wird die "Sonst" Anweisung ausgeführt.';

    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_HELPURL = 'https://docs.kodular.io/blocks/control#doreturn';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_DO = 'tue';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_RETURN = 'Ergebnis';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TOOLTIP = 'Führt die Blöcke in \'tue\' aus und gibt eine Anweisung zurück. Nützlich, wenn Sie eine Prozedur ausführen müssen, bevor Sie einen Wert an eine Variable zurückgeben.';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_COLLAPSED_TEXT = 'tue/Ergebnis';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TITLE = 'tue Ergebnis ';

    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TITLE = 'Auswerten, aber Ergebnis ignorieren'
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_HELPURL = 'https://docs.kodular.io/blocks/control#evaluate';
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_COLLAPSED_TEXT = 'Auswerten aber ignorieren'
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TOOLTIP = 'Führt den verbundenen Codeblock aus und ignoriert den Rückgabewert (falls vorhanden). Nützlich, wenn Sie eine Prozedur mit einem Rückgabewert aufrufen müssen, aber den Wert nicht benötigen.';

    /* [lyn, 10/14/13] Removed for now. May come back some day.
     Blockly.Msg.LANG_CONTROLS_NOTHING_TITLE = 'nichts';
     Blockly.Msg.LANG_CONTROLS_NOTHING_HELPURL = 'https://docs.kodular.io/blocks/control#nothing';
     Blockly.Msg.LANG_CONTROLS_NOTHING_TOOLTIP = 'Gibt nichts zurück Wird zur Initialisierung von Variablen verwendet oder kann in einen Rückgabe-Socket gesteckt werden, wenn kein Wert zurückgegeben werden muss. Dies entspricht null oder None.';
     */

    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_HELPURL = 'https://docs.kodular.io/blocks/control#openscreen';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TITLE = 'Einen anderen Bildschirm öffnen';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_INPUT_SCREENNAME = 'Bildschirmname';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_COLLAPSED_TEXT = 'Bildschirm öffnen';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TOOLTIP = 'Öffnet einen neuen Bildschirm in einer App mit mehreren Bildschirmen.';

    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_HELPURL = 'https://docs.kodular.io/blocks/control#openscreenwithvalue';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TITLE = 'Öffnet einen weiteren Bildschirm mit Startwert';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_SCREENNAME = 'Bildschirmname';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_STARTVALUE = 'Startwert';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_COLLAPSED_TEXT = 'Bildschirm öffnen mit Wert'
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TOOLTIP = 'Öffnet einen neuen Bildschirm in einer App mit mehreren Bildschirmen und übergibt '
        + 'den Startwert an diesen Bildschirm.';

    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_HELPURL = 'https://docs.kodular.io/blocks/control#getstartvalue';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TITLE = 'Startwert erhalten';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_SCREENNAME = 'Bildschirmname';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_STARTVALUE = 'Startwert';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_COLLAPSED_TEXT = 'Startwert erhalten';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TOOLTIP = 'Gibt den Wert zurück, der beim Öffnen an diesen Bildschirm übergeben wurde, in der Regel über einen anderen Bildschirm '
        + 'in einer App mit mehreren Bildschirmen. Wenn kein Wert übergeben wurde, '
        + 'wird der leere Text zurückgegeben.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_HELPURL = 'https://docs.kodular.io/blocks/control#closescreen';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TITLE = 'Bildschirm schließen';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_COLLAPSED_TEXT = 'Bildschirm schließen';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TOOLTIP = 'Aktuellen Bildschirm schließen';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_HELPURL = 'https://docs.kodular.io/blocks/control#closescreenwithvalue';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TITLE = 'Bildschirm mit Wert schließen';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_INPUT_RESULT = 'Ergebnis';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_COLLAPSED_TEXT = 'Bildschirm mit Wert schließen';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TOOLTIP = 'Schließt den aktuellen Bildschirm und gibt ein Ergebnis an den Bildschirm zurück, '
        + 'der diesen geöffnet hat.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_HELPURL = 'https://docs.kodular.io/blocks/control#closeapp';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TITLE = 'Anwendung schließen';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_COLLAPSED_TEXT = 'Anwendung schließen';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TOOLTIP = 'Schließt alle Bildschirme in dieser App und stoppt die App.';

    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_HELPURL = 'https://docs.kodular.io/blocks/control#getplainstarttext';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TITLE = 'Erhalten einfachen Starttext';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_COLLAPSED_TEXT = 'Erhalten einfachen Starttext';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TOOLTIP = 'Gibt den Starttext zurück, der an diesen Bildschirm übergeben wurde, wenn '
        + 'es von einer anderen App gestartet wurde. Wenn kein Wert übergeben wurde, wird der leere Text zurückgegeben.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_HELPURL = 'https://docs.kodular.io/blocks/control#closescreenwithplaintext';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TITLE = 'Bildschirm mit Klartext schließen';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_COLLAPSED_TEXT = 'Bildschirm mit Klartext schließen';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TOOLTIP = 'Schließt den aktuellen Bildschirm und gibt Text an die App zurück, die diesen geöffnet hat. '
        + 'Dieser Befehl dient zum Zurückgeben von Text an Nicht-Kodular-Aktivitäten, nicht an Kodular-Bildschirme. Verwenden Sie für Kodular-Bildschirme, '
        + 'wie bei Anwendungen mit mehreren Bildschirmen, "Bildschirm mit Wert schließen" und nicht "Bildschirm mit Nur-Text schließen".';

    Blockly.Msg.LANG_CONTROLS_BREAK_HELPURL = "https://docs.kodular.io/blocks/control#break";
    Blockly.Msg.LANG_CONTROLS_BREAK_TITLE = "break";
    Blockly.Msg.LANG_CONTROLS_BREAK_INPUT_TEXT = "value";
    Blockly.Msg.LANG_CONTROLS_BREAK_COLLAPSED_TEXT = "break";

// Logic Blocks.
    Blockly.Msg.LANG_CATEGORY_LOGIC = 'Logik';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL = 'http://en.wikipedia.org/wiki/Inequality_(mathematics)';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_EQ = 'https://docs.kodular.io/blocks/logic#=';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_NEQ = 'https://docs.kodular.io/blocks/logic#not=';
    Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_EQ = 'Prüft, ob zwei Dinge gleich sind. \n' +
        'Die Dinge, die verglichen werden, können irgendwelche Dinge sein, nicht nur Zahlen. \n' +
        'z. B. ist die Zahl 0 gleich dem Text "0". Außerdem sind zwei Strings, die Zahlen darstellen, \n' +
        'gleich, wenn die Zahlen gleich sind, zum Beispiel ist "1" gleich "01".';

    Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_NEQ = 'Gibt true zurück, wenn beide Eingaben nicht gleich sind.';
    Blockly.Msg.LANG_LOGIC_COMPARE_TRANSLATED_NAME = 'logisches gleich';
    Blockly.Msg.LANG_LOGIC_COMPARE_EQ = '=';
    Blockly.Msg.LANG_LOGIC_COMPARE_NEQ = '\u2260';

    Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_AND = 'https://docs.kodular.io/blocks/logic#and';
    Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_OR = 'https://docs.kodular.io/blocks/logic#or';
    Blockly.Msg.LANG_LOGIC_OPERATION_AND = 'und';
    Blockly.Msg.LANG_LOGIC_OPERATION_OR = 'oder';
    Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Gibt wahr zurück, wenn alle Eingaben wahr sind.';
    Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Gibt wahr zurück, wenn eine Eingabe wahr ist.';

    Blockly.Msg.LANG_LOGIC_NEGATE_HELPURL = 'https://docs.kodular.io/blocks/logic#not';
    Blockly.Msg.LANG_LOGIC_NEGATE_INPUT_NOT = 'nicht';
    Blockly.Msg.LANG_LOGIC_NEGATE_TOOLTIP = 'Gibt wahr zurück, wenn die Eingabe falsch ist.\n' +
        'Gibt falsch zurück, wenn die Eingabe wahr ist.';

    Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE_HELPURL = 'https://docs.kodular.io/blocks/logic#true';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE_HELPURL = 'https://docs.kodular.io/blocks/logic#false';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE = 'wahr';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE = 'falsch';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_TRUE = 'Gibt den Booleschen Wert wahr zurück.';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_FALSE = 'Gibt den Booleschen Wert falsch zurück.';

// Math Blocks.
    Blockly.Msg.LANG_CATEGORY_MATH = 'Mathematik';
    Blockly.Msg.LANG_MATH_NUMBER_HELPURL = 'https://docs.kodular.io/blocks/math#number';
    Blockly.Msg.LANG_MATH_NUMBER_TOOLTIP = 'Melden Sie die angezeigte Nummer.';
    Blockly.Msg.LANG_MATH_MUTATOR_ITEM_INPUT_NUMBER = 'Nummer';

    Blockly.Msg.LANG_MATH_COMPARE_HELPURL = '';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_EQ = 'https://docs.kodular.io/blocks/math#=';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_NEQ = 'https://docs.kodular.io/blocks/math#not=';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LT = 'https://docs.kodular.io/blocks/math#lt';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LTE = 'https://docs.kodular.io/blocks/math#lte';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GT = 'https://docs.kodular.io/blocks/math#gt';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GTE = 'https://docs.kodular.io/blocks/math#gte';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_EQ = 'Gibt wahr zurück, wenn beide Zahlen gleich sind.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_NEQ = 'Gibt wahr zurück, wenn beide Zahlen nicht gleich sind.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LT = 'Gibt wahr zurück, wenn die erste Zahl kleiner\n' +
        'als die zweite Zahl ist.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LTE = 'Gibt wahr zurück, wenn die erste Zahl kleiner\n' +
        'als oder gleich der zweiten Zahl.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GT = 'Gibt wahr zurück, wenn die erste Zahl größer\n' +
        'als die zweite Zahl ist.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GTE = 'Gibt wahr zurück, wenn die erste Zahl größer\n' +
        'als oder gleich der zweiten Zahl.';
    Blockly.Msg.LANG_MATH_COMPARE_EQ = '=';
    Blockly.Msg.LANG_MATH_COMPARE_NEQ = '\u2260';
    Blockly.Msg.LANG_MATH_COMPARE_LT = '<';
    Blockly.Msg.LANG_MATH_COMPARE_LTE = '\u2264';
    Blockly.Msg.LANG_MATH_COMPARE_GT = '>';
    Blockly.Msg.LANG_MATH_COMPARE_GTE = '\u2265';

    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_ADD = 'https://docs.kodular.io/blocks/math#add';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MINUS = 'https://docs.kodular.io/blocks/math#subtract';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MULTIPLY = 'https://docs.kodular.io/blocks/math#multiply';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_DIVIDE = 'https://docs.kodular.io/blocks/math#divide';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_POWER = 'https://docs.kodular.io/blocks/math#exponent';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_ADD = 'Gib die Summe der beiden Zahlen zurück.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS = 'Gib die Differenz der beiden Zahlen zurück.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Gib das Produkt der beiden Zahlen zurück.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Gib den Quotienten der beiden Zahlen zurück.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_POWER = 'Gibt das Ergebnis der ersten auf die zweite \n' +
        'Potenz der erhobenen Zahl zurück.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_ADD = '+';
    Blockly.Msg.LANG_MATH_ARITHMETIC_MINUS = '-';
    Blockly.Msg.LANG_MATH_ARITHMETIC_MULTIPLY = '*';
    Blockly.Msg.LANG_MATH_ARITHMETIC_DIVIDE = '/';
    Blockly.Msg.LANG_MATH_ARITHMETIC_POWER = '^';

    /*Blockly.Msg.LANG_MATH_CHANGE_TITLE_CHANGE = 'change';
     Blockly.Msg.LANG_MATH_CHANGE_TITLE_ITEM = 'item';
     Blockly.Msg.LANG_MATH_CHANGE_INPUT_BY = 'by';
     Blockly.Msg.LANG_MATH_CHANGE_TOOLTIP = 'Add a number to variable "%1".';*/


    Blockly.Msg.LANG_MATH_SINGLE_OP_ROOT = 'Quadratwurzel';
    Blockly.Msg.LANG_MATH_SINGLE_OP_ABSOLUTE = 'absolut';
    Blockly.Msg.LANG_MATH_SINGLE_OP_NEG = 'Negativ';
    Blockly.Msg.LANG_MATH_SINGLE_OP_LN = 'Logarithmus';
    Blockly.Msg.LANG_MATH_SINGLE_OP_EXP = 'Exponent^';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ROOT = 'Gib die Quadratwurzel einer Zahl zurück.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ROOT = 'https://docs.kodular.io/blocks/math#sqrt';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ABS = 'Gibt den absoluten Wert einer Zahl zurück.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ABS = 'https://docs.kodular.io/blocks/math#abs';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_NEG = 'Gib die Negation einer Zahl zurück.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_NEG = 'https://docs.kodular.io/blocks/math#neg';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_LN = 'Gib den natürlichen Logarithmus einer Zahl zurück, das heißt den Logarithmus zur Basis exponential (2.71828 ...)';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_LN ='https://docs.kodular.io/blocks/math#log';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_EXP = 'Gib exponential (2.71828 ...) die Potenz einer Zahl zurück.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_EXP ='https://docs.kodular.io/blocks/math#e';
    /*Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_POW10 = 'Return 10 to the power of a number.';*/

    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_ROUND = 'Runden Sie eine Zahl auf oder ab.';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_ROUND = 'https://docs.kodular.io/blocks/math#round';
    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_CEILING = 'Rundet die Eingabe auf die kleinste\n' +
        'Nummer nicht kleiner als die Eingabe';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_CEILING =  'https://docs.kodular.io/blocks/math#ceiling';
    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_FLOOR = 'Rundet die Eingabe auf die größte\n' +
        'Nummer nicht größer als die Eingabe';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_FLOOR =  'https://docs.kodular.io/blocks/math#floor';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_ROUND = 'runden';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_CEILING = 'aufrunden';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_FLOOR = 'abrunden';

    Blockly.Msg.LANG_MATH_TRIG_SIN = 'Sinus';
    Blockly.Msg.LANG_MATH_TRIG_COS = 'Kosinus';
    Blockly.Msg.LANG_MATH_TRIG_TAN = 'Tangens';
    Blockly.Msg.LANG_MATH_TRIG_ASIN = 'Arkussinus';
    Blockly.Msg.LANG_MATH_TRIG_ACOS = 'Arkuskosinus';
    Blockly.Msg.LANG_MATH_TRIG_ATAN = 'Arkustangens';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2 = 'Arkustangens2';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2_X = 'x';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2_Y = 'y';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_SIN = 'Liefert den Sinuswert des gegebenen Winkels in Grad.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_SIN = 'https://docs.kodular.io/blocks/math#sin';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_COS = 'Liefert den Kosinuswert des angegebenen Winkels in Grad.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_COS = 'https://docs.kodular.io/blocks/math#cos';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_TAN = 'Gibt den Tangenswert des angegebenen Winkels in Grad an.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_TAN = 'https://docs.kodular.io/blocks/math#tan';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ASIN = 'Gibt den Winkel im Bereich (-90, + 90) Grad\n' +
        'mit dem angegebenen Sinuswert an.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ASIN = 'https://docs.kodular.io/blocks/math#asin';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ACOS = 'Liefert den Winkel im Bereich [0, 180) Grad\n' +
        'mit dem angegebenen Kosinuswert.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ACOS = 'https://docs.kodular.io/blocks/math#acos';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN = 'Gibt den Winkel im Bereich (-90, +90) Grad\n' +
        'mit dem angegebenen Tangentenwert an.';
    ATAN : Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN = 'https://docs.kodular.io/blocks/math#atan';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN2 = 'Gibt den Winkel im Bereich (-180, +180) Grad \n' +
        'mit den angegebenen rechteckigen Koordinaten an.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN2 = 'https://docs.kodular.io/blocks/math#atan2';

    Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MIN = 'min';
    Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MAX = 'max';
    Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MIN = 'Gib das kleinste seiner Argumente zurück ..';
    Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MAX = 'Gibt das größte seiner Argumente zurück ..';

    Blockly.Msg.LANG_MATH_DIVIDE = '\u00F7';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_MODULO = 'Modulo von';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_REMAINDER = 'Rest von';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_QUOTIENT = 'Quotient von';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_MODULO = 'Gib das Modulo zurück.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_MODULO = 'https://docs.kodular.io/blocks/math#modulo';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_REMAINDER = 'Gib den Rest zurück.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_REMAINDER = 'https://docs.kodular.io/blocks/math#remainder';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_QUOTIENT = 'Gib den Quotienten zurück.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_QUOTIENT = 'https://docs.kodular.io/blocks/math#quotient';

    Blockly.Msg.LANG_MATH_RANDOM_INT_HELPURL = 'https://docs.kodular.io/blocks/math#randomint';
    Blockly.Msg.LANG_MATH_RANDOM_INT_TITLE_RANDOM = 'zufällige ganze Zahl';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_FROM = 'von';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_TO = 'bis';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT = 'zufällige ganze Zahl von %1 bis %2';
    Blockly.Msg.LANG_MATH_RANDOM_INT_TOOLTIP = 'Gibt eine zufällige ganze Zahl zwischen der oberen und der unteren Grenze zurück.\n' +
        'Die Grenzen werden abgeschnitten, um kleiner als 2 ** 30';

    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_HELPURL = 'https://docs.kodular.io/blocks/math#randomfrac';
    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM = 'zufälliger Bruch';
    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TOOLTIP = 'Gib eine zufällige Zahl zwischen 0 und 1 zurück.';

    Blockly.Msg.LANG_MATH_RANDOM_SEED_HELPURL = 'https://docs.kodular.io/blocks/math#randomseed';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_TITLE_RANDOM = 'Zufälliger Zahlenbereich';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_INPUT_TO = 'bis';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_TOOLTIP = 'spezifiziert einen numerischen Startwert für den Zufallszahlengenerator';

    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TITLE_CONVERT = 'Konvertieren';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_RAD_TO_DEG = 'Radiant zu Grad';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_DEG_TO_RAD = 'Grad zu Radiant';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_RAD_TO_DEG = 'Gibt den Gradwert im Bereich [0, 360] zurück, \n' +
        'der seinem Radianten-Argument entspricht.';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_RAD_TO_DEG = 'https://docs.kodular.io/blocks/math#convertrad';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_DEG_TO_RAD = 'Gibt den Bogenwert im Bereich [- \ u03C0, + \ u03C0] zurück,\n' +
        'der seinem Grad-Argument entspricht.';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_DEG_TO_RAD = 'https://docs.kodular.io/blocks/math#convertdeg';

    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_HELPURL = 'https://docs.kodular.io/blocks/math#format';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TITLE = 'Format als Dezimalzahl';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_NUM = 'nummer';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_PLACES = 'setzt';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT = 'Format als Dezimalzahl %1 setzen %2';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TOOLTIP = 'Gibt die Zahl zurück, die als Dezimalzahl mit einer bestimmten Anzahl\n' +
        'von Stellen formatiert wurde.';

    Blockly.Msg.LANG_MATH_IS_A_NUMBER_HELPURL = 'https://docs.kodular.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_NUMBER_INPUT_NUM = 'ist eine Zahl?';
    Blockly.Msg.LANG_MATH_IS_A_NUMBER_TOOLTIP = 'Testet, ob die Eingabe eine Nummer ist.';

    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_HELPURL = 'https://docs.kodular.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_INPUT_NUM = 'ist Basis 10?';
    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_TOOLTIP = 'Testet, ob die Eingabe eine positive Integer-Zahl von 10 darstellt.';

    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_HELPURL = 'https://docs.kodular.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_INPUT_NUM = 'ist hexadezimal?';
    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_TOOLTIP = 'Testet, ob die Eingabe eine Hexadezimalzahl darstellt.';

    Blockly.Msg.LANG_MATH_IS_A_BINARY_HELPURL = 'https://docs.kodular.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_BINARY_INPUT_NUM = 'ist binär?';
    Blockly.Msg.LANG_MATH_IS_A_BINARY_TOOLTIP = 'Testet, ob die Eingabe eine Binärzahl darstellt.';


    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TITLE_CONVERT = 'Zahl umrechnen';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_HEX = 'Basis 10 zu Hex';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_HEX = '';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_HEX = 'Nimmt eine positive ganze Zahl in der Basis 10 und gibt die Zeichenfolge zurück, die die Zahl in hexadezimaler Darstellung darstellt';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_HEX_TO_DEC = 'Hex zu Basis 10';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_HEX_TO_DEC = '';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_HEX_TO_DEC = 'Nimmt eine Zeichenfolge, die eine Zahl in hexadezimaler Darstellung darstellt und gibt die Zeichenfolge zurück, die die Zahl in Basis 10 darstellt';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_BIN = 'Basis 10 zu binär';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_BIN = '';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_BIN = 'Nimmt eine positive ganze Zahl in Basis 10 und gibt die Zeichenkette zurück, die die Zahl in binär repräsentiert';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_BIN_TO_DEC = 'Binär zu Basis 10';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_BIN_TO_DEC = '';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_BIN_TO_DEC = 'Nimmt eine Zeichenfolge, die eine Zahl in binär darstellt und gibt die Zeichenfolge zurück, die die Zahl in Basis 10 darstellt';

// Text Blocks.
    Blockly.Msg.LANG_CATEGORY_TEXT = 'Text';
    Blockly.Msg.LANG_TEXT_TEXT_HELPURL = 'https://docs.kodular.io/blocks/text#string';
    Blockly.Msg.LANG_TEXT_TEXT_TOOLTIP = 'Füge hier Text hinzu. Du kannst diesen verwenden um zum Beispiel den Text von Buttons oder anderen Funktion zu ändern.';
    Blockly.Msg.LANG_TEXT_TEXT_LEFT_QUOTE = '\u201C';
    Blockly.Msg.LANG_TEXT_TEXT_RIGHT_QUOTE = '\u201D';

    Blockly.Msg.LANG_TEXT_JOIN_HELPURL = 'https://docs.kodular.io/blocks/text#join';
    Blockly.Msg.LANG_TEXT_JOIN_TITLE_CREATEWITH = 'Text erstellen mit';
    Blockly.Msg.LANG_TEXT_JOIN_TOOLTIP = 'Hängt alle Eingaben an, um eine einzelne Textzeichenfolge zu bilden.\n'
        + 'Wenn keine Eingaben vorhanden sind, wird ein leerer Text erstellt.';
    Blockly.Msg.LANG_TEXT_JOIN_TITLE_JOIN = 'Anhängen';

    Blockly.Msg.LANG_TEXT_JOIN_ITEM_TITLE_ITEM = 'string';
    Blockly.Msg.LANG_TEXT_JOIN_ITEM_TOOLTIP = '';

    Blockly.Msg.LANG_TEXT_APPEND_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
    Blockly.Msg.LANG_TEXT_APPEND_TO = 'zu';
    Blockly.Msg.LANG_TEXT_APPEND_APPENDTEXT = 'Text anhängen';
    Blockly.Msg.LANG_TEXT_APPEND_VARIABLE = 'Element';
    Blockly.Msg.LANG_TEXT_APPEND_TOOLTIP = 'Fügen Sie einen Text zur Variablen  "%1" hinzu.';

    Blockly.Msg.LANG_TEXT_LENGTH_HELPURL = 'https://docs.kodular.io/blocks/text#length';
    Blockly.Msg.LANG_TEXT_LENGTH_INPUT_LENGTH = 'Länge';
    Blockly.Msg.LANG_TEXT_LENGTH_TOOLTIP = 'Gibt die Anzahl der Buchstaben (einschließlich Leerzeichen) im angegebenen Text zurück.';

    Blockly.Msg.LANG_TEXT_ISEMPTY_HELPURL = 'https://docs.kodular.io/blocks/text#isempty';
    Blockly.Msg.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY = 'ist leer?';
    Blockly.Msg.LANG_TEXT_ISEMPTY_TOOLTIP = 'Gibt wahr zurück, wenn die Länge des\n' + 'textes  0 ist, andernfalls falsch.';

    Blockly.Msg.LANG_TEXT_COMPARE_LT = ' <';
    Blockly.Msg.LANG_TEXT_COMPARE_EQUAL = ' =';
    Blockly.Msg.LANG_TEXT_COMPARE_NEQ = ' ≠';
    Blockly.Msg.LANG_TEXT_COMPARE_GT = ' >';
    Blockly.Msg.LANG_TEXT_COMPARE_HELPURL = 'https://docs.kodular.io/blocks/text#compare';
    Blockly.Msg.LANG_TEXT_COMPARE_INPUT_COMPARE = 'Texte vergleichen';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_LT = 'Prüft, ob Text 1 lexikographisch weniger ist als Text 2.';

    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_EQUAL = 'Testet, ob Textstrings identisch sind, das heißt die gleichen Zeichen in derselben Reihenfolge haben.';

    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_GT = 'Gibt an, ob Text 1 lexikografisch größer ist als Text 2.';

    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_TOOLTIP = "Erzeugt Text wie einen Textblock. Der Unterschied besteht darin, \n"
        + "dass der Text nicht leicht zu erkennen ist, wenn man die APK der App untersucht.";

    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE = 'Verschleierter Text';
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_HELPURL = 'https://docs.kodular.io/blocks/text#obfuscatetext';

    /*Blockly.Msg.LANG_TEXT_ENDSTRING_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_ENDSTRING_INPUT = 'letters in text';
     Blockly.Msg.LANG_TEXT_ENDSTRING_TOOLTIP = 'Returns specified number of letters at the beginning or end of the text.';
     Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_FIRST = 'first';
     Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_LAST = 'last';*/

    /*Blockly.Msg.LANG_TEXT_INDEXOF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_INDEXOF_TITLE_FIND = 'find';
     Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_OCCURRENCE = 'occurrence of text';
     Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_INTEXT = 'in text';
     Blockly.Msg.LANG_TEXT_INDEXOF_TOOLTIP = 'Returns the index of the first/last occurrence\n' +
     'of first text in the second text.\n' +
     'Returns 0 if text is not found.';
     Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_FIRST = 'first';
     Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_LAST = 'last';*/

    /*Blockly.Msg.LANG_TEXT_CHARAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_CHARAT_INPUT_AT = 'letter at';
     Blockly.Msg.LANG_TEXT_CHARAT_INPUT_INTEXT = 'in text';
     Blockly.Msg.LANG_TEXT_CHARAT_TOOLTIP = 'Returns the letter at the specified position.';*/

    Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'Großbuchstaben';
    Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_DOWNCASE = 'Kleinbuchstaben';
    Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_UPPERCASE = 'Gibt eine Kopie des Textes zurück, das in Großbuchstaben umgewandelt wurde.';
    Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_UPPERCASE = 'https://docs.kodular.io/blocks/text#upcase';
    Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_DOWNCASE = 'Gibt eine Kopie des Textes zurück, das in Kleinbuchstaben umgewandelt wurde.';
    Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_DOWNCASE = 'https://docs.kodular.io/blocks/text#downcase';

    Blockly.Msg.LANG_TEXT_TRIM_HELPURL = 'https://docs.kodular.io/blocks/text#trim';
    Blockly.Msg.LANG_TEXT_TRIM_TITLE_TRIM = 'trimmen';
    Blockly.Msg.LANG_TEXT_TRIM_TOOLTIP = 'Gibt eine Kopie der Textes zurück\n'
        + 'in dem alle Leerzeichen entfernt wurden.';

    Blockly.Msg.LANG_TEXT_STARTS_AT_HELPURL = 'https://docs.kodular.io/blocks/text#startsat';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_STARTS_AT = 'Anfang bei';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_TEXT = 'Text';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_PIECE = 'Eingabe';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT = 'Anfang bei  Text %1 Eingabe %2';
    Blockly.Msg.LANG_TEXT_STARTS_AT_TOOLTIP = 'Gibt den Startindex der Eingabe im Text zurück.'
        + 'Gibt 0 zurück, wenn die Eingabe nicht im Text ist.';

    Blockly.Msg.LANG_TEXT_CONTAINS_HELPURL = 'https://docs.kodular.io/blocks/text#contains';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_CONTAINS = 'enthält';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_TEXT = 'Text';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_PIECE = 'Eingabe';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT = 'enthält  Text %1 Eingabe %2';
    Blockly.Msg.LANG_TEXT_CONTAINS_TOOLTIP = 'Testet, ob die Eingabe im Text enthalten ist.';

    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL = '';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_TEXT = 'Text';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT = 'bei';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT_LIST = 'bei (Liste)';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST = 'teilen an erster Stelle';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST_OF_ANY = 'teilen an erster Stelle bei irgendetwas';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT = 'teilen';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_ANY = 'teilen bei irgendetwas';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST = 'Unterteilt den gegebenen Text in zwei Teile, indem er den Ort des ersten Vorkommens des Textes \'bei\' \n'
        + 'als Teilungspunkt verwendet und gibt eine Liste mit zwei Elementen zurück, \n'
        + 'die aus dem Teil vor dem Teilungspunkt und dem Teil nach dem Teilungspunkt besteht.';

    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST = 'https://docs.kodular.io/blocks/text#splitat';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST_OF_ANY = 'Teilt den gegebenen Text in eine Liste mit zwei Elementen auf, \n'
        + 'wobei der erste Ort eines beliebigen Elements in der Liste \'bei\' als Teilungspunkt verwendet wird.';

    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST_OF_ANY = 'https://docs.kodular.io/blocks/text#splitatfirstofany';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT = 'Teilt den Text in Teile mit dem Text \'bei\' als Teilungspunkte und erzeugt eine Liste der Ergebnisse.';

    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT = 'https://docs.kodular.io/blocks/text#split';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_ANY = 'Teilt den angegebenen Text in eine Liste auf, wobei alle Elemente in der Liste \'bei\' als  \n'
        + 'Trennungspunkt verwendet werden, und gibt eine Liste der Ergebnisse zurück.';

    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_ANY = 'https://docs.kodular.io/blocks/text#splitatany';

    /*.LANG_TEXT_PRINT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
     Blockly.Msg.LANG_TEXT_PRINT_TITLE_PRINT = 'print';
     Blockly.Msg.LANG_TEXT_PRINT_TOOLTIP = 'Print the specified text, number or other value.';*/

    /*Blockly.Msg.LANG_TEXT_PROMPT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode92.html';
     Blockly.Msg.LANG_TEXT_PROMPT_TITLE_PROMPT_FOR = 'prompt for';
     Blockly.Msg.LANG_TEXT_PROMPT_TITILE_WITH_MESSAGE = 'with message';
     Blockly.Msg.LANG_TEXT_PROMPT_TOOLTIP = 'Prompt for user input with the specified text.';
     Blockly.Msg.LANG_TEXT_PROMPT_TYPE_TEXT = 'text';
     Blockly.Msg.LANG_TEXT_PROMPT_TYPE_NUMBER = 'number';*/

    Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_HELPURL = 'https://docs.kodular.io/blocks/text#splitatspaces';
    Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_TITLE = 'Bei Leerzeichen trennen';
    Blockly.Msg.LANG_TEXT_SPLIT_AT_TOOLTIP = 'Teilt den Text durch Komma getrennte teile auf.';

    Blockly.Msg.LANG_TEXT_SEGMENT_HELPURL = 'https://docs.kodular.io/blocks/text#segment';
    Blockly.Msg.LANG_TEXT_SEGMENT_TITLE_SEGMENT = 'Suchen nach';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_START = 'Anfang';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_LENGTH = 'länge';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_TEXT = 'Text';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT = 'Suchen nach  Text %1 Anfang %2 länge %3';
    Blockly.Msg.LANG_TEXT_SEGMENT_AT_TOOLTIP = 'Extrahiert das Segment der gegebenen Länge \n'
        + 'aus dem gegebenen Text, beginnend mit dem gegebenen Text, ausgehend von der gegebenen Position.\n'
        + 'Position 1 kennzeichnet den Anfang des Textes.';

    Blockly.Msg.LANG_TEXT_REPLACE_ALL_HELPURL = 'https://docs.kodular.io/blocks/text#replaceall';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_SEGMENT = 'Suchen nach';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_TEXT = 'Text';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_TITLE_REPLACE_ALL = 'alles ersetzen';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_REPLACEMENT = 'Ersetzen durch';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT = 'alles ersetzen Text %1 Suchen nach %2 Ersetzen durch %3';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_TOOLTIP = 'Gibt einen neuen Text zurück\n'
        + 'wobei das nachdem gesuchte mit dem ersetzen, den neuen Text darstellt.';

    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#isstring';
    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_TITLE = 'ist Text?';
    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_TOOLTIP = 'Gibt wahr zurück, wenn die Eingabe eine Zeichenfolge ist.';

// Lists Blocks.
    Blockly.Msg.LANG_CATEGORY_LISTS = 'Listen';
//Blockly.Msg.LANG_LISTS_CREATE_EMPTY_HELPURL = 'http://en.wikipedia.org/wiki/Linked_list#Empty_lists';
    Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TITLE = 'leere Liste erstellen';
//Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TOOLTIP = 'Returns a list, of length 0, containing no data records';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_EMPTY_HELPURL = 'https://docs.kodular.io/blocks/lists#makealist';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_TITLE_MAKE_LIST = 'eine Liste erstellen';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_TOOLTIP = 'Erstellen Sie eine Liste mit einer beliebigen Anzahl von Elementen.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'Liste';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Abschnitte hinzufügen, entfernen oder neu anordnen, um diesen Listenblock neu zu konfigurieren.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TITLE = 'Element';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Fügen Sie der Liste ein Element hinzu.';

    Blockly.Msg.LANG_LISTS_ADD_ITEM_TITLE = 'Element';
    Blockly.Msg.LANG_LISTS_ADD_ITEM_TOOLTIP = 'Fügen Sie der Liste ein Element hinzu.';
    Blockly.Msg.LANG_LISTS_ADD_ITEM_HELPURL = 'https://docs.kodular.io/blocks/lists#additems';

    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_HELPURL = 'https://docs.kodular.io/blocks/lists#selectlistitem';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_SELECT = 'Listenelement auswählen';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_LIST = 'Liste';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_INDEX = 'Position';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT = 'Listen Element auswählen  aus Liste %1 Position %2';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TOOLTIP = 'Gibt das Element am Positionsindex in der Liste zurück.';

    Blockly.Msg.LANG_LISTS_IS_IN_HELPURL = 'https://docs.kodular.io/blocks/lists#inlist';
    Blockly.Msg.LANG_LISTS_IS_IN_TITLE_IS_IN = 'ist in der Liste?';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT_THING = 'Eintrag';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT_LIST = 'Liste';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT = 'ist in der Liste? Eintrag %1 Liste %2'
    Blockly.Msg.LANG_LISTS_IS_IN_TOOLTIP = 'Gibt wahr zurück, wenn der Eintrag ein Element in der Liste ist, '
        + 'wenn nicht wird falsch ausgegeben.';

    Blockly.Msg.LANG_LISTS_POSITION_IN_HELPURL = 'https://docs.kodular.io/blocks/lists#indexinlist';
    Blockly.Msg.LANG_LISTS_POSITION_IN_TITLE_POSITION = 'Position in Liste';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_THING = 'Eintrag';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_LIST = 'Liste';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT = 'Position in Liste  Eintrag %1 Liste %2';
    Blockly.Msg.LANG_LISTS_POSITION_IN_TOOLTIP = 'Finde die Position des Eintrags in der Liste. Wenn er nicht in der Liste ist, wird 0 zurück gegeben.';

    Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_HELPURL = 'https://docs.kodular.io/blocks/lists#pickrandomitem';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_TITLE_PICK_RANDOM = 'Zufälliges Element auswählen';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_INPUT_LIST = 'Liste';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_TOOLTIP = 'Wählt ein Element zufällig aus einer Liste aus.';

    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_HELPURL = 'https://docs.kodular.io/blocks/lists#replace';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TITLE_REPLACE = 'Listenelement ersetzen';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_LIST = 'Liste';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_INDEX = 'Position';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_REPLACEMENT = 'ersetzen';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT = 'Listenelement ersetzen in  Liste %1 Position %2 ersetzt durch %3';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TOOLTIP = 'Ersetzt das angegebene Element in einer Liste.';

    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_HELPURL = 'https://docs.kodular.io/blocks/lists#removeitem';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TITLE_REMOVE = 'Listenelement löschen';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_LIST = 'Liste';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_INDEX = 'Position';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT = 'Listenelement löschen in  Liste %1 Position %2';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TOOLTIP = 'Entfernt das Element an der angegebenen Position aus der Liste.';

    /*Blockly.Msg.LANG_LISTS_REPEAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_REPEAT_TITLE_CREATE = 'create list with item';
     Blockly.Msg.LANG_LISTS_REPEAT_INPUT_REPEATED = 'repeated';
     Blockly.Msg.LANG_LISTS_REPEAT_INPUT_TIMES = 'times';
     Blockly.Msg.LANG_LISTS_REPEAT_TOOLTIP = 'Creates a list consisting of the given value\n' +
     'repeated the specified number of times.';*/

    Blockly.Msg.LANG_LISTS_LENGTH_HELPURL = 'https://docs.kodular.io/blocks/lists#lengthoflist';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LENGTH = 'Länge der Liste';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LIST = 'Liste';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT = 'Länge der Liste Liste %1';
    Blockly.Msg.LANG_LISTS_LENGTH_TOOLTIP = 'Zählt die Anzahl der Elemente in einer Liste.';

    Blockly.Msg.LANG_LISTS_APPEND_LIST_HELPURL = 'https://docs.kodular.io/blocks/lists#append';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_TITLE_APPEND = 'an Liste anhängen';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST1 = 'Liste1';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST2 = 'Liste2';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT = 'an Liste anhängen  Liste1 %1 Liste2 %2';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_TOOLTIP = 'Hängt alle Elemente in Liste 2 an das Ende von Liste1 an.  '
        + 'Nach dem Anhängen enthält Liste 1 diese zusätzlichen Elemente, aber Liste 2 bleibt unverändert.';

    Blockly.Msg.LANG_LISTS_ADD_ITEMS_HELPURL = 'https://docs.kodular.io/blocks/lists#additems';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_TITLE_ADD = 'Elemente zur Liste hinzufügen';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_LIST = ' Liste';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_ITEM = 'Element';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT = 'Elemente zur Liste hinzufügen Liste %1 Element %2';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_TOOLTIP = 'Fügt Elemente am Ende einer Liste hinzu.';

    Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TITLE_ADD = 'Liste';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TOOLTIP = 'Abschnitte hinzufügen, entfernen oder neu anordnen, um diesen Listenblock neu zu konfigurieren.';

    Blockly.Msg.LANG_LISTS_COPY_HELPURL = 'https://docs.kodular.io/blocks/lists#copy';
    Blockly.Msg.LANG_LISTS_COPY_TITLE_COPY = 'Liste kopieren';
    Blockly.Msg.LANG_LISTS_COPY_INPUT_LIST = 'Liste';
    Blockly.Msg.LANG_LISTS_COPY_TOOLTIP = 'Erstellt eine Kopie einer Liste, einschließlich aller Unterlisten';

    Blockly.Msg.LANG_LISTS_IS_LIST_HELPURL = 'https://docs.kodular.io/blocks/lists#isalist';
    Blockly.Msg.LANG_LISTS_IS_LIST_TITLE_IS_LIST = 'ist eine Liste?';
    Blockly.Msg.LANG_LISTS_IS_LIST_INPUT_THING = 'Eintrag';
    Blockly.Msg.LANG_LISTS_IS_LIST_TOOLTIP = 'Testet, ob etwas eine Liste ist.';

    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_HELPURL = 'https://docs.kodular.io/blocks/lists#listtocsvrow';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TITLE_TO_CSV = 'Liste zu csv Zeile';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_INPUT_LIST = 'Liste';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TOOLTIP = 'Interpretiert die Liste als eine Zeile einer Tabelle und gibt einen CSV \ (kommagetrennten Wert)  '
        + 'Text zurück, der die Zeile darstellt. Jedes Element in der Zeilenliste wird als Feld betrachtet '
        + 'und im resultierenden CSV-Text mit doppelten Anführungszeichen versehen. '
        + 'Elemente werden durch Kommas getrennt. Der zurückgegebene Zeilentext hat am Ende kein Zeilentrennzeichen.';

    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_HELPURL = 'https://docs.kodular.io/blocks/lists#listfromcsvrow';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TITLE_FROM_CSV = 'Liste von csv Zeile';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_INPUT_TEXT = 'Text';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TOOLTIP = 'Wandelt einen Text als CSV-Datei um (durch Komma getrennte Werte), um eine Liste von Feldern zu erstellen. '
        + 'Es ist ein Fehler, dass der Zeilentext ungeschnittene Zeilenumbrüche innerhalb von Feldern enthält (effektiv mehrere Zeilen \). '
        + 'Es ist in Ordnung, wenn der Zeilentext in einem einzigen Zeilenumbruch oder CRLF endet.';

    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_HELPURL = 'https://docs.kodular.io/blocks/lists#listtocsvtable';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TITLE_TO_CSV = 'Liste zu csv Tabelle';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_INPUT_LIST = 'Liste';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TOOLTIP = 'Interpretiert die Liste als Tabelle im Zeilen-Hauptformat und '
        + 'gibt einen CSV \ (kommagetrennten Wert) Text zurück, der die Tabelle repräsentiert. '
        + 'Jedes Element in der Liste sollte selbst eine Liste sein, die eine Zeile der CSV-Tabelle darstellt. Jedes Element in der Zeilenliste '
        + 'wird als Feld betrachtet und im resultierenden CSV-Text mit doppelten Anführungszeichen versehen. '
        + 'Im zurückgegebenen Text werden Elemente in Zeilen durch Kommas getrennt und Zeilen durch CRLF getrennt '
        + ' \(\\r\\n\).';

    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_HELPURL = 'https://docs.kodular.io/blocks/lists#listfromcsvtable';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TITLE_FROM_CSV = 'Liste von csv Tabelle';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_INPUT_TEXT = 'Text';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TOOLTIP = 'Wandelt Text in eine CSV (durch Komma getrennte) formatierte '
        + 'Tabelle um eine Liste von Zeilen zu erzeugen, von denen jede eine Liste von Feldern ist. Zeilen können per Code '
        + 'einen Zeilenumbruch erhalten mit Hilfe von \(\\n\) oder CRLF \(\\r\\n\).';

    Blockly.Msg.LANG_LISTS_INSERT_ITEM_HELPURL = 'https://docs.kodular.io/blocks/lists#insert';
    Blockly.Msg.LANG_LISTS_INSERT_TITLE_INSERT_LIST = 'Listen Element einfügen';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_LIST = 'Liste';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_INDEX = 'Position';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_ITEM = 'Element';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT = 'Listen Element einfügen in  Liste %1 Position %2 Element %3';
    Blockly.Msg.LANG_LISTS_INSERT_TOOLTIP = 'Fügen Sie ein Element an der angegebenen Position  in eine Liste ein.';

    Blockly.Msg.LANG_LISTS_IS_EMPTY_HELPURL = 'https://docs.kodular.io/blocks/lists#islistempty';
    Blockly.Msg.LANG_LISTS_TITLE_IS_EMPTY = 'ist Liste leer?';
    Blockly.Msg.LANG_LISTS_INPUT_LIST = 'Liste';
    Blockly.Msg.LANG_LISTS_IS_EMPTY_TOOLTIP = 'Gibt wahr zurück, wenn die Liste leer ist.';

    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_HELPURL = 'https://docs.kodular.io/blocks/lists#lookuppairs';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TITLE_LOOKUP_IN_PAIRS = 'in Paaren suchen';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_KEY = 'Wert';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_PAIRS = 'Paare';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_NOT_FOUND = 'nicht gefunden';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT = 'Paare durchsuchen  Wert %1 Paare %2 nicht gefunden %3';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TOOLTIP = 'Gibt den Wert zurück, der dem Wert in der Liste der Paare zugeordnet ist';

    /*Blockly.Msg.LANG_LISTS_INDEX_OF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_INDEX_OF_TITLE_FIND = 'find';
     Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_OCCURRENCE = 'occurrence of item';
     Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_IN_LIST = 'in list';
     Blockly.Msg.LANG_LISTS_INDEX_OF_TOOLTIP = 'Returns the index of the first/last occurrence\n' +
     'of the item in the list.\n' +
     'Returns 0 if text is not found.';
     Blockly.Msg.LANG_LISTS_INDEX_OF_FIRST = 'first';
     Blockly.Msg.LANG_LISTS_INDEX_OF_LAST = 'last';

     Blockly.Msg.LANG_LISTS_GET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_GET_INDEX_TITLE_GET = 'get item at';
     Blockly.Msg.LANG_LISTS_GET_INDEX_INPUT_IN_LIST = 'in list';
     Blockly.Msg.LANG_LISTS_GET_INDEX_TOOLTIP = 'Returns the value at the specified position in a list.';

     Blockly.Msg.LANG_LISTS_SET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_SET = 'set item at';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_IN_LIST = 'in list';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_TO = 'to';
     Blockly.Msg.LANG_LISTS_SET_INDEX_TOOLTIP = 'Sets the value at the specified position in a list.';*/

// Variables Blocks.
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_HELPURL = 'https://docs.kodular.io/blocks/variables#global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TITLE_INIT = 'initialisieren der globalen';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME = 'name';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TO = 'zu';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_COLLAPSED_TEXT = 'global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TOOLTIP = 'Erstellt eine globale Variable und weist ihr den angehängten Wert zu.';

    Blockly.Msg.LANG_VARIABLES_GET_HELPURL = 'https://docs.kodular.io/blocks/variables#get';
    Blockly.Msg.LANG_VARIABLES_GET_TITLE_GET = 'erhalte den Wert von';
    /* Blockly.Msg.LANG_VARIABLES_GET_INPUT_ITEM = 'item'; */ // [lyn, 10/14/13] unused
    Blockly.Msg.LANG_VARIABLES_GET_COLLAPSED_TEXT = 'erhalte den Wert von';
    Blockly.Msg.LANG_VARIABLES_GET_TOOLTIP = 'Gibt den Wert dieser Variablen zurück.';

    Blockly.Msg.LANG_VARIABLES_SET_HELPURL = 'https://docs.kodular.io/blocks/variables#set';
    Blockly.Msg.LANG_VARIABLES_SET_TITLE_SET = 'setzt den Wert von';
    /* Blockly.Msg.LANG_VARIABLES_SET_INPUT_ITEM = 'item'; */ // [lyn, 10/14/13] unused
    Blockly.Msg.LANG_VARIABLES_SET_TITLE_TO = 'zu';
    Blockly.Msg.LANG_VARIABLES_SET_COLLAPSED_TEXT = 'setzt den Wert von';
    Blockly.Msg.LANG_VARIABLES_SET_TOOLTIP = 'Legt den Wert der Variable durch die Eingabe fest.';
    Blockly.Msg.LANG_VARIABLES_VARIABLE = ' Variable';

    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_HELPURL = 'https://docs.kodular.io/blocks/variables#do';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TITLE_INIT = 'initialisieren der lokalen';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_DEFAULT_NAME = 'name';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_INPUT_TO = 'zu';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_IN_DO = 'in';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_COLLAPSED_TEXT = 'lokal';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TOOLTIP = 'Ermöglicht das Erstellen von Variablen, auf die nur im Tue-Teil dieses Blocks zugegriffen werden kann.';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TRANSLATED_NAME = 'Initialisiere lokale im Tue-Bereich';

    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_HELPURL = 'https://docs.kodular.io/blocks/variables#return';
    /* // These don't differ between the statement and expression
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TITLE_INIT = 'initialize local';
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_NAME = 'name';
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_TO = 'to';
     */
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_IN_RETURN = 'in';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_COLLAPSED_TEXT = 'lokal';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TOOLTIP = 'Ermöglicht das Erstellen von Variablen, auf die nur im Rückgabebereich dieses Blocks zugegriffen werden kann.';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TRANSLATED_NAME = 'lokal im Gegenzug initialisieren';

    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TITLE_LOCAL_NAMES = 'lokale Namen';
    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TOOLTIP = '';

    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_TITLE_NAME = 'name';
    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_DEFAULT_VARIABLE = 'x';

// Procedures Blocks.
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_HELPURL = 'https://docs.kodular.io/blocks/procedures#do';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DEFINE = 'zu';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE = 'Prozedur';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO = 'tue';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_COLLAPSED_PREFIX = 'zu ';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_TOOLTIP = 'Eine Prozedur, die keinen Wert zurückgibt.';

    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_HELPURL = 'https://docs.kodular.io/blocks/procedures#doreturn';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_THEN_RETURN = 'Ergebnis';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_DO = 'tue';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_RETURN = 'Ergebnis';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_TOOLTIP = 'Führt die Blöcke in \'tue\' aus und gibt eine Anweisung zurück. Nützlich, wenn Sie eine Prozedur ausführen müssen, bevor Sie einen Wert an eine Variable zurückgeben.';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_COLLAPSED_TEXT = 'tue/Ergebnis';

    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_HELPURL = 'https://docs.kodular.io/blocks/procedures#return';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DEFINE = 'zu';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE;
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DO = Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO;
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_RETURN = 'Ergebnis';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_COLLAPSED_PREFIX = 'zu ';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_TOOLTIP = 'Eine Prozedur, die einen Wert zurückgibt.';

    Blockly.Msg.LANG_PROCEDURES_DEF_DUPLICATE_WARNING = 'Warnung:\n' +
        'Diese Prozedur hat\n' +
        'doppelte Eingaben.';

    Blockly.Msg.LANG_PROCEDURES_GET_HELPURL = 'https://docs.kodular.io/blocks/procedures#get';

    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_HELPURL = 'https://docs.kodular.io/blocks/procedures#do';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL = 'abrufen ';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE = 'Prozedur';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_COLLAPSED_PREFIX = 'abrufen ';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TOOLTIP = 'Rufen Sie eine Prozedur ohne Rückgabewert auf.';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TRANSLATED_NAME = 'Keine Rückgabe abrufen';

    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_HELPURL = 'https://docs.kodular.io/blocks/procedures#return';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_CALL = Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL;
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_PROCEDURE = Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE;
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_COLLAPSED_PREFIX = 'abrufen ';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TOOLTIP = 'Rufen Sie eine Prozedur mit einem Rückgabewert auf.';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TRANSLATED_NAME = 'Rückruf';

    Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TITLE = 'Eingänge';
    Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TITLE = 'Eingang:';

    Blockly.Msg.LANG_PROCEDURES_HIGHLIGHT_DEF = 'Highlight-Prozedur';

    Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TOOLTIP = '';
    Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TOOLTIP = '';

// Components Blocks.
    Blockly.Msg.UNDEFINED_BLOCK_TOOLTIP = "Dieser Block ist nicht definiert. Lösche diesen Block!";

    Blockly.Msg.LANG_COMPONENT_BLOCK_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_WHEN = 'Wenn ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_DO = 'tue';

    Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_TITLE_CALL = 'abrufen ';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_CALL = 'abrufen ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_FOR_COMPONENT = 'für Komponente';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GETTER_HELPURL = '';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_TITLE_OF_COMPONENT = 'der Komponente';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_SET = 'einstellen ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_TO = ' zu';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_SET = 'einstellen ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_TO = ' zu';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_OF_COMPONENT = 'der Komponente';

//Misc
    Blockly.Msg.SHOW_WARNINGS = "Warnungen anzeigen";
    Blockly.Msg.HIDE_WARNINGS = "Warnungen ausblenden";
    Blockly.Msg.MISSING_SOCKETS_WARNINGS = "Sie sollten alle Steckplätze mit Blöcken versehen";
    Blockly.Msg.WRONG_TYPE_BLOCK_WARINGS = "Dieser Block sollte mit einem Ereignisblock oder einer Prozedurdefinition verbunden sein";

// Messages from replmgr.js
    Blockly.Msg.REPL_ERROR_FROM_COMPANION = "Fehler von Companion";
    Blockly.Msg.REPL_NETWORK_CONNECTION_ERROR = "Netzwerkverbindungsfehler";
    Blockly.Msg.REPL_NETWORK_ERROR = "Netzwerkfehler";
    Blockly.Msg.REPL_NETWORK_ERROR_RESTART = "Netzwerkfehler beim Kommunizieren mit Companion.<br />Versuchen Sie den Companion neu zu starten um die Verbindung wiederherzustellen";
    Blockly.Msg.REPL_OK = "OK";
    Blockly.Msg.REPL_COMPANION_VERSION_CHECK = "Companion Versionsprüfung";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE = 'Ihre Companion-App ist veraltet. Klicken Sie auf "OK", um die Aktualisierung zu starten. Beobachten Sie Ihren ';
    Blockly.Msg.REPL_EMULATORS = "Emulatoren";
    Blockly.Msg.REPL_DEVICES = "Geräte";
    Blockly.Msg.REPL_APPROVE_UPDATE = " Bildschirm, weil Sie aufgefordert werden, das Update zu genehmigen.";
    Blockly.Msg.REPL_NOT_NOW = "Nicht jetzt";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE1 = "Der Companion, den Sie verwenden, ist veraltet.<br/><br/>Diese Version von Kodular sollte verwendet werden mit der Companion Version";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE_IMMEDIATE = "Sie verwenden einen veralteten Companion. Sie sollten den Kodular Companion so schnell wie möglich aktualisieren. Wenn Sie die automatische Aktualisierung im Google Play Store eingerichtet haben, erfolgt die Aktualisierung in Kürze.";
    Blockly.Msg.REPL_COMPANION_WRONG_PACKAGE = "Der von Ihnen verwendete Companion wurde für verschiedene Versionen von Kodular erstellt. Um die richtige Companion Version zu erhalten, schauen Sie auf dem Kodular-Bildschirm unter Hilfe-> Companion.";
    Blockly.Msg.REPL_DISMISS = "Verbergen";
    Blockly.Msg.REPL_SOFTWARE_UPDATE = "Software Update";
    Blockly.Msg.REPL_OK_LOWER = "Ok";
    Blockly.Msg.REPL_GOT_IT = "Verstanden";
    Blockly.Msg.REPL_UPDATE_INFO = 'Das Update wird jetzt auf Ihrem Gerät installiert. Beobachten Sie den Bildschirm Ihres Geräts (oder Emulators) und genehmigen Sie die Softwareinstallation, wenn Sie dazu aufgefordert werden.<br /><br />WICHTIG: Wenn das Update abgeschlossen ist, wählen Sie "Fertig" (klicken Sie nicht auf "Öffnen"). Gehen Sie dann in Ihrem Webbrowser zu Kodular, klicken Sie auf das Menü "Verbinden" und wählen Sie "Verbindung zurücksetzen".  Schließen Sie dann ihr Gerät wieder an.';

    Blockly.Msg.REPL_UPDATE_NO_UPDATE = "Kein Update verfügbar";
    Blockly.Msg.REPL_UPDATE_NO_CONNECTION = "Sie müssen mit einem Companion verbunden sein, um ihn zu aktualisieren";
    Blockly.Msg.REPL_UNABLE_TO_UPDATE = "Update kann nicht an Gerät / Emulator gesendet werden";
    Blockly.Msg.REPL_UNABLE_TO_LOAD = "Laden des Updates vom Kodular-Server nicht möglich";
    Blockly.Msg.REPL_UNABLE_TO_LOAD_NO_RESPOND = "Laden des Updates vom Kodular-Server nicht möglich (Server antwortet nicht)";
    Blockly.Msg.REPL_NOW_DOWNLOADING = "Wir laden jetzt das Update vom Kodular Server herunter, bitte haben Sie einen Moment Geduld";
    Blockly.Msg.REPL_RUNTIME_ERROR = "Laufzeit Fehler";
    Blockly.Msg.REPL_NO_ERROR_FIVE_SECONDS = "<br/><i>Hinweis:</i>&nbsp;Sie werden 5 Sekunden lang keinen weiteren Fehlerbericht sehen.";
    Blockly.Msg.REPL_CONNECTING_USB_CABLE = "Verbindung über USB-Kabel";
    Blockly.Msg.REPL_STARTING_EMULATOR = "Starten des Android-Emulators<br/>Hinweis: Dies kann bis zu 2 Minuten dauern. Bitte haben Sie einen Moment Geduld.";
    Blockly.Msg.REPL_CONNECTING = "Verbindung wird aufgebaut...";
    Blockly.Msg.REPL_CANCEL = "Abbrechen";
    Blockly.Msg.REPL_GIVE_UP = "Gib auf";
    Blockly.Msg.REPL_KEEP_TRYING = "Weiter probieren";
    Blockly.Msg.REPL_CONNECTION_FAILURE1 = "Verbindungs Fehler";
    Blockly.Msg.REPL_NO_START_EMULATOR = "Wir konnten den Kodular Companion nicht im Emulator starten";
    Blockly.Msg.REPL_PLUGGED_IN_Q = "Verbunden?";
    Blockly.Msg.REPL_AI_NO_SEE_DEVICE = "Kodular kann ihr Gerät nicht finden, Vergewissern Sie sich, dass das Kabel eingesteckt ist und die Treiber korrekt installiert sind.";
    Blockly.Msg.REPL_HELPER_Q = "Hilfe?";
    Blockly.Msg.REPL_HELPER_NOT_RUNNING = 'Das Kodular Starter-Programm scheint nicht ausgeführt zu werden<br /><a href="https://starter.kodular.io" target="_blank">Brauchen Sie Hilfe?</a>';
    Blockly.Msg.REPL_USB_CONNECTED_WAIT = "USB verbunden, Bitte warten ";
    Blockly.Msg.REPL_SECONDS_ENSURE_RUNNING = " Sekunden, um sicherzustellen, dass alles läuft.";
    Blockly.Msg.REPL_EMULATOR_STARTED = "Emulator gestartet, Bitte warten ";
    Blockly.Msg.REPL_STARTING_COMPANION_ON_PHONE = "Starten der Companion App auf dem verbundenen Gerät";
    Blockly.Msg.REPL_STARTING_COMPANION_IN_EMULATOR = "Starten der Companion App im Emulator";
    Blockly.Msg.REPL_COMPANION_STARTED_WAITING = "Companion starten, Bitte warten ";
    Blockly.Msg.REPL_VERIFYING_COMPANION = "Überprüfen, ob der Companion gestartet wurde...";
    Blockly.Msg.REPL_CONNECT_TO_COMPANION = "Mit Companion verbinden";
    Blockly.Msg.REPL_TRY_AGAIN1 = "Es konnte keine Verbindung zum Kodular Companion hergestellt werden. Versuchen Sie es erneut.";
    Blockly.Msg.REPL_YOUR_CODE_IS = "Ihr Code ist";
    Blockly.Msg.REPL_DO_YOU_REALLY_Q = "Wirklich?";
    Blockly.Msg.REPL_FACTORY_RESET = 'Dies wird versuchen, Ihren Emulator in den "Werkszustand" zurückzusetzen. Wenn Sie zuvor den im Emulator installierten Companion aktualisiert haben, müssen Sie dies wahrscheinlich erneut tun.';

// Messages from Blockly.js
    Blockly.Msg.WARNING_DELETE_X_BLOCKS = "Bist du Sicher das du alle %1 Blöcke löschen willst?";

// Blocklyeditor.js
    Blockly.Msg.GENERATE_YAIL = "Yail Generieren";
    Blockly.Msg.DO_IT = "Ausführen";
    Blockly.Msg.CLEAR_DO_IT_ERROR = "Fehler löschen";
    Blockly.Msg.CAN_NOT_DO_IT = "Kann nicht ausgeführt werden";
    Blockly.Msg.CONNECT_TO_DO_IT = 'Du musst mit dem Companion verbunden sein um "Ausführen" nutzen zu können.';

// Clock Component Menu Items
    Blockly.Msg.TIME_YEARS = "Jahre";
    Blockly.Msg.TIME_MONTHS = "Monate";
    Blockly.Msg.TIME_WEEKS = "Wochen";
    Blockly.Msg.TIME_DAYS = "Tage";
    Blockly.Msg.TIME_HOURS = "Stunden";
    Blockly.Msg.TIME_MINUTES = "Minuten";
    Blockly.Msg.TIME_SECONDS = "Sekunden";
    Blockly.Msg.TIME_DURATION = "Dauer";
  }
};

// Initalize language definition to English
Blockly.Msg.de.switch_blockly_language_to_de.init();
Blockly.Msg.de.switch_language_to_german.init();
