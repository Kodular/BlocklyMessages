// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2018 Makeroid. All rights reserved.

/**
 * Visual Blocks Language
 *
 * Copyright © 2018 Makeroid. All rights reserved.
 */

/**
 * @fileoverview Italian strings.
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
    Blockly.Msg.REMOVE_FROM_BACKPACK = 'Rimuovi dallo zaino';
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
    Blockly.Msg.ENABLE_SNAPPING = 'Attiva allineamento alla Griglia';
    Blockly.Msg.DISABLE_SNAPPING = 'Disattiva allineamento alla Griglia';
    Blockly.Msg.DISABLE_ALL_BLOCKS = 'Disattiva tutti i blocchi';
    Blockly.Msg.ENABLE_ALL_BLOCKS = 'Attiva tutti i blocchi';

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
    Blockly.ERROR_BREAK_ONLY_IN_LOOP = "Il blocco rompi dovrebbe essere utilizzato solamente dentro i cicli";

// Colour Blocks.
    Blockly.Msg.LANG_COLOUR_PICKER_HELPURL = 'https://docs.makeroid.io/blocks/colors#basic';
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
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_HELPURL = 'https://docs.makeroid.io/blocks/colors#split';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_TOOLTIP = "Una lista di quattro elementi, ognuna nel campo da 0 a 255, rappresentanti i componenti rosso, verde, blu e alfa.";
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR = 'crea colore';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_HELPURL = 'https://docs.makeroid.io/blocks/colors#make';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP = "Un colore con le componenti rosso, verde, blu e opzionalmente alfa date"; //da rivedere

// Control Blocks
    Blockly.Msg.LANG_CATEGORY_CONTROLS = 'Controllo';
    Blockly.Msg.LANG_CONTROLS_IF_HELPURL = 'https://docs.makeroid.io/blocks/control#if';
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

    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_HELPURL = 'https://docs.makeroid.io/blocks/control#while';
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

    Blockly.Msg.LANG_CONTROLS_FORRANGE_HELPURL = 'https://docs.makeroid.io/blocks/control#forrange';
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

    Blockly.Msg.LANG_CONTROLS_FOREACH_HELPURL = 'https://docs.makeroid.io/blocks/control#foreach';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_ITEM = 'per ogni';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_VAR = 'elemento';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_INLIST = 'nella lista';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_DO = 'esegui';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_TEXT = 'per elemento nella lista';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_PREFIX = 'per ';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_SUFFIX = ' nella lista';
    Blockly.Msg.LANG_CONTROLS_FOREACH_TOOLTIP = 'Esegui i blocchi nella sezione \'esegui\' per ogni elemento della '
        + 'lista.  Usa il nome della variabile data come riferimento del valore attuale..';

    Blockly.Msg.LANG_CONTROLS_GET_HELPURL = 'https://docs.makeroid.io/blocks/control#get';


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

    Blockly.Msg.LANG_CONTROLS_WHILE_HELPURL = 'https://docs.makeroid.io/blocks/control#while';;
    Blockly.Msg.LANG_CONTROLS_WHILE_TITLE = 'mentre';
    Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_TEST = 'condizione';
    Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_DO = 'esegui';
    Blockly.Msg.LANG_CONTROLS_WHILE_COLLAPSED_TEXT = 'mentre';
    Blockly.Msg.LANG_CONTROLS_WHILE_TOOLTIP = 'Esegui i blocchi nella sezione \'esegui\' mentre la condizione è '
        + 'vera.';

    Blockly.Msg.LANG_CONTROLS_CHOOSE_HELPURL = 'https://docs.makeroid.io/blocks/control#choose';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_TITLE = 'se'
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_TEST = '';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_THEN_RETURN = 'allora';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_ELSE_RETURN = 'altrimenti';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_COLLAPSED_TEXT = 'se';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_TOOLTIP = 'Se la condizione da testare è vera,'
        + 'restituisce il risultato della valutazione dell\' espressione allegata allo slot \'allora-restituisci\'?'
        + 'altrimenti restituisce il risultato della valutazione dell\' espressione allegata allo slot \'allora-restituisci\'?'
        + 'al massimo sarà valutata una delle espressioni dello slot di ritorno.';

    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_HELPURL = 'https://docs.makeroid.io/blocks/control#doreturn';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_DO = 'esegui';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_RETURN = 'risultato';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TOOLTIP = 'Esegui dei blocchi nella sezione \'esegui\' e restituisce un comando. Utile se hai bisogno di eseguire una procedura prima di restituire un valore ad una variabile.';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_COLLAPSED_TEXT = 'esegui/risultato';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TITLE = 'esegui risultato';

    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TITLE = 'valuta ma ignora risultato'
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_HELPURL = 'https://docs.makeroid.io/blocks/control#evaluate';
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_COLLAPSED_TEXT = 'valuta ma ignora'
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TOOLTIP = 'Esegui il blocco di codice collegato ed ignora i valori restituiti (se esistono). Utile se hai bisogno di chiamare una producedura a procedure con un valore di ritorno ma non ne hai bisogno.';

    /* [lyn, 10/14/13] Removed for now. May come back some day.
     Blockly.Msg.LANG_CONTROLS_NOTHING_TITLE = 'niente';
     Blockly.Msg.LANG_CONTROLS_NOTHING_HELPURL = 'https://docs.makeroid.io/blocks/control#nothing';
     Blockly.Msg.LANG_CONTROLS_NOTHING_TOOLTIP = 'Ritorna nulla. Usato per inizializzare variabili o può essere inserito in una presa di ritorno se non è necessario ritornare nessun valore. Questo è equivalente a null o None.';
     */

    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_HELPURL = 'https://docs.makeroid.io/blocks/control#openscreen';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TITLE = 'apri altro schermo';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_INPUT_SCREENNAME = 'nomeSchermo';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_COLLAPSED_TEXT = 'apri schermo';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TOOLTIP = 'Apri un nuovo schermo in un\'app multi schermo.';

    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_HELPURL = 'https://docs.makeroid.io/blocks/control#openscreenwithvalue';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TITLE = 'apri un altro schermo con valore di inizio';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_SCREENNAME = 'nomeSchermo';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_STARTVALUE = 'valorediAvvio';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_COLLAPSED_TEXT = 'Apri schermo con valore'
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TOOLTIP = 'Apri un nuovo schermo in un\'app multi scherm e passa il '
        + 'valore di inizio a quello schermo.';

    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_HELPURL = 'https://docs.makeroid.io/blocks/control#getstartvalue';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TITLE = 'ottieni valore di inizio';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_SCREENNAME = 'nomeSchermo';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_STARTVALUE = 'valorediAvvio';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_COLLAPSED_TEXT = 'ottieni valore di avvio';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TOOLTIP = 'Ritorna il valore che era stato passato a questo schermo quando '
        + 'è stato aperto, tipicamente da un altro schermo in una app multi schermo. Se non era stato passato nessun valore, '
        + 'ritorna un testo vuoto.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_HELPURL = 'https://docs.makeroid.io/blocks/control#closescreen';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TITLE = 'chiudi schermo';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_COLLAPSED_TEXT = 'chiudi schermo';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TOOLTIP = 'Chiudi lo schermo corrente';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_HELPURL = 'https://docs.makeroid.io/blocks/control#closescreenwithvalue';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TITLE = 'chiudi schermo con valore';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_INPUT_RESULT = 'risultato';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_COLLAPSED_TEXT = 'chiudi schermo con valore';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TOOLTIP = 'Chiudi lo schermo corrente e restituisci un risultato allo '
        + 'schermo che aperto questo.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_HELPURL = 'https://docs.makeroid.io/blocks/control#closeapp';;
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TITLE = 'chiudi applicazione';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_COLLAPSED_TEXT = 'chiudi applicazione';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TOOLTIP = 'Chiudi tutti gli schermi dell\'app e interrompila.';

    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_HELPURL = 'https://docs.makeroid.io/blocks/control#getplainstarttext';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TITLE = 'ottieni testo di inizio';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_COLLAPSED_TEXT = 'ottieni testo di inizio';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TOOLTIP = 'Restituisce il testo che era stato passatoto a questo schermo quando '
        + 'era stato avviato da un\'altra app. Se nessun valore è stato passato, ritorna testo vuoto. Per '
        + 'app multi schermo, usa ottieni valore di inizio invece che ottenere il testo di avvio.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_HELPURL = 'https://docs.makeroid.io/blocks/control#closescreenwithplaintext';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TITLE = 'chiudi schermo con testo';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_INPUT_TEXT = 'testo';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_COLLAPSED_TEXT = 'chiudi schermo con testo';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TOOLTIP = 'Chiudi lo schermo corrente e ritorna il testo all\'app che '
        + 'ha aperto questa.   Questo blocco è per ritornare testo ad attività che non sono di Makeroid, non degli schermi di Makeroid. '
        + 'Per gli schermi di Makeroid, come in una app multischermo, usa Chiudi Schermo con Valore, non Chiudi Schermo con Testo.';
    Blockly.Msg.LANG_CONTROLS_BREAK_HELPURL = "https://docs.makeroid.io/blocks/control#break";
    Blockly.Msg.LANG_CONTROLS_BREAK_TITLE = "rompi";
    Blockly.Msg.LANG_CONTROLS_BREAK_INPUT_TEXT = "valore";
    Blockly.Msg.LANG_CONTROLS_BREAK_COLLAPSED_TEXT = "rompi";
