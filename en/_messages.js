// -*- mode: java; c-basic-offset: 2; -*-
// Copyright © 2018 Kodular. All rights reserved.
    
/**
 * Visual Blocks Language
 *
 * Copyright © 2018 Kodular. All rights reserved.
 */

/**
 * @fileoverview Traditional English strings.
 */
'use strict';

goog.provide('AI.Blockly.Msg.en');

goog.require('Blockly.Msg.en');

/**
 * Due to the frequency of long strings, the 80-column wrap rule need not apply
 * to message files.
 */

Blockly.Msg.en.switch_language_to_english =	{
  // Switch language to English.
  category: '',
  helpUrl: '',
  init: function() {
// Context menus.
    Blockly.Msg.UNDO =	'Undo';
        Blockly.Msg.REDO =	'Redo';
    Blockly.Msg.CLEAN_UP =	'Clean up Blocks';
    Blockly.Msg.HIDE =	'Hide Workspace Controls';
    Blockly.Msg.SHOW =	'Show Workspace Controls';
    Blockly.Msg.DUPLICATE_BLOCK =	'Duplicate';
    Blockly.Msg.REMOVE_COMMENT =	'Remove Comment';
    Blockly.Msg.ADD_COMMENT =	'Add Comment';
    Blockly.Msg.EXTERNAL_INPUTS =	'External Inputs';
    Blockly.Msg.INLINE_INPUTS =	'Inline Inputs';
    Blockly.Msg.HORIZONTAL_PARAMETERS =	'Arrange Parameters Horizontally';
    Blockly.Msg.VERTICAL_PARAMETERS =	'Arrange Parameters Vertically';
    Blockly.Msg.CONFIRM_DELETE =	'Confirm deletion';
    Blockly.Msg.DELETE_ALL_BLOCKS =	'Delete all %1 blocks?';
    Blockly.Msg.DELETE_BLOCK =	'Delete Block';
    Blockly.Msg.DELETE_X_BLOCKS =	'Delete %1 Blocks';
    Blockly.Msg.COLLAPSE_BLOCK =	'Collapse Block';
    Blockly.Msg.EXPAND_BLOCK =	'Expand Block';
    Blockly.Msg.DISABLE_BLOCK =	'Disable Block';
    Blockly.Msg.ENABLE_BLOCK =	'Enable Block';
    Blockly.Msg.HELP =	'Help';
    Blockly.Msg.EXPORT_IMAGE =	'Download Blocks as Image';
    Blockly.Msg.COLLAPSE_ALL =	'Collapse Blocks';
    Blockly.Msg.EXPAND_ALL =	'Expand Blocks';
    Blockly.Msg.ARRANGE_H =	'Arrange Blocks Horizontally';
    Blockly.Msg.ARRANGE_V =	'Arrange Blocks Vertically';
    Blockly.Msg.ARRANGE_S =	'Arrange Blocks Diagonally';
    Blockly.Msg.SORT_W =	'Sort Blocks by Width';
    Blockly.Msg.SORT_H =	'Sort Blocks by Height';
    Blockly.Msg.SORT_C =	'Sort Blocks by Category';
    Blockly.Msg.COPY_TO_BACKPACK =	'Add to Backpack';
    Blockly.Msg.COPY_ALLBLOCKS =	'Copy All Blocks to Backpack';
    Blockly.Msg.REMOVE_FROM_BACKPACK =	'Remove from Backpack';
    Blockly.Msg.BACKPACK_GET =	'Paste All Blocks from Backpack';
    Blockly.Msg.BACKPACK_EMPTY =	'Empty the Backpack';
    Blockly.Msg.BACKPACK_CONFIRM_EMPTY =	'Are you sure you want to empty the backpack?';
    Blockly.Msg.BACKPACK_DOC_TITLE =	'Backpack Information';
    Blockly.Msg.SHOW_BACKPACK_DOCUMENTATION =	'Show Backpack documentation';
    Blockly.Msg.BACKPACK_DOCUMENTATION =	'The Backpack is a copy/paste feature. It allows you to copy blocks from one project or screen and paste them into another project or screen. To copy, you can drag-and-drop blocks into the Backpack. To paste, click on the Backpack icon and drag-and-drop blocks into the workspace. </p><p>If you leave Kodular with blocks left in your backpack, they will be there the next time you login. </p><p>For further documentation and a 'how to' video, see:"
    +'</p><p><a href="https://docs.kodular.io/guides/backpack" target="_blank">https://docs.kodular.io/guides/backpack</a>';
    Blockly.Msg.ENABLE_GRID =	'Enable Workspace Grid';
    Blockly.Msg.DISABLE_GRID =	'Disable Workspace Grid';
    Blockly.Msg.ENABLE_SNAPPING =	'Enable Snap to Grid';
    Blockly.Msg.DISABLE_SNAPPING =	'Disable Snap to Grid';
    Blockly.Msg.DISABLE_ALL_BLOCKS =	'Disable All Blocks';
    Blockly.Msg.ENABLE_ALL_BLOCKS =	'Enable All Blocks';
    Blockly.Msg.HIDE_ALL_COMMENTS =	'Hide All Comments';
    Blockly.Msg.SHOW_ALL_COMMENTS =	'Show All Comments';
    Blockly.Msg.GENERICIZE_BLOCK =	'Make Generic';
    Blockly.Msg.UNGENERICIZE_BLOCK =	'Make Specific';
    Blockly.Msg.DOWNLOAD_BLOCKS_AS_PNG =	'Download Blocks as PNG';

// Variable renaming.
    Blockly.Msg.CHANGE_VALUE_TITLE =	'Change value:';
    Blockly.Msg.NEW_VARIABLE =	'New variable...';
    Blockly.Msg.NEW_VARIABLE_TITLE =	'New variable name:';
    Blockly.Msg.RENAME_VARIABLE =	'Rename variable...';
    Blockly.Msg.RENAME_VARIABLE_TITLE =	'Rename all "%1" variables to:';

// Toolbox.
    Blockly.Msg.VARIABLE_CATEGORY =	'Variables';
    Blockly.Msg.PROCEDURE_CATEGORY =	'Procedures';

// Warnings/Errors
    Blockly.Msg.ERROR_BLOCK_CANNOT_BE_IN_DEFINTION =	'This block cannot be in a definition';
    Blockly.Msg.ERROR_SELECT_VALID_ITEM_FROM_DROPDOWN =	'Select a valid item in the drop down.';
    Blockly.Msg.ERROR_DUPLICATE_EVENT_HANDLER =	'This is a duplicate event handler for this component.';
    Blockly.Msg.ERROR_COMPONENT_DOES_NOT_EXIST =	'Component does not exist';
    Blockly.Msg.ERROR_BLOCK_IS_NOT_DEFINED =	'This block is not defined. Delete this block!';
    Blockly.Msg.ERROR_BREAK_ONLY_IN_LOOP =	'The break block should be used only within loops';
    Blockly.Msg.ERROR_INVALID_NUMBER_CONTENT =	'This text block does not contain a valid number';

// Colour Blocks.
    Blockly.Msg.LANG_COLOUR_PICKER_HELPURL =	'https://docs.kodular.io/blocks/colors#basic';
    Blockly.Msg.LANG_COLOUR_PICKER_TOOLTIP =	'Click the square to pick a color.';
    Blockly.Msg.LANG_COLOUR_WHITE =	'white';
    Blockly.Msg.LANG_COLOUR_LIGHT_GRAY =	'light gray';
    Blockly.Msg.LANG_COLOUR_GRAY =	'gray';
    Blockly.Msg.LANG_COLOUR_BLUE_GRAY =	'blue gray';
    Blockly.Msg.LANG_COLOUR_DARK_GRAY =	'dark gray';
    Blockly.Msg.LANG_COLOUR_BLACK =	'black';
    Blockly.Msg.LANG_COLOUR_RED =	'red';
    Blockly.Msg.LANG_COLOUR_PINK =	'pink';
    Blockly.Msg.LANG_COLOUR_PURPLE =	'purple';
    Blockly.Msg.LANG_COLOUR_DEEP_PURPLE =	'deep purple';
    Blockly.Msg.LANG_COLOUR_INDIGO =	'indigo';
    Blockly.Msg.LANG_COLOUR_BLUE =	'blue';
    Blockly.Msg.LANG_COLOUR_LIGHT_BLUE =	'light blue';
    Blockly.Msg.LANG_COLOUR_CYAN =	'cyan';
    Blockly.Msg.LANG_COLOUR_TEAL =	'teal';
    Blockly.Msg.LANG_COLOUR_GREEN =	'green';
    Blockly.Msg.LANG_COLOUR_LIGHT_GREEN =	'light green';
    Blockly.Msg.LANG_COLOUR_LIME =	'lime';
    Blockly.Msg.LANG_COLOUR_YELLOW =	'yellow';
    Blockly.Msg.LANG_COLOUR_AMBER =	'amber';
    Blockly.Msg.LANG_COLOUR_ORANGE =	'orange';
    Blockly.Msg.LANG_COLOUR_DEEP_ORANGE =	'deep orange';
    Blockly.Msg.LANG_COLOUR_BROWN =	'brown';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR =	'split color';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_HELPURL =	'https://docs.kodular.io/blocks/colors#split';
    Blockly.Msg.LANG_COLOUR_SPLIT_COLOUR_TOOLTIP =	'A list of four elements, each in the range 0 to 255, representing the red, green, blue and alpha components.';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR =	'make color';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_HELPURL =	'https://docs.kodular.io/blocks/colors#make';
    Blockly.Msg.LANG_COLOUR_MAKE_COLOUR_TOOLTIP =	'A color with the given red, green, blue, and optionally alpha components';

// Control Blocks
    Blockly.Msg.LANG_CATEGORY_CONTROLS =	'Control';
    Blockly.Msg.LANG_CONTROLS_IF_HELPURL =	'https://docs.kodular.io/blocks/control#if';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_1 =	'If a value is true, then do some statements.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_2 =	'If a value is true, then do the first block of statements. $ Otherwise, do the second block of statements.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_3 =	'If the first value is true, then do the first block of statements. $ Otherwise, if the second value is true, do the second block of statements.';
    Blockly.Msg.LANG_CONTROLS_IF_TOOLTIP_4 =	'If the first value is true, then do the first block of statements. $ Otherwise, if the second value is true, do the second block of statements. $ If none of the values are true, do the last block of statements.';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_IF =	'if';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSEIF =	'else if';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_ELSE =	'else';
    Blockly.Msg.LANG_CONTROLS_IF_MSG_THEN =	'then';

    Blockly.Msg.LANG_CONTROLS_IF_IF_TITLE_IF =	'if';
    Blockly.Msg.LANG_CONTROLS_IF_IF_TOOLTIP =	'Add, remove, or reorder sections $ to reconfigure this if block.';

    Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TITLE_ELSEIF =	'else if';
    Blockly.Msg.LANG_CONTROLS_IF_ELSEIF_TOOLTIP =	'Add a condition to the if block.';

    Blockly.Msg.LANG_CONTROLS_IF_ELSE_TITLE_ELSE =	'else';
    Blockly.Msg.LANG_CONTROLS_IF_ELSE_TOOLTIP =	'Add a final, catch-all condition to the if block.';

    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_HELPURL =	'https://docs.kodular.io/blocks/control#while';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TITLE_REPEAT =	'repeat';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_INPUT_DO =	'do';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_WHILE =	'while';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL =	'until';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE =	'While a value is true, then do some statements.';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL =	'While a value is false, then do some statements.';
    Blockly.Msg.LANG_CONTROLS_WHILEUNTIL_TOOLTIP_1 =	'Runs the blocks in the \'do\' section while the test is true.';

    Blockly.Msg.LANG_CONTROLS_FOR_HELPURL =	'';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_WITH =	'count with';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_VAR =	'x';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_FROM =	'from';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_TO =	'to';
    Blockly.Msg.LANG_CONTROLS_FOR_INPUT_DO =	'do';

    Blockly.Msg.LANG_CONTROLS_FOR_TOOLTIP =	'Count from a start number to an end number. $ For each count, set the current count number to $ variable "%1", and then do some statements.';

    Blockly.Msg.LANG_CONTROLS_FORRANGE_HELPURL =	'https://docs.kodular.io/blocks/control#forrange';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_ITEM =	'for each';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_VAR =	'number';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_START =	'from';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_END =	'to';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_STEP =	'by';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_DO =	'do';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_TEXT =	'for number in range';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_PREFIX =	'for';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_INPUT_COLLAPSED_SUFFIX =	'in range';
    Blockly.Msg.LANG_CONTROLS_FORRANGE_TOOLTIP =	'Runs the blocks in the \'do\' section for each numeric value in the range from start to end, stepping the value each time.  Use the given variable name to refer to the current value.';

    Blockly.Msg.LANG_CONTROLS_FOREACH_HELPURL =	'https://docs.kodular.io/blocks/control#foreach';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_ITEM =	'for each';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_VAR =	'item';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_INLIST =	'in list';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_DO =	'do';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_TEXT =	'for item in list';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_PREFIX =	'for';
    Blockly.Msg.LANG_CONTROLS_FOREACH_INPUT_COLLAPSED_SUFFIX =	'in list';
    Blockly.Msg.LANG_CONTROLS_FOREACH_TOOLTIP =	'Runs the blocks in the \'do\'  section for each item in the list.  Use the given variable name to refer to the current list item.';

    Blockly.Msg.LANG_CONTROLS_FOREACH_DICT_HELPURL =	'https://docs.kodular.io/blocks/control#foreachdict';
    Blockly.Msg.LANG_CONTROLS_FOREACH_DICT_INPUT =	'for each %1 with %2 in dictionary %3';
    Blockly.Msg.LANG_CONTROLS_FOREACH_DICT_INPUT_DO =	'do';
    Blockly.Msg.LANG_CONTROLS_FOREACH_DICT_INPUT_KEY =	'key';
    Blockly.Msg.LANG_CONTROLS_FOREACH_DICT_INPUT_VALUE =	'value';
    // Used by the typeblock system.
    Blockly.Msg.LANG_CONTROLS_FOREACH_DICT_TITLE =	'for each in dictionary';
    Blockly.Msg.LANG_CONTROLS_FOREACH_DICT_TOOLTIP =	'Runs the blocks in the \'do\' section for each key-value entry in the dictionary. Use the given variable names to refer to the key/value of the current dictionary item.';

    Blockly.Msg.LANG_CONTROLS_GET_HELPURL =	'https://docs.kodular.io/blocks/control#get';


    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_HELPURL =	'http://en.wikipedia.org/wiki/Control_flow';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_INPUT_OFLOOP =	'of loop';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK =	'break out';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE =	'continue with next iteration';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK =	'Break out of the containing loop.';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE =	'Skip the rest of this loop, and $ continue with the next iteration.';
    Blockly.Msg.LANG_CONTROLS_FLOW_STATEMENTS_WARNING =	'Warning: $ This block may only $ be used within a loop.';

    Blockly.Msg.LANG_CONTROLS_WHILE_HELPURL =	'https://docs.kodular.io/blocks/control#while';
    Blockly.Msg.LANG_CONTROLS_WHILE_TITLE =	'while';
    Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_TEST =	'test';
    Blockly.Msg.LANG_CONTROLS_WHILE_INPUT_DO =	'do';
    Blockly.Msg.LANG_CONTROLS_WHILE_COLLAPSED_TEXT =	'while';
    Blockly.Msg.LANG_CONTROLS_WHILE_TOOLTIP =	'Runs the blocks in the \'do\' section while the test is true.';

    Blockly.Msg.LANG_CONTROLS_CHOOSE_HELPURL =	'https://docs.kodular.io/blocks/control#choose';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_TITLE =	'if';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_TEST =	'';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_THEN_RETURN =	'then';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_INPUT_ELSE_RETURN =	'else';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_COLLAPSED_TEXT =	'if';
    Blockly.Msg.LANG_CONTROLS_CHOOSE_TOOLTIP =	'If the condition being tested is true, return the result of evaluating the expression attached to the \'then-return\' slot; otherwise return the result of evaluating the expression attached to the \'else-return\' slot; at most one of the return slot expressions will be evaluated.';

    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_HELPURL =	'https://docs.kodular.io/blocks/control#doreturn';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_DO =	'do';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_INPUT_RETURN =	'result';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TOOLTIP =	'Runs the blocks in \'do\' and returns a statement. Useful if you need to run a procedure before returning a value to a variable.';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_COLLAPSED_TEXT =	'do/result';
    Blockly.Msg.LANG_CONTROLS_DO_THEN_RETURN_TITLE =	'do result';

    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TITLE =	'evaluate but ignore result';
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_HELPURL =	'https://docs.kodular.io/blocks/control#evaluate';
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_COLLAPSED_TEXT =	'eval but ignore';
    Blockly.Msg.LANG_CONTROLS_EVAL_BUT_IGNORE_TOOLTIP =	'Runs the connected block of code and ignores the return value (if any). Useful if need to call a procedure with a return value but don\'t need the value.';

    /* [lyn, 10/14/13] Removed for now. May come back some day.
     Blockly.Msg.LANG_CONTROLS_NOTHING_TITLE =	'nothing';
     Blockly.Msg.LANG_CONTROLS_NOTHING_HELPURL =	'https://docs.kodular.io/blocks/control#nothing';
     Blockly.Msg.LANG_CONTROLS_NOTHING_TOOLTIP =	'Returns nothing. Used to initialize variables or can be plugged into a return socket if no value needed to return. this is equivalent to null or None.';
     */

    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_HELPURL =	'https://docs.kodular.io/blocks/control#openscreen';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TITLE =	'open another screen';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_INPUT_SCREENNAME =	'screenName';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_COLLAPSED_TEXT =	'open screen';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_TOOLTIP =	'Opens a new screen in a multiple screen app.';

    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_HELPURL =	'https://docs.kodular.io/blocks/control#openscreenwithvalue';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TITLE =	'open another screen with start value';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_SCREENNAME =	'screenName';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_INPUT_STARTVALUE =	'startValue';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_COLLAPSED_TEXT =	'open screen with value';
    Blockly.Msg.LANG_CONTROLS_OPEN_ANOTHER_SCREEN_WITH_START_VALUE_TOOLTIP =	'Opens a new screen in a multiple screen app and passes the start value to that screen.';

    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_HELPURL =	'https://docs.kodular.io/blocks/control#getstartvalue';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TITLE =	'get start value';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_SCREENNAME =	'screenName';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_INPUT_STARTVALUE =	'startValue';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_COLLAPSED_TEXT =	'get start value';
    Blockly.Msg.LANG_CONTROLS_GET_START_VALUE_TOOLTIP =	'Returns the value that was passed to this screen when it was opened, typically by another screen in a multiple-screen app. If no value was passed, returns the empty text.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_HELPURL =	'https://docs.kodular.io/blocks/control#closescreen';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TITLE =	'close screen';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_COLLAPSED_TEXT =	'close screen';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_TOOLTIP =	'Close the current screen';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_HELPURL =	'https://docs.kodular.io/blocks/control#closescreenwithvalue';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TITLE =	'close screen with value';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_INPUT_RESULT =	'result';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_COLLAPSED_TEXT =	'close screen with value';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_VALUE_TOOLTIP =	'Closes the current screen and returns a result to the screen that opened this one.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_HELPURL =	'https://docs.kodular.io/blocks/control#closeapp';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TITLE =	'close application';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_COLLAPSED_TEXT =	'close application';
    Blockly.Msg.LANG_CONTROLS_CLOSE_APPLICATION_TOOLTIP =	'Closes all screens in this app and stops the app.';

    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_HELPURL =	'https://docs.kodular.io/blocks/control#getplainstarttext';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TITLE =	'get plain start text';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_COLLAPSED_TEXT =	'get plain start text';
    Blockly.Msg.LANG_CONTROLS_GET_PLAIN_START_TEXT_TOOLTIP =	'Returns the plain text that was passed to this screen when it was started by another app. If no value was passed, returns the empty text. For multiple screen apps, use get start value rather than get plain start text.';

    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_HELPURL =	'https://docs.kodular.io/blocks/control#closescreenwithplaintext';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TITLE =	'close screen with plain text';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_INPUT_TEXT =	'text';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_COLLAPSED_TEXT =	'close screen with plain text';
    Blockly.Msg.LANG_CONTROLS_CLOSE_SCREEN_WITH_PLAIN_TEXT_TOOLTIP =	'Closes the current screen and returns text to the app that opened this one.   This command is for returning text to non-Kodular activities, not to Kodular screens. For Kodular Screens, as in multiple screen apps, use Close Screen with Value, not Close Screen with Plain Text.';

    Blockly.Msg.LANG_CONTROLS_BREAK_HELPURL =	'https://docs.kodular.io/blocks/control#break';
    Blockly.Msg.LANG_CONTROLS_BREAK_TITLE =	'break';
    Blockly.Msg.LANG_CONTROLS_BREAK_INPUT_TEXT =	'value';
    Blockly.Msg.LANG_CONTROLS_BREAK_COLLAPSED_TEXT =	'break';

// Logic Blocks.
    Blockly.Msg.LANG_CATEGORY_LOGIC =	'Logic';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL =	'http://en.wikipedia.org/wiki/Inequality_(mathematics)';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_EQ =	'https://docs.kodular.io/blocks/logic#=';
    Blockly.Msg.LANG_LOGIC_COMPARE_HELPURL_NEQ =	'https://docs.kodular.io/blocks/logic#not=';
    Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_EQ =	'Tests whether two things are equal.  $ The things being compared can be any things, not only numbers.  $ Numbers are considered to be equal to their printed form as strings,  $ for example, the number 0 is equal to the text \"0\".  Also, two strings  $ that represent numbers are equal if the numbers are equal, for example  $ \"1\" is equal to \"01\".';
    Blockly.Msg.LANG_LOGIC_COMPARE_TOOLTIP_NEQ =	'Return true if both inputs are not equal to each other.';
    Blockly.Msg.LANG_LOGIC_COMPARE_TRANSLATED_NAME =	'logic equal';
    Blockly.Msg.LANG_LOGIC_COMPARE_EQ =	'=';
    Blockly.Msg.LANG_LOGIC_COMPARE_NEQ =	'\u2260';

    Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_AND =	'https://docs.kodular.io/blocks/logic#and';
    Blockly.Msg.LANG_LOGIC_OPERATION_HELPURL_OR =	'https://docs.kodular.io/blocks/logic#or';
    Blockly.Msg.LANG_LOGIC_OPERATION_AND =	'and';
    Blockly.Msg.LANG_LOGIC_OPERATION_OR =	'or';
    Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_AND =	'Return true if all inputs are true.';
    Blockly.Msg.LANG_LOGIC_OPERATION_TOOLTIP_OR =	'Return true if any input is true.';

    Blockly.Msg.LANG_LOGIC_NEGATE_HELPURL =	'https://docs.kodular.io/blocks/logic#not';
    Blockly.Msg.LANG_LOGIC_NEGATE_INPUT_NOT =	'not';
    Blockly.Msg.LANG_LOGIC_NEGATE_TOOLTIP =	'Returns true if the input is false. $ Returns false if the input is true.';

    Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE_HELPURL =	'https://docs.kodular.io/blocks/logic#true';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE_HELPURL =	'https://docs.kodular.io/blocks/logic#false';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TRUE =	'true';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_FALSE =	'false';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_TRUE =	'Returns the boolean true.';
    Blockly.Msg.LANG_LOGIC_BOOLEAN_TOOLTIP_FALSE =	'Returns the boolean false.';

// Math Blocks.
    Blockly.Msg.LANG_CATEGORY_MATH =	'Math';
    Blockly.Msg.LANG_MATH_NUMBER_HELPURL =	'https://docs.kodular.io/blocks/math#number';
    Blockly.Msg.LANG_MATH_NUMBER_TOOLTIP =	'Report the number shown.';
    Blockly.Msg.LANG_MATH_MUTATOR_ITEM_INPUT_NUMBER =	'number';

    Blockly.Msg.LANG_MATH_DECIMAL_FORMAT =	'decimal';
    Blockly.Msg.LANG_MATH_BINARY_FORMAT =	'binary';
    Blockly.Msg.LANG_MATH_OCTAL_FORMAT =	'octal';
    Blockly.Msg.LANG_MATH_HEXADECIMAL_FORMAT =	'hexadecimal';
    Blockly.Msg.LANG_MATH_NUMBER_RADIX_HELPURL =	'https://docs.kodular.io/blocks/math#number-radix';
    Blockly.Msg.LANG_MATH_NUMBER_RADIX_TOOLTIP =	'Report the number shown in decimal (base-10) format.';
    Blockly.Msg.LANG_MATH_NUMBER_RADIX_TITLE =	'number radix';

    Blockly.Msg.LANG_MATH_COMPARE_HELPURL =	'';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_EQ =	'https://docs.kodular.io/blocks/math#=';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_NEQ =	'https://docs.kodular.io/blocks/math#not=';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LT =	'https://docs.kodular.io/blocks/math#lt';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_LTE =	'https://docs.kodular.io/blocks/math#lte';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GT =	'https://docs.kodular.io/blocks/math#gt';
    Blockly.Msg.LANG_MATH_COMPARE_HELPURL_GTE =	'https://docs.kodular.io/blocks/math#gte';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_EQ =	'Return true if both numbers are equal to each other.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_NEQ =	'Return true if both numbers are not equal to each other.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LT =	'Return true if the first number is smaller $ than the second number.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_LTE =	'Return true if the first number is smaller $ than or equal to the second number.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GT =	'Return true if the first number is greater $ than the second number.';
    Blockly.Msg.LANG_MATH_COMPARE_TOOLTIP_GTE =	'Return true if the first number is greater $ than or equal to the second number.';
    Blockly.Msg.LANG_MATH_COMPARE_EQ =	'=';
    Blockly.Msg.LANG_MATH_COMPARE_NEQ =	'\u2260';
    Blockly.Msg.LANG_MATH_COMPARE_LT =	'<';
    Blockly.Msg.LANG_MATH_COMPARE_LTE =	'\u2264';
    Blockly.Msg.LANG_MATH_COMPARE_GT =	'>';
    Blockly.Msg.LANG_MATH_COMPARE_GTE =	'\u2265';

    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_ADD =	'https://docs.kodular.io/blocks/math#add';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MINUS =	'https://docs.kodular.io/blocks/math#subtract';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_MULTIPLY =	'https://docs.kodular.io/blocks/math#multiply';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_DIVIDE =	'https://docs.kodular.io/blocks/math#divide';
    Blockly.Msg.LANG_MATH_ARITHMETIC_HELPURL_POWER =	'https://docs.kodular.io/blocks/math#exponent';
    Blockly.Msg.LANG_MATH_BITWISE_HELPURL_AND =	'https://docs.kodular.io/blocks/math#bitwise-and';
    Blockly.Msg.LANG_MATH_BITWISE_HELPURL_IOR =	'https://docs.kodular.io/blocks/math#bitwise-ior';
    Blockly.Msg.LANG_MATH_BITWISE_HELPURL_XOR =	'https://docs.kodular.io/blocks/math#bitwise-xor';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_ADD =	'Return the sum of the two numbers.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MINUS =	'Return the difference of the two numbers.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_MULTIPLY =	'Return the product of the two numbers.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_DIVIDE =	'Return the quotient of the two numbers.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_TOOLTIP_POWER =	'Return the first number raised to $ the power of the second number.';
    Blockly.Msg.LANG_MATH_BITWISE_TOOLTIP_AND =	'Return the bitwise AND of the two numbers.';
    Blockly.Msg.LANG_MATH_BITWISE_TOOLTIP_IOR =	'Return the bitwise inclusive OR of the two numbers.';
    Blockly.Msg.LANG_MATH_BITWISE_TOOLTIP_XOR =	'Return the bitwise exclusive OR of the two numbers.';
    Blockly.Msg.LANG_MATH_ARITHMETIC_ADD =	'+';
    Blockly.Msg.LANG_MATH_ARITHMETIC_MINUS =	'-';
    Blockly.Msg.LANG_MATH_ARITHMETIC_MULTIPLY =	'*';
    Blockly.Msg.LANG_MATH_ARITHMETIC_DIVIDE =	'/';
    Blockly.Msg.LANG_MATH_ARITHMETIC_POWER =	'^';

    Blockly.Msg.LANG_MATH_BITWISE_AND =	'bitwise and';
    Blockly.Msg.LANG_MATH_BITWISE_IOR =	'bitwise or';
    Blockly.Msg.LANG_MATH_BITWISE_XOR =	'bitwise xor';

    /*Blockly.Msg.LANG_MATH_CHANGE_TITLE_CHANGE =	'change';
     Blockly.Msg.LANG_MATH_CHANGE_TITLE_ITEM =	'item';
     Blockly.Msg.LANG_MATH_CHANGE_INPUT_BY =	'by';
     Blockly.Msg.LANG_MATH_CHANGE_TOOLTIP =	'Add a number to variable "%1".';*/


    Blockly.Msg.LANG_MATH_SINGLE_OP_ROOT =	'square root';
    Blockly.Msg.LANG_MATH_SINGLE_OP_ABSOLUTE =	'absolute';
    Blockly.Msg.LANG_MATH_SINGLE_OP_NEG =	'neg';
    Blockly.Msg.LANG_MATH_SINGLE_OP_LN =	'log';
    Blockly.Msg.LANG_MATH_SINGLE_OP_EXP =	'e^';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ROOT =	'Return the square root of a number.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ROOT =	'https://docs.kodular.io/blocks/math#sqrt';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_ABS =	'Return the absolute value of a number.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_ABS =	'https://docs.kodular.io/blocks/math#abs';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_NEG =	'Return the negation of a number.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_NEG =	'https://docs.kodular.io/blocks/math#neg';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_LN =	'Return the natural logarithm of a number, i.e. the logarithm to the base e (2.71828...)';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_LN ='https://docs.kodular.io/blocks/math#log';
    Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_EXP =	'Return e (2.71828...) to the power of a number.';
    Blockly.Msg.LANG_MATH_SINGLE_HELPURL_EXP ='https://docs.kodular.io/blocks/math#e';
    /*Blockly.Msg.LANG_MATH_SINGLE_TOOLTIP_POW10 =	'Return 10 to the power of a number.';*/

    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_ROUND =	'Round a number up or down.';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_ROUND =	'https://docs.kodular.io/blocks/math#round';
    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_CEILING =	'Rounds the input to the smallest $ number not less then the input';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_CEILING =	'https://docs.kodular.io/blocks/math#ceiling';
    Blockly.Msg.LANG_MATH_ROUND_TOOLTIP_FLOOR =	'Rounds the input to the largest $ number not greater then the input';
    Blockly.Msg.LANG_MATH_ROUND_HELPURL_FLOOR =	'https://docs.kodular.io/blocks/math#floor';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_ROUND =	'round';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_CEILING =	'ceiling';
    Blockly.Msg.LANG_MATH_ROUND_OPERATOR_FLOOR =	'floor';

    Blockly.Msg.LANG_MATH_TRIG_SIN =	'sin';
    Blockly.Msg.LANG_MATH_TRIG_COS =	'cos';
    Blockly.Msg.LANG_MATH_TRIG_TAN =	'tan';
    Blockly.Msg.LANG_MATH_TRIG_ASIN =	'asin';
    Blockly.Msg.LANG_MATH_TRIG_ACOS =	'acos';
    Blockly.Msg.LANG_MATH_TRIG_ATAN =	'atan';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2 =	'atan2';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2_X =	'x';
    Blockly.Msg.LANG_MATH_TRIG_ATAN2_Y =	'y';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_SIN =	'Provides the sine of the given angle in degrees.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_SIN =	'https://docs.kodular.io/blocks/math#sin';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_COS =	'Provides the cosine of the given angle in degrees.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_COS =	'https://docs.kodular.io/blocks/math#cos';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_TAN =	'Provides the tangent of the given angle in degrees.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_TAN =	'https://docs.kodular.io/blocks/math#tan';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ASIN =	'Provides the angle in the range (-90,+90] $ degrees with the given sine value.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ASIN =	'https://docs.kodular.io/blocks/math#asin';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ACOS =	'Provides the angle in the range [0, 180) $ degrees with the given cosine value.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ACOS =	'https://docs.kodular.io/blocks/math#acos';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN =	'Provides the angle in the range (-90, +90) $ degrees with the given tangent value.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN =	'https://docs.kodular.io/blocks/math#atan';
    Blockly.Msg.LANG_MATH_TRIG_TOOLTIP_ATAN2 =	'Provides the angle in the range (-180, +180] $ degrees with the given rectangular coordinates.';
    Blockly.Msg.LANG_MATH_TRIG_HELPURL_ATAN2 =	'https://docs.kodular.io/blocks/math#atan2';

    Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MIN =	'min';
    Blockly.Msg.LANG_MATH_ONLIST_OPERATOR_MAX =	'max';
    Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MIN =	'Return the smallest of its arguments..';
    Blockly.Msg.LANG_MATH_ONLIST_TOOLTIP_MAX =	'Return the largest of its arguments..';
    Blockly.Msg.LANG_MATH_ONLIST_HELPURL_MIN =	'https://docs.kodular.io/blocks/math/#min';
    Blockly.Msg.LANG_MATH_ONLIST_HELPURL_MAX =	'https://docs.kodular.io/blocks/math/#max';

    Blockly.Msg.LANG_MATH_DIVIDE =	'\u00F7';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_MODULO =	'modulo of';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_REMAINDER =	'remainder of';
    Blockly.Msg.LANG_MATH_DIVIDE_OPERATOR_QUOTIENT =	'quotient of';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_MODULO =	'Return the modulo.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_MODULO =	'https://docs.kodular.io/blocks/math#modulo';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_REMAINDER =	'Return the remainder.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_REMAINDER =	'https://docs.kodular.io/blocks/math#remainder';
    Blockly.Msg.LANG_MATH_DIVIDE_TOOLTIP_QUOTIENT =	'Return the quotient.';
    Blockly.Msg.LANG_MATH_DIVIDE_HELPURL_QUOTIENT =	'https://docs.kodular.io/blocks/math#quotient';

    Blockly.Msg.LANG_MATH_RANDOM_INT_HELPURL =	'https://docs.kodular.io/blocks/math#randomint';
    Blockly.Msg.LANG_MATH_RANDOM_INT_TITLE_RANDOM =	'random integer';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_FROM =	'from';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT_TO =	'to';
    Blockly.Msg.LANG_MATH_RANDOM_INT_INPUT =	'random integer from %1 to %2';
    Blockly.Msg.LANG_MATH_RANDOM_INT_TOOLTIP =	'Returns a random integer between the upper bound $ and the lower bound. The bounds will be clipped to be smaller $ than 2**30.';

    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_HELPURL =	'https://docs.kodular.io/blocks/math#randomfrac';
    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TITLE_RANDOM =	'random fraction';
    Blockly.Msg.LANG_MATH_RANDOM_FLOAT_TOOLTIP =	'Return a random number between 0 and 1.';

    Blockly.Msg.LANG_MATH_RANDOM_SEED_HELPURL =	'https://docs.kodular.io/blocks/math#randomseed';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_TITLE_RANDOM =	'random set seed';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_INPUT_TO =	'to';
    Blockly.Msg.LANG_MATH_RANDOM_SEED_TOOLTIP =	'specifies a numeric seed $ for the random number generator';

    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TITLE_CONVERT =	'convert';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_RAD_TO_DEG =	'radians to degrees';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_OP_DEG_TO_RAD =	'degrees to radians';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_RAD_TO_DEG =	'Returns the degree value in the range $ [0, 360) corresponding to its radians argument.';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_RAD_TO_DEG =	'https://docs.kodular.io/blocks/math#convertrad';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_TOOLTIP_DEG_TO_RAD =	'Returns the radian value in the range $ [-\u03C0, +\u03C0) corresponding to its degrees argument.';
    Blockly.Msg.LANG_MATH_CONVERT_ANGLES_HELPURL_DEG_TO_RAD =	'https://docs.kodular.io/blocks/math#convertdeg';

    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_HELPURL =	'https://docs.kodular.io/blocks/math#format';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TITLE =	'format as decimal';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_NUM =	'number';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT_PLACES =	'places';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_INPUT =	'format as decimal number %1 places %2';
    Blockly.Msg.LANG_MATH_FORMAT_AS_DECIMAL_TOOLTIP =	'Returns the number formatted as a decimal $ with a specified number of places.';

    Blockly.Msg.LANG_MATH_IS_A_NUMBER_HELPURL =	'https://docs.kodular.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_NUMBER_INPUT_NUM =	'is number?';
    Blockly.Msg.LANG_MATH_IS_A_NUMBER_TOOLTIP =	'Tests if something is a number.';

    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_HELPURL =	'https://docs.kodular.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_INPUT_NUM =	'is Base 10?';
    Blockly.Msg.LANG_MATH_IS_A_DECIMAL_TOOLTIP =	'Tests if something is a string that represents a positive base 10 integer.';

    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_HELPURL =	'https://docs.kodular.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_INPUT_NUM =	'is hexadecimal?';
    Blockly.Msg.LANG_MATH_IS_A_HEXADECIMAL_TOOLTIP =	'Tests if something is a string that represents a hexadecimal number.';

    Blockly.Msg.LANG_MATH_IS_A_BINARY_HELPURL =	'https://docs.kodular.io/blocks/math#isnumber';
    Blockly.Msg.LANG_MATH_IS_A_BINARY_INPUT_NUM =	'is binary?';
    Blockly.Msg.LANG_MATH_IS_A_BINARY_TOOLTIP =	'Tests if something is a string that represents a binary number.';


    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TITLE_CONVERT =	'convert number';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_HEX =	'base 10 to hex';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_HEX =	'https://docs.kodular.io/blocks/math/#convertnumber';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_HEX =	'Takes a positive integer in base 10 and returns the string that represents the number in hexadecimal';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_HEX_TO_DEC =	'hex to base 10';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_HEX_TO_DEC =	'https://docs.kodular.io/blocks/math/#convertnumber';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_HEX_TO_DEC =	'Takes a string that represents a number in hexadecimal and returns the string that represents the number in base 10';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_DEC_TO_BIN =	'base 10 to binary';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_DEC_TO_BIN =	'https://docs.kodular.io/blocks/math/#convertnumber';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_DEC_TO_BIN =	'Takes a positive integer in base 10 and returns the string that represents the number in binary';

    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_OP_BIN_TO_DEC =	'binary to base 10';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_HELPURL_BIN_TO_DEC =	'https://docs.kodular.io/blocks/math/#convertnumber';
    Blockly.Msg.LANG_MATH_CONVERT_NUMBER_TOOLTIP_BIN_TO_DEC =	'Takes a string that represents a number in binary and returns the string that represents the number in base 10';

// Text Blocks.
    Blockly.Msg.LANG_CATEGORY_TEXT =	'Text';
    Blockly.Msg.LANG_TEXT_TEXT_HELPURL =	'https://docs.kodular.io/blocks/text#string';
    Blockly.Msg.LANG_TEXT_TEXT_TOOLTIP =	'A text string.';
    Blockly.Msg.LANG_TEXT_TEXT_LEFT_QUOTE =	'\u201C';
    Blockly.Msg.LANG_TEXT_TEXT_RIGHT_QUOTE =	'\u201D';

    Blockly.Msg.LANG_TEXT_JOIN_HELPURL =	'https://docs.kodular.io/blocks/text#join';
    Blockly.Msg.LANG_TEXT_JOIN_TITLE_CREATEWITH =	'create text with';
    Blockly.Msg.LANG_TEXT_JOIN_TOOLTIP =	'Appends all the inputs to form a single text string. $ If there are no inputs, makes an empty text.';
    Blockly.Msg.LANG_TEXT_JOIN_TITLE_JOIN =	'join';

    Blockly.Msg.LANG_TEXT_JOIN_ITEM_TITLE_ITEM =	'string';
    Blockly.Msg.LANG_TEXT_JOIN_ITEM_TOOLTIP =	'';

    Blockly.Msg.LANG_TEXT_APPEND_HELPURL =	'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
    Blockly.Msg.LANG_TEXT_APPEND_TO =	'to';
    Blockly.Msg.LANG_TEXT_APPEND_APPENDTEXT =	'append text';
    Blockly.Msg.LANG_TEXT_APPEND_VARIABLE =	'item';
    Blockly.Msg.LANG_TEXT_APPEND_TOOLTIP =	'Append some text to variable "%1".';

    Blockly.Msg.LANG_TEXT_LENGTH_HELPURL =	'https://docs.kodular.io/blocks/text#length';
    Blockly.Msg.LANG_TEXT_LENGTH_INPUT_LENGTH =	'length';
    Blockly.Msg.LANG_TEXT_LENGTH_TOOLTIP =	'Returns number of letters (including spaces) $ in the provided text.';

    Blockly.Msg.LANG_TEXT_ISEMPTY_HELPURL =	'https://docs.kodular.io/blocks/text#isempty';
    Blockly.Msg.LANG_TEXT_ISEMPTY_INPUT_ISEMPTY =	'is empty';
    Blockly.Msg.LANG_TEXT_ISEMPTY_TOOLTIP =	'Returns true if the length of the $ ' + 'text is 0, false otherwise.';

    Blockly.Msg.LANG_TEXT_COMPARE_LT =	'<';             
    Blockly.Msg.LANG_TEXT_COMPARE_EQUAL =	'=';
    Blockly.Msg.LANG_TEXT_COMPARE_NEQ =	'≠';
    Blockly.Msg.LANG_TEXT_COMPARE_GT =	'>';
    Blockly.Msg.LANG_TEXT_COMPARE_HELPURL =	'https://docs.kodular.io/blocks/text#compare';
    Blockly.Msg.LANG_TEXT_COMPARE_INPUT_COMPARE =	'compare texts';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_LT =	'Tests whether text1 is lexicographically less than text2. $ if one text is the prefix of the other, the shorter text is $ considered smaller. Uppercase characters precede lowercase characters.';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_EQUAL =	'Tests whether text strings are identical, ie., have the same $ characters in the same order. This is different from ordinary = $ in the case where the text strings are numbers: 123 and 0123 are = $ but not text =.';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_NEQ =	'Tests whether text strings are different, ie., don\'t have the same  $ characters in the same order. This is different from ordinary ≠  $ in the case where the text strings are numbers: 123 and 0123 are text ≠  $ but are mathematically =.';
    Blockly.Msg.LANG_TEXT_COMPARE_TOOLTIP_GT =	'Reports whether text1 is lexicographically greater than text2. $ if one text is the prefix of the other, the shorter text is considered smaller. $ Uppercase characters precede lowercase characters.';
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_TOOLTIP =	'Produces text, like a text block.  The difference is that the   $ text is not easily discoverable by examining the app's APK.  Use this when creating apps   $ to distribute that include confidential information, for example, API keys.    $ Warning: This provides only very low security against expert adversaries.';
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE =	'Obfuscated Text';
    Blockly.Msg.LANG_TEXT_TEXT_OBFUSCATE_HELPURL =	'https://docs.kodular.io/blocks/text#obfuscatetext';

    /*Blockly.Msg.LANG_TEXT_ENDSTRING_HELPURL =	'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_ENDSTRING_INPUT =	'letters in text';
     Blockly.Msg.LANG_TEXT_ENDSTRING_TOOLTIP =	'Returns specified number of letters at the beginning or end of the text.';
     Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_FIRST =	'first';
     Blockly.Msg.LANG_TEXT_ENDSTRING_OPERATOR_LAST =	'last';*/

    /*Blockly.Msg.LANG_TEXT_INDEXOF_HELPURL =	'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_INDEXOF_TITLE_FIND =	'find';
     Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_OCCURRENCE =	'occurrence of text';
     Blockly.Msg.LANG_TEXT_INDEXOF_INPUT_INTEXT =	'in text';
     Blockly.Msg.LANG_TEXT_INDEXOF_TOOLTIP =	'Returns the index of the first/last occurrence $ ' +
     'of first text in the second text. $ ' +
     'Returns 0 if text is not found.';
     Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_FIRST =	'first';
     Blockly.Msg.LANG_TEXT_INDEXOF_OPERATOR_LAST =	'last';*/

    /*Blockly.Msg.LANG_TEXT_CHARAT_HELPURL =	'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_TEXT_CHARAT_INPUT_AT =	'letter at';
     Blockly.Msg.LANG_TEXT_CHARAT_INPUT_INTEXT =	'in text';
     Blockly.Msg.LANG_TEXT_CHARAT_TOOLTIP =	'Returns the letter at the specified position.';*/

    Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_UPPERCASE =	'upcase';
    Blockly.Msg.LANG_TEXT_CHANGECASE_OPERATOR_DOWNCASE =	'downcase';
    Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_UPPERCASE =	'Returns a copy of its text string argument converted to uppercase.';
    Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_UPPERCASE =	'https://docs.kodular.io/blocks/text#upcase';
    Blockly.Msg.LANG_TEXT_CHANGECASE_TOOLTIP_DOWNCASE =	'Returns a copy of its text string argument converted to lowercase.';
    Blockly.Msg.LANG_TEXT_CHANGECASE_HELPURL_DOWNCASE =	'https://docs.kodular.io/blocks/text#downcase';

    Blockly.Msg.LANG_TEXT_TRIM_HELPURL =	'https://docs.kodular.io/blocks/text#trim';
    Blockly.Msg.LANG_TEXT_TRIM_TITLE_TRIM =	'trim';
    Blockly.Msg.LANG_TEXT_TRIM_TOOLTIP =	'Returns a copy of its text string arguments with any $ leading or trailing spaces removed.';

    Blockly.Msg.LANG_TEXT_STARTS_AT_HELPURL =	'https://docs.kodular.io/blocks/text#startsat';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_STARTS_AT =	'starts at';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_TEXT =	'text';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT_PIECE =	'piece';
    Blockly.Msg.LANG_TEXT_STARTS_AT_INPUT =	'starts at  text %1 piece %2';
    Blockly.Msg.LANG_TEXT_STARTS_AT_TOOLTIP =	'Returns the starting index of the piece in the text. $ where index 1 denotes the beginning of the text. Returns 0 if the $ piece is not in the text.';

    Blockly.Msg.LANG_TEXT_CONTAINS_HELPURL =	'https://docs.kodular.io/blocks/text#contains';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_CONTAINS =	'contains';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_TEXT =	'text';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT_PIECE =	'piece';
    Blockly.Msg.LANG_TEXT_CONTAINS_INPUT =	'contains  text %1 piece %2';
    Blockly.Msg.LANG_TEXT_CONTAINS_TOOLTIP =	'Tests whether the piece is contained in the text.';

    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL =	'';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_TEXT =	'text';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT =	'at';
    Blockly.Msg.LANG_TEXT_SPLIT_INPUT_AT_LIST =	'at (list)';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST =	'split at first';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_FIRST_OF_ANY =	'split at first of any';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT =	'split';
    Blockly.Msg.LANG_TEXT_SPLIT_OPERATOR_SPLIT_AT_ANY =	'split at any';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST =	'Divides the given text into two pieces using the location of the first occurrence of  $ the text \'at\' as the dividing point, and returns a two-item list consisting of the piece  $ before the dividing point and the piece after the dividing point.  $ Splitting "apple,banana,cherry,dogfood" with a comma as the splitting point  $ returns a list of two items: the first is the text "apple" and the second is the text  $ "banana,cherry,dogfood".  $ Notice that the comma after "apple" does not appear in the result,  $ because that is the dividing point.';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST =	'https://docs.kodular.io/blocks/text#splitat';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_FIRST_OF_ANY =	'Divides the given text into a two-item list, using the first location of any item  $ in the list \'at\' as the dividing point.  $  $ Splitting "I love apples bananas apples grapes" by the list "(ba,ap)" returns  $ a list of two items, the first being "I love" and the second being  $ "ples bananas apples grapes."';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_FIRST_OF_ANY =	'https://docs.kodular.io/blocks/text#splitatfirstofany';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT =	'Divides text into pieces using the text \'at\' as the dividing points and produces a list of the results.   $ Splitting "one,two,three,four" at "," (comma) returns the list "(one two three four)".  $ Splitting "one-potato,two-potato,three-potato,four" at "-potato", returns the list "(one two three four)".';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT =	'https://docs.kodular.io/blocks/text#split';
    Blockly.Msg.LANG_TEXT_SPLIT_TOOLTIP_SPLIT_AT_ANY =	'Divides the given text into a list, using any of the items in the list \'at\' as the  $ dividing point, and returns a list of the results.  $ Splitting "appleberry,banana,cherry,dogfood" with \'at\' as the two-element list whose  $ first item is a comma and whose second item is "rry" returns a list of four items:  $ "(applebe banana che dogfood)".';
    Blockly.Msg.LANG_TEXT_SPLIT_HELPURL_SPLIT_AT_ANY =	'https://docs.kodular.io/blocks/text#splitatany';

    /*.LANG_TEXT_PRINT_HELPURL =	'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode91.html';
     Blockly.Msg.LANG_TEXT_PRINT_TITLE_PRINT =	'print';
     Blockly.Msg.LANG_TEXT_PRINT_TOOLTIP =	'Print the specified text, number or other value.';*/

    /*Blockly.Msg.LANG_TEXT_PROMPT_HELPURL =	'http://www.liv.ac.uk/HPC/HTMLF90Course/HTMLF90CourseNotesnode92.html';
     Blockly.Msg.LANG_TEXT_PROMPT_TITLE_PROMPT_FOR =	'prompt for';
     Blockly.Msg.LANG_TEXT_PROMPT_TITILE_WITH_MESSAGE =	'with message';
     Blockly.Msg.LANG_TEXT_PROMPT_TOOLTIP =	'Prompt for user input with the specified text.';
     Blockly.Msg.LANG_TEXT_PROMPT_TYPE_TEXT =	'text';
     Blockly.Msg.LANG_TEXT_PROMPT_TYPE_NUMBER =	'number';*/

    Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_HELPURL =	'https://docs.kodular.io/blocks/text#splitspaces';
    Blockly.Msg.LANG_TEXT_SPLIT_AT_SPACES_TITLE =	'split at spaces';
    Blockly.Msg.LANG_TEXT_SPLIT_AT_TOOLTIP =	'Split the text into pieces separated by spaces.';

    Blockly.Msg.LANG_TEXT_SEGMENT_HELPURL =	'https://docs.kodular.io/blocks/text#segment';
    Blockly.Msg.LANG_TEXT_SEGMENT_TITLE_SEGMENT =	'segment';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_START =	'start';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_LENGTH =	'length';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT_TEXT =	'text';
    Blockly.Msg.LANG_TEXT_SEGMENT_INPUT =	'segment  text %1 start %2 length %3';
    Blockly.Msg.LANG_TEXT_SEGMENT_AT_TOOLTIP =	'Extracts the segment of the given length from the given text $ starting from the given text starting from the given position. Position $ 1 denotes the beginning of the text.';

    Blockly.Msg.LANG_TEXT_REPLACE_ALL_HELPURL =	'https://docs.kodular.io/blocks/text#replaceall';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_SEGMENT =	'segment';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_TEXT =	'text';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_TITLE_REPLACE_ALL =	'replace all';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT_REPLACEMENT =	'replacement';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_INPUT =	'replace all text %1 segment %2 replacement %3';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_TOOLTIP =	'Returns a new text obtained by replacing all occurrences $ of the segment with the replacement.';

    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_HELPURL =	'https://docs.kodular.io/blocks/text#isstring';
    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_TITLE =	'is string?';
    Blockly.Msg.LANG_TEXT_TEXT_IS_STRING_TOOLTIP =	'Returns true if input is a string.';

    Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_HELPURL =	'';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_INPUT_TEXT =	'in text';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_INPUT_ORDER_PREFIX =	'preferring';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_INPUT_ORDER =	'order';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_OPERATOR_LONGEST_STRING_FIRST =	'longest string first';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_OPERATOR_DICTIONARY_ORDER =	'dictionary';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_TITLE =	'replace all mappings';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_HELPURL_LONGEST_STRING_FIRST =	'https://docs.kodular.io/blocks/text#replaceallmappingslongeststring';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_TOOLTIP_LONGEST_STRING_FIRST =	'Returns a new text obtained by replacing all occurrences $ defined by the input dictionary keys with the values of the corresponding keys. $ In case of a choice between replacing one key or the other, the longest key is replaced first.';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_HELPURL_DICTIONARY_ORDER =	'https://docs.kodular.io/blocks/text#replaceallmappingsdictionary';
    Blockly.Msg.LANG_TEXT_REPLACE_ALL_MAPPINGS_TOOLTIP_DICTIONARY_ORDER =	'Returns a new text obtained by replacing all occurrences $ defined by the input dictionary keys with the values of the corresponding keys. $ In case of a choice between replacing one key or the other, the element that occurs first  $ in the dictionary is replaced first.';

    Blockly.Msg.LANG_TEXT_REVERSE_HELPURL =	'https://docs.kodular.io/blocks/text#reverse';
    Blockly.Msg.LANG_TEXT_REVERSE_INPUT =	'reverse';
    Blockly.Msg.LANG_TEXT_REVERSE_TOOLTIP =	'Reverse the given text.';

// Lists Blocks.
    Blockly.Msg.LANG_CATEGORY_LISTS =	'Lists';
//Blockly.Msg.LANG_LISTS_CREATE_EMPTY_HELPURL =	'http://en.wikipedia.org/wiki/Linked_list#Empty_lists';
    Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TITLE =	'create empty list';
//Blockly.Msg.LANG_LISTS_CREATE_EMPTY_TOOLTIP =	'Returns a list, of length 0, containing no data records';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_EMPTY_HELPURL =	'https://docs.kodular.io/blocks/lists#makealist';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_TITLE_MAKE_LIST =	'make a list';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_TOOLTIP =	'Create a list with any number of items.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TITLE_ADD =	'list';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_CONTAINER_TOOLTIP =	'Add, remove, or reorder sections to reconfigure this list block.';

    Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TITLE =	'item';
    Blockly.Msg.LANG_LISTS_CREATE_WITH_ITEM_TOOLTIP =	'Add an item to the list.';

    Blockly.Msg.LANG_LISTS_ADD_ITEM_TITLE =	'item';
    Blockly.Msg.LANG_LISTS_ADD_ITEM_TOOLTIP =	'Add an item to the list.';
    Blockly.Msg.LANG_LISTS_ADD_ITEM_HELPURL =	'https://docs.kodular.io/blocks/lists#additems';

    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_HELPURL =	'https://docs.kodular.io/blocks/lists#selectlistitem';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TITLE_SELECT =	'select list item';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_LIST =	'list';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT_INDEX =	'index';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_INPUT =	'select list item  list %1 index %2';
    Blockly.Msg.LANG_LISTS_SELECT_ITEM_TOOLTIP =	'Returns the item at position index in the list.';

    Blockly.Msg.LANG_LISTS_IS_IN_HELPURL =	'https://docs.kodular.io/blocks/lists#inlist';
    Blockly.Msg.LANG_LISTS_IS_IN_TITLE_IS_IN =	'is in list?';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT_THING =	'thing';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT_LIST =	'list';
    Blockly.Msg.LANG_LISTS_IS_IN_INPUT =	'is in list? thing %1 list %2';
    Blockly.Msg.LANG_LISTS_IS_IN_TOOLTIP =	'Returns true if the the thing is an item in the list, and false if not.';

    Blockly.Msg.LANG_LISTS_POSITION_IN_HELPURL =	'https://docs.kodular.io/blocks/lists#indexinlist';
    Blockly.Msg.LANG_LISTS_POSITION_IN_TITLE_POSITION =	'index in list';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_THING =	'thing';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT_LIST =	'list';
    Blockly.Msg.LANG_LISTS_POSITION_IN_INPUT =	'index in list  thing %1 list %2';
    Blockly.Msg.LANG_LISTS_POSITION_IN_TOOLTIP =	'Find the position of the thing in the list. If it\'s not in the list, return 0.';

    Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_HELPURL =	'https://docs.kodular.io/blocks/lists#pickrandomitem';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_TITLE_PICK_RANDOM =	'pick a random item';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_ITEM_INPUT_LIST =	'list';
    Blockly.Msg.LANG_LISTS_PICK_RANDOM_TOOLTIP =	'Pick an item at random from the list.';

    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_HELPURL =	'https://docs.kodular.io/blocks/lists#replace';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TITLE_REPLACE =	'replace list item';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_LIST =	'list';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_INDEX =	'index';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT_REPLACEMENT =	'replacement';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_INPUT =	'replace list item  list %1 index %2 replacement %3';
    Blockly.Msg.LANG_LISTS_REPLACE_ITEM_TOOLTIP =	'Replaces the nth item in a list.';

    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_HELPURL =	'https://docs.kodular.io/blocks/lists#removeitem';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TITLE_REMOVE =	'remove list item';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_LIST =	'list';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT_INDEX =	'index';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_INPUT =	'remove list item  list %1 index %2';
    Blockly.Msg.LANG_LISTS_REMOVE_ITEM_TOOLTIP =	'Removes the item at the specified position from the list.';

    /*Blockly.Msg.LANG_LISTS_REPEAT_HELPURL =	'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_REPEAT_TITLE_CREATE =	'create list with item';
     Blockly.Msg.LANG_LISTS_REPEAT_INPUT_REPEATED =	'repeated';
     Blockly.Msg.LANG_LISTS_REPEAT_INPUT_TIMES =	'times';
     Blockly.Msg.LANG_LISTS_REPEAT_TOOLTIP =	'Creates a list consisting of the given value $ ' +
     'repeated the specified number of times.';*/

    Blockly.Msg.LANG_LISTS_LENGTH_HELPURL =	'https://docs.kodular.io/blocks/lists#lengthoflist';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LENGTH =	'length of list';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT_LIST =	'list';
    Blockly.Msg.LANG_LISTS_LENGTH_INPUT =	'length of list list %1';
    Blockly.Msg.LANG_LISTS_LENGTH_TOOLTIP =	'Counts the number of items in a list.';

    Blockly.Msg.LANG_LISTS_APPEND_LIST_HELPURL =	'https://docs.kodular.io/blocks/lists#append';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_TITLE_APPEND =	'append to list';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST1 =	'list1';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT_LIST2 =	'list2';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_INPUT =	'append to list  list1 %1 list2 %2';
    Blockly.Msg.LANG_LISTS_APPEND_LIST_TOOLTIP =	'Appends all the items in list2 onto the end of list1. After the append, list1 will include these additional elements, but list2 will be unchanged.';

    Blockly.Msg.LANG_LISTS_ADD_ITEMS_HELPURL =	'https://docs.kodular.io/blocks/lists#additems';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_TITLE_ADD =	'add items to list';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_LIST =	'list';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT_ITEM =	'item';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_INPUT =	'add items to list list %1 item %2';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_TOOLTIP =	'Adds items to the end of a list.';

    Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TITLE_ADD =	'list';
    Blockly.Msg.LANG_LISTS_ADD_ITEMS_CONTAINER_TOOLTIP =	'Add, remove, or reorder sections to reconfigure this list block.';

    Blockly.Msg.LANG_LISTS_COPY_HELPURL =	'https://docs.kodular.io/blocks/lists#copy';
    Blockly.Msg.LANG_LISTS_COPY_TITLE_COPY =	'copy list';
    Blockly.Msg.LANG_LISTS_COPY_INPUT_LIST =	'list';
    Blockly.Msg.LANG_LISTS_COPY_TOOLTIP =	'Makes a copy of a list, including copying all sublists';

    Blockly.Msg.LANG_LISTS_IS_LIST_HELPURL =	'https://docs.kodular.io/blocks/lists#isalist';
    Blockly.Msg.LANG_LISTS_IS_LIST_TITLE_IS_LIST =	'is a list?';
    Blockly.Msg.LANG_LISTS_IS_LIST_INPUT_THING =	'thing';
    Blockly.Msg.LANG_LISTS_IS_LIST_TOOLTIP =	'Tests if something is a list.';

    Blockly.Msg.LANG_LISTS_REVERSE_HELPURL =	'https://docs.kodular.io/blocks/lists#reverse';
    Blockly.Msg.LANG_LISTS_REVERSE_TITLE_REVERSE =	'reverse list';
    Blockly.Msg.LANG_LISTS_REVERSE_INPUT_LIST =	'list';
    Blockly.Msg.LANG_LISTS_REVERSE_TOOLTIP =	'Reverses the order of input list and returns it as a new list.';

    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_HELPURL =	'https://docs.kodular.io/blocks/lists#listtocsvrow';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TITLE_TO_CSV =	'list to csv row';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_INPUT_LIST =	'list';
    Blockly.Msg.LANG_LISTS_TO_CSV_ROW_TOOLTIP =	'Interprets the list as a row of a table and returns a CSV \(comma-separated value\) text representing the row. Each item in the row list is considered to be a field, and is quoted with double-quotes in the resulting CSV text. Items are separated by commas. The returned row text does not have a line separator at the end.';

    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_HELPURL =	'https://docs.kodular.io/blocks/lists#listfromcsvrow';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TITLE_FROM_CSV =	'list from csv row';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_INPUT_TEXT =	'text';
    Blockly.Msg.LANG_LISTS_FROM_CSV_ROW_TOOLTIP =	'Parses a text as a CSV \(comma-separated value\) formatted row to produce a list of fields. It is an error for the row text to contain unescaped newlines inside fields \(effectively, multiple lines\). It is okay for the row text to end in a single newline or CRLF.';

    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_HELPURL =	'https://docs.kodular.io/blocks/lists#listtocsvtable';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TITLE_TO_CSV =	'list to csv table';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_INPUT_LIST =	'list';
    Blockly.Msg.LANG_LISTS_TO_CSV_TABLE_TOOLTIP =	'Interprets the list as a table in row-major format and returns a CSV \(comma-separated value\) text representing the table. Each item in the list should itself be a list representing a row of the CSV table. Each item in the row list is considered to be a field, and is quoted with double-quotes in the resulting CSV text. In the returned text, items in rows are separated by commas and rows are separated by CRLF \(\\r\ $ \).';

    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_HELPURL =	'https://docs.kodular.io/blocks/lists#listfromcsvtable';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TITLE_FROM_CSV =	'list from csv table';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_INPUT_TEXT =	'text';
    Blockly.Msg.LANG_LISTS_FROM_CSV_TABLE_TOOLTIP =	'Parses a text as a CSV \(comma-separated value\) formatted table to produce a list of rows, each of which is a list of fields. Rows can be separated by newlines \(\ $ \) or CRLF \(\\r\ $ \).';

    Blockly.Msg.LANG_LISTS_INSERT_ITEM_HELPURL =	'https://docs.kodular.io/blocks/lists#insert';
    Blockly.Msg.LANG_LISTS_INSERT_TITLE_INSERT_LIST =	'insert list item';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_LIST =	'list';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_INDEX =	'index';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT_ITEM =	'item';
    Blockly.Msg.LANG_LISTS_INSERT_INPUT =	'insert list item  list %1 index %2 item %3';
    Blockly.Msg.LANG_LISTS_INSERT_TOOLTIP =	'Insert an item into a list at the specified position.';

    Blockly.Msg.LANG_LISTS_IS_EMPTY_HELPURL =	'https://docs.kodular.io/blocks/lists#islistempty';
    Blockly.Msg.LANG_LISTS_TITLE_IS_EMPTY =	'is list empty?';
    Blockly.Msg.LANG_LISTS_INPUT_LIST =	'list';
    Blockly.Msg.LANG_LISTS_IS_EMPTY_TOOLTIP =	'Returns true if the list is empty.';

    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_HELPURL =	'https://docs.kodular.io/blocks/lists#lookuppairs';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TITLE_LOOKUP_IN_PAIRS =	'look up in pairs';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_KEY =	'key';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_PAIRS =	'pairs';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT_NOT_FOUND =	'notFound';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_INPUT =	'look up in pairs  key %1 pairs %2 notFound %3';
    Blockly.Msg.LANG_LISTS_LOOKUP_IN_PAIRS_TOOLTIP =	'Returns the value associated with the key in the list of pairs';

    // Join With Separator block
    Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_HELPURL =	'https://docs.kodular.io/blocks/lists#joinwithseparator';
    Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_TITLE =	'join with separator';
    Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_SEPARATOR =	'separator';
    Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_LIST =	'list';
    Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_INPUT =	'join items using separator %1 list %2';
    Blockly.Msg.LANG_LISTS_JOIN_WITH_SEPARATOR_TOOLTIP =	'Returns text with list elements joined with separator';

    /*Blockly.Msg.LANG_LISTS_INDEX_OF_HELPURL =	'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_INDEX_OF_TITLE_FIND =	'find';
     Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_OCCURRENCE =	'occurrence of item';
     Blockly.Msg.LANG_LISTS_INDEX_OF_INPUT_IN_LIST =	'in list';
     Blockly.Msg.LANG_LISTS_INDEX_OF_TOOLTIP =	'Returns the index of the first/last occurrence $ ' +
     'of the item in the list. $ ' +
     'Returns 0 if text is not found.';
     Blockly.Msg.LANG_LISTS_INDEX_OF_FIRST =	'first';
     Blockly.Msg.LANG_LISTS_INDEX_OF_LAST =	'last';

     Blockly.Msg.LANG_LISTS_GET_INDEX_HELPURL =	'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_GET_INDEX_TITLE_GET =	'get item at';
     Blockly.Msg.LANG_LISTS_GET_INDEX_INPUT_IN_LIST =	'in list';
     Blockly.Msg.LANG_LISTS_GET_INDEX_TOOLTIP =	'Returns the value at the specified position in a list.';

     Blockly.Msg.LANG_LISTS_SET_INDEX_HELPURL =	'http://publib.boulder.ibm.com/infocenter/lnxpcomp/v8v101/index.jsp?topic=%2Fcom.ibm.xlcpp8l.doc%2Flanguage%2Fref%2Farsubex.htm';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_SET =	'set item at';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_IN_LIST =	'in list';
     Blockly.Msg.LANG_LISTS_SET_INDEX_INPUT_TO =	'to';
     Blockly.Msg.LANG_LISTS_SET_INDEX_TOOLTIP =	'Sets the value at the specified position in a list.';*/

     // Dictionaries Blocks
     Blockly.Msg.LANG_CATEGORY_DICTIONARIES =	'Dictionaries';
     Blockly.Msg.LANG_DICTIONARIES_CREATE_EMPTY_TITLE =	'create empty dictionary';
     Blockly.Msg.LANG_DICTIONARIES_CREATE_WITH_EMPTY_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#create-empty-dictionary';

     Blockly.Msg.LANG_DICTIONARIES_MAKE_DICTIONARY_TITLE =	'make a dictionary';
     Blockly.Msg.LANG_DICTIONARIES_MAKE_DICTIONARY_TOOLTIP =	'Create a dictionary.';
     Blockly.Msg.LANG_DICTIONARIES_MAKE_DICTIONARY_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#make-a-dictionary';

     Blockly.Msg.LANG_DICTIONARIES_CREATE_WITH_CONTAINER_TITLE_ADD =	'dict';
     Blockly.Msg.LANG_DICTIONARIES_CREATE_WITH_CONTAINER_TOOLTIP =	'Add, remove, or reorder sections to reconfigure this dictionary block.';

     Blockly.Msg.LANG_DICTIONARIES_PAIR_TITLE =	'pair';
     Blockly.Msg.LANG_DICTIONARIES_PAIR_TOOLTIP =	'Add a pair to the dictionary.';
     Blockly.Msg.LANG_DICTIONARIES_PAIR_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#pair';

     Blockly.Msg.LANG_DICTIONARIES_PAIR_INPUT =	'key %1 value %2';
     Blockly.Msg.LANG_DICTIONARIES_PAIR_TOOLTIP =	'Creates a pair with the key and value provided.';
     Blockly.Msg.LANG_DICTIONARIES_MAKE_PAIR_TITLE =	'make a pair';

     Blockly.Msg.LANG_DICTIONARIES_SET_PAIR_INPUT =	'set value for key %1 in dictionary %2 to %3';
     Blockly.Msg.LANG_DICTIONARIES_SET_PAIR_TITLE =	'set dict pair';
     Blockly.Msg.LANG_DICTIONARIES_SET_PAIR_TOOLTIP =	'Set a pair in a dictionary.';
     Blockly.Msg.LANG_DICTIONARIES_SET_PAIR_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#set-value-for-key';

     Blockly.Msg.LANG_DICTIONARIES_DELETE_PAIR_INPUT =	'remove entry for key %2 from dictionary %1';
     Blockly.Msg.LANG_DICTIONARIES_DELETE_PAIR_TITLE =	'remove entry for key from dictionary';
     Blockly.Msg.LANG_DICTIONARIES_DELETE_PAIR_TOOLTIP =	'Delete a pair in a dictionary given its key.';
     Blockly.Msg.LANG_DICTIONARIES_DELETE_PAIR_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#delete-entry-for-key';

     Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_LOOKUP_INPUT =	'get value for key %1 in dictionary %2 or if not found %3';
     Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_LOOKUP_TOOLTIP =	'Returns the value in the dictionary associated with the key.';
     Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_LOOKUP_TITLE =	'look up in a dict';
     Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_LOOKUP_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#get-value-for-key';

     Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_LOOKUP_INPUT =	'get value at key path %1 in dictionary %2 or if not found %3';
     Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_LOOKUP_TOOLTIP =	'Returns the value in the nested dictionary.';
     Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_LOOKUP_TITLE =	'recursive look up in a dict';
     Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_LOOKUP_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#get-value-at-key-path';

     Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_SET_INPUT =	'set value for key path %1 in dictionary %2 to %3';
     Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_SET_TOOLTIP =	'Sets the value at a path in a tree starting from the given dictionary.';
     Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_SET_TITLE =	'set value at key path of dictionary';
     Blockly.Msg.LANG_DICTIONARIES_DICTIONARY_RECURSIVE_SET_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#set-value-for-key-path';

     Blockly.Msg.LANG_DICTIONARIES_GETTERS_TITLE =	'get';
     Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_TITLE =	'keys';
     Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_INPUT =	'dictionary';
     Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_TOOLTIP =	'Returns a list of all of the keys in the dictionary.';
     Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#get-keys';
     Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_TYPEBLOCK =	'get keys';

     Blockly.Msg.LANG_DICTIONARIES_GET_VALUES_TITLE =	'values';
     Blockly.Msg.LANG_DICTIONARIES_GET_VALUES_INPUT =	'dictionary';
     Blockly.Msg.LANG_DICTIONARIES_GET_VALUES_TOOLTIP =	'Returns a list of all of the values in the dictionary.';
     Blockly.Msg.LANG_DICTIONARIES_GET_VALUES_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#get-values';
     Blockly.Msg.LANG_DICTIONARIES_GET_KEYS_TYPEBLOCK =	'get values';

     Blockly.Msg.LANG_DICTIONARIES_IS_KEY_IN_INPUT =	'is key in dictionary? key %1 dictionary %2';
     Blockly.Msg.LANG_DICTIONARIES_IS_KEY_IN_TOOLTIP =	'Check if a key is in a dictionary.';
     Blockly.Msg.LANG_DICTIONARIES_IS_KEY_IN_TITLE =	'is key in dict?';
     Blockly.Msg.LANG_DICTIONARIES_IS_KEY_IN_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#is-key-in-dictionary';

     Blockly.Msg.LANG_DICTIONARIES_LENGTH_TITLE =	'size of dictionary';
     Blockly.Msg.LANG_DICTIONARIES_LENGTH_INPUT =	'dictionary';
     Blockly.Msg.LANG_DICTIONARIES_LENGTH_TOOLTIP =	'Returns the number of key-value pairs in the dictionary.';
     Blockly.Msg.LANG_DICTIONARIES_LENGTH_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#size-of-dictionary';

     Blockly.Msg.LANG_DICTIONARIES_ALIST_TO_DICT_TITLE =	'list of pairs to dictionary';
     Blockly.Msg.LANG_DICTIONARIES_ALIST_TO_DICT_INPUT =	'pairs';
     Blockly.Msg.LANG_DICTIONARIES_ALIST_TO_DICT_TOOLTIP =	'Converts a list of pairs to a dictionary.';
     Blockly.Msg.LANG_DICTIONARIES_ALIST_TO_DICT_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#list-of-pairs-to-dictionary';

     Blockly.Msg.LANG_DICTIONARIES_DICT_TO_ALIST_TITLE =	'dictionary to list of pairs';
     Blockly.Msg.LANG_DICTIONARIES_DICT_TO_ALIST_INPUT =	'dictionary';
     Blockly.Msg.LANG_DICTIONARIES_DICT_TO_ALIST_TOOLTIP =	'Converts a dictionary to a list of pairs.';
     Blockly.Msg.LANG_DICTIONARIES_DICT_TO_ALIST_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#dictionary-to-list-of-pairs';

     Blockly.Msg.LANG_DICTIONARIES_COPY_TITLE =	'copy dictionary';
     Blockly.Msg.LANG_DICTIONARIES_COPY_INPUT =	'dictionary';
     Blockly.Msg.LANG_DICTIONARIES_COPY_TOOLTIP =	'Returns a shallow copy of the dictionary';
     Blockly.Msg.LANG_DICTIONARIES_COPY_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#copy-dictionary';

     Blockly.Msg.LANG_DICTIONARIES_COMBINE_DICTS_INPUT =	'merge into dictionary %1 from dictionary %2';
     Blockly.Msg.LANG_DICTIONARIES_COMBINE_DICTS_TOOLTIP =	'Copies the pairs of the "From" dictionary into the "To" dictionary.';
     Blockly.Msg.LANG_DICTIONARIES_COMBINE_DICTS_TITLE =	'combine dictionaries';
     Blockly.Msg.LANG_DICTIONARIES_COMBINE_DICTS_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#merge-into-dictionary';

     Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_TITLE =	'list by walking key path %1 in dictionary or list %2';
     Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_TOOLTIP =	'Starts from the given dictionary and follows it and its children\'s keys based on the given path, returning a list of nodes found at the end of the walk.';
     Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#list-by-walking-key-path';

     Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_ALL_TITLE =	'walk all at level';
     Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_ALL_TOOLTIP =	'Used in the list by walking key path block, explores every node at a given level on the walk.';
     Blockly.Msg.LANG_DICTIONARIES_WALK_TREE_ALL_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#walk-all-at-level';

     Blockly.Msg.LANG_DICTIONARIES_IS_DICT_TITLE =	'is a dictionary? %1';
     Blockly.Msg.LANG_DICTIONARIES_IS_DICT_TOOLTIP =	'Tests if something is a dictionary.';
     Blockly.Msg.LANG_DICTIONARIES_IS_DICT_HELPURL =	'https://docs.kodular.io/blocks/dictionaries#is-a-dictionary';

// Variables Blocks.
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_HELPURL =	'https://docs.kodular.io/blocks/variables#global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TITLE_INIT =	'initialize global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_NAME =	'name';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TO =	'to';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_COLLAPSED_TEXT =	'global';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_DECLARATION_TOOLTIP =	'Creates a global variable and gives it the value of the attached blocks.';
    Blockly.Msg.LANG_VARIABLES_GLOBAL_PREFIX =	'global';

    Blockly.Msg.LANG_VARIABLES_GET_HELPURL =	'https://docs.kodular.io/blocks/variables#get';
    Blockly.Msg.LANG_VARIABLES_GET_TITLE_GET =	'get';
    /* Blockly.Msg.LANG_VARIABLES_GET_INPUT_ITEM =	'item'; */ // [lyn, 10/14/13] unused
    Blockly.Msg.LANG_VARIABLES_GET_COLLAPSED_TEXT =	'get';
    Blockly.Msg.LANG_VARIABLES_GET_TOOLTIP =	'Returns the value of this variable.';

    Blockly.Msg.LANG_VARIABLES_SET_HELPURL =	'https://docs.kodular.io/blocks/variables#set';
    Blockly.Msg.LANG_VARIABLES_SET_TITLE_SET =	'set';
    /* Blockly.Msg.LANG_VARIABLES_SET_INPUT_ITEM =	'item'; */ // [lyn, 10/14/13] unused
    Blockly.Msg.LANG_VARIABLES_SET_TITLE_TO =	'to';
    Blockly.Msg.LANG_VARIABLES_SET_COLLAPSED_TEXT =	'set';
    Blockly.Msg.LANG_VARIABLES_SET_TOOLTIP =	'Sets this variable to be equal to the input.';
    Blockly.Msg.LANG_VARIABLES_VARIABLE =	'variable';

    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_HELPURL =	'https://docs.kodular.io/blocks/variables#do';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TITLE_INIT =	'initialize local';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_DEFAULT_NAME =	'name';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_INPUT_TO =	'to';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_IN_DO =	'in';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_COLLAPSED_TEXT =	'local';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TOOLTIP =	'Allows you to create variables that are only accessible in the do part of this block.';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_TRANSLATED_NAME =	'initialize local in do';

    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_HELPURL =	'https://docs.kodular.io/blocks/variables#return';
    /* // These don't differ between the statement and expression
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TITLE_INIT =	'initialize local';
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_NAME =	'name';
     Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_INPUT_TO =	'to';
     */
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_IN_RETURN =	'in';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_COLLAPSED_TEXT =	'local';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TOOLTIP =	'Allows you to create variables that are only accessible in the return part of this block.';
    Blockly.Msg.LANG_VARIABLES_LOCAL_DECLARATION_EXPRESSION_TRANSLATED_NAME =	'initialize local in return';

    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TITLE_LOCAL_NAMES =	'local names';
    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_CONTAINER_TOOLTIP =	'';

    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_TITLE_NAME =	'name';
    Blockly.Msg.LANG_VARIABLES_LOCAL_MUTATOR_ARG_DEFAULT_VARIABLE =	'x';

// Procedures Blocks.
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_HELPURL =	'https://docs.kodular.io/blocks/procedures#do';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DEFINE =	'to';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE =	'procedure';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO =	'do';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_COLLAPSED_PREFIX =	'to';
    Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_TOOLTIP =	'A procedure that does not return a value.';

    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_HELPURL =	'https://docs.kodular.io/blocks/procedures#doreturn';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_THEN_RETURN =	'result';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_DO =	'do';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_RETURN =	'result';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_TOOLTIP =	'Runs the blocks in \'do\' and returns a statement. Useful if you need to run a procedure before returning a value to a variable.';
    Blockly.Msg.LANG_PROCEDURES_DOTHENRETURN_COLLAPSED_TEXT =	'do/result';

    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_HELPURL =	'https://docs.kodular.io/blocks/procedures#return';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DEFINE =	'to';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_PROCEDURE =	Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_PROCEDURE;
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_DO =	Blockly.Msg.LANG_PROCEDURES_DEFNORETURN_DO;
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_RETURN =	'result';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_COLLAPSED_PREFIX =	'to';
    Blockly.Msg.LANG_PROCEDURES_DEFRETURN_TOOLTIP =	'A procedure returning a result value.';

    Blockly.Msg.LANG_PROCEDURES_DEF_DUPLICATE_WARNING =	'Warning: $ This procedure has $ duplicate inputs.';

    Blockly.Msg.LANG_PROCEDURES_GET_HELPURL =	'https://docs.kodular.io/blocks/procedures#get';

    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_HELPURL =	'https://docs.kodular.io/blocks/procedures#do';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL =	'call';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE =	'procedure';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_COLLAPSED_PREFIX =	'call';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TOOLTIP =	'Call a procedure with no return value.';
    Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_TRANSLATED_NAME =	'call no return';

    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_HELPURL =	'https://docs.kodular.io/blocks/procedures#return';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_CALL =	Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_CALL;
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_PROCEDURE =	Blockly.Msg.LANG_PROCEDURES_CALLNORETURN_PROCEDURE;
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_COLLAPSED_PREFIX =	'call';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TOOLTIP =	'Call a procedure with a return value.';
    Blockly.Msg.LANG_PROCEDURES_CALLRETURN_TRANSLATED_NAME =	'call return';

    Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TITLE =	'inputs';
    Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TITLE =	'input:';

    Blockly.Msg.LANG_PROCEDURES_HIGHLIGHT_DEF =	'Highlight Procedure';

    Blockly.Msg.LANG_PROCEDURES_MUTATORCONTAINER_TOOLTIP =	'';
    Blockly.Msg.LANG_PROCEDURES_MUTATORARG_TOOLTIP =	'';

// Components Blocks.
    Blockly.Msg.UNDEFINED_BLOCK_TOOLTIP =	'This block is not defined. Delete this block!';

    Blockly.Msg.LANG_COMPONENT_BLOCK_HELPURL =	'';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_WHEN =	'when';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TITLE_DO =	'do';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_EVENT_TITLE =	'when any';

    Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_HELPURL =	'';
    Blockly.Msg.LANG_COMPONENT_BLOCK_METHOD_TITLE_CALL =	'call';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_HELPURL =	'';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_CALL =	'call';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_METHOD_TITLE_FOR_COMPONENT =	'for component';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GETTER_HELPURL =	'';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_HELPURL =	'';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_GETTER_TITLE_OF_COMPONENT =	'of component';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_HELPURL =	'';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_SET =	'set';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SETTER_TITLE_TO =	'to';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_HELPURL =	'';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_SET =	'set';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_TO =	'to';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GENERIC_SETTER_TITLE_OF_COMPONENT =	'of component';

///////////////////
    /* HelpURLs for Component Blocks */

//User Interface Components
    Blockly.Msg.LANG_COMPONENT_BLOCK_BOTTOM_SHEET_HELPURL =	'https://docs.kodular.io/components/user-interface/bottom-sheet';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BOTTOM_SHEET_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/bottom-sheet';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BOTTOM_SHEET_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/bottom-sheet';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BOTTOM_SHEET_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/bottom-sheet';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_HELPURL =	'https://docs.kodular.io/components/user-interface/button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BUTTON_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/button';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CHAT_VIEW_HELPURL =	'https://docs.kodular.io/components/user-interface/chat-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHAT_VIEW_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/chat-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHAT_VIEW_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/chat-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHAT_VIEW_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/chat-view';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_HELPURL =	'https://docs.kodular.io/components/user-interface/checkbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/checkbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/checkbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHECKBOX_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/checkbox';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCULAR_PROGRESS_HELPURL =	'https://docs.kodular.io/components/user-interface/circular-progress';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCULAR_PROGRESS_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/circular-progress';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCULAR_PROGRESS_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/circular-progress';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCULAR_PROGRESS_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/circular-progress';

    Blockly.Msg.LANG_COMPONENT_BLOCK_DATE_PICKER_HELPURL =	'https://docs.kodular.io/components/user-interface/date-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DATE_PICKER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/date-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DATE_PICKER_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/date-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DATE_PICKER_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/date-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FLOATING_ACTION_BUTTON_HELPURL =	'https://docs.kodular.io/components/user-interface/floating-action-button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FLOATING_ACTION_BUTTON_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/floating-action-button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FLOATING_ACTION_BUTTON_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/floating-action-button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FLOATING_ACTION_BUTTON_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/floating-action-button';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_HELPURL =	'https://docs.kodular.io/components/user-interface/image';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/image';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/image';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/image';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_HELPURL =	'https://docs.kodular.io/components/user-interface/label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LABEL_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/label';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LINEAR_PROGRESSBAR_HELPURL =	'https://docs.kodular.io/components/user-interface/linear-progressbar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LINEAR_PROGRESSBAR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/linear-progressbar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LINEAR_PROGRESSBAR_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/linear-progressbar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LINEAR_PROGRESSBAR_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/linear-progressbar';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_HELPURL =	'https://docs.kodular.io/components/user-interface/list-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/list-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/list-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LISTPICKER_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/list-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_HELPURL =	'https://docs.kodular.io/components/user-interface/list-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/list-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/list-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/list-view';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_IMAGE_TEXT_HELPURL =	'https://docs.kodular.io/components/user-interface/list-view-image-and-text';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_IMAGE_TEXT_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/list-view-image-and-text';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_IMAGE_TEXT_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/list-view-image-and-text';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LIST_VIEW_IMAGE_TEXT_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/list-view-image-and-text';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_HELPURL =	'https://docs.kodular.io/components/user-interface/notifier';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/notifier';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/notifier';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFIER_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/notifier';

    Blockly.Msg.LANG_COMPONENT_BLOCK_RADIO_BUTTON_HELPURL =	'https://docs.kodular.io/components/user-interface/radio-button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RADIO_BUTTON_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/radio-button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RADIO_BUTTON_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/radio-button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RADIO_BUTTON_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/radio-button';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_HELPURL =	'https://docs.kodular.io/components/screen';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/screen';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_EVENTS_HELPURL =	'https://docs.kodular.io/components/screen';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREEN_METHODS_HELPURL =	'https://docs.kodular.io/components/screen';

    Blockly.Msg.LANG_COMPONENT_BLOCK_RATING_BAR_HELPURL =	'https://docs.kodular.io/components/user-interface/rating-bar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RATING_BAR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/rating-bar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RATING_BAR_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/rating-bar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RATING_BAR_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/rating-bar';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_HELPURL =	'https://docs.kodular.io/components/user-interface/slider';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/slider';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/slider';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SLIDER_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/slider';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SNACKBAR_HELPURL =	'https://docs.kodular.io/components/user-interface/snackbar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SNACKBAR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/snackbar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SNACKBAR_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/snackbar';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SNACKBAR_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/snackbar';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SPINNER_HELPURL =	'https://docs.kodular.io/components/user-interface/spinner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPINNER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/spinner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPINNER_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/spinner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPINNER_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/spinner';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SPOTLIGHT_HELPURL =	'https://docs.kodular.io/components/user-interface/spotlight';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPOTLIGHT_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/spotlight';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPOTLIGHT_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/spotlight';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPOTLIGHT_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/spotlight';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SWITCH_HELPURL =	'https://docs.kodular.io/components/user-interface/switch';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SWITCH_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/switch';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SWITCH_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/switch';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SWITCH_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/switch';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TAB_LAYOUT_HELPURL =	'https://docs.kodular.io/components/user-interface/tab-layout';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TAB_LAYOUT_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/tab-layout';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TAB_LAYOUT_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/tab-layout';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TAB_LAYOUT_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/tab-layout';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_HELPURL =	'https://docs.kodular.io/components/user-interface/textbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/textbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/textbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTBOX_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/textbox';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TIME_PICKER_HELPURL =	'https://docs.kodular.io/components/user-interface/time-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TIME_PICKER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/time-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TIME_PICKER_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/time-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TIME_PICKER_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/time-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_FLIPPER_HELPURL =	'https://docs.kodular.io/components/user-interface/view-flipper';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_FLIPPER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/view-flipper';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_FLIPPER_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/view-flipper';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_FLIPPER_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/view-flipper';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_PAGER_HELPURL =	'https://docs.kodular.io/components/user-interface/view-pager';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_PAGER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/view-pager';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_PAGER_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/view-pager';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIEW_PAGER_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/view-pager';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_HELPURL =	'https://docs.kodular.io/components/user-interface/web-viewer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/user-interface/webviewer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_EVENTS_HELPURL =	'https://docs.kodular.io/components/user-interface/webviewer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEBVIEWER_METHODS_HELPURL =	'https://docs.kodular.io/components/user-interface/webviewer';

//Layout components
    Blockly.Msg.LANG_COMPONENT_BLOCK_CARD_VIEW_HELPURL =	'https://docs.kodular.io/components/layout/card-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CARD_VIEW_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/layout/card-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CARD_VIEW_EVENTS_HELPURL =	'https://docs.kodular.io/components/layout/card-view';

    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_ARRANGEMENT_HELPURL =	'https://docs.kodular.io/components/layout/horizontal-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_ARRANGEMENT_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/layout/horizontal-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_ARRANGEMENT_EVENTS_HELPURL =	'https://docs.kodular.io/components/layout/horizontal-arrangement';

    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_SCROLL_ARRANGEMENT_HELPURL =	'https://docs.kodular.io/components/layout/horizontal-scroll-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_SCROLL_ARRANGEMENT_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/layout/horizontal-scroll-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_HORIZONTAL_SCROLL_ARRANGEMENT_EVENTS_HELPURL =	'https://docs.kodular.io/components/layout/horizontal-scroll-arrangement';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SIDE_MENU_LAYOUT_HELPURL =	'https://docs.kodular.io/components/layout/side-menu-layout';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SIDE_MENU_LAYOUT_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/layout/side-menu-layout';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SIDE_MENU_LAYOUT_EVENTS_HELPURL =	'https://docs.kodular.io/components/layout/side-menu-layout';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SIDE_MENU_LAYOUT_METHODS_HELPURL =	'https://docs.kodular.io/components/layout/side-menu-layout';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SPACE_HELPURL =	'https://docs.kodular.io/components/layout/space';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPACE_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/layout/space';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SURFACE_VIEW_HELPURL =	'https://docs.kodular.io/components/layout/surface-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SURFACE_VIEW_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/layout/surface-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SURFACE_VIEW_EVENTS_HELPURL =	'https://docs.kodular.io/components/layout/surface-view';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SURFACE_VIEW_METHODS_HELPURL =	'https://docs.kodular.io/components/layout/surface-view';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SWIPE_REFRESH_LAYOUT_HELPURL =	'https://docs.kodular.io/components/layout/swipe-refresh-layout';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SWIPE_REFRESH_LAYOUT_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/layout/swipe-refresh-layout';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SWIPE_REFRESH_LAYOUT_EVENTS_HELPURL =	'https://docs.kodular.io/components/layout/swipe-refresh-layout';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TABLE_ARRANGEMENT_HELPURL =	'https://docs.kodular.io/components/layout/table-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TABLE_ARRANGEMENT_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/layout/table-arrangement/';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_ARRANGEMENT_HELPURL =	'https://docs.kodular.io/components/layout/vertical-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_ARRANGEMENT_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/layout/vertical-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_ARRANGEMENT_EVENTS_HELPURL =	'https://docs.kodular.io/components/layout/vertical-arrangement';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_SCROLL_ARRANGEMENT_HELPURL =	'https://docs.kodular.io/components/layout/vertical-scroll-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_SCROLL_ARRANGEMENT_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/layout/vertical-scroll-arrangement';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VERTICAL_SCROLL_ARRANGEMENT_EVENTS_HELPURL =	'https://docs.kodular.io/components/layout/vertical-scroll-arrangement';

//Media components
    Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_PICKER_HELPURL =	'https://docs.kodular.io/components/media/audio-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_PICKER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/audio-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_PICKER_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/audio-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_PICKER_METHODS_HELPURL =	'https://docs.kodular.io/components/media/audio-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_HELPURL =	'https://docs.kodular.io/components/media/camcorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/camcorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/camcorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMCORDER_METHODS_HELPURL =	'https://docs.kodular.io/components/media/camcorder';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_HELPURL =	'https://docs.kodular.io/components/media/camera';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/camera';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/camera';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CAMERA_METHODS_HELPURL =	'https://docs.kodular.io/components/media/camera';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EXOPLAYER_HELPURL =	'https://docs.kodular.io/components/media/exoplayer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EXOPLAYER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/exoplayer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EXOPLAYER_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/exoplayer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EXOPLAYER_METHODS_HELPURL =	'https://docs.kodular.io/components/media/exoplayer';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PICKER_HELPURL =	'https://docs.kodular.io/components/media/image-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PICKER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/image-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PICKER_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/image-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_PICKER_METHODS_HELPURL =	'https://docs.kodular.io/components/media/image-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_METADATA_HELPURL =	'https://docs.kodular.io/components/media/metadata';
    Blockly.Msg.LANG_COMPONENT_BLOCK_METADATA_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/metadata';
    Blockly.Msg.LANG_COMPONENT_BLOCK_METADATA_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/metadata';
    Blockly.Msg.LANG_COMPONENT_BLOCK_METADATA_METHODS_HELPURL =	'https://docs.kodular.io/components/media/metadata';

    Blockly.Msg.LANG_COMPONENT_BLOCK_OCR_HELPURL =	'https://docs.kodular.io/components/media/ocr';
    Blockly.Msg.LANG_COMPONENT_BLOCK_OCR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/ocr';
    Blockly.Msg.LANG_COMPONENT_BLOCK_OCR_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/ocr';
    Blockly.Msg.LANG_COMPONENT_BLOCK_OCR_METHODS_HELPURL =	'https://docs.kodular.io/components/media/ocr';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_HELPURL =	'https://docs.kodular.io/components/media/player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PLAYER_METHODS_HELPURL =	'https://docs.kodular.io/components/media/player';

    Blockly.Msg.LANG_COMPONENT_BLOCK_QR_CODE_HELPURL =	'https://docs.kodular.io/components/media/qr-code';
    Blockly.Msg.LANG_COMPONENT_BLOCK_QR_CODE_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/qr-code';
    Blockly.Msg.LANG_COMPONENT_BLOCK_QR_CODE_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/qr-code';
    Blockly.Msg.LANG_COMPONENT_BLOCK_QR_CODE_METHODS_HELPURL =	'https://docs.kodular.io/components/media/qr-code';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_HELPURL =	'https://docs.kodular.io/components/media/sound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/sound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/sound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_METHODS_HELPURL =	'https://docs.kodular.io/components/media/sound';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_RECORDER_HELPURL =	'https://docs.kodular.io/components/media/sound-recorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_RECORDER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/soundrecorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_RECORDER_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/soundrecorder';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_RECORDER_METHODS_HELPURL =	'https://docs.kodular.io/components/media/soundrecorder';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECH_RECOGNIZER_HELPURL =	'https://docs.kodular.io/components/media/speech-recognizer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECH_RECOGNIZER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/speechrecognizer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECH_RECOGNIZER_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/speechrecognizer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SPEECH_RECOGNIZER_METHODS_HELPURL =	'https://docs.kodular.io/components/media/speechrecognizer';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXT_TO_SPEECH_HELPURL =	'https://docs.kodular.io/components/media/text-to-speech';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXT_TO_SPEECH_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/text-to-speech';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXT_TO_SPEECH_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/text-to-speech';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXT_TO_SPEECH_METHODS_HELPURL =	'https://docs.kodular.io/components/media/text-to-speech';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PICKER_HELPURL =	'https://docs.kodular.io/components/media/video-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PICKER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/video-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PICKER_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/video-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PICKER_METHODS_HELPURL =	'https://docs.kodular.io/components/media/video-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PLAYER_HELPURL =	'https://docs.kodular.io/components/media/video-player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PLAYER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/video-player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PLAYER_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/video-player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_VIDEO_PLAYER_METHODS_HELPURL =	'https://docs.kodular.io/components/media/video-player';

    Blockly.Msg.LANG_COMPONENT_BLOCK_YANDEX_TRANSLATE_HELPURL =	'https://docs.kodular.io/components/media/yandex-translate';
    Blockly.Msg.LANG_COMPONENT_BLOCK_YANDEX_TRANSLATE_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/yandex-translate';
    Blockly.Msg.LANG_COMPONENT_BLOCK_YANDEX_TRANSLATE_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/yandex-translate';
    Blockly.Msg.LANG_COMPONENT_BLOCK_YANDEX_TRANSLATE_METHODS_HELPURL =	'https://docs.kodular.io/components/media/yandex-translate';

    Blockly.Msg.LANG_COMPONENT_BLOCK_YOUTUBE_PLAYER_HELPURL =	'https://docs.kodular.io/components/media/youtube-player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_YOUTUBE_PLAYER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/media/youtube-player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_YOUTUBE_PLAYER_EVENTS_HELPURL =	'https://docs.kodular.io/components/media/youtube-player';
    Blockly.Msg.LANG_COMPONENT_BLOCK_YOUTUBE_PLAYER_METHODS_HELPURL =	'https://docs.kodular.io/components/media/youtube-player';

// Drawing and Animation components
    Blockly.Msg.LANG_COMPONENT_BLOCK_ANIMATION_UTIL_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/animation-util';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ANIMATION_UTIL_EVENTS_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/animation-util';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ANIMATION_UTIL_METHODS_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/animation-util';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/ball';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/ball';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_EVENTS_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/ball';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BALL_METHODS_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/ball';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/canvas';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/canvas';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_EVENTS_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/canvas';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CANVAS_METHODS_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/canvas';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EDITOR_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/image-editor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EDITOR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/image-editor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EDITOR_EVENTS_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/image-editor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_EDITOR_METHODS_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/image-editor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_SPRITE_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/image-sprite';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_SPRITE_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/imagesprite';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_SPRITE_EVENTS_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/imagesprite';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IMAGE_SPRITE_METHODS_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/imagesprite';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LOTTIE_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/lottie';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOTTIE_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/lottie';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOTTIE_EVENTS_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/lottie';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOTTIE_METHODS_HELPURL =	'https://docs.kodular.io/components/drawing-and-animation/lottie/';

//Map components
    Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCLE_HELPURL =	'https://docs.kodular.io/components/maps/circle';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCLE_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/maps/circle';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCLE_EVENTS_HELPURL =	'https://docs.kodular.io/components/maps/circle';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CIRCLE_METHODS_HELPURL =	'https://docs.kodular.io/components/maps/circle';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FEATURE_COLLECTION_HELPURL =	'https://docs.kodular.io/components/maps/feature-collection';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FEATURE_COLLECTION_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/maps/feature-collection';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FEATURE_COLLECTION_EVENTS_HELPURL =	'https://docs.kodular.io/components/maps/feature-collection';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FEATURE_COLLECTION_METHODS_HELPURL =	'https://docs.kodular.io/components/maps/feature-collection';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LINE_STRING_HELPURL =	'https://docs.kodular.io/components/maps/line-string';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LINE_STRING_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/maps/line-string';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LINE_STRING_EVENTS_HELPURL =	'https://docs.kodular.io/components/maps/line-string';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LINE_STRING_METHODS_HELPURL =	'https://docs.kodular.io/components/maps/line-string';

    Blockly.Msg.LANG_COMPONENT_BLOCK_MAP_HELPURL =	'https://docs.kodular.io/components/maps/map';
    Blockly.Msg.LANG_COMPONENT_BLOCK_MAP_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/maps/map';
    Blockly.Msg.LANG_COMPONENT_BLOCK_MAP_EVENTS_HELPURL =	'https://docs.kodular.io/components/maps/map';
    Blockly.Msg.LANG_COMPONENT_BLOCK_MAP_METHODS_HELPURL =	'https://docs.kodular.io/components/maps/map';

    Blockly.Msg.LANG_COMPONENT_BLOCK_MARKER_HELPURL =	'https://docs.kodular.io/components/maps/marker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_MARKER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/maps/marker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_MARKER_EVENTS_HELPURL =	'https://docs.kodular.io/components/maps/marker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_MARKER_METHODS_HELPURL =	'https://docs.kodular.io/components/maps/marker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_POLYGON_HELPURL =	'https://docs.kodular.io/components/maps/polygon';
    Blockly.Msg.LANG_COMPONENT_BLOCK_POLYGON_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/maps/polygon';
    Blockly.Msg.LANG_COMPONENT_BLOCK_POLYGON_EVENTS_HELPURL =	'https://docs.kodular.io/components/maps/polygon';
    Blockly.Msg.LANG_COMPONENT_BLOCK_POLYGON_METHODS_HELPURL =	'https://docs.kodular.io/components/maps/polygon';

    Blockly.Msg.LANG_COMPONENT_BLOCK_RECTANGLE_HELPURL =	'https://docs.kodular.io/components/maps/rectangle';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RECTANGLE_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/maps/rectangle';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RECTANGLE_EVENTS_HELPURL =	'https://docs.kodular.io/components/maps/rectangle';
    Blockly.Msg.LANG_COMPONENT_BLOCK_RECTANGLE_METHODS_HELPURL =	'https://docs.kodular.io/components/maps/rectangle';

//Sensor components
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETER_SENSOR_HELPURL =	'https://docs.kodular.io/components/sensors/accelerometer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETER_SENSOR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/sensors/accelerometer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACCELEROMETER_SENSOR_EVENTS_HELPURL =	'https://docs.kodular.io/components/sensors/accelerometer';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODE_SCANNER_HELPURL =	'https://docs.kodular.io/components/sensors/barcode-scanner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODE_SCANNER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/sensors/barcode-scanner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODE_SCANNER_EVENTS_HELPURL =	'https://docs.kodular.io/components/sensors/barcode-scanner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BARCODE_SCANNER_METHODS_HELPURL =	'https://docs.kodular.io/components/sensors/barcode-scanner';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_HELPURL =	'https://docs.kodular.io/components/sensors/clock';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/sensors/clock';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_EVENTS_HELPURL =	'https://docs.kodular.io/components/sensors/clock';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOCK_METHODS_HELPURL =	'https://docs.kodular.io/components/sensors/clock';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FINGERPRINT_HELPURL =	'https://docs.kodular.io/components/sensors/fingerprint';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FINGERPRINT_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/sensors/fingerprint';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FINGERPRINT_EVENTS_HELPURL =	'https://docs.kodular.io/components/sensors/fingerprint';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FINGERPRINT_METHODS_HELPURL =	'https://docs.kodular.io/components/sensors/fingerprint';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GRAVITY_SENSOR_HELPURL =	'https://docs.kodular.io/components/sensors/gravity-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GRAVITY_SENSOR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/sensors/gravity-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GRAVITY_SENSOR_EVENTS_HELPURL =	'https://docs.kodular.io/components/sensors/gravity-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPE_SENSOR_HELPURL =	'https://docs.kodular.io/components/sensors/gyroscope-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPE_SENSOR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/sensors/gyroscope-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GYROSCOPE_SENSOR_EVENTS_HELPURL =	'https://docs.kodular.io/components/sensors/gyroscope-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LIGHT_SENSOR_HELPURL =	'https://docs.kodular.io/components/sensors/light-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LIGHT_SENSOR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/sensors/light-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LIGHT_SENSOR_EVENTS_HELPURL =	'https://docs.kodular.io/components/sensors/light-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATION_SENSOR_HELPURL =	'https://docs.kodular.io/components/sensors/location-sensor/';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATION_SENSOR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/sensors/location-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATION_SENSOR_EVENTS_HELPURL =	'https://docs.kodular.io/components/sensors/location-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LOCATION_SENSOR_METHODS_HELPURL =	'https://docs.kodular.io/components/sensors/location-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_MAGNETIC_FIELD_SENSOR_HELPURL =	'https://docs.kodular.io/components/sensors/magnetic-field-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_MAGNETIC_FIELD_SENSOR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/sensors/magnetic-field-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_MAGNETIC_FIELD_SENSOR_EVENTS_HELPURL =	'https://docs.kodular.io/components/sensors/magnetic-field-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NEARFIELD_HELPURL =	'https://docs.kodular.io/components/sensors/nearfield';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NEARFIELD_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/sensors/nearfield';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NEARFIELD_EVENTS_HELPURL =	'https://docs.kodular.io/components/sensors/nearfield';

    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATION_SENSOR_HELPURL =	'https://docs.kodular.io/components/sensors/orientation-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATION_SENSOR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/sensors/orientation-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ORIENTATION_SENSOR_EVENTS_HELPURL =	'https://docs.kodular.io/components/sensors/orientation-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PEDOMETER_HELPURL =	'https://docs.kodular.io/components/sensors/pedometer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PEDOMETER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/sensors/pedometer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PEDOMETER_EVENTS_HELPURL =	'https://docs.kodular.io/components/sensors/pedometer';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PEDOMETER_METHODS_HELPURL =	'https://docs.kodular.io/components/sensors/pedometer';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PRESSURE_SENSOR_HELPURL =	'https://docs.kodular.io/components/sensors/pressure-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PRESSURE_SENSOR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/sensors/pressure-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PRESSURE_SENSOR_EVENTS_HELPURL =	'https://docs.kodular.io/components/sensors/pressure-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PROXIMITY_SENSOR_HELPURL =	'https://docs.kodular.io/components/sensors/proximity-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PROXIMITY_SENSOR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/sensors/proximity-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PROXIMITY_SENSOR_EVENTS_HELPURL =	'https://docs.kodular.io/components/sensors/proximity-sensor/';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_SENSOR_HELPURL =	'https://docs.kodular.io/components/sensors/sound-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_SENSOR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/sensors/sound-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SOUND_SENSOR_EVENTS_HELPURL =	'https://docs.kodular.io/components/sensors/sound-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEMPERATURE_SENSOR_HELPURL =	'https://docs.kodular.io/components/sensors/temperature-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEMPERATURE_SENSOR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/sensors/temperature-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEMPERATURE_SENSOR_EVENTS_HELPURL =	'https://docs.kodular.io/components/sensors/temperature-sensor';

//Social components
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACT_PICKER_HELPURL =	'https://docs.kodular.io/components/social/contact-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACT_PICKER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/social/contact-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACT_PICKER_EVENTS_HELPURL =	'https://docs.kodular.io/components/social/contact-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CONTACT_PICKER_METHODS_HELPURL =	'https://docs.kodular.io/components/social/contact-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAIL_PICKER_HELPURL =	'https://docs.kodular.io/components/social/email-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAIL_PICKER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/social/email-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAIL_PICKER_EVENTS_HELPURL =	'https://docs.kodular.io/components/social/email-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EMAIL_PICKER_METHODS_HELPURL =	'https://docs.kodular.io/components/social/email-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_CALL_HELPURL =	'https://docs.kodular.io/components/social/phone-call';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_CALL_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/social/phone-call';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_CALL_EVENTS_HELPURL =	'https://docs.kodular.io/components/social/phone-call';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_CALL_METHODS_HELPURL =	'https://docs.kodular.io/components/social/phone-call';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_NUMBER_PICKER_HELPURL =	'https://docs.kodular.io/components/social/phone-number-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_NUMBER_PICKER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/social/phone-number-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_NUMBER_PICKER_EVENTS_HELPURL =	'https://docs.kodular.io/components/social/phone-number-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PHONE_NUMBER_PICKER_METHODS_HELPURL =	'https://docs.kodular.io/components/social/phone-number-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SHARING_HELPURL =	'https://docs.kodular.io/components/social/sharing';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SHARING_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/social/sharing';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SHARING_EVENTS_HELPURL =	'https://docs.kodular.io/components/social/sharing';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SHARING_METHODS_HELPURL =	'https://docs.kodular.io/components/social/sharing';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_HELPURL =	'https://docs.kodular.io/components/social/texting';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/social/texting';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_EVENTS_HELPURL =	'https://docs.kodular.io/components/social/texting';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TEXTING_METHODS_HELPURL =	'https://docs.kodular.io/components/social/texting';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_HELPURL =	'https://docs.kodular.io/components/social/twitter';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/social/twitter';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_EVENTS_HELPURL =	'https://docs.kodular.io/components/social/twitter';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TWITTER_METHODS_HELPURL =	'https://docs.kodular.io/components/social/twitter';

//Storage Components
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDINARY_HELPURL =	'https://docs.kodular.io/components/storage/cloudinary';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDINARY_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/storage/cloudinary';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDINARY_EVENTS_HELPURL =	'https://docs.kodular.io/components/storage/cloudinary';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDINARY_METHODS_HELPURL =	'https://docs.kodular.io/components/storage/cloudinary';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CRYPTOGRAPHY_HELPURL =	'https://docs.kodular.io/components/storage/cryptography';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CRYPTOGRAPHY_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/storage/cryptography';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CRYPTOGRAPHY_METHODS_HELPURL =	'https://docs.kodular.io/components/storage/cryptography';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FILE_HELPURL =	'https://docs.kodular.io/components/storage/file';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FILE_METHODS_HELPURL =	'https://docs.kodular.io/components/storage/file';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FILE_EVENTS_HELPURL =	'https://docs.kodular.io/components/storage/file';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_DB_HELPURL =	'https://docs.kodular.io/components/storage/firebase-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_DB_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/storage/firebase-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_DB_METHODS_HELPURL =	'https://docs.kodular.io/components/storage/firebase-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FIREBASE_DB_EVENTS_HELPURL =	'https://docs.kodular.io/components/storage/firebase-db';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLES_CONTROL_HELPURL =	'https://docs.kodular.io/components/storage/fusiontables-control';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLES_CONTROL_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/storage/fusiontables-control';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLES_CONTROL_EVENTS_HELPURL =	'https://docs.kodular.io/components/storage/fusiontables-control';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FUSIONTABLES_CONTROL_METHODS_HELPURL =	'https://docs.kodular.io/components/storage/fusiontables-control';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_HELPURL =	'https://docs.kodular.io/components/storage/tiny-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/storage/tiny-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYDB_METHODS_HELPURL =	'https://docs.kodular.io/components/storage/tiny-db';

    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_HELPURL =	'https://docs.kodular.io/components/storage/tiny-web-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/storage/tiny-web-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_EVENTS_HELPURL =	'https://docs.kodular.io/components/storage/tiny-web-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_TINYWEBDB_METHODS_HELPURL =	'https://docs.kodular.io/components/storage/tiny-web-db';

//Device components
    Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_HELPURL =	'https://docs.kodular.io/components/device/audio';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/device/audio';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AUDIO_METHODS_HELPURL =	'https://docs.kodular.io/components/device/audio';

    Blockly.Msg.LANG_COMPONENT_BLOCK_DEVICE_TOOLS_HELPURL =	'https://docs.kodular.io/components/device/device-tools';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DEVICE_TOOLS_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/device/device-tools';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DEVICE_TOOLS_METHODS_HELPURL =	'https://docs.kodular.io/components/device/device-tools';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PACKAGE_HELPURL =	'https://docs.kodular.io/components/device/package';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PACKAGE_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/device/package';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PACKAGE_METHODS_HELPURL =	'https://docs.kodular.io/components/device/package';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREENSHOT_HELPURL =	'https://docs.kodular.io/components/device/screenshot';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREENSHOT_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/device/screenshot';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREENSHOT_EVENTS_HELPURL =	'https://docs.kodular.io/components/device/screenshot';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SCREENSHOT_METHODS_HELPURL =	'https://docs.kodular.io/components/device/screenshot';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WALLPAPER_HELPURL =	'https://docs.kodular.io/components/device/wallpaper';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WALLPAPER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/device/wallpaper';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WALLPAPER_EVENTS_HELPURL =	'https://docs.kodular.io/components/device/wallpaper';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WALLPAPER_METHODS_HELPURL =	'https://docs.kodular.io/components/device/wallpaper';

//Dynamic Components
    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_BUTTON_HELPURL =	'https://docs.kodular.io/components/dynamic/dynamic-button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_BUTTON_EVENTS_HELPURL =	'https://docs.kodular.io/components/dynamic/dynamic-button';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_BUTTON_METHODS_HELPURL =	'https://docs.kodular.io/components/dynamic/dynamic-button';

    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_LABEL_HELPURL =	'https://docs.kodular.io/components/dynamic/dynamic-label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_LABEL_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/dynamic/dynamic-label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_LABEL_EVENTS_HELPURL =	'https://docs.kodular.io/components/dynamic/dynamic-label';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_LABEL_METHODS_HELPURL =	'https://docs.kodular.io/components/dynamic/dynamic-label';

    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_TEXTBOX_HELPURL =	'https://docs.kodular.io/components/dynamic/dynamic-textbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_TEXTBOX_EVENTS_HELPURL =	'https://docs.kodular.io/components/dynamic/dynamic-textbox';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DYNAMIC_TEXTBOX_METHODS_HELPURL =	'https://docs.kodular.io/components/dynamic/dynamic-textbox';

//Connectivity components
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_HELPURL =	'https://docs.kodular.io/components/connectivity/activity-starter';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/connectivity/activity-starter';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_EVENTS_HELPURL =	'https://docs.kodular.io/components/connectivity/activity-starter';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ACTIVITYSTARTER_METHODS_HELPURL =	'https://docs.kodular.io/components/connectivity/activity-starter';

    Blockly.Msg.LANG_COMPONENT_BLOCK_ARDUINO_HELPURL =	'https://docs.kodular.io/components/connectivity/arduino';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ARDUINO_EVENTS_HELPURL =	'https://docs.kodular.io/components/connectivity/arduino';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ARDUINO_METHODS_HELPURL =	'https://docs.kodular.io/components/connectivity/arduino';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHADMIN_HELPURL =	'https://docs.kodular.io/components/connectivity/bluetooth-admin';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHADMIN_PROPERTIES_HELPURL =	'hhttps://docs.kodular.io/components/connectivity/bluetooth-admin';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHADMIN_EVENTS_HELPURL =	'https://docs.kodular.io/components/connectivity/bluetooth-admin';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHADMIN_METHODS_HELPURL =	'https://docs.kodular.io/components/connectivity/bluetooth-admin';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_HELPURL =	'https://docs.kodular.io/components/connectivity/bluetooth-client';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/connectivity/bluetooth-client';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_EVENTS_HELPURL =	'https://docs.kodular.io/components/connectivity/bluetooth-client';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHCLIENT_METHODS_HELPURL =	'https://docs.kodular.io/components/connectivity/bluetooth-client';

    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_HELPURL =	'https://docs.kodular.io/components/connectivity/bluetooth-server';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/connectivity/bluetooth-server';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_EVENTS_HELPURL =	'https://docs.kodular.io/components/connectivity/bluetooth-server';
    Blockly.Msg.LANG_COMPONENT_BLOCK_BLUETOOTHSERVER_METHODS_HELPURL =	'https://docs.kodular.io/components/connectivity/bluetooth-server';

    Blockly.Msg.LANG_COMPONENT_BLOCK_DOWNLOAD_HELPURL =	'https://docs.kodular.io/components/connectivity/download';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DOWNLOAD_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/connectivity/download';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DOWNLOAD_EVENTS_HELPURL =	'https://docs.kodular.io/components/connectivity/download';
    Blockly.Msg.LANG_COMPONENT_BLOCK_DOWNLOAD_METHODS_HELPURL =	'https://docs.kodular.io/components/connectivity/download';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FTP_HELPURL =	'https://docs.kodular.io/components/connectivity/ftp';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FTP_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/connectivity/ftp';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FTP_EVENTS_HELPURL =	'https://docs.kodular.io/components/connectivity/ftp';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FTP_METHODS_HELPURL =	'https://docs.kodular.io/components/connectivity/ftp';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NETWORK_HELPURL =	'https://docs.kodular.io/components/connectivity/network';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NETWORK_EVENTS_HELPURL =	'https://docs.kodular.io/components/connectivity/network';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NETWORK_METHODS_HELPURL =	'https://docs.kodular.io/components/connectivity/network';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_HELPURL =	'https://docs.kodular.io/components/connectivity/web';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/connectivity/web';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_EVENTS_HELPURL =	'https://docs.kodular.io/components/connectivity/web';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WEB_METHODS_HELPURL =	'https://docs.kodular.io/components/connectivity/web';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WIFI_HELPURL =	'https://docs.kodular.io/components/connectivity/wifi';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WIFI_METHODS_HELPURL =	'https://docs.kodular.io/components/connectivity/wifi';

//Google components

    Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_ACCOUNT_PICKER_HELPURL =	'https://docs.kodular.io/components/google/google-account-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_ACCOUNT_PICKER_EVENTS_HELPURL =	'https://docs.kodular.io/components/google/google-account-picker';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_ACCOUNT_PICKER_METHODS_HELPURL =	'https://docs.kodular.io/components/google/google-account-picker';

    Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_MAPS_HELPURL =	'https://docs.kodular.io/components/google/google-maps';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_MAPS_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/google/google-maps';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_MAPS_EVENTS_HELPURL =	'https://docs.kodular.io/components/google/google-maps';
    Blockly.Msg.LANG_COMPONENT_BLOCK_GOOGLE_MAPS_METHODS_HELPURL =	'https://docs.kodular.io/components/google/google-maps';

//Monetization components
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_BANNER_HELPURL =	'https://docs.kodular.io/components/monetization/admob-banner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_BANNER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/monetization/admob-banner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_BANNER_EVENTS_HELPURL =	'https://docs.kodular.io/components/monetization/admob-banner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_BANNER_METHODS_HELPURL =	'https://docs.kodular.io/components/monetization/admob-banner';

    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_INTERSTITIAL_HELPURL =	'https://docs.kodular.io/components/monetization/admob-interstitial';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_INTERSTITIAL_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/monetization/admob-interstitial';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_INTERSTITIAL_EVENTS_HELPURL =	'https://docs.kodular.io/components/monetization/admob-interstitial';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_INTERSTITIAL_METHODS_HELPURL =	'https://docs.kodular.io/components/monetization/admob-interstitial';

    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_REWARDED_VIDEO_HELPURL =	'https://docs.kodular.io/components/monetization/admob-rewardedvideo';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_REWARDED_VIDEO_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/monetization/admob-rewardedvideo';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_REWARDED_VIDEO_EVENTS_HELPURL =	'https://docs.kodular.io/components/monetization/admob-rewardedvideo';
    Blockly.Msg.LANG_COMPONENT_BLOCK_ADMOB_REWARDED_VIDEO_METHODS_HELPURL =	'https://docs.kodular.io/components/monetization/admob-rewardedvideo';

    Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_BANNER_HELPURL =	'https://docs.kodular.io/components/monetization/amazon-banner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_BANNER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/monetization/amazon-banner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_BANNER_EVENTS_HELPURL =	'https://docs.kodular.io/components/monetization/amazon-banner';

    Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_INTERSTITIAL_HELPURL =	'https://docs.kodular.io/components/monetization/amazon-interstitial';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_INTERSTITIAL_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/monetization/amazon-interstitial';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_INTERSTITIAL_EVENTS_HELPURL =	'https://docs.kodular.io/components/monetization/amazon-interstitial';
    Blockly.Msg.LANG_COMPONENT_BLOCK_AMAZON_INTERSTITIAL_METHODS_HELPURL =	'https://docs.kodular.io/components/monetization/amazon-interstitial';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_BANNER_HELPURL =	'https://docs.kodular.io/components/monetization/facebook-banner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_BANNER_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/monetization/facebook-banner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_BANNER_EVENTS_HELPURL =	'https://docs.kodular.io/components/monetization/facebook-banner';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_BANNER_METHODS_HELPURL =	'https://docs.kodular.io/components/monetization/facebook-banner';

    Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_INTERSTITIAL_HELPURL =	'https://docs.kodular.io/components/monetization/facebook-interstitial';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_INTERSTITIAL_EVENTS_HELPURL =	'https://docs.kodular.io/components/monetization/facebook-interstitial';
    Blockly.Msg.LANG_COMPONENT_BLOCK_FACEBOOK_INTERSTITIAL_METHODS_HELPURL =	'https://docs.kodular.io/components/monetization/facebook-interstitial';

    Blockly.Msg.LANG_COMPONENT_BLOCK_IAB_HELPURL =	'https://docs.kodular.io/components/monetization/in-app-billing';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IAB_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/monetization/in-app-billing';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IAB_EVENTS_HELPURL =	'https://docs.kodular.io/components/monetization/in-app-billing';
    Blockly.Msg.LANG_COMPONENT_BLOCK_IAB_METHODS_HELPURL =	'https://docs.kodular.io/components/monetization/in-app-billing';

    Blockly.Msg.LANG_COMPONENT_BLOCK_LEADBOLT_HELPURL =	'https://docs.kodular.io/components/monetization/leadbolt';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LEADBOLT_EVENTS_HELPURL =	'https://docs.kodular.io/components/monetization/leadbolt';
    Blockly.Msg.LANG_COMPONENT_BLOCK_LEADBOLT_METHODS_HELPURL =	'https://docs.kodular.io/components/monetization/leadbolt';

    Blockly.Msg.LANG_COMPONENT_BLOCK_WHITEMOBI_HELPURL =	'https://docs.kodular.io/components/monetization/whitemobi';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WHITEMOBI_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/monetization/whitemobi';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WHITEMOBI_EVENTS_HELPURL =	'https://docs.kodular.io/components/monetization/whitemobi';
    Blockly.Msg.LANG_COMPONENT_BLOCK_WHITEMOBI_METHODS_HELPURL =	'https://docs.kodular.io/components/monetization/whitemobi';

//Lego mindstorms components
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-drive';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-drive';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDRIVE_METHODS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-drive';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-color-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-color-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_EVENTS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-color-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTCOLOR_METHODS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-color-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-light-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-light-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_EVENTS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-light-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTLIGHT_METHODS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-light-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-sound-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-sound-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_EVENTS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-sound-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTSOUND_METHODS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-sound-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-touch-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-touch-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_EVENTS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-touch-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTTOUCH_METHODS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-touch-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-ultrasonic-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-ultrasonic-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_EVENTS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-ultrasonic-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTULTRASONIC_METHODS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-ultrasonic-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-direct-commands';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-direct-commands';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NXTDIRECT_METHODS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/nxt-direct-commands';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3MOTORS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-motors';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3MOTORS_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-motors';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3MOTORS_EVENTS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-motors';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3MOTORS_METHODS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-motors';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COLORSENSOR_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-color-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COLORSENSOR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-color-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COLORSENSOR_EVENTS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-color-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COLORSENSOR_METHODS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-color-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3GYROSENSOR_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-gyro-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3GYROSENSOR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-gyro-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3GYROSENSOR_EVENTS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-gyro-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3GYROSENSOR_METHODS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-gyro-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3TOUCHSENSOR_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-touch-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3TOUCHSENSOR_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-touch-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3TOUCHSENSOR_EVENTS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-touch-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3TOUCHSENSOR_METHODS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-touch-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3ULTRASONIC_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-ultrasonic-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3ULTRASONIC_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-ultrasonic-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3ULTRASONIC_EVENTS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-ultrasonic-sensor';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3ULTRASONIC_METHODS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-ultrasonic-sensor';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3SOUND_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-sound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3SOUND_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-sound';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3SOUND_METHODS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-sound';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3UI_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-ui';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3UI_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-ui';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3UI_METHODS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-ui';

    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COMMANDS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-commands';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COMMANDS_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-commands';
    Blockly.Msg.LANG_COMPONENT_BLOCK_EV3COMMANDS_METHODS_HELPURL =	'https://docs.kodular.io/components/lego-mindstorms/ev3-commands';

//Experimental components
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHROME_CUSTOM_TABS_HELPURL =	'https://docs.kodular.io/components/experimental/chrome-custom-tabs';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHROME_CUSTOM_TABS_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/experimental/chrome-custom-tabs';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CHROME_CUSTOM_TABS_METHODS_HELPURL =	'https://docs.kodular.io/components/experimental/chrome-custom-tabs';

    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDDB_HELPURL =	'https://docs.kodular.io/components/experimental/cloud-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDDB_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/experimental/cloud-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDDB_EVENTS_HELPURL =	'https://docs.kodular.io/components/experimental/cloud-db';
    Blockly.Msg.LANG_COMPONENT_BLOCK_CLOUDDB_METHODS_HELPURL =	'https://docs.kodular.io/components/experimental/cloud-db';

    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFICATION_HELPURL =	'https://docs.kodular.io/components/experimental/notification';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFICATION_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/experimental/notification';
    Blockly.Msg.LANG_COMPONENT_BLOCK_NOTIFICATION_METHODS_HELPURL =	'https://docs.kodular.io/components/experimental/notification';

    Blockly.Msg.LANG_COMPONENT_BLOCK_PUSH_NOTIFICATIONS_HELPURL =	'https://docs.kodular.io/components/experimental/push-notifications';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PUSH_NOTIFICATIONS_PROPERTIES_HELPURL =	'https://docs.kodular.io/components/experimental/push-notifications';
    Blockly.Msg.LANG_COMPONENT_BLOCK_PUSH_NOTIFICATIONS_METHODS_HELPURL =	'https://docs.kodular.io/components/experimental/push-notifications';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SHELL_HELPURL =	'https://docs.kodular.io/components/experimental/shell';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SHELL_EVENTS_HELPURL =	'https://docs.kodular.io/components/experimental/shell';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SHELL_METHODS_HELPURL =	'https://docs.kodular.io/components/experimental/shell';

    Blockly.Msg.LANG_COMPONENT_BLOCK_SHORTCUT_BADGE_HELPURL =	'https://docs.kodular.io/components/experimental/shortcut-badge';
    Blockly.Msg.LANG_COMPONENT_BLOCK_SHORTCUT_BADGE_METHODS_HELPURL =	'https://docs.kodular.io/components/experimental/shortcut-badge';

//Misc
    Blockly.Msg.SHOW_WARNINGS =	'Show Warnings';
    Blockly.Msg.HIDE_WARNINGS =	'Hide Warnings';
    Blockly.Msg.MISSING_SOCKETS_WARNINGS =	'You should fill all of the sockets with blocks';
    Blockly.Msg.WRONG_TYPE_BLOCK_WARINGS =	'This block should be connected to an event block or a procedure definition';
    Blockly.Msg.ERROR_PROPERTY_SETTER_NEEDS_VALUE =	'This block needs a value block connected to its socket.';
    Blockly.Msg.ERROR_GENERIC_NEEDS_COMPONENT =	'You need to provide a valid component to this block\'s "%1" socket.';

// Messages from replmgr.js
    Blockly.Msg.REPL_ERROR_FROM_COMPANION =	'Error from Companion';
    Blockly.Msg.REPL_NETWORK_CONNECTION_ERROR =	'Network Connection Error';
    Blockly.Msg.REPL_NETWORK_ERROR =	'Network Error';
    Blockly.Msg.REPL_NETWORK_ERROR_RESTART =	'Network Error Communicating with Companion.<br />Try restarting the Companion and reconnecting';
    Blockly.Msg.REPL_OK =	'OK';
    Blockly.Msg.REPL_COMPANION_VERSION_CHECK =	'Companion Version Check';
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE =	'Your Companion App is out of date. Click "OK" to start the update. Watch your';
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE2 =	'Your Companion App is out of date. Restart the Companion and use it to scan the QRCode below in order to update';
    Blockly.Msg.REPL_EMULATORS =	'emulator\'s';
    Blockly.Msg.REPL_DEVICES =	'device\'s';
    Blockly.Msg.REPL_APPROVE_UPDATE =	' screen because you will be asked to approve the update.';
    Blockly.Msg.REPL_NOT_NOW =	'Not Now';
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE1 =	'The Companion you are using is out of date.<br/><br/>This Version of Kodular should be used with Companion version';
    Blockly.Msg.REPL_COMPANION_OUT_OF_DATE_IMMEDIATE =	'You are using an out-of-date Companion. You should update the Kodular Companion as soon as possible. If you have auto-update setup in the store, the update will happen by itself shortly.';
    Blockly.Msg.REPL_COMPANION_WRONG_PACKAGE =	'The Companion you are using was built for different instance of Kodular. To obtain the correct companion look on the Kodular screen under Help->Companion Information menu.';
    Blockly.Msg.REPL_DISMISS =	'Dismiss';
    Blockly.Msg.REPL_SOFTWARE_UPDATE =	'Software Update';
    Blockly.Msg.REPL_OK_LOWER =	'Ok';
    Blockly.Msg.REPL_GOT_IT =	'Got It';
    Blockly.Msg.REPL_UPDATE_INFO =	'The update is now being installed on your device. Watch your device (or emulator) screen and approve the software installation when prompted.<br /><br />IMPORTANT: When the update finishes, choose "DONE" (don\'t click "open"). Then go to Kodular in your web browser, click the "Connect" menu and choose "Reset Connection".  Then reconnect the device.';

    Blockly.Msg.REPL_UPDATE_NO_UPDATE =	'No Update is Available';
    Blockly.Msg.REPL_UPDATE_NO_CONNECTION =	'You must be connected to a Companion to update it';
    Blockly.Msg.REPL_UNABLE_TO_UPDATE =	'Unable to send update to device/emulator';
    Blockly.Msg.REPL_UNABLE_TO_LOAD =	'Unable to load update from Kodular server';
    Blockly.Msg.REPL_UNABLE_TO_LOAD_NO_RESPOND =	'Unable to load update from Kodular server (server not responding)';
    Blockly.Msg.REPL_NOW_DOWNLOADING =	'We are now downloading update from the Kodular Server, please standby';
    Blockly.Msg.REPL_RUNTIME_ERROR =	'Runtime Error';
    Blockly.Msg.REPL_NO_ERROR_FIVE_SECONDS =	'<br/><i>Note:</i>&nbsp;You will not see another error reported for 5 seconds.';
    Blockly.Msg.REPL_CONNECTING_USB_CABLE =	'Connecting via USB Cable';
    Blockly.Msg.REPL_STARTING_EMULATOR =	'Starting the Android Emulator<br/>Please wait: This might take a minute or two.';
    Blockly.Msg.REPL_CONNECTING =	'Connecting...';
    Blockly.Msg.REPL_CANCEL =	'Cancel';
    Blockly.Msg.REPL_GIVE_UP =	'Give Up';
    Blockly.Msg.REPL_KEEP_TRYING =	'Keep Trying';
    Blockly.Msg.REPL_CONNECTION_FAILURE1 =	'Connection Failure';
    Blockly.Msg.REPL_NO_START_EMULATOR =	'We could not start the Kodular Companion within the Emulator';
    Blockly.Msg.REPL_PLUGGED_IN_Q =	'Plugged In?';
    Blockly.Msg.REPL_AI_NO_SEE_DEVICE =	'Kodular does not see your device, make sure the cable is plugged in and drivers are correct.';
    Blockly.Msg.REPL_HELPER_Q =	'Helper?';
    Blockly.Msg.REPL_HELPER_NOT_RUNNING =	'The Kodular Starter helper does not appear to be running<br /><a href="https://starter.kodular.io" target="_blank">Need Help?</a>';
    Blockly.Msg.REPL_USB_CONNECTED_WAIT =	'USB Connected, waiting ';
    Blockly.Msg.REPL_SECONDS_ENSURE_RUNNING =	' seconds to ensure all is running.';
    Blockly.Msg.REPL_EMULATOR_STARTED =	'Emulator started, waiting ';
    Blockly.Msg.REPL_STARTING_COMPANION_ON_PHONE =	'Starting the Companion App on the connected phone.';
    Blockly.Msg.REPL_STARTING_COMPANION_IN_EMULATOR =	'Starting the Companion App in the emulator.';
    Blockly.Msg.REPL_COMPANION_STARTED_WAITING =	'Companion starting, waiting ';
    Blockly.Msg.REPL_VERIFYING_COMPANION =	'Verifying that the Companion Started....';
    Blockly.Msg.REPL_CONNECT_TO_COMPANION =	'Connect to Companion';
    Blockly.Msg.REPL_TRY_AGAIN1 =	'Failed to Connect to the Kodular Companion, try again.';
    Blockly.Msg.REPL_YOUR_CODE_IS =	'Your code is';
    Blockly.Msg.REPL_DO_YOU_REALLY_Q =	'Do You Really?';
    Blockly.Msg.REPL_FACTORY_RESET =	'This will attempt to reset your Emulator to its "factory" state. If you had previously updated the Companion installed in the Emulator, you will likely have to do this again.';
    Blockly.Msg.REPL_WEBRTC_CONNECTION_ERROR =	'Companion Connection Error';
    Blockly.Msg.REPL_WEBRTC_CONNECTION_CLOSED =	'The Companion has disconnected';
    Blockly.Msg.REPL_EMULATOR_ONLY =	'You can only use this option to update the Emulator';

// Messages from Blockly.js
    Blockly.Msg.WARNING_DELETE_X_BLOCKS =	'Are you sure you want to delete all %1 of these blocks?';

// Blocklyeditor.js
    Blockly.Msg.GENERATE_YAIL =	'Generate Yail';
    Blockly.Msg.DO_IT =	'Do It';
    Blockly.Msg.DO_IT_DISCONNECTED =	'Do It (Companion not connected)';
    Blockly.Msg.CLEAR_DO_IT_ERROR =	'Clear Error';
    Blockly.Msg.CAN_NOT_DO_IT =	'Cannot Do it';
    Blockly.Msg.CONNECT_TO_DO_IT =	'You must be connected to the companion or emulator to use "Do It"';

// Clock Component Menu Items
    Blockly.Msg.TIME_YEARS =	'Years';
    Blockly.Msg.TIME_MONTHS =	'Months';
    Blockly.Msg.TIME_WEEKS =	'Weeks';
    Blockly.Msg.TIME_DAYS =	'Days';
    Blockly.Msg.TIME_HOURS =	'Hours';
    Blockly.Msg.TIME_MINUTES =	'Minutes';
    Blockly.Msg.TIME_SECONDS =	'Seconds';
    Blockly.Msg.TIME_DURATION =	'Duration';

    // Connection Dialog Messages
    Blockly.Msg.DIALOG_RENDEZVOUS_NEGOTIATING =	'15 Rendezvous (please wait)';
    Blockly.Msg.DIALOG_SECURE_ESTABLISHING =	'20 Establishing Secure Connection';
    Blockly.Msg.DIALOG_SECURE_ESTABLISHED =	'30 Secure Connection Established';
    Blockly.Msg.DIALOG_FOUND_COMPANION =	'10 Found the Companion';

    //Blockly.Util.Dialog Messages
    Blockly.Msg.DIALOG_UNBOUND_VAR =	'Unbound Variables';
    Blockly.Msg.DIALOG_SUBMIT =	'Submit';
    Blockly.Msg.DIALOG_ENTER_VALUES =	'Enter values for:';
  }
};

// Initialize language definition to English
Blockly.Msg.en.switch_blockly_language_to_en.init();
Blockly.Msg.en.switch_language_to_english.init();
