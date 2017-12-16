// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2017 Pavitra, Makeroid. All rights reserved.

/**
 * Visual Blocks Language
 *
 * Copyright © 2017 Pavitra, Makeroid. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Traditional English strings.
 * @author mckinney@gmail.com (Andrew F. McKinney)
 */
'use strict';

goog.provide('AI.Blockly.Msg.it_it');

goog.require('Blockly.Msg.it');

/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

Blockly.Msg.it.switch_language_to_italian = {
  // Switch language to Italian.
  category: '',
  helpUrl: '',
  init: function() {
// Context menus.
    Blockly.Msg.UNDO = 'Annulla';
    Blockly.Msg.REDO = 'Rifai';
    Blockly.Msg.CLEAN_UP = 'Pulisci Blocchi';
    Blockly.Msg.DUPLICATE_BLOCK = 'Duplica';
    Blockly.Msg.REMOVE_COMMENT = 'Rimuovi Commento';
    Blockly.Msg.ADD_COMMENT = 'Aggiungi Commento';
    Blockly.Msg.EXTERNAL_INPUTS = 'Inserimento Esterno';
    Blockly.Msg.INLINE_INPUTS = 'Inserimento In Linea';
    Blockly.Msg.HORIZONTAL_PARAMETERS = 'Disponi i Parametri Orizzontalmente';
    Blockly.Msg.VERTICAL_PARAMETERS = 'Disponi i Parametri Verticalmente';
    Blockly.Msg.CONFIRM_DELETE = 'Conferma eliminazione';
    Blockly.Msg.DELETE_ALL_BLOCKS = "Eliminare tutti i %1 blocchi?";
    Blockly.Msg.DELETE_BLOCK = 'Elimina Blocco';
    Blockly.Msg.DELETE_X_BLOCKS = 'Elimina %1 Blocchi';
    Blockly.Msg.COLLAPSE_BLOCK = 'Riduci Blocchi';
    Blockly.Msg.EXPAND_BLOCK = 'Espandi Blocchi';
    Blockly.Msg.DISABLE_BLOCK = 'Disattiva Blocco';
    Blockly.Msg.ENABLE_BLOCK = 'Abilita Blocco';
    Blockly.Msg.HELP = 'Aiuto';
    Blockly.Msg.EXPORT_IMAGE = 'Scarica Blocchi come Immagine';
    Blockly.Msg.COLLAPSE_ALL = 'Riducci tutti i Blocchi';
    Blockly.Msg.EXPAND_ALL = 'Espandi tutti i Blocchi';
    Blockly.Msg.ARRANGE_H = 'Disponi Blocchi Orizzontalmente';
    Blockly.Msg.ARRANGE_V = 'Disponi Blocchi Verticalmente';
    Blockly.Msg.ARRANGE_S = 'Disponi Blocchi Diagonalmente';
    Blockly.Msg.SORT_W = 'Ordina Blocchi per Larghezza';
    Blockly.Msg.SORT_H = 'Ordina Blocchi per Altezza';
    Blockly.Msg.SORT_C = 'Ordina Blocchi per Categoria';
    Blockly.Msg.COPY_TO_BACKPACK = 'Aggiungi allo Zaino';
    Blockly.Msg.COPY_ALLBLOCKS = 'Copia Tutti i Blocchi nello Zaino';
    Blockly.Msg.BACKPACK_GET = 'Incolla Tutti i Blocchi dallo Zaino';
    Blockly.Msg.BACKPACK_EMPTY = 'Svuota lo Zaino';
    Blockly.Msg.BACKPACK_CONFIRM_EMPTY = 'Sei sicuro di voler svuotare lo zaino?';
    Blockly.Msg.BACKPACK_DOC_TITLE = "Informazioni Zaino";
    Blockly.Msg.SHOW_BACKPACK_DOCUMENTATION = "Mostra Documentazione Zaino";
    Blockly.Msg.BACKPACK_DOCUMENTATION = "Lo Zaino è una funzione di copia/incolla. Permette di copiare blocchi da un progetto o uno schermo " +
   " e incollarli in un altro progetto o schermo. " +
   " Per copiare, puoi trascinare i blocchi nello Zaino. Per incollare, clicca l'icona dello Zaino e " +
   " trascina i blocchi nello spazio di lavoro." +
   "</p><p>Se chiudi Makeroid con dei blocchi nel tuo Zaino, " +
   " saranno lì la prossima volta che entrerai." +
   "</p><p>Per ulteriore documentazione e un video tutorial, vedi:" +
   '</p><p><a href="https://docs.makeroid.io/other/backpack.html" target="_blank">https://docs.makeroid.io/other/backpack.html</a>';
    Blockly.Msg.ENABLE_GRID = 'Attiva Griglia Spazio di Lavoro';
    Blockly.Msg.DISABLE_GRID = 'Disattiva Griglia Spazio di Lavoro';
    Blockly.Msg.ENABLE_SNAPPING = 'Attiva Collegamento alla Griglia';
    Blockly.Msg.DISABLE_SNAPPING = 'Disattiva Collegamento alla Griglia';
// Rivedere le ultime 2
    
// Variable renaming.
    Blockly.MSG_CHANGE_VALUE_TITLE = 'Cambia valore:';
    Blockly.MSG_NEW_VARIABLE = 'Nuova variabile...';
    Blockly.MSG_NEW_VARIABLE_TITLE = 'Nome della nuova Variabile:';
    Blockly.MSG_RENAME_VARIABLE = 'Rinomina Variabile...';
    Blockly.MSG_RENAME_VARIABLE_TITLE = 'Rinomina tutte le "%1" variabili a:';

// Toolbox.
    Blockly.MSG_VARIABLE_CATEGORY = 'Variabili';
    Blockly.MSG_PROCEDURE_CATEGORY = 'Procedure';

// Warnings/Errors
    Blockly.ERROR_BLOCK_CANNOT_BE_IN_DEFINTION = "Questo blocco non può essere in una definizione";
    Blockly.ERROR_SELECT_VALID_ITEM_FROM_DROPDOWN = "Seleziona un elemento valido nel menu a tendina.";
    Blockly.ERROR_DUPLICATE_EVENT_HANDLER = "Questo è un gestore dell'evento duplicato per questo componente.";
    Blockly.ERROR_COMPONENT_DOES_NOT_EXIST = "Il Componente non esiste";
    Blockly.ERROR_BLOCK_IS_NOT_DEFINED = "Questo blocco non è definito. Elimina questo blocco!";

// Colour Blocks.
    Blockly.Msg.LANG_COLOUR_PICKER_HELPURL = 'https://docs.makeroid.io/blocks/colors.html#basic';
    Blockly.Msg.LANG_COLOUR_PICKER_TOOLTIP = 'Clicca il quadrato per selezionare un colore.';
    Blockly.Msg.LANG_COLOUR_WHITE = 'bianco';
    Blockly.Msg.LANG_COLOUR_LIGHT_GRAY = 'grigio chiaro';
    Blockly.Msg.LANG_COLOUR_GRAY = 'grigio';
    Blockly.Msg.LANG_COLOUR_BLUE_GRAY = 'grigio blu';
    Blockly.Msg.LANG_COLOUR_DARK_GRAY = 'grigio scuro';
    Blockly.Msg.LANG_COLOUR_BLACK = 'nero';
    Blockly.Msg.LANG_COLOUR_RED = 'rosso';
    Blockly.Msg.LANG_COLOUR_PINK = 'rosa';
    Blockly.Msg.LANG_COLOUR_PURPLE = 'viola';
    Blockly.Msg.LANG_COLOUR_DEEP_PURPLE = 'viola scuro';
    Blockly.Msg.LANG_COLOUR_INDIGO = 'indaco';
    Blockly.Msg.LANG_COLOUR_BLUE = 'blu';
    Blockly.Msg.LANG_COLOUR_LIGHT_BLUE = 'azzurro';
    Blockly.Msg.LANG_COLOUR_CYAN = 'ciano';
    Blockly.Msg.LANG_COLOUR_TEAL = 'teal';
    Blockly.Msg.LANG_COLOUR_GREEN = 'verde';
    Blockly.Msg.LANG_COLOUR_LIGHT_GREEN = 'verde chiaro';
    Blockly.Msg.LANG_COLOUR_LIME = 'lime';
    Blockly.Msg.LANG_COLOUR_YELLOW = 'giallo';
    Blockly.Msg.LANG_COLOUR_AMBER = 'ambra';
    Blockly.Msg.LANG_COLOUR_ORANGE = 'arancione';
    Blockly.Msg.LANG_COLOUR_DEEP_ORANGE = 'arancione scuro';
    Blockly.Msg.LANG_COLOUR_BROWN = 'marrone';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR = 'dividi colore';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_HELPURL = 'https://docs.makeroid.io/blocks/colors.html#split';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_TOOLTIP = "Una lista di quattro elementi, ognuna nel campo da 0 a 255, rappresentanti i componenti rosso, verde, blu e alfa.";
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR = 'crea colore';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_HELPURL = 'https://docs.makeroid.io/blocks/colors.html#make';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP = "Un colore con le componenti rosso, verde, blu e opzionalmente alfa date";
// Da rivedere linea 140
    
// Control Blocks
    Blockly.Msg.LANG_CATEGORY_CONTROLS = 'Controllo';
    Blockly.Msg.LANG_CONTROLS_IF_HELPURL = 'https://docs.makeroid.io/blocks/control.html#if';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_1 = 'Se un valore è vero, allora esegui qualche comando.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_2 = 'Se un valore è vero, allora esegui il primo blocco dei comandi.\n' +
        'Altrimenti, esegui il secondo blocco dei comandi.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_3 = 'Se un valore è vero, allora esegui il primo blocco dei comandi.\n' +
        'Altrimenti, se il secondo valore è vero, esegui il secondo blocco dei comandi.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_4 = 'Se un valore è vero, allora esegui il primo blocco dei comandi.\n' +
        'Altrimenti, se il secondo valore è vero, esegui il secondo blocco dei comandi.\n' +
        "Se nessuno dei valori è vero, allora esegui l'ultimo blocco dei comandi.";
    Blockly.Msg.LANG_CONTROLS_IF_MSG_IF = 'se';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSEIF = 'altrimenti se';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSE = 'altrimenti';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_THEN = 'allora';

    Blockly.Msg.LANG_CONTROLS_IF_IF_TITLE_IF = 'se';
    Blockly.Msg.LANG_CONTROLS_IF_IF_TOOLTIP = 'Aggiungi, rimuovi o riordina le sezioni\n' +
        'per riconfigurare questo blocco se.';

    Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TITLE_ELSEIF = 'altrimenti se';
    Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TOOLTIP = 'Aggiungi una condizione al blocco se.';

    Blockly.Msg.LANG_CONTROLS_IF_ELSE_TITLE_ELSE = 'altrimenti';
    Blockly.Msg.LANG_CONTROLS_IF_ELSE_TOOLTIP = 'Aggiungi una condizione finale al blocco se, che viene eseguita solo se tutte le altre non sono vere.';

    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_HELPURL = 'https://docs.makeroid.io/blocks/control.html#while';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT = 'ripeti';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_INPUT_DO = 'esegui';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE = 'mentre';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = 'fino';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE = 'Finchè un valore è vero, allora esegui qualche comando.';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL = 'Finchè un valore è falso, allora esegui qualche comando.';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_1 = 'Esegui i blocchi nella sezione \'esegui\' mentre la condizione è '
        + 'vera.';

    Blockly.Msg.LANG_CONTROLS_FOR_HELPURL = '';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_WITH = 'conta con';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_VAR = 'x';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_FROM = 'da';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_TO = 'a';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_DO = 'esegui';

    Blockly.Msg.LANG_CONTROLS_FOR_TOOLTIP = 'Conta da un numero di inizio fino ad un numero finale.\n' +
        'Per ogni conta, imposta l\'attuale numero contato alla\n' +
        'variabile "%1", e poi esegui alcuni comandi.';

    Blockly.Msg.LANG_CONTROLS_FORRANGE_HELPURL = 'https://docs.makeroid.io/blocks/control.html#forrange';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_ITEM = 'per ogni';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_VAR = 'numero';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_START = 'da';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_END = 'a';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_STEP = 'per';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_DO = 'esegui';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_TEXT = 'per numero nel campo';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_PREFIX = 'per ';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_SUFFIX = ' nel campo';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_TOOLTIP = 'Esegui i blocchi nella sezione \'esegui\' per ogni valore '
        + 'numerico nel campo dall\'inizio alla fine, saltando il valore ogni volta.  Usa il nome della variabile '
        + 'data come riferimento del valore attuale.';

    Blockly.Msg.LANG_CONTROLS_FOREACH_HELPURL = 'https://docs.makeroid.io/blocks/control.html#foreach';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_ITEM = 'per ogni';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_VAR = 'elemento';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_INLIST = 'nella lista';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_DO = 'esegui';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_TEXT = 'per elemento nella lista';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_PREFIX = 'per ';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_SUFFIX = ' nella lista';
    Blockly.Msg.LANG_CONTROLS_FOREACH_TOOLTIP = 'Esegui i blocchi nella sezione \'esegui\' per ogni elemento della '
        + 'lista.  Usa il nome della variabile data come riferimento del valore attuale..';

    Blockly.Msg.LANG_CONTROLS_GET_HELPURL = 'https://docs.makeroid.io/blocks/control.html#get';


    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL = 'http://en.wikipedia.org/wiki/Control_flow';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP = 'del ciclo';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = 'uscire';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = 'continua con la prossima iterazione';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK = 'Esci da questo ciclo.';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE = 'Salta il resto di questo ciclo, e\n' +
        'continua con la prossima iterazione.';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_WARNING = 'Attenzione:\n' +
        'Questo blocco può essere usato\n' +
        'solo dentro a un ciclo.';

    Blockly.Msg.LANG_CONTROLS_WHILE_HELPURL = 'https://docs.makeroid.io/blocks/control.html#while';;
    Blockly.Msg.LANG_CONTROLS_WHILE_TITLE = 'mentre';
    Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_TEST = 'condizione';
    Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_DO = 'esegui';
    Blockly.Msg.LANG_CONTROLS_WHILE_COLLAPSED_TEXT = 'mentre';
    Blockly.Msg.LANG_CONTROLS_WHILE_TOOLTIP = 'Esegui i blocchi nella sezione \'esegui\' mentre la condizione è '
        + 'vera.';

    Blockly.Msg.LANG_CONTROLS_CHOOSE_HELPURL = 'https://docs.makeroid.io/blocks/control.html#choose';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_TITLE = 'se'
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_TEST = '';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_THEN_RETURN = 'allora';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_ELSE_RETURN = 'altrimenti';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_COLLAPSED_TEXT = 'se';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_TOOLTIP = 'Se la condizione da testare è vera,'
        + 'restituisce il risultato della valutazione dell\' espressione allegata allo slot \'allora-restituisci\'?'
        + 'altrimenti restituisce il risultato della valutazione dell\' espressione allegata allo slot \'allora-restituisci\'?'
        + 'al massimo sarà valutata una delle espressioni dello slot di ritorno.';

    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_HELPURL = 'https://docs.makeroid.io/blocks/control.html#doreturn';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_DO = 'esegui';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_RETURN = 'risultato';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TOOLTIP = 'Esegui dei blocchi nella sezione \'esegui\' e restituisce un comando. Utile se hai bisogno di eseguire una procedura prima di restituire un valore ad una variabile.';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_COLLAPSED_TEXT = 'esegui/risultato';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TITLE = 'esegui risultato';

    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TITLE = 'valuta ma ignora risultato'
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_HELPURL = 'https://docs.makeroid.io/blocks/control.html#evaluate';
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_COLLAPSED_TEXT = 'valuta ma ignora'
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TOOLTIP = 'Esegui il blocco di codice collegato ed ignora i valori restituiti (se esistono). Utile se hai bisogno di chiamare una producedura a procedure con un valore di ritorno ma non ne hai bisogno.';

    /* [lyn, 10/14/13] Removed for now. May come back some day.
     Blockly.Msg.LANG_CONTROLS_NOTHING_TITLE = 'niente';
     Blockly.Msg.LANG_CONTROLS_NOTHING_HELPURL = 'https://docs.makeroid.io/blocks/control.html#nothing';
     Blockly.Msg.LANG_CONTROLS_NOTHING_TOOLTIP = 'Ritorna nulla. Usato per inizializzare variabili o può essere inserito in una presa di ritorno se non è necessario ritornare nessun valore. Questo è equivalente a null o None.';
     */

    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_HELPURL = 'https://docs.makeroid.io/blocks/control.html#openscreen';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TITLE = 'apri altro schermo';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_INPUT_SCREENNAME = 'nomeSchermo';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_COLLAPSED_TEXT = 'apri schermo';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TOOLTIP = 'Apri un nuovo schermo in un\'app multi schermo.';

    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_HELPURL = 'https://docs.makeroid.io/blocks/control.html#openscreenwithvalue';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TITLE = 'apri un altro schermo con valore di inizio';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_SCREENNAME = 'nomeSchermo';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_STARTVALUE = 'valorediAvvio';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_COLLAPSED_TEXT = 'Apri schermo con valore'
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TOOLTIP = 'Apri un nuovo schermo in un\'app multi scherm e passa il '
        + 'valore di inizio a quello schermo.';

    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_HELPURL = 'https://docs.makeroid.io/blocks/control.html#getstartvalue';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TITLE = 'ottieni valore di inizio';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_SCREENNAME = 'nomeSchermo';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_STARTVALUE = 'valorediAvvio';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_COLLAPSED_TEXT = 'ottieni valore di avvio';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TOOLTIP = 'Ritorna il valore che era stato passato a questo schermo quando '
        + 'è stato aperto, tipicamente da un altro schermo in una app multi schermo. Se non era stato passato nessun valore, '
        + 'ritorna un testo vuoto.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_HELPURL = 'https://docs.makeroid.io/blocks/control.html#closescreen';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TITLE = 'chiudi schermo';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_COLLAPSED_TEXT = 'chiudi schermo';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TOOLTIP = 'Chiudi lo schermo corrente';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_HELPURL = 'https://docs.makeroid.io/blocks/control.html#closescreenwithvalue';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TITLE = 'chiudi schermo con valore';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_INPUT_RESULT = 'risultato';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_COLLAPSED_TEXT = 'chiudi schermo con valore';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TOOLTIP = 'Chiudi lo schermo corrente e restituisci un risultato allo '
        + 'schermo che aperto questo.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_HELPURL = 'https://docs.makeroid.io/blocks/control.html#closeapp';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TITLE = 'chiudi applicazione';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_COLLAPSED_TEXT = 'chiudi applicazione';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TOOLTIP = 'Chiudi tutti gli schermi dell\'app e interrompila.';

    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_HELPURL = 'https://docs.makeroid.io/blocks/control.html#getplainstarttext';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TITLE = 'ottieni testo di inizio';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_COLLAPSED_TEXT = 'ottieni testo di inizio';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TOOLTIP = 'Restituisce il testo che era stato passatoto a questo schermo quando '
        + 'era stato avviato da un\'altra app. Se nessun valore è stato passato, ritorna testo vuoto. Per '
        + 'app multi schermo, usa ottieni valore di inizio invece che ottenere il testo di avvio.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_HELPURL = 'https://docs.makeroid.io/blocks/control.html#closescreenwithplaintext';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TITLE = 'chiudi schermo con testo';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_INPUT_TEXT = 'testo';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_COLLAPSED_TEXT = 'chiudi schermo con testo';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TOOLTIP = 'Chiudi lo schermo corrente e ritorna il testo all\'app che '
        + 'ha aperto questa.   Questo blocco è per ritornare testo ad attività che non sono di Makeroid, non degli schermi di Makeroid. '
        + 'Per gli schermi di Makeroid, come in una app multischermo, usa Chiudi Schermo con Valore, non Chiudi Schermo con Testo.';

// Logic Blocks.
    Blockly.Msg.LANG_CATEGORY_LOGIC = 'Logica';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL = 'http://en.wikipedia.org/wiki/Inequality_(mathematics)';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_EQ = 'https://docs.makeroid.io/blocks/logic.html#=';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_NEQ = 'https://docs.makeroid.io/blocks/logic.html#not=';
    Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_EQ = 'Controlla se due elementi sono uguali. \n' +
        'Gli elementi che devono essere comparati possono essere di qualunque tipo, non solo numeri. \n' +
        'I numeri sono considerati uguali alla loro forma stampata come stringhe, \n' +
        'per esempio, il numero 0 è uguale al testo \"0\".  In più, due stringhe \n' +
        'che rappresentano numeri sono uguali se i numeri sono uguali, per esempio \n' +
        '\"1\" è uguale a \"01\".';
    Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_NEQ = 'Ritorna vero se i due elementi non sono uguali tra loro.';
    Blockly.Msg.LANG_LOGIC_COMPARE_TRANSLATED_NAME = 'uguale logico';
    Blockly.Msg.LANG_LOGIC_COMPARE_EQ = '=';
    Blockly.Msg.LANG_LOGIC_COMPARE_NEQ = '\u2260';

    Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_AND = 'https://docs.makeroid.io/blocks/logic.html#and';
    Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_OR = 'https://docs.makeroid.io/blocks/logic.html#or';
    Blockly.Msg.LANG_LOGIC_OPERATION_AND = 'e';
    Blockly.Msg.LANG_LOGIC_OPERATION_OR = 'o';
    Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Ritorna vero se i due elementi sono veri.';
    Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Ritorna vero se almeno uno dei due elementi è vero.';

    Blockly.Msg.LANG_LOGIC_NEGATE_HELPURL = 'https://docs.makeroid.io/blocks/logic.html#not';
    Blockly.Msg.LANG_LOGIC_NEGATE_INPUT_NOT = 'non';
    Blockly.Msg.LANG_LOGIC_NEGATE_TOOLTIP = 'Ritorna vero se l\'elemento è falso.\n' +
        'Ritorna falso se l\'elemento è vero.';

    Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE_HELPURL = 'https://docs.makeroid.io/blocks/logic.html#true';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE_HELPURL = 'https://docs.makeroid.io/blocks/logic.html#false';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE = 'vero';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE = 'falso';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_TRUE = 'Ritorna il booleano vero.';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_FALSE = 'Ritorna il booleano falso.';

// Math Blocks.
    Blockly.Msg.LANG_CATEGORY_MATH = 'Matematica';
    Blockly.Msg.LANG_MATH_NUMBER_HELPURL = 'https://docs.makeroid.io/blocks/math.html#number';
    Blockly.Msg.LANG_MATH_NUMBER_TOOLTIP = 'Riporta il numero mostrato.';
    Blockly.Msg.LANG_MATH_MUTATOR_ITEM_INPUT_NUMBER = 'numero';

    Blockly.Msg.LANG_MATH_COMPARE_HELPURL = '';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_EQ = 'https://docs.makeroid.io/blocks/math.html#=';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_NEQ = 'https://docs.makeroid.io/blocks/math.html#not=';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LT = 'https://docs.makeroid.io/blocks/math.html#lt';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LTE = 'https://docs.makeroid.io/blocks/math.html#lte';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GT = 'https://docs.makeroid.io/blocks/math.html#gt';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GTE = 'https://docs.makeroid.io/blocks/math.html#gte';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_EQ = 'Ritorna vero se i due numeri sono uguali tra loro.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_NEQ = 'Ritorna vero se i due numeri non sono uguali tra loro.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LT = 'Ritorna vero se il primo numero è più piccolo\n' +
        'del secondo.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LTE = 'Ritorna vero se il primo numero è più piccolo\n' +
        'o uguale del secondo.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GT = 'Ritorna vero se il primo numero è più grande\n' +
        'del secondo.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GTE = 'Ritorna vero se il primo numero è più grande\n' +
        'o uguale del secondo.';
    Blockly.Msg.LANG_MATH_COMPARE_EQ = '=';
    Blockly.Msg.LANG_MATH_COMPARE_NEQ = '\u2260';
    Blockly.Msg.LANG_MATH_COMPARE_LT = '<';
    Blockly.Msg.LANG_MATH_COMPARE_LTE = '\u2264';
    Blockly.Msg.LANG_MATH_COMPARE_GT = '>';
    Blockly.Msg.LANG_MATH_COMPARE_GTE = '\u2265';

    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_ADD = 'https://docs.makeroid.io/blocks/math.html#add';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MINUS = 'https://docs.makeroid.io/blocks/math.html#subtract';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MULTIPLY = 'https://docs.makeroid.io/blocks/math.html#multiply';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_DIVIDE = 'https://docs.makeroid.io/blocks/math.html#divide';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_POWER = 'https://docs.makeroid.io/blocks/math.html#exponent';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_ADD = 'Ritorna la somma dei due numeri.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS = 'Ritorna la differenza dei due numeri.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY = 'Ritorna il prodotto dei due numeri.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE = 'Ritorna il quoziente dei due numeri.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_POWER = 'Ritorna il primo numero alla \n' +
        'potenza del secondo.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_ADD = '+';
    Blockly.Msg.LANG_MATH_ARITHMETIC_MINUS = '-';
    Blockly.Msg.LANG_MATH_ARITHMETIC_MULTIPLY = '*';
    Blockly.Msg.LANG_MATH_ARITHMETIC_DIVIDE = '/';
    Blockly.Msg.LANG_MATH_ARITHMETIC_POWER = '^';

    /*Blockly.Msg.LANG_MATH_CHANGE_TITLE_CHANGE = 'cambia';
     Blockly.Msg.LANG_MATH_CHANGE_TITLE_ITEM = 'elemento';
     Blockly.Msg.LANG_MATH_CHANGE_INPUT_BY = 'da';
     Blockly.Msg.LANG_MATH_CHANGE_TOOLTIP = 'Aggiungi un numero alla variabile "%1".';*/


    Blockly.Msg.LANG_MATH_SINGLE_OP_ROOT = 'radice quadrata';
    Blockly.Msg.LANG_MATH_SINGLE_OP_ABSOLUTE = 'assoluto';
    Blockly.Msg.LANG_MATH_SINGLE_OP_NEG = 'neg';
    Blockly.Msg.LANG_MATH_SINGLE_OP_LN = 'log';
    Blockly.Msg.LANG_MATH_SINGLE_OP_EXP = 'e^';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ROOT = 'Ritorna la radice quadrata di un numero.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ROOT = 'https://docs.makeroid.io/blocks/math.html#sqrt';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ABS = 'Ritorna il valore assoluto di un numero.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ABS = 'https://docs.makeroid.io/blocks/math.html#abs';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_NEG = 'Ritorna la negazione di un numero.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_NEG = 'https://docs.makeroid.io/blocks/math.html#neg';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_LN = 'Ritorna il logaritmo naturale di un numero, per esempio il logaritmo alla base e (2.71828...)';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_LN ='https://docs.makeroid.io/blocks/math.html#log';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_EXP = 'Ritorna e (2.71828...) alla potenza di un numero.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_EXP ='https://docs.makeroid.io/blocks/math.html#e';
    /*Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_POW10 = 'Ritorna 10 alla potenza di un numero.';*/

    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_ROUND = 'Arrotonda un numero per eccesso o per difetto.';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_ROUND = 'https://docs.makeroid.io/blocks/math.html#round';
    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_CEILING = 'Arrotonda l\'input al più piccolo\n' +
        'numero non minore dell\' input';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_CEILING =  'https://docs.makeroid.io/blocks/math.html#ceiling';
    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_FLOOR = 'Arrotonda l\'input al più grande\n' +
        'numero non maggiore dell\' input';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_FLOOR =  'https://docs.makeroid.io/blocks/math.html#floor';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_ROUND = 'arrotonda';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_CEILING = 'eccesso';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_FLOOR = 'difetto';

    Blockly.Msg.LANG_MATH_TRIG_SIN = 'sin';
    Blockly.Msg.LANG_MATH_TRIG_COS = 'cos';
    Blockly.Msg.LANG_MATH_TRIG_TAN = 'tan';
    Blockly.Msg.LANG_MATH_TRIG_ASIN = 'asin';
    Blockly.Msg.LANG_MATH_TRIG_ACOS = 'acos';
    Blockly.Msg.LANG_MATH_TRIG_ATAN = 'atan';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2 = 'atan2';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2_X = 'x';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2_Y = 'y';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_SIN = 'Fornisce il seno dell\' angolo dato in gradi.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_SIN = 'https://docs.makeroid.io/blocks/math.html#sin';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_COS = 'Fornisce il coseno dell\' angolo dato in gradi.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_COS = 'https://docs.makeroid.io/blocks/math.html#cos';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_TAN = 'Fornisce la tangente dell\' angolo dato in gradi.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_TAN = 'https://docs.makeroid.io/blocks/math.html#tan';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ASIN = 'Fornisce l\'angolo nel raggio (-90,+90]\n' +
        'gradi con il valore seno dato.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ASIN = 'https://docs.makeroid.io/blocks/math.html#asin';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ACOS = 'Fornisce l\'angolo nel raggio [0, 180)\n' +
        'gradi con il valore coseno dato.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ACOS = 'https://docs.makeroid.io/blocks/math.html#acos';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN = 'Fornisce l\'angolo nel raggio (-90,+90]\n' +
        'gradi con il valore tangente dato.';
    ATAN : Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN = 'https://docs.makeroid.io/blocks/math.html#atan';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN2 = 'Fornisce l\'angolo nel raggio (-180, +180]\n' +
        'gradi con le coordinate rettangolari date.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN2 = 'https://docs.makeroid.io/blocks/math.html#atan2';

    Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MIN = 'min';
    Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MAX = 'max';
    Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MIN = 'Ritorna il più piccolo dei suoi argomenti..';
    Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MAX = 'Ritorna il più grande dei suo argomenti..';

    Blockly.Msg.LANG_MATH_DIVIDE = '\u00F7';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_MODULO = 'modulo di';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_REMAINDER = 'resto di';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_QUOTIENT = 'quoziente di';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_MODULO = 'Ritorna il modulo.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_MODULO = 'https://docs.makeroid.io/blocks/math.html#modulo';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_REMAINDER = 'Ritorna il resto.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_REMAINDER = 'https://docs.makeroid.io/blocks/math.html#remainder';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_QUOTIENT = 'Ritorna il quoziente.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_QUOTIENT = 'https://docs.makeroid.io/blocks/math.html#quotient';

    Blockly.Msg.LANG_MATH_RANDOM_INT_HELPURL = 'https://docs.makeroid.io/blocks/math.html#randomint';
    Blockly.Msg.LANG_MATH_RANDOM_INT_TITLE_RANDOM = 'intero casuale';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_FROM = 'da';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_TO = 'a';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT = 'intero casuale da %1 a %2';
    Blockly.Msg.LANG_MATH_RANDOM_INT_TOOLTIP = 'Ritorna un numero intero casuale tra il limite più grande\n' +
        'e quello più basso. I limiti saranno limitati per essere più piccoli \n' +
        'di 2**30.';

    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_HELPURL = 'https://docs.makeroid.io/blocks/math.html#randomfrac';
    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM = 'frazione casuale';
    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TOOLTIP = 'Ritorna un numero casuale tra 0 e 1.';

    Blockly.Msg.LANG_MATH_RANDOM_SEED_HELPURL = 'https://docs.makeroid.io/blocks/math.html#randomseed';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_TITLE_RANDOM = 'seme sequenza casuale';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_INPUT_TO = 'a';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_TOOLTIP = 'specifica un seme numerico\n' +
        'per il generatore di numeri casuali';

    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TITLE_CONVERT = 'converti';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_RAD_TO_DEG = 'radianti a gradi';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_DEG_TO_RAD = 'gradi a radianti';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_RAD_TO_DEG = 'Ritorna il valore in gradi nel raggio\n' +
        '[0, 360) corrispondente al suo argomento in radianti.';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_RAD_TO_DEG = 'https://docs.makeroid.io/blocks/math.html#convertrad';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_DEG_TO_RAD = 'Ritorna il valore in radianti nel raggio\n' +
        '[-\u03C0, +\u03C0) corrispondente al suo argomento in gradi.';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_DEG_TO_RAD = 'https://docs.makeroid.io/blocks/math.html#convertdeg';

    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_HELPURL = 'https://docs.makeroid.io/blocks/math.html#format';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TITLE = 'formatta come decimale';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_NUM = 'numero';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_PLACES = 'posizioni';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT = 'formatta come numero decimale %1 posizioni %2';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TOOLTIP = 'Ritorna il numero formattato come decimale\n' +
        'con uno specifico numero di posizioni.';

    Blockly.Msg.LANG_MATH_IS_A_NUMBER_HELPURL = 'https://docs.makeroid.io/blocks/math.html#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_NUMBER_INPUT_NUM = 'è numero?';
    Blockly.Msg.LANG_MATH_IS_A_NUMBER_TOOLTIP = 'Controlla se qualcosa è un numero.';

    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_HELPURL = 'https://docs.makeroid.io/blocks/math.html#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_INPUT_NUM = 'è Base 10?';
    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_TOOLTIP = 'Controlla se qualcosa è una stringa che rappresenta un intero positivo in base 10.';

    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_HELPURL = 'https://docs.makeroid.io/blocks/math.html#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_INPUT_NUM = 'è esadecimale?';
    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_TOOLTIP = 'Controlla se qualcosa è una stringa che rappresenta un numero esadecimale.';

    Blockly.Msg.LANG_MATH_IS_A_BINARY_HELPURL = 'https://docs.makeroid.io/blocks/math.html#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_BINARY_INPUT_NUM = 'è binario?';
    Blockly.Msg.LANG_MATH_IS_A_BINARY_TOOLTIP = 'Controlla se qualcosa è una stringa che rappresenta un numero binario.';


    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TITLE_CONVERT = 'converti numero';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_HEX = 'base 10 a esadecimale';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_HEX = '';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_HEX = 'Prende un intero positivo in base 10 e restituisce la stringa che rappresenta il numero in esadecimale';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_HEX_TO_DEC = 'esadecimale a base 10';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_HEX_TO_DEC = '';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_HEX_TO_DEC = 'Prende una stringa che rappresenta un numero in esadecimale e restituisce la stringa che rappresenta il numero in base 10';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_BIN = 'base 10 a binario';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_BIN = '';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_BIN = 'Prende un intero positivo in base 10 e restituisce la stringa che rappresenta il numero in binario';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_BIN_TO_DEC = 'binario a base 10';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_BIN_TO_DEC = '';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_BIN_TO_DEC = 'Prende una stringa che rappresenta un numero in binario e restituisce la stringa che rappresenta il numero in base 10';

// Text Blocks.
    Blockly.Msg.LANG_CATEGORY_TEXT = 'Testo';
    Blockly.Msg.LANG_TEXT_TEXT_HELPURL = 'https://docs.makeroid.io/blocks/text.html#string';
    Blockly.Msg.LANG_TEXT_TEXT_TOOLTIP = 'Una stringa di testo.';
    Blockly.Msg.LANG_TEXT_TEXT_LEFT_QUOTE = '\u201C';
    Blockly.Msg.LANG_TEXT_TEXT_RIGHT_QUOTE = '\u201D';

    Blockly.Msg.LANG_TEXT_JOIN_HELPURL = 'https://docs.makeroid.io/blocks/text.html#join';
    Blockly.Msg.LANG_TEXT_JOIN_TITLE_CREATEWITH = 'crea testo con';
    Blockly.Msg.LANG_TEXT_JOIN_TOOLTIP = 'Aggiunge tutti gli argomenti per formare una singola stringa di testo.\n'
        + 'Se non ci sono argomenti, crea un testo vuoto.';
    Blockly.Msg.LANG_TEXT_JOIN_TITLE_JOIN = 'unisci';

    Blockly.Msg.LANG_TEXT_JOIN_ITEM_TITLE_ITEM = 'stringa';
    Blockly.Msg.LANG_TEXT_JOIN_ITEM_TOOLTIP = '';

    Blockly.Msg.LANG_TEXT_APPEND_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
    Blockly.Msg.LANG_TEXT_APPEND_TO = 'a';
    Blockly.Msg.LANG_TEXT_APPEND_APPENDTEXT = 'aggiungi testo';
    Blockly.Msg.LANG_TEXT_APPEND_VARIABLE = 'elemento';
    Blockly.Msg.LANG_TEXT_APPEND_TOOLTIP = 'Aggiungi del testo alla variabile "%1".';

    Blockly.Msg.LANG_TEXT_LENGTH_HELPURL = 'https://docs.makeroid.io/blocks/text.html#length';
    Blockly.Msg.LANG_TEXT_LENGTH_INPUT_LENGTH = 'lunghezza';
    Blockly.Msg.LANG_TEXT_LENGTH_TOOLTIP = 'Ritorna il numero di lettere (inclusi gli spazi)\n' +
        'nel testo dato.';

    Blockly.Msg.LANG_TEXT_ISEMPTY_HELPURL = 'https://docs.makeroid.io/blocks/text.html#isempty';
    Blockly.Msg.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY = 'è vuoto';
    Blockly.Msg.LANG_TEXT_ISEMPTY_TOOLTIP = 'Ritorna vero se la lunghezza del\n' + 'testo è 0, falso altrimenti.';

    Blockly.Msg.LANG_TEXT_COMPARE_LT = ' <';
    Blockly.Msg.LANG_TEXT_COMPARE_EQUAL = ' =';
    Blockly.Msg.LANG_TEXT_COMPARE_GT = ' >';
    Blockly.Msg.LANG_TEXT_COMPARE_HELPURL = 'https://docs.makeroid.io/blocks/text.html#compare';
    Blockly.Msg.LANG_TEXT_COMPARE_INPUT_COMPARE = 'compara testi';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_LT = 'Verifica se il testo1 è lessicograficamente inferiore a quello2.\n'
        + 'se un testo è il prefisso dell\' altro, il testo più breve è\n'
        + 'considerato più piccolo. I caratteri maiuscoli precedono quelli minuscoli.';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_EQUAL = 'Verifica se le stringhe di testo sono identiche, es. hanno gli stessi\n'
        + 'caratteri nello stesso ordine. Questo è diverso dall\' = ordinario\n'
        + 'nel caso dove le stringhe di testo sono numeri: 123 e 0123 sono =\n'
        + 'ma non testualmente =.';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_GT = 'Riporta se il testo1 è lessicograficamente più grande del testo2.\n'
        + 'se un testo è il prefisso dell\' altro, il testo più breve è considerato più piccolo.\n'
        + 'I caratteri maiuscoli precedono quelli minuscoli.';
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_TOOLTIP = "Produce testo, come un blocco di testo.  La differenza è che il \n"
        + "Il testo non è facilmente rilevabile esaminando l' APK dell' app.  Utilizzare questo strumento per creare applicazioni \n"
        + "per distribuire informazioni riservate, ad esempio le chiavi API.  \n"
        + "Attenzione: questo offre una sicurezza molto bassa contro gli avversari esperti.";
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE = 'Testo Offuscato';
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_HELPURL = 'https://docs.makeroid.io/blocks/text.html#obfuscatetext';

    /*Blockly.Msg.LANG_TEXT_ENDSTRING_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_ENDSTRING_INPUT = 'lettere nel testo';
     Blockly.Msg.LANG_TEXT_ENDSTRING_TOOLTIP = 'Ritorna lo specifico numero di lettere all\'inizio o alla fine del testo.';
     Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_FIRST = 'inizio';
     Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_LAST = 'fine';*/

    /*Blockly.Msg.LANG_TEXT_INDEXOF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_INDEXOF_TITLE_FIND = 'trova';
     Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_OCCURRENCE = 'occorrenze del testo';
     Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_INTEXT = 'nel testo';
     Blockly.Msg.LANG_TEXT_INDEXOF_TOOLTIP = 'Restituisce l\'indice della prima/ultima occorrenza\n' +
     'del primo testo nel secondo testo.\n' +
     'Restituisce 0 se il testo non è trovato.';
     Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_FIRST = 'prima';
     Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_LAST = 'ultima';*/

    /*Blockly.Msg.LANG_TEXT_CHARAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_CHARAT_INPUT_AT = 'lettera a';
     Blockly.Msg.LANG_TEXT_CHARAT_INPUT_INTEXT = 'nel testo';
     Blockly.Msg.LANG_TEXT_CHARAT_TOOLTIP = 'Restituisce la lettera alla posizione specifica.';*/

    Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE = 'maiuscolo';
    Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_DOWNCASE = 'minuscolo';
    Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_UPPERCASE = 'Restituisce una copia dell\' argomento stringa di testo convertito in maiuscolo.';
    Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_UPPERCASE = 'https://docs.makeroid.io/blocks/text.html#upcase';
    Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_DOWNCASE = 'Restituisce una copia dell\' argomento stringa di testo convertito in minuscolo.';
    Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_DOWNCASE = 'https://docs.makeroid.io/blocks/text.html#downcase';

    Blockly.Msg.LANG_TEXT_TRIM_HELPURL = 'https://docs.makeroid.io/blocks/text.html#trim';
    Blockly.Msg.LANG_TEXT_TRIM_TITLE_TRIM = 'rimuovi spazi'; //da ricontrollare
    Blockly.Msg.LANG_TEXT_TRIM_TOOLTIP = 'Restituisce una copia dei suoi argomenti stringa di testo con qualsiasi\n'
        + 'spazio principale o finale rimosso.';

    Blockly.Msg.LANG_TEXT_STARTS_AT_HELPURL = 'https://docs.makeroid.io/blocks/text.html#startsat';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_STARTS_AT = 'inizia a';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_TEXT = 'testo';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_PIECE = 'piece';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT = 'inizia al  testo %1 porzione %2';
    Blockly.Msg.LANG_TEXT_STARTS_AT_TOOLTIP = 'Ritorna l\'indice di inizio della porzione nel testo.\n'
        + 'dove l\' indice 1 denota l\' inizio del testo. Ritorna 0 se la\n'
        + 'porzione non é nel testo.';

    Blockly.Msg.LANG_TEXT_CONTAINS_HELPURL = 'https://docs.makeroid.io/blocks/text.html#contains';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_CONTAINS = 'contiene';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_TEXT = 'testo';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_PIECE = 'porzione';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT = 'contiene  testo %1 porzione %2';
    Blockly.Msg.LANG_TEXT_CONTAINS_TOOLTIP = 'Verifica se la porzione è contenuta nel testo.';

    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL = '';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_TEXT = 'testo';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT = 'a';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT_LIST = 'a (lista)';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST = 'dividi al primo';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST_OF_ANY = 'dividi al primo di tutti';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT = 'dividi';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_ANY = 'dividi a tutto';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST = 'Dividi il testo dato in due porzioni usando la posizione della prima occorrenza del \n'
        + ' testo \'a\' come punto di divisione, e ritorna una lista di due elementi che consiste nella porzione \n'
        + 'prima del punto di divisione e la porzione dopo il punto di divisione. \n'
        + 'Dividendo "mela,banana,ciliegia,cibo per cani" con una virgola come punto di divisione \n'
        + 'restituisce una lista di due elementi: il primo è il testo  "mela" e il secondo è il testo \n'
        + '"banana,ciliegia,cibo per cani". \n'
        + 'Nota che la virgola dopo "mela" non appare nel risultato, \n'
        + 'perchè è il punto di divisione.';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST = 'https://docs.makeroid.io/blocks/text.html#splitat';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST_OF_ANY = 'Dividi il test dato in una lista di due elementi, usando la prima posizione di ogni elemento \n'
        + 'nella lista \'a\' come punto di divisione. \n\n'
        + 'Dividendo "Amo le mele banane mele uva" per la lista "(ba,me)" ritorna \n'
        + 'una lista di due elementi, con il primo che è "Amo le " mentre il secondo è \n'
        + '"le banane mele uva."';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST_OF_ANY = 'https://docs.makeroid.io/blocks/text.html#splitatfirstofany';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT = 'Divide il testo in porzioni usando il testo \'a\' come punti di divisione e produce una lista di risultati.  \n'
        + 'Dividendo "uno,due,tre,quattro" per "," (virgola) restituisce la lista "(uno due tre quattro)". \n'
        + 'Dividendo "una-patata,due-patata,tre-patata,quattro" per "-patata", ritorna la lista "(uno due tre quattro)".';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT = 'https://docs.makeroid.io/blocks/text.html#split';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_ANY = 'Divide il testo dato in una lista, usando tutti gli elementi nella lista \'a\' come \n'
        + 'punto di divisione, e restituisce una lista di risultati. \n'
        + 'Dividendo "melabacca,banana,zucca,cibo per cani" per \'a\' come lista di due elementi la quale \n'
        + 'primo elemento è una virgola, mentre il secondo è "cca" ritorna una lista di quattro elementi: \n'
        + '"(melabac banana zu cibo per cani)".';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_ANY = 'https://docs.makeroid.io/blocks/text.html#splitatany';

    /*.LANG_TEXT_PRINT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
     Blockly.Msg.LANG_TEXT_PRINT_TITLE_PRINT = 'stampa';
     Blockly.Msg.LANG_TEXT_PRINT_TOOLTIP = 'Stampa il testo specifico, numero o un altro valore.';*/

    /*Blockly.Msg.LANG_TEXT_PROMPT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode92.html';
     Blockly.Msg.LANG_TEXT_PROMPT_TITLE_PROMPT_FOR = 'forza';
     Blockly.Msg.LANG_TEXT_PROMPT_TITILE_WITH_MESSAGE = 'con messaggio';
     Blockly.Msg.LANG_TEXT_PROMPT_TOOLTIP = 'Forza l'inserimento di un testo specifico da parte dell\'utente.';
     Blockly.Msg.LANG_TEXT_PROMPT_TYPE_TEXT = 'testo';
     Blockly.Msg.LANG_TEXT_PROMPT_TYPE_NUMBER = 'numero';*/

    Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_HELPURL = 'https://docs.makeroid.io/blocks/text.html#splitspaces';
    Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_TITLE = 'dividi agli spazi';
    Blockly.Msg.LANG_TEXT_SPLIT_AT_TOOLTIP = 'Dividi il testo in porzioni separate da spazi.';

    Blockly.Msg.LANG_TEXT_SEGMENT_HELPURL = 'https://docs.makeroid.io/blocks/text.html#segment';
    Blockly.Msg.LANG_TEXT_SEGMENT_TITLE_SEGMENT = 'segmento';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_START = 'inizio';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_LENGTH = 'lunghezza';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_TEXT = 'testo';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT = 'segmento  testo %1 inizio %2 lunghezza %3';
    Blockly.Msg.LANG_TEXT_SEGMENT_AT_TOOLTIP = 'Estrai il segmento della lunghezza data dal testo dato\n'
        + 'iniziando dal testo dato nella posizione data. Posizione\n'
        + '1 indica l\'inizio del testo.';

    Blockly.Msg.LANG_TEXT_REPLACE_ALL_HELPURL = 'https://docs.makeroid.io/blocks/text.html#replaceall';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_SEGMENT = 'segmento';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_TEXT = 'testo';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_TITLE_REPLACE_ALL = 'sostituisci tutto';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_REPLACEMENT = 'sostituto';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT = 'sostituisci tutto il testo %1 segmento %2 rimpiazzo %3';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_TOOLTIP = 'Restituisce un nuovo testo ottenuto dalla sostituzione di tutte le occorrenze\n'
        + 'del segmento con il sostituto.';

    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_HELPURL = 'http://appinventor.mit.edu/explore/ai2/support/blocks/text#isstring';
    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_TITLE = 'è stringa?';
    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_TOOLTIP = 'Restituisce vero se l\'inserimento è una stringa.';

// Lists Blocks.
    Blockly.Msg.LANG_CATEGORY_LISTS = 'Lista';
//Blockly.Msg.LANG_LISTS_CREATE_EMPTY_HELPURL = 'http://en.wikipedia.org/wiki/Linked_list#Empty_lists';
    Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TITLE = 'crea lista vuota';
//Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TOOLTIP = 'Restituisce una lista di lunghezza 0, contenente nessun dato';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_EMPTY_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#makealist';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_TITLE_MAKE_LIST = 'crea una lista';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_TOOLTIP = 'Crea una lista con qualsiasi numero di elementi.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'lista';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Aggiungi, rimuovi, o riordina sezioni per riconfigurare questo blocco lista.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TITLE = 'elemento';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Aggiungi un elemento alla lista.';

    Blockly.Msg.LANG_LISTS_ADD_ITEM_TITLE = 'elemento';
    Blockly.Msg.LANG_LISTS_ADD_ITEM_TOOLTIP = 'Aggiunge un elemento alla lista.';
    Blockly.Msg.LANG_LISTS_ADD_ITEM_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#additems';

    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#selectlistitem';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_SELECT = 'seleziona elemento lista';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_INDEX = 'indice';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT = 'seleziona lista elemento  lista %1 indice %2';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TOOLTIP = 'Restituisce l\'elemento in posizione indice nella lista.';

    Blockly.Msg.LANG_LISTS_IS_IN_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#inlist';
    Blockly.Msg.LANG_LISTS_IS_IN_TITLE_IS_IN = 'è nella lista?';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT_THING = 'elemento';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT = 'è nella lista? elemento %1 lista %2'
    Blockly.Msg.LANG_LISTS_IS_IN_TOOLTIP = 'Restituisce vero se l\'elemento è uno della lista, '
        + 'falso altrimenti.';

    Blockly.Msg.LANG_LISTS_POSITION_IN_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#indexinlist';
    Blockly.Msg.LANG_LISTS_POSITION_IN_TITLE_POSITION = 'indice nella lista';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_THING = 'elemento';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT = 'indice nella lista  elemento %1 lista %2';
    Blockly.Msg.LANG_LISTS_POSITION_IN_TOOLTIP = 'Trova la posizione dell\'elemento nella lista. Se non è nella '
        + 'lista, restituisce 0.';

    Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#pickrandomitem';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_TITLE_PICK_RANDOM = 'scegli un elemento casuale';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_TOOLTIP = 'Sceglie un elemento a caso dalla lista.';

    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#replace';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TITLE_REPLACE = 'sostituisci elemento lista';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_INDEX = 'indice';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_REPLACEMENT = 'sostituto';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT = 'sostituisci elemento lista  lista %1 indice %2 rimpiazzo %3';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TOOLTIP = 'Sostituisce l\'n esimo elemento nella lista.';

    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#removeitem';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TITLE_REMOVE = 'rimuovi elemento lista';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_INDEX = 'indice';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT = 'rimuovi elemento lista  lista %1 indice %2';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TOOLTIP = 'Rimuove l\'elemento alla posizione specifica dalla lista.';

    /*Blockly.Msg.LANG_LISTS_REPEAT_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_REPEAT_TITLE_CREATE = 'crea lista con elemento';
     Blockly.Msg.LANG_LISTS_REPEAT_INPUT_REPEATED = 'ripetuto';
     Blockly.Msg.LANG_LISTS_REPEAT_INPUT_TIMES = 'volte';
     Blockly.Msg.LANG_LISTS_REPEAT_TOOLTIP = 'Crea uma lists contenente il valore dato\n' +
     'ripetuto lo specificato numero di volte.';*/

    Blockly.Msg.LANG_LISTS_LENGTH_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#lengthoflist';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LENGTH = 'lunghezza della lista';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT = 'lunghezza della lista %1';
    Blockly.Msg.LANG_LISTS_LENGTH_TOOLTIP = 'Conta il numero di elementi nella lista.';

    Blockly.Msg.LANG_LISTS_APPEND_LIST_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#append';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_TITLE_APPEND = 'append to list';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST1 = 'list1';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST2 = 'list2';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT = 'append to list  list1 %1 list2 %2';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_TOOLTIP = 'Appends all the items in list2 onto the end of list1. After '
        + 'the append, list1 will include these additional elements, but list2 will be unchanged.';

    Blockly.Msg.LANG_LISTS_ADD_ITEMS_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#additems';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_TITLE_ADD = 'add items to list';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_LIST = ' list';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_ITEM = 'item';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT = 'add items to list list %1 item %2';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_TOOLTIP = 'Adds items to the end of a list.';

    Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TITLE_ADD = 'list';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TOOLTIP = 'Add, remove, or reorder sections to reconfigure this list block.';

    Blockly.Msg.LANG_LISTS_COPY_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#copy';
    Blockly.Msg.LANG_LISTS_COPY_TITLE_COPY = 'copy list';
    Blockly.Msg.LANG_LISTS_COPY_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_COPY_TOOLTIP = 'Makes a copy of a list, including copying all sublists';

    Blockly.Msg.LANG_LISTS_IS_LIST_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#isalist';
    Blockly.Msg.LANG_LISTS_IS_LIST_TITLE_IS_LIST = 'is a list?';
    Blockly.Msg.LANG_LISTS_IS_LIST_INPUT_THING = 'thing';
    Blockly.Msg.LANG_LISTS_IS_LIST_TOOLTIP = 'Tests if something is a list.';

    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#listtocsvrow';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TITLE_TO_CSV = 'list to csv row';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TOOLTIP = 'Interprets the list as a row of a table and returns a CSV '
        + '\(comma-separated value\) text representing the row. Each item in the row list is '
        + 'considered to be a field, and is quoted with double-quotes in the resulting CSV text. '
        + 'Items are separated by commas. The returned row text does not have a line separator at '
        + 'the end.';

    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#listfromcsvrow';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TITLE_FROM_CSV = 'list from csv row';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TOOLTIP = 'Parses a text as a CSV \(comma-separated value\) formatted '
        + 'row to produce a list of fields. It is an error for the row text to contain unescaped '
        + 'newlines inside fields \(effectively, multiple lines\). It is okay for the row text to '
        + 'end in a single newline or CRLF.';

    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#listtocsvtable';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TITLE_TO_CSV = 'list to csv table';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TOOLTIP = 'Interprets the list as a table in row-major format and '
        + 'returns a CSV \(comma-separated value\) text representing the table. Each item in the '
        + 'list should itself be a list representing a row of the CSV table. Each item in the row '
        + 'list is considered to be a field, and is quoted with double-quotes in the resulting CSV '
        + 'text. In the returned text, items in rows are separated by commas and rows are '
        + 'separated by CRLF \(\\r\\n\).';

    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#listfromcsvtable';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TITLE_FROM_CSV = 'list from csv table';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_INPUT_TEXT = 'text';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TOOLTIP = 'Parses a text as a CSV \(comma-separated value\) formatted '
        + 'table to produce a list of rows, each of which is a list of fields. Rows can be '
        + 'separated by newlines \(\\n\) or CRLF \(\\r\\n\).';

    Blockly.Msg.LANG_LISTS_INSERT_ITEM_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#insert';
    Blockly.Msg.LANG_LISTS_INSERT_TITLE_INSERT_LIST = 'insert list item';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_INDEX = 'index';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_ITEM = 'item';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT = 'insert list item  list %1 index %2 item %3';
    Blockly.Msg.LANG_LISTS_INSERT_TOOLTIP = 'Insert an item into a list at the specified position.';

    Blockly.Msg.LANG_LISTS_IS_EMPTY_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#islistempty';
    Blockly.Msg.LANG_LISTS_TITLE_IS_EMPTY = 'is list empty?';
    Blockly.Msg.LANG_LISTS_INPUT_LIST = 'list';
    Blockly.Msg.LANG_LISTS_IS_EMPTY_TOOLTIP = 'Returns true if the list is empty.';

    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_HELPURL = 'https://docs.makeroid.io/blocks/lists.html#lookuppairs';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TITLE_LOOKUP_IN_PAIRS = 'look up in pairs';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_KEY = 'key';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_PAIRS = 'pairs';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_NOT_FOUND = 'notFound';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT = 'look up in pairs  key %1 pairs %2 notFound %3';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TOOLTIP = 'Returns the value associated with the key in the list of pairs';

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
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_HELPURL = 'https://docs.makeroid.io/blocks/variables.html#global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TITLE_INIT = 'initialize global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME = 'name';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TO = 'to';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_COLLAPSED_TEXT = 'global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TOOLTIP = 'Creates a global variable and gives it the value of the attached blocks.';

    Blockly.Msg.LANG_VARIABLES_GET_HELPURL = 'https://docs.makeroid.io/blocks/variables.html#get';
    Blockly.Msg.LANG_VARIABLES_GET_TITLE_GET = 'get';
    /* Blockly.Msg.LANG_VARIABLES_GET_INPUT_ITEM = 'item'; */ // [lyn, 10/14/13] unused
    Blockly.Msg.LANG_VARIABLES_GET_COLLAPSED_TEXT = 'get';
    Blockly.Msg.LANG_VARIABLES_GET_TOOLTIP = 'Returns the value of this variable.';

    Blockly.Msg.LANG_VARIABLES_SET_HELPURL = 'https://docs.makeroid.io/blocks/variables.html#set';
    Blockly.Msg.LANG_VARIABLES_SET_TITLE_SET = 'set';
    /* Blockly.Msg.LANG_VARIABLES_SET_INPUT_ITEM = 'item'; */ // [lyn, 10/14/13] unused
    Blockly.Msg.LANG_VARIABLES_SET_TITLE_TO = 'to';
    Blockly.Msg.LANG_VARIABLES_SET_COLLAPSED_TEXT = 'set';
    Blockly.Msg.LANG_VARIABLES_SET_TOOLTIP = 'Sets this variable to be equal to the input.';
    Blockly.Msg.LANG_VARIABLES_VARIABLE = ' variable';

    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_HELPURL = 'https://docs.makeroid.io/blocks/variables.html#do';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TITLE_INIT = 'initialize local';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_DEFAULT_NAME = 'name';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_INPUT_TO = 'to';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_IN_DO = 'in';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_COLLAPSED_TEXT = 'local';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TOOLTIP = 'Allows you to create variables that are only accessible in the do part of this block.';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TRANSLATED_NAME = 'initialize local in do';

    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_HELPURL = 'https://docs.makeroid.io/blocks/variables.html#return';
    /* // These don't differ between the statement and expression
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TITLE_INIT = 'initialize local';
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_NAME = 'name';
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_TO = 'to';
     */
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_IN_RETURN = 'in';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_COLLAPSED_TEXT = 'local';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TOOLTIP = 'Allows you to create variables that are only accessible in the return part of this block.';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TRANSLATED_NAME = 'initialize local in return';

    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TITLE_LOCAL_NAMES = 'local names';
    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TOOLTIP = '';

    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_TITLE_NAME = 'name';
    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_DEFAULT_VARIABLE = 'x';

// Procedures Blocks.
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_HELPURL = 'https://docs.makeroid.io/blocks/procedures.html#do';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DEFINE = 'to';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE = 'procedure';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO = 'do';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_COLLAPSED_PREFIX = 'to ';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_TOOLTIP = 'A procedure that does not return a value.';

    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_HELPURL = 'https://docs.makeroid.io/blocks/procedures.html#doreturn';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_THEN_RETURN = 'result';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_DO = 'do';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_RETURN = 'result';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_TOOLTIP = 'Runs the blocks in \'do\' and returns a statement. Useful if you need to run a procedure before returning a value to a variable.';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_COLLAPSED_TEXT = 'do/result';

    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_HELPURL = 'https://docs.makeroid.io/blocks/procedures.html#return';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DEFINE = 'to';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE;
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DO = Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO;
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_RETURN = 'result';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_COLLAPSED_PREFIX = 'to ';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_TOOLTIP = 'A procedure returning a result value.';

    Blockly.Msg.LANG_PROCEDURES_DEF_DUPLICATE_WARNING = 'Warning:\n' +
        'This procedure has\n' +
        'duplicate inputs.';

    Blockly.Msg.LANG_PROCEDURES_GET_HELPURL = 'https://docs.makeroid.io/blocks/procedures.html#get';

    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_HELPURL = 'https://docs.makeroid.io/blocks/procedures.html#do';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL = 'call ';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE = 'procedure';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_COLLAPSED_PREFIX = 'call ';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TOOLTIP = 'Call a procedure with no return value.';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TRANSLATED_NAME = 'call no return';

    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_HELPURL = 'https://docs.makeroid.io/blocks/procedures.html#return';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_CALL = Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL;
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_PROCEDURE = Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE;
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_COLLAPSED_PREFIX = 'call ';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TOOLTIP = 'Call a procedure with a return value.';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TRANSLATED_NAME = 'call return';

    Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TITLE = 'inputs';
    Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TITLE = 'input:';

    Blockly.Msg.LANG_PROCEDURES_HIGHLIGHT_DEF = 'Highlight Procedure';

    Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TOOLTIP = '';
    Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TOOLTIP = '';

// Components Blocks.
    Blockly.Msg.UNDEFINED_BLOCK_TOOLTIP = "This block is not defined. Delete this block!";

    Blockly.Msg.LANG_COMPONENT_BLOCK_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_WHEN = 'when ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_DO = 'do';

    Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_TITLE_CALL = 'call ';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_CALL = 'call ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_FOR_COMPONENT = 'for component';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GETTER_HELPURL = '';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_TITLE_OF_COMPONENT = 'of component';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_SET = 'set ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_TO = ' to';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_SET = 'set ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_TO = ' to';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_OF_COMPONENT = 'of component';

///////////////////
    /* HelpURLs for Component Blocks */

//User Interface Components
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_HELPURL = '/components/user-interface/Button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_PROPERTIES_HELPURL = '/components/user-interface/buttonproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_EVENTS_HELPURL = '/components/user-interface/buttonevents';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_HELPURL = '/components/user-interface/CheckBox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_PROPERTIES_HELPURL = '/components/user-interface/checkboxproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_EVENTS_HELPURL = '/components/user-interface/checkboxevents';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_HELPURL = '/components/sensors/Clock';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_PROPERTIES_HELPURL = '/components/sensors/Clock';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_EVENTS_HELPURL = '/components/sensors/Clock';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_METHODS_HELPURL = '/components/sensors/Clock';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_HELPURL = '/components/user-interface/Image';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PROPERTIES_HELPURL = '/components/user-interface/imageproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EVENTS_HELPURL = '/components/user-interface/imageevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_METHODS_HELPURL = '/components/user-interface/imagemethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_HELPURL = '/components/user-interface/Label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_PROPERTIES_HELPURL = '/components/user-interface/labelproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_EVENTS_HELPURL = '/components/user-interface/labelevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_METHODS_HELPURL = '/components/user-interface/labelmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_HELPURL = '/components/user-interface/ListPicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_PROPERTIES_HELPURL = '/components/user-interface/listpickerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_EVENTS_HELPURL = '/components/user-interface/listpickerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_METHODS_HELPURL = '/components/user-interface/listpickermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_HELPURL = "/components/user-interface/Notifier";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_PROPERTIES_HELPURL = '/components/user-interface/notifierproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_EVENTS_HELPURL = '/components/user-interface/notifierevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_METHODS_HELPURL = '/components/user-interface/notifiermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_HELPURL = '/components/user-interface/PasswordTextBox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_PROPERTIES_HELPURL = '/components/user-interface/pwdboxproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_EVENTS_HELPURL = '/components/user-interface/pwdboxevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_METHODS_HELPURL = '/components/user-interface/pwdboxmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_HELPURL = '/components/user-interface/Screen';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_PROPERTIES_HELPURL = '/components/user-interface/screenproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_EVENTS_HELPURL = '/components/user-interface/screenevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_METHODS_HELPURL = '/components/user-interface/screenmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_HELPURL = '/components/user-interface/Slider';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_PROPERTIES_HELPURL = '/components/user-interface/sliderproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_EVENTS_HELPURL = '/components/user-interface/sliderevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_METHODS_HELPURL = '/components/user-interface/slidermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_HELPURL = '/components/user-interface/TextBox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_PROPERTIES_HELPURL = '/components/user-interface/textboxproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_EVENTS_HELPURL = '/components/user-interface/textboxevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_METHODS_HELPURL = '/components/user-interface/textboxmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_HELPURL = "/components/user-interface/WebViewer";
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_PROPERTIES_HELPURL = '/components/user-interface/webviewerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_EVENTS_HELPURL = '/components/user-interface/webviewerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_METHODS_HELPURL = '/components/user-interface/webviewermethods';

//Layout components
    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZARRANGE_HELPURL = "/components/layout/HorizontalArrangement";
    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZARRANGE_PROPERTIES_HELPURL = '/components/layout/horizarrangeproperties';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTARRANGE_HELPURL = "/components/layout/VerticalArrangement";
    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTARRANGE_PROPERTIES_HELPURL = '/components/layout/vertarrangeproperties';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TABLEARRANGE_HELPURL = "/components/layout/TableArrangement";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TABLEARRANGE_PROPERTIES_HELPURL = '/components/layout/tablearrangeproperties';

//Media components
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_HELPURL = '/components/media/Camcorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_PROPERTIES_HELPURL = '/components/media/camcorderproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_EVENTS_HELPURL = '/components/media/camcorderevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_METHODS_HELPURL = '/components/media/camcordermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_HELPURL = '/components/media/Camera';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_PROPERTIES_HELPURL = '/components/media/cameraproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_EVENTS_HELPURL = '/components/media/cameraevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_METHODS_HELPURL = '/components/media/cameramethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_HELPURL = '/components/media/ImagePicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_PROPERTIES_HELPURL = '/components/media/imagepickerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_EVENTS_HELPURL = '/components/media/imagepickerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_METHODS_HELPURL = '/components/media/imagepickermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_HELPURL = '/components/media/Player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_PROPERTIES_HELPURL = '/components/media/playerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_EVENTS_HELPURL = '/components/media/playerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_METHODS_HELPURL = '/components/media/playermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_HELPURL = '/components/media/Sound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_PROPERTIES_HELPURL = '/components/media/soundproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_EVENTS_HELPURL = '/components/media/soundevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_METHODS_HELPURL = '/components/media/soundmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_HELPURL = "/components/media/SoundRecorder";
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_PROPERTIES_HELPURL = '/components/media/soundrecorderproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_EVENTS_HELPURL = '/components/media/soundrecorderevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_METHODS_HELPURL = '/components/media/soundrecordermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_HELPURL = "/components/media/SpeechRecognizer";
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_PROPERTIES_HELPURL = '/components/media/speechrecognizerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_EVENTS_HELPURL = '/components/media/speechrecognizerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_METHODS_HELPURL = '/components/media/speechrecognizermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_HELPURL = "/components/media/TextToSpeech";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_PROPERTIES_HELPURL = '/components/media/texttospeechproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_EVENTS_HELPURL = '/components/media/texttospeechevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_METHODS_HELPURL = '/components/media/texttospeechmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_HELPURL = '/components/media/VideoPlayer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_PROPERTIES_HELPURL = '/components/media/videoplayerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_EVENTS_HELPURL = '/components/media/videoplayerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_METHODS_HELPURL = '/components/media/videoplayermethods';

// Drawing and Animation components
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_HELPURL = "/components/drawing-and-animation/Ball";
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_PROPERTIES_HELPURL = '/components/drawing-and-animation/ballproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_EVENTS_HELPURL = '/components/drawing-and-animation/ballevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_METHODS_HELPURL = '/components/drawing-and-animation/ballmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_HELPURL = '/components/drawing-and-animation/Canvas';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_PROPERTIES_HELPURL = '/components/drawing-and-animation/canvasproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_EVENTS_HELPURL = '/components/drawing-and-animation/canvasevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_METHODS_HELPURL = '/components/drawing-and-animation/canvasmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_HELPURL = "/components/drawing-and-animation/ImageSprite";
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_PROPERTIES_HELPURL = '/components/drawing-and-animation/imagespriteproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_EVENTS_HELPURL = '/components/drawing-and-animation/imagespriteevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_METHODS_HELPURL = '/components/drawing-and-animation/imagespritemethods';

//Sensor components
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_HELPURL = "/components/sensors/AccelerometerSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_PROPERTIES_HELPURL = '/components/sensors/accelerometersensorproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_EVENTS_HELPURL = '/components/sensors/accelerometersensorevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_METHODS_HELPURL = '/components/sensors/accelerometersensormethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_HELPURL = "/components/sensors/BarcodeScanner";
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_PROPERTIES_HELPURL = '/components/sensors/barcodescannerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_EVENTS_HELPURL = '/components/sensors/barcodescannerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_METHODS_HELPURL = '/components/sensors/barcodescannermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_HELPURL = "/components/sensors/GyroscopeSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_PROPERTIES_HELPURL = '/components/sensors/gyroscopesensorproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_EVENTS_HELPURL = '/components/sensors/gyroscopesensorevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_METHODS_HELPURL = '/components/sensors/gyroscopesensormethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_HELPURL = "/components/sensors/LocationSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_PROPERTIES_HELPURL = '/components/sensors/locationsensorproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_EVENTS_HELPURL = '/components/sensors/locationsensorevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_METHODS_HELPURL = '/components/sensors/locationsensormethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_HELPURL = "/components/sensors/OrientationSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_PROPERTIES_HELPURL = '/components/sensors/orientationsensorproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_EVENTS_HELPURL = '/components/sensors/orientationsensorevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_METHODS_HELPURL = '/components/sensors/orientationsensormethods';

//Social components
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_HELPURL = "/components/social/ContactPicker";
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_PROPERTIES_HELPURL = '/components/social/contactpickerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_EVENTS_HELPURL = '/components/social/contactpickerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_METHODS_HELPURL = '/components/social/contactpickermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_HELPURL = "/components/social/EmailPicker";
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_PROPERTIES_HELPURL = '/components/social/emailpickerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_EVENTS_HELPURL = '/components/social/emailpickerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_METHODS_HELPURL = '/components/social/emailpickermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_HELPURL = "/components/social/PhoneCall";
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_PROPERTIES_HELPURL = '/components/social/phonecallproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_EVENTS_HELPURL = '/components/social/phonecallevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_METHODS_HELPURL = '/components/social/phonecallmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_HELPURL = "/components/social/PhoneNumberPicker";
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_PROPERTIES_HELPURL = '/components/social/phonenumberpickerproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_EVENTS_HELPURL = '/components/social/phonenumberpickerevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_METHODS_HELPURL = '/components/social/phonenumberpickermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_HELPURL = "/components/social/Texting";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_PROPERTIES_HELPURL = '/components/social/textingproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_EVENTS_HELPURL = '/components/social/textingevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_METHODS_HELPURL = '/components/social/textingmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_HELPURL = "/components/social/Twitter";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_PROPERTIES_HELPURL = '/components/social/twitterproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_EVENTS_HELPURL = '/components/social/twitterevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_METHODS_HELPURL = '/components/social/twittermethods';

//Storage Components
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_HELPURL = "/components/storage/FusiontablesControl";
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_PROPERTIES_HELPURL = '/components/storage/fusiontablescontrolproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_EVENTS_HELPURL = '/components/storage/fusiontablescontrolevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_METHODS_HELPURL = '/components/storage/fusiontablescontrolmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_HELPURL = '/components/storage/TinyDB';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_PROPERTIES_HELPURL = '/components/storage/tinydbproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_EVENTS_HELPURL = '/components/storage/tinydbevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_METHODS_HELPURL = '/components/storage/tinydbmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_HELPURL = "/components/storage/TinyWebDB";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_PROPERTIES_HELPURL = '/components/storage/tinywebdbproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_EVENTS_HELPURL = '/components/storage/tinywebdbevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_METHODS_HELPURL = '/components/storage/tinywebdbmethods';

//Connectivity components
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_HELPURL = "/components/connectivity/ActivityStarter";
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_PROPERTIES_HELPURL = '/components/connectivity/activitystarterproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_EVENTS_HELPURL = '/components/connectivity/activitystarterevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_METHODS_HELPURL = '/components/connectivity/activitystartermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_HELPURL = "/components/connectivity/BluetoothClient";
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_PROPERTIES_HELPURL = '/components/connectivity/bluetoothclientproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_EVENTS_HELPURL = '/components/connectivity/bluetoothclientevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_METHODS_HELPURL = '/components/connectivity/bluetoothclientmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_HELPURL = "/components/connectivity/BluetoothServer";
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_PROPERTIES_HELPURL = '/components/connectivity/bluetoothserverproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_EVENTS_HELPURL = '/components/connectivity/bluetoothserverevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_METHODS_HELPURL = '/components/connectivity/bluetoothservermethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_HELPURL = "/components/connectivity/Web";
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_PROPERTIES_HELPURL = '/components/connectivity/webproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_EVENTS_HELPURL = '/components/connectivity/webevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_METHODS_HELPURL = '/components/connectivity/webmethods';

//Lego mindstorms components
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_HELPURL = "/components/lego-mindstorms/NxtDirectCommands";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_PROPERTIES_HELPURL = '/components/lego-mindstorms/nxtdirectproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_METHODS_HELPURL = '/components/lego-mindstorms/nxtdirectmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_HELPURL = "/components/lego-mindstorms/NxtColorSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_PROPERTIES_HELPURL = '/components/lego-mindstorms/nxtcolorproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_EVENTS_HELPURL = '/components/lego-mindstorms/nxtcolorevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_METHODS_HELPURL = '/components/lego-mindstorms/nxtcolormethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_HELPURL = "/components/lego-mindstorms/NxtLightSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_PROPERTIES_HELPURL = '/components/lego-mindstorms/nxtlightproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_EVENTS_HELPURL = '/components/lego-mindstorms/nxtlightevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_METHODS_HELPURL = '/components/lego-mindstorms/nxtlightmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_HELPURL = "/components/lego-mindstorms/NxtSoundSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_PROPERTIES_HELPURL = '/components/lego-mindstorms/nxtsoundproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_EVENTS_HELPURL = '/components/lego-mindstorms/nxtsoundevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_METHODS_HELPURL = '/components/lego-mindstorms/nxtsoundmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_HELPURL = "/components/lego-mindstorms/NxtTouchSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_PROPERTIES_HELPURL = '/components/lego-mindstorms/nxttouchproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_EVENTS_HELPURL = '/components/lego-mindstorms/nxttouchevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_METHODS_HELPURL = '/components/lego-mindstorms/nxttouchmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_HELPURL = "/components/lego-mindstorms/NxtUltrasonicSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_PROPERTIES_HELPURL = '/components/lego-mindstorms/nxtultrasonicproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_EVENTS_HELPURL = '/components/lego-mindstorms/nxtultrasonicevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_METHODS_HELPURL = '/components/lego-mindstorms/nxtultrasonicmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_HELPURL = "/components/lego-mindstorms/NxtDrive";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_PROPERTIES_HELPURL = '/components/lego-mindstorms/nxtdriveproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_METHODS_HELPURL = '/components/lego-mindstorms/nxtdrivemethods';

//Experimental components
    // FirebaseDB
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_HELPURL = "/components/experimentalFirebaseDB";
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_PROPERTIES_HELPURL = "/components/experimentalfirebasedbproperties";
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_EVENTS_HELPURL = "/components/experimentalfirebasedbevents";
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_METHODS_HELPURL = "/components/experimentalfirebasedbmethods";

//Internal components
    Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_HELPURL = "/components/internal.html#GameClient";
    Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_PROPERTIES_HELPURL = '/components/internal.html#gameclientproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_EVENTS_HELPURL = '/components/internal.html#gameclientevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_METHODS_HELPURL = '/components/internal.html#gameclientmethods';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_HELPURL = "/components/internal.html#Voting";
    Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_PROPERTIES_HELPURL = '/components/internal.html#votingproperties';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_EVENTS_HELPURL = '/components/internal.html#votingevents';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_METHODS_HELPURL = '/components/internal.html#votingmethods';

//Misc
    Blockly.Msg.SHOW_WARNINGS = "Mostra Avvisi";
    Blockly.Msg.HIDE_WARNINGS = "Nascondi Avvisi";
    Blockly.Msg.MISSING_SOCKETS_WARNINGS = "Dovresti riempire tutti i campi con dei blocchi";
    Blockly.Msg.WRONG_TYPE_BLOCK_WARINGS = "Questo blocco dovrebbe essere connesso con un blocco eventoo una definizione di una procedura";

// Messages from replmgr.js
    Blockly.Msg.REPL_ERROR_FROM_COMPANION = "Errore dal Compagno";
    Blockly.Msg.REPL_NETWORK_CONNECTION_ERROR = "Errore di Connessione alla Rete";
    Blockly.Msg.REPL_NETWORK_ERROR = "Errore di Rete";
    Blockly.Msg.REPL_NETWORK_ERROR_RESTART = "Errore di rete nella Comunicazione con il Compagno.<br />Prova a riavviare il Compagno e a ricconnettere";
    Blockly.Msg.REPL_OK = "OK";
    Blockly.Msg.REPL_COMPANION_VERSION_CHECK = "Controllo Versione Compagno";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE = 'La tua App Compagno è obsoleta. Clicca "OK" per iniziare l\'aggiornamento. Controlla il tuo ';
    Blockly.Msg.REPL_EMULATORS = "dell'elemulatore";
    Blockly.Msg.REPL_DEVICES = "del dispositivo";
    Blockly.Msg.REPL_APPROVE_UPDATE = " schermo perchè ti verrà chiesto di approvare l'aggiornamento.";
    Blockly.Msg.REPL_NOT_NOW = "Non Ora";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE1 = "Il Compagno che stai usando è obsoleto.<br/><br/>Questa versione di Makeroid dovrebbe essere usata con il Compagno versione";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE_IMMEDIATE = "Stai usando un Compagno obsoleto. Dovresti aggiornare il Compagno Makeroid il prima possibile. Se hai configurato l\' aggiornamento automatico nel negozio, l\'aggiornamento verrà effettuato da lui in poco tempo.";
    Blockly.Msg.REPL_COMPANION_WRONG_PACKAGE = "Il Compagno che stai usando è stato creato per una istanza diversa di Makeroid. Per ottenere il compagno corretto guarda nello schermo Makeroid sotto il menu Aiuto->Informazioni Compagno.";
    Blockly.Msg.REPL_DISMISS = "Ignora";
    Blockly.Msg.REPL_SOFTWARE_UPDATE = "Aggiornamento Software";
    Blockly.Msg.REPL_OK_LOWER = "Ok";
    Blockly.Msg.REPL_GOT_IT = "Fatto";
    Blockly.Msg.REPL_UPDATE_INFO = 'L\'aggiornamento sarà ora installato nel tuo dispositivo. Controlla lo schermo del tuo dispositivo (o emulatore) e approva l\'installazione del software quando richiesta.<br /><br />IMPORTANTE: Quando l\'aggiornamento sarà completato, scegli "FATTO" (non premere "apri"). Poi vai su Makeroid nel tuo browser, clicca il menu "Connetti" e scegli "Reset Connessione".  Poi riconnetti il dispositivo.';

    Blockly.Msg.REPL_UPDATE_NO_UPDATE = "Nessun Aggiornamento Disponibile";
    Blockly.Msg.REPL_UPDATE_NO_CONNECTION = "Devi essere connesso ad un Compagno per aggiornarlo";
    Blockly.Msg.REPL_UNABLE_TO_UPDATE = "Impossibile inviare l\'aggiornamento al dispositivo/emulatore";
    Blockly.Msg.REPL_UNABLE_TO_LOAD = "Impossibile caricare l\'aggiornamento dal server di Makeroid";
    Blockly.Msg.REPL_UNABLE_TO_LOAD_NO_RESPOND = "Impossibile caricare l\'aggiornamento dal server di Makeroid (il server non risponde)";
    Blockly.Msg.REPL_NOW_DOWNLOADING = "Stiamo ora scaricando l\'aggiornamento dai Server di Makeroid, perfavore attendere";
    Blockly.Msg.REPL_RUNTIME_ERROR = "Errore di Runtime";
    Blockly.Msg.REPL_NO_ERROR_FIVE_SECONDS = "<br/><i>Nota:</i>&nbsp;Non vedrai un altro errore riportato per 5 secondi.";
    Blockly.Msg.REPL_CONNECTING_USB_CABLE = "Connessione via Cavo USB";
    Blockly.Msg.REPL_STARTING_EMULATOR = "Sto Avviando l\'emulatore Android <br/>Per favore attendere: Questo potrebbe durare un minuto o due.";
    Blockly.Msg.REPL_CONNECTING = "Connessione...";
    Blockly.Msg.REPL_CANCEL = "Annulla";
    Blockly.Msg.REPL_GIVE_UP = "Give Up";
    Blockly.Msg.REPL_KEEP_TRYING = "Keep Trying";
    Blockly.Msg.REPL_CONNECTION_FAILURE1 = "Connection Failure";
    Blockly.Msg.REPL_NO_START_EMULATOR = "We could not start the Makeroid Companion within the Emulator";
    Blockly.Msg.REPL_PLUGGED_IN_Q = "Plugged In?";
    Blockly.Msg.REPL_AI_NO_SEE_DEVICE = "Makeroid does not see your device, make sure the cable is plugged in and drivers are correct.";
    Blockly.Msg.REPL_HELPER_Q = "Helper?";
    Blockly.Msg.REPL_HELPER_NOT_RUNNING = 'The Makeroid Starter helper does not appear to be running<br /><a href="https://starter.makeroid.io" target="_blank">Need Help?</a>';
    Blockly.Msg.REPL_USB_CONNECTED_WAIT = "USB Connected, waiting ";
    Blockly.Msg.REPL_SECONDS_ENSURE_RUNNING = " seconds to ensure all is running.";
    Blockly.Msg.REPL_EMULATOR_STARTED = "Emulator started, waiting ";
    Blockly.Msg.REPL_STARTING_COMPANION_ON_PHONE = "Starting the Companion App on the connected phone.";
    Blockly.Msg.REPL_STARTING_COMPANION_IN_EMULATOR = "Starting the Companion App in the emulator.";
    Blockly.Msg.REPL_COMPANION_STARTED_WAITING = "Companion starting, waiting ";
    Blockly.Msg.REPL_VERIFYING_COMPANION = "Verifying that the Companion Started....";
    Blockly.Msg.REPL_CONNECT_TO_COMPANION = "Connect to Companion";
    Blockly.Msg.REPL_TRY_AGAIN1 = "Failed to Connect to the Makeroid Companion, try again.";
    Blockly.Msg.REPL_YOUR_CODE_IS = "Your code is";
    Blockly.Msg.REPL_DO_YOU_REALLY_Q = "Do You Really?";
    Blockly.Msg.REPL_FACTORY_RESET = 'This will attempt to reset your Emulator to its "factory" state. If you had previously updated the Companion installed in the Emulator, you will likely have to do this again.';

// Messages from Blockly.js
    Blockly.Msg.WARNING_DELETE_X_BLOCKS = "Are you sure you want to delete all %1 of these blocks?";

// Blocklyeditor.js
    Blockly.Msg.GENERATE_YAIL = "Genera Yail";
    Blockly.Msg.DO_IT = "Eseguilo";
    Blockly.Msg.CLEAR_DO_IT_ERROR = "Cancella Errori";
    Blockly.Msg.CAN_NOT_DO_IT = "Impossibile Eseguirlo";
    Blockly.Msg.CONNECT_TO_DO_IT = 'Devi essere connesso al compagno (app) o all\'emulatore per usare "Eseguilo"';

// Clock Component Menu Items
    Blockly.Msg.TIME_YEARS = "Anni";
    Blockly.Msg.TIME_MONTHS = "Mesi";
    Blockly.Msg.TIME_WEEKS = "Settimane";
    Blockly.Msg.TIME_DAYS = "Giorni";
    Blockly.Msg.TIME_HOURS = "Ore";
    Blockly.Msg.TIME_MINUTES = "Minuti";
    Blockly.Msg.TIME_SECONDS = "Secondi";
    Blockly.Msg.TIME_DURATION = "Durata";
  }
};

// Initalize language definition to Italian
Blockly.Msg.it.switch_blockly_language_to_it.init();
Blockly.Msg.it.switch_language_to_italian.init();