// Logic Blocks.
    Blockly.Msg.LANG_CATEGORY_LOGIC = 'Logica';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL = 'http://en.wikipedia.org/wiki/Inequality_(mathematics)';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_EQ = 'https://docs.makeroid.io/blocks/logic#=';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_NEQ = 'https://docs.makeroid.io/blocks/logic#not=';
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

    Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_AND = 'https://docs.makeroid.io/blocks/logic#and';
    Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_OR = 'https://docs.makeroid.io/blocks/logic#or';
    Blockly.Msg.LANG_LOGIC_OPERATION_AND = 'e';
    Blockly.Msg.LANG_LOGIC_OPERATION_OR = 'o';
    Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_AND = 'Ritorna vero se i due elementi sono veri.';
    Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_OR = 'Ritorna vero se almeno uno dei due elementi è vero.';

    Blockly.Msg.LANG_LOGIC_NEGATE_HELPURL = 'https://docs.makeroid.io/blocks/logic#not';
    Blockly.Msg.LANG_LOGIC_NEGATE_INPUT_NOT = 'non';
    Blockly.Msg.LANG_LOGIC_NEGATE_TOOLTIP = 'Ritorna vero se l\'elemento è falso.\n' +
        'Ritorna falso se l\'elemento è vero.';

    Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE_HELPURL = 'https://docs.makeroid.io/blocks/logic#true';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE_HELPURL = 'https://docs.makeroid.io/blocks/logic#false';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE = 'vero';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE = 'falso';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_TRUE = 'Ritorna il booleano vero.';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_FALSE = 'Ritorna il booleano falso.';

// Math Blocks.
    Blockly.Msg.LANG_CATEGORY_MATH = 'Matematica';
    Blockly.Msg.LANG_MATH_NUMBER_HELPURL = 'https://docs.makeroid.io/blocks/math#number';
    Blockly.Msg.LANG_MATH_NUMBER_TOOLTIP = 'Riporta il numero mostrato.';
    Blockly.Msg.LANG_MATH_MUTATOR_ITEM_INPUT_NUMBER = 'numero';

    Blockly.Msg.LANG_MATH_COMPARE_HELPURL = '';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_EQ = 'https://docs.makeroid.io/blocks/math#=';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_NEQ = 'https://docs.makeroid.io/blocks/math#not=';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LT = 'https://docs.makeroid.io/blocks/math#lt';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LTE = 'https://docs.makeroid.io/blocks/math#lte';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GT = 'https://docs.makeroid.io/blocks/math#gt';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GTE = 'https://docs.makeroid.io/blocks/math#gte';
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

    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_ADD = 'https://docs.makeroid.io/blocks/math#add';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MINUS = 'https://docs.makeroid.io/blocks/math#subtract';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MULTIPLY = 'https://docs.makeroid.io/blocks/math#multiply';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_DIVIDE = 'https://docs.makeroid.io/blocks/math#divide';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_POWER = 'https://docs.makeroid.io/blocks/math#exponent';
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
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ROOT = 'https://docs.makeroid.io/blocks/math#sqrt';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ABS = 'Ritorna il valore assoluto di un numero.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ABS = 'https://docs.makeroid.io/blocks/math#abs';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_NEG = 'Ritorna la negazione di un numero.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_NEG = 'https://docs.makeroid.io/blocks/math#neg';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_LN = 'Ritorna il logaritmo naturale di un numero, per esempio il logaritmo alla base e (2.71828...)';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_LN ='https://docs.makeroid.io/blocks/math#log';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_EXP = 'Ritorna e (2.71828...) alla potenza di un numero.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_EXP ='https://docs.makeroid.io/blocks/math#e';
    /*Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_POW10 = 'Ritorna 10 alla potenza di un numero.';*/

    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_ROUND = 'Arrotonda un numero per eccesso o per difetto.';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_ROUND = 'https://docs.makeroid.io/blocks/math#round';
    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_CEILING = 'Arrotonda l\'input al più piccolo\n' +
        'numero non minore dell\' input';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_CEILING =  'https://docs.makeroid.io/blocks/math#ceiling';
    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_FLOOR = 'Arrotonda l\'input al più grande\n' +
        'numero non maggiore dell\' input';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_FLOOR =  'https://docs.makeroid.io/blocks/math#floor';
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
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_SIN = 'https://docs.makeroid.io/blocks/math#sin';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_COS = 'Fornisce il coseno dell\' angolo dato in gradi.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_COS = 'https://docs.makeroid.io/blocks/math#cos';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_TAN = 'Fornisce la tangente dell\' angolo dato in gradi.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_TAN = 'https://docs.makeroid.io/blocks/math#tan';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ASIN = 'Fornisce l\'angolo nel raggio (-90,+90]\n' +
        'gradi con il valore seno dato.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ASIN = 'https://docs.makeroid.io/blocks/math#asin';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ACOS = 'Fornisce l\'angolo nel raggio [0, 180)\n' +
        'gradi con il valore coseno dato.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ACOS = 'https://docs.makeroid.io/blocks/math#acos';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN = 'Fornisce l\'angolo nel raggio (-90,+90]\n' +
        'gradi con il valore tangente dato.';
    ATAN : Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN = 'https://docs.makeroid.io/blocks/math#atan';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN2 = 'Fornisce l\'angolo nel raggio (-180, +180]\n' +
        'gradi con le coordinate rettangolari date.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN2 = 'https://docs.makeroid.io/blocks/math#atan2';

    Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MIN = 'min';
    Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MAX = 'max';
    Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MIN = 'Ritorna il più piccolo dei suoi argomenti..';
    Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MAX = 'Ritorna il più grande dei suo argomenti..';

    Blockly.Msg.LANG_MATH_DIVIDE = '\u00F7';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_MODULO = 'modulo di';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_REMAINDER = 'resto di';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_QUOTIENT = 'quoziente di';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_MODULO = 'Ritorna il modulo.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_MODULO = 'https://docs.makeroid.io/blocks/math#modulo';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_REMAINDER = 'Ritorna il resto.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_REMAINDER = 'https://docs.makeroid.io/blocks/math#remainder';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_QUOTIENT = 'Ritorna il quoziente.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_QUOTIENT = 'https://docs.makeroid.io/blocks/math#quotient';

    Blockly.Msg.LANG_MATH_RANDOM_INT_HELPURL = 'https://docs.makeroid.io/blocks/math#randomint';
    Blockly.Msg.LANG_MATH_RANDOM_INT_TITLE_RANDOM = 'intero casuale';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_FROM = 'da';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_TO = 'a';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT = 'intero casuale da %1 a %2';
    Blockly.Msg.LANG_MATH_RANDOM_INT_TOOLTIP = 'Ritorna un numero intero casuale tra il limite più grande\n' +
        'e quello più basso. I limiti saranno limitati per essere più piccoli \n' +
        'di 2**30.';

    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_HELPURL = 'https://docs.makeroid.io/blocks/math#randomfrac';
    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM = 'frazione casuale';
    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TOOLTIP = 'Ritorna un numero casuale tra 0 e 1.';

    Blockly.Msg.LANG_MATH_RANDOM_SEED_HELPURL = 'https://docs.makeroid.io/blocks/math#randomseed';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_TITLE_RANDOM = 'seme sequenza casuale';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_INPUT_TO = 'a';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_TOOLTIP = 'specifica un seme numerico\n' +
        'per il generatore di numeri casuali';

    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TITLE_CONVERT = 'converti';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_RAD_TO_DEG = 'radianti a gradi';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_DEG_TO_RAD = 'gradi a radianti';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_RAD_TO_DEG = 'Ritorna il valore in gradi nel raggio\n' +
        '[0, 360) corrispondente al suo argomento in radianti.';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_RAD_TO_DEG = 'https://docs.makeroid.io/blocks/math#convertrad';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_DEG_TO_RAD = 'Ritorna il valore in radianti nel raggio\n' +
        '[-\u03C0, +\u03C0) corrispondente al suo argomento in gradi.';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_DEG_TO_RAD = 'https://docs.makeroid.io/blocks/math#convertdeg';

    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_HELPURL = 'https://docs.makeroid.io/blocks/math#format';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TITLE = 'formatta come decimale';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_NUM = 'numero';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_PLACES = 'posizioni';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT = 'formatta come numero decimale %1 posizioni %2';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TOOLTIP = 'Ritorna il numero formattato come decimale\n' +
        'con uno specifico numero di posizioni.';

    Blockly.Msg.LANG_MATH_IS_A_NUMBER_HELPURL = 'https://docs.makeroid.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_NUMBER_INPUT_NUM = 'è numero?';
    Blockly.Msg.LANG_MATH_IS_A_NUMBER_TOOLTIP = 'Controlla se qualcosa è un numero.';

    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_HELPURL = 'https://docs.makeroid.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_INPUT_NUM = 'è Base 10?';
    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_TOOLTIP = 'Controlla se qualcosa è una stringa che rappresenta un intero positivo in base 10.';

    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_HELPURL = 'https://docs.makeroid.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_INPUT_NUM = 'è esadecimale?';
    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_TOOLTIP = 'Controlla se qualcosa è una stringa che rappresenta un numero esadecimale.';

    Blockly.Msg.LANG_MATH_IS_A_BINARY_HELPURL = 'https://docs.makeroid.io/blocks/math#isnumber';
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
    Blockly.Msg.LANG_TEXT_TEXT_HELPURL = 'https://docs.makeroid.io/blocks/text#string';
    Blockly.Msg.LANG_TEXT_TEXT_TOOLTIP = 'Una stringa di testo.';
    Blockly.Msg.LANG_TEXT_TEXT_LEFT_QUOTE = '\u201C';
    Blockly.Msg.LANG_TEXT_TEXT_RIGHT_QUOTE = '\u201D';

    Blockly.Msg.LANG_TEXT_JOIN_HELPURL = 'https://docs.makeroid.io/blocks/text#join';
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

    Blockly.Msg.LANG_TEXT_LENGTH_HELPURL = 'https://docs.makeroid.io/blocks/text#length';
    Blockly.Msg.LANG_TEXT_LENGTH_INPUT_LENGTH = 'lunghezza';
    Blockly.Msg.LANG_TEXT_LENGTH_TOOLTIP = 'Ritorna il numero di lettere (inclusi gli spazi)\n' +
        'nel testo dato.';

    Blockly.Msg.LANG_TEXT_ISEMPTY_HELPURL = 'https://docs.makeroid.io/blocks/text#isempty';
    Blockly.Msg.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY = 'è vuoto';
    Blockly.Msg.LANG_TEXT_ISEMPTY_TOOLTIP = 'Ritorna vero se la lunghezza del\n' + 'testo è 0, falso altrimenti.';

    Blockly.Msg.LANG_TEXT_COMPARE_LT = ' <';
    Blockly.Msg.LANG_TEXT_COMPARE_EQUAL = ' =';
    Blockly.Msg.LANG_TEXT_COMPARE_GT = ' >';
    Blockly.Msg.LANG_TEXT_COMPARE_HELPURL = 'https://docs.makeroid.io/blocks/text#compare';
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
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_HELPURL = 'https://docs.makeroid.io/blocks/text#obfuscatetext';

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
    Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_UPPERCASE = 'https://docs.makeroid.io/blocks/text#upcase';
    Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_DOWNCASE = 'Restituisce una copia dell\' argomento stringa di testo convertito in minuscolo.';
    Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_DOWNCASE = 'https://docs.makeroid.io/blocks/text#downcase';

    Blockly.Msg.LANG_TEXT_TRIM_HELPURL = 'https://docs.makeroid.io/blocks/text#trim';
    Blockly.Msg.LANG_TEXT_TRIM_TITLE_TRIM = 'rimuovi spazi'; //da ricontrollare
    Blockly.Msg.LANG_TEXT_TRIM_TOOLTIP = 'Restituisce una copia dei suoi argomenti stringa di testo con qualsiasi\n'
        + 'spazio principale o finale rimosso.';

    Blockly.Msg.LANG_TEXT_STARTS_AT_HELPURL = 'https://docs.makeroid.io/blocks/text#startsat';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_STARTS_AT = 'inizia a';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_TEXT = 'testo';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_PIECE = 'piece';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT = 'inizia al  testo %1 porzione %2';
    Blockly.Msg.LANG_TEXT_STARTS_AT_TOOLTIP = 'Ritorna l\'indice di inizio della porzione nel testo.\n'
        + 'dove l\' indice 1 denota l\' inizio del testo. Ritorna 0 se la\n'
        + 'porzione non é nel testo.';

    Blockly.Msg.LANG_TEXT_CONTAINS_HELPURL = 'https://docs.makeroid.io/blocks/text#contains';
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
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST = 'https://docs.makeroid.io/blocks/text#splitat';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST_OF_ANY = 'Dividi il test dato in una lista di due elementi, usando la prima posizione di ogni elemento \n'
        + 'nella lista \'a\' come punto di divisione. \n\n'
        + 'Dividendo "Amo le mele banane mele uva" per la lista "(ba,me)" ritorna \n'
        + 'una lista di due elementi, con il primo che è "Amo le " mentre il secondo è \n'
        + '"le banane mele uva."';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST_OF_ANY = 'https://docs.makeroid.io/blocks/text#splitatfirstofany';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT = 'Divide il testo in porzioni usando il testo \'a\' come punti di divisione e produce una lista di risultati.  \n'
        + 'Dividendo "uno,due,tre,quattro" per "," (virgola) restituisce la lista "(uno due tre quattro)". \n'
        + 'Dividendo "una-patata,due-patata,tre-patata,quattro" per "-patata", ritorna la lista "(uno due tre quattro)".';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT = 'https://docs.makeroid.io/blocks/text#split';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_ANY = 'Divide il testo dato in una lista, usando tutti gli elementi nella lista \'a\' come \n'
        + 'punto di divisione, e restituisce una lista di risultati. \n'
        + 'Dividendo "melabacca,banana,zucca,cibo per cani" per \'a\' come lista di due elementi la quale \n'
        + 'primo elemento è una virgola, mentre il secondo è "cca" ritorna una lista di quattro elementi: \n'
        + '"(melabac banana zu cibo per cani)".';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_ANY = 'https://docs.makeroid.io/blocks/text#splitatany';

    /*.LANG_TEXT_PRINT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
     Blockly.Msg.LANG_TEXT_PRINT_TITLE_PRINT = 'stampa';
     Blockly.Msg.LANG_TEXT_PRINT_TOOLTIP = 'Stampa il testo specifico, numero o un altro valore.';*/

    /*Blockly.Msg.LANG_TEXT_PROMPT_HELPURL = 'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode92.html';
     Blockly.Msg.LANG_TEXT_PROMPT_TITLE_PROMPT_FOR = 'forza';
     Blockly.Msg.LANG_TEXT_PROMPT_TITILE_WITH_MESSAGE = 'con messaggio';
     Blockly.Msg.LANG_TEXT_PROMPT_TOOLTIP = 'Forza l'inserimento di un testo specifico da parte dell\'utente.';
     Blockly.Msg.LANG_TEXT_PROMPT_TYPE_TEXT = 'testo';
     Blockly.Msg.LANG_TEXT_PROMPT_TYPE_NUMBER = 'numero';*/

    Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_HELPURL = 'https://docs.makeroid.io/blocks/text#splitspaces';
    Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_TITLE = 'dividi agli spazi';
    Blockly.Msg.LANG_TEXT_SPLIT_AT_TOOLTIP = 'Dividi il testo in porzioni separate da spazi.';

    Blockly.Msg.LANG_TEXT_SEGMENT_HELPURL = 'https://docs.makeroid.io/blocks/text#segment';
    Blockly.Msg.LANG_TEXT_SEGMENT_TITLE_SEGMENT = 'segmento';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_START = 'inizio';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_LENGTH = 'lunghezza';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_TEXT = 'testo';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT = 'segmento  testo %1 inizio %2 lunghezza %3';
    Blockly.Msg.LANG_TEXT_SEGMENT_AT_TOOLTIP = 'Estrai il segmento della lunghezza data dal testo dato\n'
        + 'iniziando dal testo dato nella posizione data. Posizione\n'
        + '1 indica l\'inizio del testo.';

    Blockly.Msg.LANG_TEXT_REPLACE_ALL_HELPURL = 'https://docs.makeroid.io/blocks/text#replaceall';
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

    Blockly.Msg.LANG_LISTS_CREATE_WITH_EMPTY_HELPURL = 'https://docs.makeroid.io/blocks/lists#makealist';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_TITLE_MAKE_LIST = 'crea una lista';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_TOOLTIP = 'Crea una lista con qualsiasi numero di elementi.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = 'lista';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TOOLTIP = 'Aggiungi, rimuovi, o riordina sezioni per riconfigurare questo blocco lista.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TITLE = 'elemento';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP = 'Aggiungi un elemento alla lista.';

    Blockly.Msg.LANG_LISTS_ADD_ITEM_TITLE = 'elemento';
    Blockly.Msg.LANG_LISTS_ADD_ITEM_TOOLTIP = 'Aggiunge un elemento alla lista.';
    Blockly.Msg.LANG_LISTS_ADD_ITEM_HELPURL = 'https://docs.makeroid.io/blocks/lists#additems';

    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_HELPURL = 'https://docs.makeroid.io/blocks/lists#selectlistitem';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_SELECT = 'seleziona elemento lista';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_INDEX = 'indice';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT = 'seleziona lista elemento  lista %1 indice %2';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TOOLTIP = 'Restituisce l\'elemento in posizione indice nella lista.';

    Blockly.Msg.LANG_LISTS_IS_IN_HELPURL = 'https://docs.makeroid.io/blocks/lists#inlist';
    Blockly.Msg.LANG_LISTS_IS_IN_TITLE_IS_IN = 'è nella lista?';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT_THING = 'elemento';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT = 'è nella lista? elemento %1 lista %2'
    Blockly.Msg.LANG_LISTS_IS_IN_TOOLTIP = 'Restituisce vero se l\'elemento è uno della lista, '
        + 'falso altrimenti.';

    Blockly.Msg.LANG_LISTS_POSITION_IN_HELPURL = 'https://docs.makeroid.io/blocks/lists#indexinlist';
    Blockly.Msg.LANG_LISTS_POSITION_IN_TITLE_POSITION = 'indice nella lista';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_THING = 'elemento';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT = 'indice nella lista  elemento %1 lista %2';
    Blockly.Msg.LANG_LISTS_POSITION_IN_TOOLTIP = 'Trova la posizione dell\'elemento nella lista. Se non è nella '
        + 'lista, restituisce 0.';

    Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_HELPURL = 'https://docs.makeroid.io/blocks/lists#pickrandomitem';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_TITLE_PICK_RANDOM = 'scegli un elemento casuale';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_TOOLTIP = 'Sceglie un elemento a caso dalla lista.';

    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_HELPURL = 'https://docs.makeroid.io/blocks/lists#replace';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TITLE_REPLACE = 'sostituisci elemento lista';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_INDEX = 'indice';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_REPLACEMENT = 'sostituto';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT = 'sostituisci elemento lista  lista %1 indice %2 rimpiazzo %3';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TOOLTIP = 'Sostituisce l\'n esimo elemento nella lista.';

    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_HELPURL = 'https://docs.makeroid.io/blocks/lists#removeitem';
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

    Blockly.Msg.LANG_LISTS_LENGTH_HELPURL = 'https://docs.makeroid.io/blocks/lists#lengthoflist';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LENGTH = 'lunghezza della lista';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT = 'lunghezza della lista %1';
    Blockly.Msg.LANG_LISTS_LENGTH_TOOLTIP = 'Conta il numero di elementi nella lista.';

    Blockly.Msg.LANG_LISTS_APPEND_LIST_HELPURL = 'https://docs.makeroid.io/blocks/lists#append';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_TITLE_APPEND = 'aggiungi alla lista';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST1 = 'lista 1';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST2 = 'lista 2';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT = 'aggiungi alla lista  lista 1 %1 lista 2 %2';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_TOOLTIP = 'Aggiungi tutti gli elementi nella lista 2 alla fine della lista 1. Dopo '
        + 'l\'aggiunta, la lista 1 includerà questi elementi aggiuntivi, ma la lista 2 non sarà cambiata.';

    Blockly.Msg.LANG_LISTS_ADD_ITEMS_HELPURL = 'https://docs.makeroid.io/blocks/lists#additems';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_TITLE_ADD = 'aggiungi elementi alla lista';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_LIST = ' lista';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_ITEM = 'elemento';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT = 'aggiungi elementi alla lista lista %1 elemento %2';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_TOOLTIP = 'Aggiungi elementi alla fine della lista.';

    Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TITLE_ADD = 'lista';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TOOLTIP = 'Aggiungi, rimuovi, o riordina le sezioni per riconfigurare questo blocco lista.';

    Blockly.Msg.LANG_LISTS_COPY_HELPURL = 'https://docs.makeroid.io/blocks/lists#copy';
    Blockly.Msg.LANG_LISTS_COPY_TITLE_COPY = 'copia lista';
    Blockly.Msg.LANG_LISTS_COPY_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_COPY_TOOLTIP = 'Crea una copia di una lista, includendo la copia di tutte le sottoliste';

    Blockly.Msg.LANG_LISTS_IS_LIST_HELPURL = 'https://docs.makeroid.io/blocks/lists#isalist';
    Blockly.Msg.LANG_LISTS_IS_LIST_TITLE_IS_LIST = 'è una lista?';
    Blockly.Msg.LANG_LISTS_IS_LIST_INPUT_THING = 'elemento';
    Blockly.Msg.LANG_LISTS_IS_LIST_TOOLTIP = 'Verifica se qualcosa è una lista.';

    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_HELPURL = 'https://docs.makeroid.io/blocks/lists#listtocsvrow';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TITLE_TO_CSV = 'lista a riga csv';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TOOLTIP = 'Interpreta la lista come una riga di una tabella e restituisce un testo CSV '
        + '\("comma-separated value" \(valore separati da virgola\)\) rappresentante la riga. Ogni elemento nella riga della lista è '
        + 'considerato essere un campo, ed è citato con doppie virgolette nel testo CSV risultante. '
        + 'Gli elementi sono separati da virgole. Il testo riga ritornato non deve avere un separatore di linea alla '
        + 'fine.';

    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_HELPURL = 'https://docs.makeroid.io/blocks/lists#listfromcsvrow';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TITLE_FROM_CSV = 'lista da riga csv';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_INPUT_TEXT = 'testo';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TOOLTIP = 'Analizza un testo come una riga CSV \("comma-separated value" \(valore separati da virgola\)\) formattato '
        + 'per produrre una lista di campi. Questo è un errore per la riga di testo per contenere nuove linee non evase '
        + 'dentro i campi \(effettivamente, linee multiple\). Questo è okay per la riga di testo per '
        + 'finire in una nuovalinea singola o CRLF.';

    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_HELPURL = 'https://docs.makeroid.io/blocks/lists#listtocsvtable';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TITLE_TO_CSV = 'lista a tabella';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TOOLTIP = 'Interpreta la lista come una tabellain una importante formato di riga e '
        + 'ritorna un testo CSV \("comma-separated value" \(valore separati da virgola\)\) rappresenta la tabella. Ogni elemento nella '
        + 'lista dovrebbe se stesso una lista rappresentante una riga di una tabella CSV. Ogni elemento nella lista della riga '
        + 'è considerato essere un campo, ed è citato con doppie virgolette nel testo CSV risultante '
        + '. Nel testo risultante, gli elementi nelle righe sono separate da virgole e le righe sono '
        + 'separate da CRLF \(\\r\\n\).';

    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_HELPURL = 'https://docs.makeroid.io/blocks/lists#listfromcsvtable';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TITLE_FROM_CSV = 'lista da tabella csv';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_INPUT_TEXT = 'testo';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TOOLTIP = 'Analizza un testo come tabella CSV \("comma-separated value" \(valore separati da virgola\)\) formattato '
        + 'per produrre una lista di righe, ognuno dei quali è una lista di campi. Le righe possono essere '
        + 'separate da "nuoverighe" \(\\n\) o "CRLF" \(\\r\\n\).';

    Blockly.Msg.LANG_LISTS_INSERT_ITEM_HELPURL = 'https://docs.makeroid.io/blocks/lists#insert';
    Blockly.Msg.LANG_LISTS_INSERT_TITLE_INSERT_LIST = 'inserisci elemento nella lista';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_INDEX = 'indice';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_ITEM = 'elemento';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT = 'inserisci elemento nella lista  lista %1 indice %2 elemento %3';
    Blockly.Msg.LANG_LISTS_INSERT_TOOLTIP = 'Inserisci un elemento nella lista alla posizione specifica.';

    Blockly.Msg.LANG_LISTS_IS_EMPTY_HELPURL = 'https://docs.makeroid.io/blocks/lists#islistempty';
    Blockly.Msg.LANG_LISTS_TITLE_IS_EMPTY = 'è la lista vuota?';
    Blockly.Msg.LANG_LISTS_INPUT_LIST = 'lista';
    Blockly.Msg.LANG_LISTS_IS_EMPTY_TOOLTIP = 'Ritorna vero se la lista è vuota.';

    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_HELPURL = 'https://docs.makeroid.io/blocks/lists#lookuppairs';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TITLE_LOOKUP_IN_PAIRS = 'Cerca a coppie';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_KEY = 'chiave';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_PAIRS = 'coppie';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_NOT_FOUND = 'nonTrovato';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT = 'cerca a coppie  chiave %1 coppie %2 nonTrovato %3';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TOOLTIP = 'Restituisce il valore associato con la chiave nella lista di coppie';

    /*Blockly.Msg.LANG_LISTS_INDEX_OF_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_INDEX_OF_TITLE_FIND = 'trova';
     Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_OCCURRENCE = 'occorrenze dell'elemento';
     Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_IN_LIST = 'nella lista';
     Blockly.Msg.LANG_LISTS_INDEX_OF_TOOLTIP = 'Restituisce l\'indice della prima/ultima occorrenza\n' +
     'dell\'elemento nella lista.\n' +
     'Ritorna 0 se il testo non è trovato.';
     Blockly.Msg.LANG_LISTS_INDEX_OF_FIRST = 'primo';
     Blockly.Msg.LANG_LISTS_INDEX_OF_LAST = 'ultimo';

     Blockly.Msg.LANG_LISTS_GET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_GET_INDEX_TITLE_GET = 'ottieni elemento a';
     Blockly.Msg.LANG_LISTS_GET_INDEX_INPUT_IN_LIST = 'nella lista';
     Blockly.Msg.LANG_LISTS_GET_INDEX_TOOLTIP = 'Restituisce il valore alla posizione specifica nella lista.';

     Blockly.Msg.LANG_LISTS_SET_INDEX_HELPURL = 'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_SET = 'imposta elemento a';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_IN_LIST = 'nella lista';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_TO = 'a';
     Blockly.Msg.LANG_LISTS_SET_INDEX_TOOLTIP = 'Imposta il valore alla posizione specificata nella lista.';*/

// Variables Blocks.
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_HELPURL = 'https://docs.makeroid.io/blocks/variables#global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TITLE_INIT = 'inizializza globale';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME = 'nome';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TO = 'a';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_COLLAPSED_TEXT = 'globale';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TOOLTIP = 'Crea una variabile globale e gli dà il valore del blocco attaccato.';

    Blockly.Msg.LANG_VARIABLES_GET_HELPURL = 'https://docs.makeroid.io/blocks/variables#get';
    Blockly.Msg.LANG_VARIABLES_GET_TITLE_GET = 'ottieni';
    /* Blockly.Msg.LANG_VARIABLES_GET_INPUT_ITEM = 'elemento'; */ // [lyn, 10/14/13] unused
    Blockly.Msg.LANG_VARIABLES_GET_COLLAPSED_TEXT = 'ottieni';
    Blockly.Msg.LANG_VARIABLES_GET_TOOLTIP = 'Restituisce il valore di questa variabile.';

    Blockly.Msg.LANG_VARIABLES_SET_HELPURL = 'https://docs.makeroid.io/blocks/variables#set';
    Blockly.Msg.LANG_VARIABLES_SET_TITLE_SET = 'imposta';
    /* Blockly.Msg.LANG_VARIABLES_SET_INPUT_ITEM = 'item'; */ // [lyn, 10/14/13] unused
    Blockly.Msg.LANG_VARIABLES_SET_TITLE_TO = 'a';
    Blockly.Msg.LANG_VARIABLES_SET_COLLAPSED_TEXT = 'imposta';
    Blockly.Msg.LANG_VARIABLES_SET_TOOLTIP = 'Imposta questa variabile per essere uguale all\'input.';
    Blockly.Msg.LANG_VARIABLES_VARIABLE = ' variabile';

    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_HELPURL = 'https://docs.makeroid.io/blocks/variables#do';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TITLE_INIT = 'inizializza locale';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_DEFAULT_NAME = 'nome';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_INPUT_TO = 'a';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_IN_DO = 'in';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_COLLAPSED_TEXT = 'locale';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TOOLTIP = 'Ti permette di creare variabili che sono accessibili solo nella parte esegui di questo blocco.';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TRANSLATED_NAME = 'inizializza locale in esegui local in do';

    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_HELPURL = 'https://docs.makeroid.io/blocks/variables#return';
    /* // These don't differ between the statement and expression
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TITLE_INIT = 'inizializza locale';
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_NAME = 'nome';
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_TO = 'a';
     */
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_IN_RETURN = 'in';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_COLLAPSED_TEXT = 'locale';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TOOLTIP = 'Ti permette di creare variabili che sono accessibili solo nella parte ritorna di questo blocco.';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TRANSLATED_NAME = 'inizializza locale in ritorna';

    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TITLE_LOCAL_NAMES = 'nomi locali';
    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TOOLTIP = '';

    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_TITLE_NAME = 'nome';
    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_DEFAULT_VARIABLE = 'x';

// Procedures Blocks.
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_HELPURL = 'https://docs.makeroid.io/blocks/procedures#do';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DEFINE = 'crea';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE = 'procedura';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO = 'esegui';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_COLLAPSED_PREFIX = 'crea ';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_TOOLTIP = 'Una procedura che non ritorna un valore.';

    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_HELPURL = 'https://docs.makeroid.io/blocks/procedures#doreturn';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_THEN_RETURN = 'risultato';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_DO = 'esegui';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_RETURN = 'risultato';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_TOOLTIP = 'Esegue i blocchi in \'esegui\' e ritorna una affermazione. Utile se hai bisogno di eseguire una procedura primadi ritornare un valore a una variabile.';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_COLLAPSED_TEXT = 'esegui/risultato';

    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_HELPURL = 'https://docs.makeroid.io/blocks/procedures#return';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DEFINE = 'crea';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_PROCEDURE = Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE;
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DO = Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO;
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_RETURN = 'risultato';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_COLLAPSED_PREFIX = 'crea ';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_TOOLTIP = 'Una procedura che restituisce un valore di risultato.';

    Blockly.Msg.LANG_PROCEDURES_DEF_DUPLICATE_WARNING = 'Attenzione:\n' +
        'Questa procedura ha\n' +
        'input duplicati.';

    Blockly.Msg.LANG_PROCEDURES_GET_HELPURL = 'https://docs.makeroid.io/blocks/procedures#get';

    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_HELPURL = 'https://docs.makeroid.io/blocks/procedures#do';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL = 'chiama ';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE = 'procedura';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_COLLAPSED_PREFIX = 'chiama ';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TOOLTIP = 'Chiama una procedura con nessun valore di ritorno.';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TRANSLATED_NAME = 'chiama nessun ritorno';

    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_HELPURL = 'https://docs.makeroid.io/blocks/procedures#return';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_CALL = Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL;
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_PROCEDURE = Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE;
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_COLLAPSED_PREFIX = 'chiama ';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TOOLTIP = 'Chiama una procedura con un valore di ritorno.';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TRANSLATED_NAME = 'chiama ritorno';

    Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TITLE = 'input';
    Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TITLE = 'input:';

    Blockly.Msg.LANG_PROCEDURES_HIGHLIGHT_DEF = 'Evidenzia Procedura';

    Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TOOLTIP = '';
    Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TOOLTIP = '';

// Components Blocks.
    Blockly.Msg.UNDEFINED_BLOCK_TOOLTIP = "Questo blocco non è definito. Elimina questo blocco!";

    Blockly.Msg.LANG_COMPONENT_BLOCK_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_WHEN = 'quando ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_DO = 'esegui';

    Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_TITLE_CALL = 'esegui ';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_CALL = 'esegui ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_FOR_COMPONENT = 'per componente';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GETTER_HELPURL = '';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_TITLE_OF_COMPONENT = 'del componente';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_SET = 'imposta ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_TO = ' a';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_HELPURL = '';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_SET = 'imposta ';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_TO = ' a';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_OF_COMPONENT = 'del componente';

///////////////////
    /* HelpURLs for Component Blocks */

//User Interface Components
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_HELPURL = 'https://docs.makeroid.io/components/user-interface/Button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/user-interface/button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_EVENTS_HELPURL = 'https://docs.makeroid.io/components/user-interface/button';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_HELPURL = 'https://docs.makeroid.io/components/user-interface/CheckBox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/user-interface/checkbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_EVENTS_HELPURL = 'https://docs.makeroid.io/components/user-interface/checkbox';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_HELPURL = 'https://docs.makeroid.io/components/sensors/Clock';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/sensors/Clock';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_EVENTS_HELPURL = 'https://docs.makeroid.io/components/sensors/Clock';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_METHODS_HELPURL = 'https://docs.makeroid.io/components/sensors/Clock';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_HELPURL = 'https://docs.makeroid.io/components/user-interface/Image';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/user-interface/image';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EVENTS_HELPURL = 'https://docs.makeroid.io/components/user-interface/image';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_METHODS_HELPURL = 'https://docs.makeroid.io/components/user-interface/image';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_HELPURL = 'https://docs.makeroid.io/components/user-interface/Label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/user-interface/label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_EVENTS_HELPURL = 'https://docs.makeroid.io/components/user-interface/label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_METHODS_HELPURL = 'https://docs.makeroid.io/components/user-interface/label';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_HELPURL = 'https://docs.makeroid.io/components/user-interface/ListPicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/user-interface/listpicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/user-interface/listpicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_METHODS_HELPURL = 'https://docs.makeroid.io/components/user-interface/listpicker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_HELPURL = "/components/user-interface/Notifier";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/user-interface/notifier';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/user-interface/notifier';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_METHODS_HELPURL = 'https://docs.makeroid.io/components/user-interface/notifier';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_HELPURL = 'https://docs.makeroid.io/components/user-interface/PasswordTextBox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/user-interface/pwdbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_EVENTS_HELPURL = 'https://docs.makeroid.io/components/user-interface/pwdbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PASSWORDTEXTBOX_METHODS_HELPURL = 'https://docs.makeroid.io/components/user-interface/pwdbox';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_HELPURL = 'https://docs.makeroid.io/components/user-interface/Screen';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/user-interface/screen';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_EVENTS_HELPURL = 'https://docs.makeroid.io/components/user-interface/screen';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_METHODS_HELPURL = 'https://docs.makeroid.io/components/user-interface/screen';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_HELPURL = 'https://docs.makeroid.io/components/user-interface/Slider';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/user-interface/slider';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/user-interface/slider';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_METHODS_HELPURL = 'https://docs.makeroid.io/components/user-interface/slider';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_HELPURL = 'https://docs.makeroid.io/components/user-interface/TextBox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/user-interface/textbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_EVENTS_HELPURL = 'https://docs.makeroid.io/components/user-interface/textbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_METHODS_HELPURL = 'https://docs.makeroid.io/components/user-interface/textbox';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_HELPURL = "/components/user-interface/WebViewer";
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/user-interface/webviewer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/user-interface/webviewer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_METHODS_HELPURL = 'https://docs.makeroid.io/components/user-interface/webviewer';

//Layout components
    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZARRANGE_HELPURL = "/components/layout/HorizontalArrangement";
    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZARRANGE_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/layout/horizarrange';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTARRANGE_HELPURL = "/components/layout/VerticalArrangement";
    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTARRANGE_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/layout/vertarrange';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TABLEARRANGE_HELPURL = "/components/layout/TableArrangement";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TABLEARRANGE_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/layout/tablearrange';

//Media components
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_HELPURL = 'https://docs.makeroid.io/components/media/Camcorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/media/camcorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/media/camcorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_METHODS_HELPURL = 'https://docs.makeroid.io/components/media/camcorder';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_HELPURL = 'https://docs.makeroid.io/components/media/Camera';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/media/camera';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_EVENTS_HELPURL = 'https://docs.makeroid.io/components/media/camera';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_METHODS_HELPURL = 'https://docs.makeroid.io/components/media/camera';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_HELPURL = 'https://docs.makeroid.io/components/media/ImagePicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/media/imagepicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/media/imagepicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGEPICKER_METHODS_HELPURL = 'https://docs.makeroid.io/components/media/imagepicker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_HELPURL = 'https://docs.makeroid.io/components/media/Player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/media/player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/media/player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_METHODS_HELPURL = 'https://docs.makeroid.io/components/media/player';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_HELPURL = 'https://docs.makeroid.io/components/media/Sound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/media/sound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_EVENTS_HELPURL = 'https://docs.makeroid.io/components/media/sound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_METHODS_HELPURL = 'https://docs.makeroid.io/components/media/sound';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_HELPURL = "/components/media/SoundRecorder";
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/media/soundrecorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/media/soundrecorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUNDRECORDER_METHODS_HELPURL = 'https://docs.makeroid.io/components/media/soundrecorder';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_HELPURL = "/components/media/SpeechRecognizer";
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/media/speechrecognizer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/media/speechrecognizer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECHRECOGNIZER_METHODS_HELPURL = 'https://docs.makeroid.io/components/media/speechrecognizer';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_HELPURL = "/components/media/TextToSpeech";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/media/texttospeech';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_EVENTS_HELPURL = 'https://docs.makeroid.io/components/media/texttospeech';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTTOSPEECH_METHODS_HELPURL = 'https://docs.makeroid.io/components/media/texttospeech';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_HELPURL = 'https://docs.makeroid.io/components/media/VideoPlayer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/media/videoplayer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/media/videoplayer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEOPLAYER_METHODS_HELPURL = 'https://docs.makeroid.io/components/media/videoplayer';

// Drawing and Animation components
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_HELPURL = "/components/drawing-and-animation/Ball";
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/drawing-and-animation/ball';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_EVENTS_HELPURL = 'https://docs.makeroid.io/components/drawing-and-animation/ball';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_METHODS_HELPURL = 'https://docs.makeroid.io/components/drawing-and-animation/ball';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_HELPURL = 'https://docs.makeroid.io/components/drawing-and-animation/Canvas';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/drawing-and-animation/canvas';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_EVENTS_HELPURL = 'https://docs.makeroid.io/components/drawing-and-animation/canvas';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_METHODS_HELPURL = 'https://docs.makeroid.io/components/drawing-and-animation/canvas';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_HELPURL = "/components/drawing-and-animation/ImageSprite";
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/drawing-and-animation/imagesprite';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_EVENTS_HELPURL = 'https://docs.makeroid.io/components/drawing-and-animation/imagesprite';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGESPRITE_METHODS_HELPURL = 'https://docs.makeroid.io/components/drawing-and-animation/imagesprite';

//Sensor components
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_HELPURL = "/components/sensors/AccelerometerSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/sensors/accelerometersensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_EVENTS_HELPURL = 'https://docs.makeroid.io/components/sensors/accelerometersensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETERSENSOR_METHODS_HELPURL = 'https://docs.makeroid.io/components/sensors/accelerometersensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_HELPURL = "/components/sensors/BarcodeScanner";
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/sensors/barcodescanner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/sensors/barcodescanner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODESCANNER_METHODS_HELPURL = 'https://docs.makeroid.io/components/sensors/barcodescanner';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_HELPURL = "/components/sensors/GyroscopeSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/sensors/gyroscopesensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_EVENTS_HELPURL = 'https://docs.makeroid.io/components/sensors/gyroscopesensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPESENSOR_METHODS_HELPURL = 'https://docs.makeroid.io/components/sensors/gyroscopesensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_HELPURL = "/components/sensors/LocationSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/sensors/locationsensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_EVENTS_HELPURL = 'https://docs.makeroid.io/components/sensors/locationsensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATIONSENSOR_METHODS_HELPURL = 'https://docs.makeroid.io/components/sensors/locationsensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_HELPURL = "/components/sensors/OrientationSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/sensors/orientationsensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_EVENTS_HELPURL = 'https://docs.makeroid.io/components/sensors/orientationsensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATIONSENSOR_METHODS_HELPURL = 'https://docs.makeroid.io/components/sensors/orientationsensor';

//Social components
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_HELPURL = "/components/social/ContactPicker";
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/social/contactpicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/social/contactpicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACTPICKER_METHODS_HELPURL = 'https://docs.makeroid.io/components/social/contactpicker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_HELPURL = "/components/social/EmailPicker";
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/social/emailpicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/social/emailpicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAILPICKER_METHODS_HELPURL = 'https://docs.makeroid.io/components/social/emailpicker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_HELPURL = "/components/social/PhoneCall";
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/social/phonecall';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_EVENTS_HELPURL = 'https://docs.makeroid.io/components/social/phonecall';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONECALL_METHODS_HELPURL = 'https://docs.makeroid.io/components/social/phonecall';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_HELPURL = "/components/social/PhoneNumberPicker";
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/social/phonenumberpicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/social/phonenumberpicker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONENUMBERPICKER_METHODS_HELPURL = 'https://docs.makeroid.io/components/social/phonenumberpicker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_HELPURL = "/components/social/Texting";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/social/texting';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_EVENTS_HELPURL = 'https://docs.makeroid.io/components/social/texting';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_METHODS_HELPURL = 'https://docs.makeroid.io/components/social/texting';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_HELPURL = "/components/social/Twitter";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/social/twitter';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/social/twitter';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_METHODS_HELPURL = 'https://docs.makeroid.io/components/social/twitter';

//Storage Components
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_HELPURL = "/components/storage/FusiontablesControl";
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/storage/fusiontablescontrol';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_EVENTS_HELPURL = 'https://docs.makeroid.io/components/storage/fusiontablescontrol';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLESCONTROL_METHODS_HELPURL = 'https://docs.makeroid.io/components/storage/fusiontablescontrol';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_HELPURL = 'https://docs.makeroid.io/components/storage/TinyDB';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/storage/tinydb';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_EVENTS_HELPURL = 'https://docs.makeroid.io/components/storage/tinydb';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_METHODS_HELPURL = 'https://docs.makeroid.io/components/storage/tinydb';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_HELPURL = "/components/storage/TinyWebDB";
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/storage/tinywebdb';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_EVENTS_HELPURL = 'https://docs.makeroid.io/components/storage/tinywebdb';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_METHODS_HELPURL = 'https://docs.makeroid.io/components/storage/tinywebdb';

//Connectivity components
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_HELPURL = "/components/connectivity/ActivityStarter";
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/connectivity/activitystarter';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/connectivity/activitystarter';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_METHODS_HELPURL = 'https://docs.makeroid.io/components/connectivity/activitystarter';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_HELPURL = "/components/connectivity/BluetoothClient";
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/connectivity/bluetoothclient';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_EVENTS_HELPURL = 'https://docs.makeroid.io/components/connectivity/bluetoothclient';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_METHODS_HELPURL = 'https://docs.makeroid.io/components/connectivity/bluetoothclient';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_HELPURL = "/components/connectivity/BluetoothServer";
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/connectivity/bluetoothserver';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_EVENTS_HELPURL = 'https://docs.makeroid.io/components/connectivity/bluetoothserver';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_METHODS_HELPURL = 'https://docs.makeroid.io/components/connectivity/bluetoothserver';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_HELPURL = "/components/connectivity/Web";
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/connectivity/web';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_EVENTS_HELPURL = 'https://docs.makeroid.io/components/connectivity/web';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_METHODS_HELPURL = 'https://docs.makeroid.io/components/connectivity/web';

//Lego mindstorms components
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_HELPURL = "/components/lego-mindstorms/NxtDirectCommands";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxtdirect';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_METHODS_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxtdirect';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_HELPURL = "/components/lego-mindstorms/NxtColorSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxtcolor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_EVENTS_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxtcolor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_METHODS_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxtcolor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_HELPURL = "/components/lego-mindstorms/NxtLightSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxtlight';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_EVENTS_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxtlight';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_METHODS_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxtlight';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_HELPURL = "/components/lego-mindstorms/NxtSoundSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxtsound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_EVENTS_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxtsound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_METHODS_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxtsound';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_HELPURL = "/components/lego-mindstorms/NxtTouchSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxttouch';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_EVENTS_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxttouch';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_METHODS_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxttouch';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_HELPURL = "/components/lego-mindstorms/NxtUltrasonicSensor";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxtultrasonic';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_EVENTS_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxtultrasonic';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_METHODS_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxtultrasonic';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_HELPURL = "/components/lego-mindstorms/NxtDrive";
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxtdrive';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_METHODS_HELPURL = 'https://docs.makeroid.io/components/lego-mindstorms/nxtdrive';

//Experimental components
    // FirebaseDB
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_HELPURL = "/components/experimentalFirebaseDB";
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_PROPERTIES_HELPURL = "/components/experimentalfirebasedbproperties";
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_EVENTS_HELPURL = "/components/experimentalfirebasedbevents";
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_METHODS_HELPURL = "/components/experimentalfirebasedbmethods";

//Internal components
    Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_HELPURL = "/components/internal#GameClient";
    Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/internal#gameclient';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_EVENTS_HELPURL = 'https://docs.makeroid.io/components/internal#gameclient';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GAMECLIENT_METHODS_HELPURL = 'https://docs.makeroid.io/components/internal#gameclient';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_HELPURL = "/components/internal#Voting";
    Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_PROPERTIES_HELPURL = 'https://docs.makeroid.io/components/internal#voting';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_EVENTS_HELPURL = 'https://docs.makeroid.io/components/internal#voting';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VOTING_METHODS_HELPURL = 'https://docs.makeroid.io/components/internal#voting';

//Misc
    Blockly.Msg.SHOW_WARNINGS = "Mostra Avvisi";
    Blockly.Msg.HIDE_WARNINGS = "Nascondi Avvisi";
    Blockly.Msg.MISSING_SOCKETS_WARNINGS = "Dovresti riempire tutti i campi con dei blocchi";
    Blockly.Msg.WRONG_TYPE_BLOCK_WARINGS = "Questo blocco dovrebbe essere connesso con un blocco eventoo una definizione di una procedura";

// Messages from replmgr.js
    Blockly.Msg.REPL_ERROR_FROM_COMPANION = "Errore del Companion";
    Blockly.Msg.REPL_NETWORK_CONNECTION_ERROR = "Errore di Connessione alla Rete";
    Blockly.Msg.REPL_NETWORK_ERROR = "Errore di Rete";
    Blockly.Msg.REPL_NETWORK_ERROR_RESTART = "Errore di rete nella Comunicazione con il Companion.<br />Prova a riavviare il Companion e a riconnettere";
    Blockly.Msg.REPL_OK = "OK";
    Blockly.Msg.REPL_COMPANION_VERSION_CHECK = "Controllo Versione Companion";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE = 'Il tuo Companion è obsoleto. Clicca "OK" per iniziare l\'aggiornamento. Controlla il tuo ';
    Blockly.Msg.REPL_EMULATORS = "dell'elemulatore";
    Blockly.Msg.REPL_DEVICES = "del dispositivo";
    Blockly.Msg.REPL_APPROVE_UPDATE = " schermo perchè ti verrà chiesto di approvare l'aggiornamento.";
    Blockly.Msg.REPL_NOT_NOW = "Non Ora";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE1 = "Il Companion che stai usando è obsoleto.<br/><br/>Questa versione di Makeroid dovrebbe essere usata con il Companion versione";
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE_IMMEDIATE = "Stai usando un Companion obsoleto. Dovresti aggiornare Makeroid Companion il prima possibile. Se hai configurato l' aggiornamento automatico nel negozio, l'aggiornamento verrà effettuato da lui in poco tempo.";
    Blockly.Msg.REPL_COMPANION_WRONG_PACKAGE = "Il Companion che stai usando è stato creato per una istanza diversa di Makeroid. Per ottenere il Companion corretto guarda nello schermo Makeroid sotto il menu Aiuto->Informazioni Companion.";
    Blockly.Msg.REPL_DISMISS = "Ignora";
    Blockly.Msg.REPL_SOFTWARE_UPDATE = "Aggiornamento Software";
    Blockly.Msg.REPL_OK_LOWER = "Ok";
    Blockly.Msg.REPL_GOT_IT = "Fatto";
    Blockly.Msg.REPL_UPDATE_INFO = 'L\'aggiornamento sarà ora installato nel tuo dispositivo. Controlla lo schermo del tuo dispositivo (o emulatore) e approva l\'installazione del software quando richiesta.<br /><br />IMPORTANTE: Quando l\'aggiornamento sarà completato, scegli "FATTO" (non premere "apri"). Poi vai su Makeroid nel tuo browser, clicca il menu "Connetti" e scegli "Reset Connessione".  Poi riconnetti il dispositivo.';

    Blockly.Msg.REPL_UPDATE_NO_UPDATE = "Nessun Aggiornamento Disponibile";
    Blockly.Msg.REPL_UPDATE_NO_CONNECTION = "Devi essere connesso ad un Companion per aggiornarlo";
    Blockly.Msg.REPL_UNABLE_TO_UPDATE = "Impossibile inviare l'aggiornamento al dispositivo/emulatore";
    Blockly.Msg.REPL_UNABLE_TO_LOAD = "Impossibile caricare l'aggiornamento dal server di Makeroid";
    Blockly.Msg.REPL_UNABLE_TO_LOAD_NO_RESPOND = "Impossibile caricare l'aggiornamento dal server di Makeroid (il server non risponde)";
    Blockly.Msg.REPL_NOW_DOWNLOADING = "Stiamo ora scaricando l'aggiornamento dai Server di Makeroid, perfavore attendere";
    Blockly.Msg.REPL_RUNTIME_ERROR = "Errore di Runtime";
    Blockly.Msg.REPL_NO_ERROR_FIVE_SECONDS = "<br/><i>Nota:</i>&nbsp;Non vedrai un altro errore riportato per 5 secondi.";
    Blockly.Msg.REPL_CONNECTING_USB_CABLE = "Connessione via Cavo USB";
    Blockly.Msg.REPL_STARTING_EMULATOR = "Sto Avviando l'emulatore Android <br/>Per favore attendere: Questo potrebbe durare un minuto o due.";
    Blockly.Msg.REPL_CONNECTING = "Connessione...";
    Blockly.Msg.REPL_CANCEL = "Annulla";
    Blockly.Msg.REPL_GIVE_UP = "Rinuncia";
    Blockly.Msg.REPL_KEEP_TRYING = "Continua a Provare";
    Blockly.Msg.REPL_CONNECTION_FAILURE1 = "Connessione fallita";
    Blockly.Msg.REPL_NO_START_EMULATOR = "Non è possibile avviare il Companion Makeroid dentro l' Emulatore";
    Blockly.Msg.REPL_PLUGGED_IN_Q = "Collegato?";
    Blockly.Msg.REPL_AI_NO_SEE_DEVICE = "Makeroid non vede il tuo dispositivo, assicurati che il cavo sia inserito e che i driver sono corretti.";
    Blockly.Msg.REPL_HELPER_Q = "Aiutante?";
    Blockly.Msg.REPL_HELPER_NOT_RUNNING = 'L\'aiutante Makeroid Starter non sembra avviato<br/><a href="https://starter.makeroid.io" target="_blank">Hai bisogno di aiuto?</a>';
    Blockly.Msg.REPL_USB_CONNECTED_WAIT = "USB Connesso, attendere ";
    Blockly.Msg.REPL_SECONDS_ENSURE_RUNNING = " secondi per garantire che tutto sia avviato.";
    Blockly.Msg.REPL_EMULATOR_STARTED = "Emulatore avviato, attendere ";
    Blockly.Msg.REPL_STARTING_COMPANION_ON_PHONE = "Sto avviando l'app Companion nel telefono connesso.";
    Blockly.Msg.REPL_STARTING_COMPANION_IN_EMULATOR = "Sto avviando l'app Companion nell'emulatore.";
    Blockly.Msg.REPL_COMPANION_STARTED_WAITING = "Il Companion si sta avviando, attendere ";
    Blockly.Msg.REPL_VERIFYING_COMPANION = "Sto verificando se il Companion è avviato....";
    Blockly.Msg.REPL_CONNECT_TO_COMPANION = "Connetti al Companion";
    Blockly.Msg.REPL_TRY_AGAIN1 = "Impossibile connettersi al Makeroid Companion, riprova.";
    Blockly.Msg.REPL_YOUR_CODE_IS = "Il tuo codice è";
    Blockly.Msg.REPL_DO_YOU_REALLY_Q = "Vuoi davvero?";
    Blockly.Msg.REPL_FACTORY_RESET = 'Questo proverà a resettare il tuo Emulatore al suo stato di "fabbrica". Se hai precedentemente aggiornato il Companion installato nell\' Emulatore, probabilmente dovrai rifarlo ancora.';

// Messages from Blockly.js
    Blockly.Msg.WARNING_DELETE_X_BLOCKS = "Sei sicuro di voler eliminare tutti i %1 di questi blocchi?";

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
